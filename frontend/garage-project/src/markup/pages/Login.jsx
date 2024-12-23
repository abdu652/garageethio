import { useState } from "react";
import "../../assets/styles/Login.css";
import VerifyUser from '../../services/Login.service.jsx';
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../../context/AuthContext.jsx";
function Login() {
	const response = useAuth();
	const [fieldMessage, setFieldMessage] = useState("");
	const navigate = useNavigate();
	const [loginForm, setLoginForm] = useState({
		employee_email: "",
		employee_password: "",
	});
	
	// Handle input field changes
	function handleChange(e) {
		setFieldMessage("");
		const { name, value } = e.target;
		setLoginForm((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	const { employee_email, employee_password } = loginForm;

	// Handle form submission
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			if (!employee_email.trim() || !employee_password.trim()) {
				setFieldMessage("Please fill in all fields.");
				return;
			}
			const result = await VerifyUser(loginForm);
			const {message} = result;
			setFieldMessage(message);
		}
		catch(err){
			           
			setFieldMessage(err.message);
		}
	}
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h1 className="login-title">Login to your account</h1>
			<p className="field-message">{fieldMessage}</p>
			<input
				type="email"
				placeholder="Email"
				name="employee_email"
				value={employee_email}
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				name="employee_password"
				value={employee_password}
				onChange={handleChange}
				required
			/>
			<button type="submit" className="login-button" onClick={()=>{
				if(isLoggedIn){
					navigate('/')
				}
				}}>
				Login
			</button>
		</form>
	);
}

export default Login;
