import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname, resolve } from 'path';
import performQuery from '../config/db.config.js';

async function createTable(){   
   const fileName = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(fileName);
   const queryFile = path.join(__dirname,'./sql/initial.queries.sql');
   const queries =[];
   const finalMessage = {};
   let tempLine ='';
   const lines = await fs.readFileSync(queryFile,'utf-8').split('\n');
   const execute = new Promise((resolve,reject)=>{
      lines.forEach((line) => {
         if (line.trim().startsWith("--") || line.trim() === "") {
            return;
         }
         tempLine += line.trim();
         if (line.trim().endsWith(";")) {
            const sqlLine = tempLine.replace(/(\r\n|\n|\r)/gm, "").trim();
            queries.push(sqlLine);
            tempLine = "";
         }
      });    
   })
   try{
      queries.forEach((query)=>{
         performQuery(query,[])
      })
   }
   catch(err){
      finalMessage.message = "Tables are not created.";
   };
   if(!finalMessage.message){
      finalMessage.status = 200;
      finalMessage.message = "Tables are created successfully.";
   }
   else{
      finalMessage.status = 500;
   }
   return finalMessage;

}
export default createTable;