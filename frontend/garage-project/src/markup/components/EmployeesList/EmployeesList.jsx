import React, {useState, useEffect} from 'react';
import getEmployee from '../../../services/EmployeesList.service.jsx';
import { format } from 'date-fns';
import './EmployeesList.css';
const EmployeesList = () => {
   const [employees, setEmployees] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   useEffect(() => {
      try {
         const fetchEmployees = async () => {
				const response = await getEmployee();
				if (!response.success && response.length === 0) {
					setError(true);
					setErrorMessage(response.error);
				} else {
					setEmployees(response.data);
				}
			};
			fetchEmployees();
      }catch(err){
         setError(true);
         setErrorMessage(err.message);
      }
   }, []);
   if(error){
      return (
         <div className='error-message'>
            <h1>{errorMessage}</h1>
         </div>
      );
   }

   return (
      <div className="employee-list">
         <table className='employee-table'>
            <thead className='employee-header'>
               <tr className='employee-column'>
                  <th>Active</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added date</th>
                  <th>Role</th>
                  <th>Edit/Delete</th>
               </tr>
            </thead>
            <tbody>
               {
                  employees.map((employee,index) => {
                     const {
                        company_role_name,
                        added_date,
                        employee_email,
                        employee_first_name,
                        employee_last_name,
                        employee_phone_number,
                     } = employee;
                     const formattedDate = format(new Date(added_date), 'yyyy-MM-dd HH:mm');
                     return (
                     <tr className='employee-row' key={index}>
                        <td>yes</td>
                        <td>{employee_first_name}</td>
                        <td>{employee_last_name}</td>
                        <td>{employee_email}</td>
                        <td>{employee_phone_number}</td>
                        <td>{formattedDate}</td>
                        <td>{company_role_name}</td>
                        <td>edit/delete</td>
                     </tr>
                    );
                  })

               }
                  </tbody>
         </table>
      </div>      
   ); 
}
export default EmployeesList;