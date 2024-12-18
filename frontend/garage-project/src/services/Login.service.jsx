

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
      return result;            
   }      
   catch (err) {
      return {message:err.message}
   }
}
export default Login;