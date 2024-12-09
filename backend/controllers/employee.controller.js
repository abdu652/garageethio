import {fetchEmployee} from "../config/client.config.js";
import {db} from "../config/connect.config.js";
import addEmployeeService from "../services/employee.service.js";
async function addEmployee(req,res){
   const {email} = req.body;
   const employeeInfo = await fetchEmployee(email);
   if(employeeInfo.data.length >= 1){
      return res.status(400).json({
         status:"failed",
         message:"Employee already exists",
         data:""
      })
   }
   addEmployeeService(req,res,db);      
}   
export default addEmployee;