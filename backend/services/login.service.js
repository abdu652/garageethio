import bcrypt from 'bcrypt';
import query from "../config/db.config.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
async function loginService(user){
   try{
      const {employee_email, employee_password} = user;
      if(!employee_email || !employee_password){
         return {
            isAuthenticated:false,
            message:"please fill all fields.",
         }
      }
      const sql= 'select employee_id from employee where employee_email =?';
      const rows = await query(sql,[employee_email]);
      if(!rows.length){
         return  {
            message:"User not found. please register first!",
            isAuthenticated:false,
            err:"no error"
         }
      }
      const {employee_id} = rows[0];
      const passwordQuery = 'select employee_password from employee_pass where employee_id =?';
      const password_row = await query(passwordQuery, [employee_id]);
      const hashedPassword = password_row[0].employee_password;
      const isMatch = await bcrypt.compare(employee_password,hashedPassword);
      if(!isMatch){
         return {isAuthenticated:false, message:"Incorrect password"}
      }
      const jwtSecret = process.env.JWT_SECRET;
      const payload = {
         employee_id
      }
      const token = jwt.sign(payload,jwtSecret);
      return {
         isAuthenticated:true,
         message:"successfully logged in.",
         token
      }
   }
   catch(err){
      console.log({message:"error occurs in login.service",err:err.message})
   }


}

export default loginService;