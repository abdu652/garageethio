import React from 'react';
import AddEmployeeForm from '../../components/addEmployeeForm/AddEmployeeForm';
import AdminMenu from '../../components/adminMenu/AdminMenu';
function AddEmployee(){
   return(
      <div className='add-employee-admin-container'>
         <AddEmployeeForm/>
         <AdminMenu/>
      </div>
   )
}
export default AddEmployee;   