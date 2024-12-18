async function Login(loginForm){

   try{
      const response = await fetch("http://localhost:3000/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(loginForm),
      });

      if (!response.ok) {
         console.log(response)
         return {
            message:response.statusText,
            isAuthenticated:false
         }
      } 
      const result = await response.json();
      const {isAuthenticated, token} = result;
      if(isAuthenticated){
         localStorage.setItem("employee",JSON.stringify(token))
         return result;            
      }else{
         return result
      }
   }      
   catch (err) {
      return {
         message:err.message,
         isAuthenticated:false
      }
   }
}
export default Login;