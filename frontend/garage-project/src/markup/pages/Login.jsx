import { useState } from "react";
import "../../assets/styles/Login.css";

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
			// Validate fields
			if (!employee_email.trim() || !employee_password.trim()) {
				setFieldMessage("Please fill in all fields.");
				return;
			}

			const response = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginForm),
			});

			if (!response.ok) {
				// Display error message based on response status
				const errorResponse = await response.json();
				setFieldMessage(errorResponse.message || "Login failed. Please try again.");
				if(errorResponse.message === 'User not found. please register first!'){
					setLoginForm({
						employee_email: "",
						employee_password: "",
					});		
				}
			} else {
				// Success: parse and display result
				const result = await response.json();
				setFieldMessage(result.message || "Login successful!");
				setLoginForm({
					employee_email: "",
					employee_password: "",
				});
			}
		} catch (err) {
			// Handle fetch errors
			setFieldMessage("An error occurred while logging in. Please try again.");
			console.error("Error during login:", err);
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
