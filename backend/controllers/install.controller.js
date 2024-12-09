import installService from '../services/install.service.js';
async function install(req,res){
   const message = await installService();
   if(message.status === 200){
      res.status(200).json(message);
   }
   else{
      res.status(500).json(message);
   }
}
export default install;