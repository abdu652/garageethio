import {jwtDecode} from 'jwt-decode';
async function Auth(){
   const parsedData =await  JSON.parse(localStorage.getItem("employee"));
   if(parsedData){
      const decodedData = jwtDecode(parsedData);
      console.log(decodedData);
      return decodedData;
   } 
      
      
   else return {}
   
}
export default Auth;