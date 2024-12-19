import {jwtDecode} from 'jwt-decode';
async function Auth(){
   const parsedData =await  JSON.parse(localStorage.getItem("employee"));
   if(parsedData) return jwtDecode(parsedData);
   else return {}
   
}
export default Auth;