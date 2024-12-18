import  loginService from '../services/login.service.js';
async function login(req,res){
   try{
      const user = req.body;
      const loginMessage = await loginService(user);
         res.status(200).json(loginMessage);
         // console.log(loginMessage)
   }catch(err){
      return res.json({
			message: err.message,
         isAuthenticated:false
		});
   }
      
}

export default login;