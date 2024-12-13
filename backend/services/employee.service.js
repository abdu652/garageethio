import employeeQuery from '../config/db.config.js';
import bcrypt from 'bcrypt';
export async function checkEmployeeExists(email) {
   try{
      const query = 'select * from employee where employee_email = ?';
      const employee = await employeeQuery(query,[email]);
      if(employee.length > 0){
         return true;
      }
      return false; 
   }catch(err){
      console.log(err);
   }
}

export async function createEmployee(employeeData){
   try{
      const {email, first_name, last_name, phone_number,password} = employeeData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
   if(!email|| !first_name || !last_name || !phone_number || !password){
      throw new Error("All fields are required");
   }
   
      const query1 = 'insert into employee(employee_email,active_employee) values(?,?)';
      const rows = await employeeQuery(query1,[email,1]);
      if(rows.affectedRows !== 1){
         return false;
      }

      const id = rows.insertId;
      const query2 = 'insert into employee_info(employee_id,employee_first_name,employee_last_name,employee_phone_number) values(?,?,?,?)';
      const rows2 = await employeeQuery(query2,[id,first_name,last_name,phone_number]);
      const query3 = 'insert into employee_pass(employee_id,employee_password) values(?,?)';
      const rows3 = await employeeQuery(query3,[id,hashedPassword]);
      return true;
   }catch(err){
      console.log("error occurs in employee.service ffile createEmployeefunction ",err.message);
   }
}