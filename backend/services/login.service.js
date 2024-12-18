import bcrypt from 'bcrypt';
import query from "../config/db.config.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
async function loginService(user){
   try{
      const {employee_email, employee_password} = user;
      const sql= 'select employee_id from employee where employee_email =?';
      const rows = await query(sql,[employee_email]);
      if(!rows.length){
         return  {
            message:"User not found",
            isAuthenticated:false,
         }
      }
      const {employee_id} = rows[0];
      const passwordQuery = 'select employee_password from employee_pass where employee_id =?';
      const password_row = await query(passwordQuery, [employee_id]);
      const hashedPassword = password_row[0].employee_password;
      const isMatch = await bcrypt.compare(employee_password,hashedPassword);
      if(!isMatch){
         return {
				isAuthenticated: false,
				message: "Incorrect password", 
			};
      }
      const nameQuery = 'select employee_first_name from employee_info where employee_id =?';
      const roleQuery = 'select company_role_id from employee_role where employee_id =?';
      const nameRows =await query(nameQuery,[employee_id]);
      const rolerows =await query(roleQuery,[employee_id]);
      const {employee_first_name} = nameRows[0];
      const employee_role = rolerows[0].company_role_id;
      const jwtSecret = process.env.JWT_SECRET;
      const payload = {
         employee_id,
         employee_first_name,
         employee_role
      }
      console.log("employee role id:",employee_role)
      const token = jwt.sign(payload,jwtSecret);
      return {
         isAuthenticated:true,
         message:"successfully logged in.",
         token
      }
   }
   catch(err){
      return {
			isAuthenticated: false,
         message:err.message
		};
   }
}

export default loginService;