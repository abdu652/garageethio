import {checkEmployeeExists,createEmployee} from '../services/employee.service.js';
async function employeeController(req,res){
  try{
    const { employee_email } = req.body;
   const employeeExists = await checkEmployeeExists(employee_email);
   if (employeeExists) {
      res.status(200).json({
         success: "false",
         message: "employee already exists"
      });
   } 
   else {
      const employeeData = req.body;
      const result = await createEmployee(employeeData);
      if (result) {
         res.status(200).json({
            success: "true",
            message: "you are registered succesfully.",
            data:{...employeeData, employee_password:undefined}
         });
      } 
		}
  }catch(err){
   
   res.status(500).json({
      success: "false",
      message: "something went wrong!",
      error:err.message,
   });
}
}

export default employeeController;