import employeeQuery from '../config/db.config.js';
import bcrypt from 'bcrypt';
export async function checkEmployeeExists(email) {
   try{
      const query = 'select * from employee where employee_email = ?';
      const employee = await employeeQuery(query,[email]);
      if(employee.length > 0){
         return true
      }
      return false; 
   }catch(err){
      console.log(err.message)
      return {
         error:err.message
      }
   }
}

export async function createEmployee(employeeData){
   try{
      const {
			employee_email,
			employee_first_name,
			employee_last_name,
			employee_phone_number,
			employee_password,
			company_role_id,
		} = employeeData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(employee_password,salt);
      const query1 = 'insert into employee(employee_email,active_employee) values(?,?)';
      const rows = await employeeQuery(query1,[employee_email,1]);
      if(rows.affectedRows !== 1){
         return false;
      }

      const id = rows.insertId;
      const query2 = 'insert into employee_info(employee_id,employee_first_name,employee_last_name,employee_phone_number) values(?,?,?,?)';
      const rows2 = await employeeQuery(query2,[id,employee_first_name,employee_last_name,employee_phone_number]);
      const query3 = 'insert into employee_pass(employee_id,employee_password) values(?,?)';
      const rows3 = await employeeQuery(query3,[id,hashedPassword]);
      const query4 = 'insert into employee_role(employee_id,company_role_id) values(?,?)';
      const rows4 = await employeeQuery(query4,[id,company_role_id]);
      return true;
   }catch(err){
      return {
         error:err.message,
         message:"employee are not registered"
      }
   }
}

export async function getAllEmployee(){
   try{
      const getQuery = 'select * from employee inner join employee_info on employee.employee_id = employee_info.employee_id inner join employee_role on employee.employee_id = employee_role.employee_id inner join company_roles on employee_role.company_role_id = company_roles.company_role_id';
      const employees = await employeeQuery(getQuery,[]);      
      return employees;
   }catch(err){
      return {
         success:false, 
         error:err.message
   }
}
}