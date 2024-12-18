import  loginService from '../services/login.service.js';
async function login(req,res){
   try{
      const user = req.body;
      const loginMessage = await loginService(user);
      const {isAuthenticated} = loginMessage;
      if(!isAuthenticated){
         return res.status(400).json(loginMessage);
      }
      res.status(200).json(loginMessage);

   }catch(err){
      console.log({message:"error occurs in login.controller.",error:err.message})
      return res.json({
			message: "error occurs in login.controller.",
			error: err.message,
		});
   }
      
}

export default login;