import mysql from "mysql2/promise";

const dbConfig ={
   host:process.env.DB_HOST,
   user:process.env.DB_USER,
   password:process.env.DB_PASSWORD,
   database:process.env.DB_NAME
}
const pool = mysql.createPool(dbConfig);
async function query(sql,params){
   try{
      const [rows] = await pool.execute(sql,params);
      return rows;

   }catch(err){
      return err.message;
   }
}
export default query;