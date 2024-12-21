
async function CreateEmployee(employee, token){
   try{
      const response = await fetch("http://localhost:3000/admin/add-employee",{
            method:"POST",
            headers:{
               'Content-Type':'application/json',
               'x-access-token':token
            },
            body:JSON.stringify(employee)
         });
         if(response.ok){
            const result = await response.json();
            console.log("result in addemployee.service.jsx",result)
            return result;
         }
         else{
            return {error:`Resource not found!`}
         }
}catch(err){
   return {
      error:err.message,
   }
}
}
export default CreateEmployee;