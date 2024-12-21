import EmployeesList from "../../components/EmployeesList/EmployeesList.jsx";
import Adminmenu from '../../components/adminMenu/AdminMenu.jsx';

const Employees = () => {
      return (
         <div className="employees-container">
               <EmployeesList />
               <Adminmenu />
         </div>
      )
   }
   export default Employees;