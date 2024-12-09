import React from "react";
import '../../../assets/styles/AddEmployee.css';

function AddEmployeeForm(){
   return(
      <form className="add-employee-form">
         <input type="Employee email" placeholder="email" name="email"/>
         <input type="text" placeholder="Employee first_name" name="first_name"/>
         <input type="text" placeholder="Employee last_name" name="last_name"/>
         <input type="phone" placeholder="Employee phone_number" name="phone_number"/>
         <input type="" placeholder="" name=""/>
         <input type="password" placeholder="password" name="password"/>
         <button className="register-btn">Register</button>
      </form>
   )
}
export default AddEmployeeForm;