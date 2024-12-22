import {checkEmployeeExists,createEmployee, getAllEmployee} from '../services/employee.service.js';
async function employeeController(req,res){
  try{
    const { employee_email } = req.body;
   const employeeExists = await checkEmployeeExists(employee_email);
   if (employeeExists) {
      res.status(200).json({
         success: false,
         message: "employee already exists"
      });
   } 
   else {
      const employeeData = req.body;
      const result = await createEmployee(employeeData);
      if (result) {
         res.status(200).json({
            success: true,
            message: "registered succesfull.",
            data:{...employeeData, employee_password:undefined}
         });
      } 
		}
  }catch(err){
   
   res.status(500).json({
      success: false,
      message: "something went wrong!",
      error:err.message,
   });
}
}

export const employeesList = async (req,res) => {
  try{
    const retrievedEmployees = await getAllEmployee();
    if(retrievedEmployees.length === 0){
      return res.status(404).json({
        success: false,
        message: "No employee found!"
      });
      }
      res.status(200).json({
        success: true,
        message: "employees retrieved successfully",
        data: retrievedEmployees
      });
  }catch(err){
    res.status(500).json({
      success: false,
      message: "something went wrong!",
      error:err.message,
   });
  }
}
export default employeeController;