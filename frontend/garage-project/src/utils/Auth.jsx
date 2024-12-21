import {jwtDecode} from 'jwt-decode';
async function Auth(){
   const parsedData =await  JSON.parse(localStorage.getItem("employee"));
   if(parsedData){
      const decodedData = jwtDecode(parsedData);
      return {...decodedData, token:parsedData};
   }       
   else return {}  
}
export default Auth;