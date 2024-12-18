

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
        return {message:response.statusText}
      } 
      const result = await response.json();
      const {isAuthenticated, token} = result;
      if(isAuthenticated){
         token && localStorage.setItem("employee",JSON.stringify(token));
         return result;            
      }
   }      
   catch (err) {
      return {message:err.message}
   }
}
export default Login;