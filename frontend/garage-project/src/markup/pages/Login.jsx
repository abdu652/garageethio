import { useState } from "react";
import "../../assets/styles/Login.css";
import VerifyUser from '../../services/Login.service.jsx';

function Login() {
	const [fieldMessage, setFieldMessage] = useState("");
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
			// console.log("hi")
			const result = await VerifyUser(loginForm);
			console.log("the response value is:",result)
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
			<button type="submit" className="login-button">
				Login
			</button>
		</form>
	);
}

export default Login;
