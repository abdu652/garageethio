async function addEmployee(req,res,db){
   try{
      const {name,email,sup,id} = req.body;
   
      if(!name || !email || !sup|| !id){
         return res.status(400).json({
            staus:"failed",
            message:"please fill all the fields",
            data:"",
         });
      }
      const addEmployee = "insert into employee(id,name,sup,email) values(?,?,?,?)";
      const result = await db.execute(addEmployee,[id,name,sup,email]);
      return res.status(200).json({
         status:"success",
         message:"employee added successfully",
         data:result
      });
   }               
   catch(err){
      res.status(500).json({
         status:"failed",
         message:"Internal Server Error",
         data:""
      });
   }
}
export default addEmployee;