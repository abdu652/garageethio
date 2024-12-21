import jwt from 'jsonwebtoken';
import query from '../config/db.config.js';
const verifyToken = (req, res, next) => { 
   const token = req.headers['x-access-token'];
   if (!token) {
      return res.status(200).json({ message: "No token provided!" });
   }
   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
         return res.status(200).json({ message: "Unauthorized!" });
      }
      req.employeeId = decoded.employeeId;
      next();
   });
}

const isAdmin = async (req, res, next) => {
   try{
      const {employeeId} = req;
      const sql = 'select company_role_id from employee_role where employee_id = ?';
      const rows = await query(sql, [employeeId]);
      if (rows[0].company_role_id === 1) {
         next();
      }else{
         res.status(200).json({
            success: "false",
            message: "Require Admin Role!",
         });
      }
   }catch(err){
      res.status(500).json({
         success: "false",
         message:err.message,                                 
      });
   }
}

const middleware ={
   verifyToken,
   isAdmin,
}
export default middleware;