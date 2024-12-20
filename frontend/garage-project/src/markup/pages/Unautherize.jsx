import getAuth from '../../utils/Auth.jsx';
const Unauthorized = ()=>{
   const {employee} = getAuth();

   console.log(employee)
   return (
      <div>
         <h1>Unauthorized</h1>
         <p>You are not authorized to view this page</p>
      </div>    
   )
}
export default Unauthorized;