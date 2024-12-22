import getAuth from '../utils/auth.jsx';
 const EmployeeList = async () => {
   try{
      const loggedUser = await getAuth();
   const {token} = loggedUser;
   const response = await fetch("http://localhost:3000/admin/employees",{
      method:"GET",
      headers:{
         'Content-Type':'application/json',
         'x-access-token':token
      }
   });   
   if(!response.ok){
      if(response.status === 404){
         return {
         success:false,
         error:`Resource not found!`
         }
      }
      if(response.status === 401){
         return {
         success:false,
         error:`Unauthorized!`
         }
      }
      else{
         return {
         success:false,
         error:`Some error occurred!`
         }
      }
   }
   const result = await response.json();
   return result;
}catch(err){
      return {
         success:false,
         error:err.message,
      }
   
 }
 }

 export default EmployeeList;