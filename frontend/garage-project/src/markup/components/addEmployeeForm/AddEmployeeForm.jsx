import {useState} from "react";
import '../../../assets/styles/AddEmployee.css';
import createEmployee  from "../../../services/AddEmployee.service";
import storedTokenfrom from '../../../utils/Auth.jsx';

function AddEmployeeForm(){
   const [employee, setEmployee] = useState({
      employee_email: "",
      employee_first_name: "",
      employee_last_name: "",
      employee_phone_number: "",
      employee_password:"",
		company_role_id:3
   });
	const [responseMessage,setResponseMessage] = useState("");
   function handleChange(e){
		const {value, name} = e.target;
		setEmployee((prev)=>{
			return {...prev, [name]:value};
		})
   }
	const {employee_email,employee_first_name,employee_last_name,employee_phone_number,employee_password,company_role_id} = employee;
   async function handleSubmit(e){
		try{
			
			e.preventDefault();
			const {token} = await storedTokenfrom();
			if(!employee_email || !employee_first_name || !employee_last_name || !employee_password || !employee_phone_number){
				setResponseMessage("Fill all fields first!");
				return;
			}else{setResponseMessage("")}
			const response = await createEmployee(employee, token);
			const {error, message} = response;

			if(error){
				setResponseMessage(error);
				return
			}
			console.log("message in employee.jsx",message)
			setResponseMessage(message);
			   setEmployee({
					employee_email: "",
					employee_first_name: "",
					employee_last_name: "",
					employee_phone_number: "",
					employee_password: "",
					company_role_id:3
				});
				
		}catch(err){
			setResponseMessage(err.message)
		}
   }
   return (
		<form
			className="add-employee-form"
			onSubmit={handleSubmit}
			method="POST"
			action="/admin/add-employee">
				{responseMessage && <h1 className="error-message">{responseMessage}</h1>}
			<input
				type="Employee email"
				placeholder="email"
				name="employee_email"
				value={employee_email}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Employee first_name"
				name="employee_first_name"
				value={employee_first_name}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Employee last_name"
				name="employee_last_name"
				value={employee_last_name}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Employee phone_number"
				name="employee_phone_number"
				value={employee_phone_number}
				onChange={handleChange}
			/>
			<select
				value={company_role_id}
				name="company_role_id"
				onChange={handleChange} 
			>
				<option value={1}>Admin</option>
				<option value={2}>Manager</option>
				<option value={3}>Employee</option>
			</select>
			<input
				type="password"
				placeholder="password"
				name="employee_password"
				value={employee_password}
				onChange={handleChange}
			/>
			<button className="register-btn">Register</button>
		</form>
	);
}
export default AddEmployeeForm;