import {checkEmployeeExists,createEmployee} from '../services/employee.service.js';
async function employeeController(req,res){
  try{
    const { email } = req.body;
   const employeeExists = await checkEmployeeExists(email);
   if (employeeExists) {
      res.status(200).json({
         success: "false",
         message: "employee already exists",
         path: "employee.controller",
      });
   } 
   else {
      const employeeData = req.body;
      const result = await createEmployee(employeeData);
      if (result) {
         console.log("result employee created in employee.controller",result);
         res.status(200).json({
            success: "true",
            message: "you are registered succesfully.",
         });
      } 
		}
  }catch(err){
   
   res.status(500).json({
      success: "false",
      message: "something went wrong!",
   });
			
   console.log(err)
}
}

export default employeeController;