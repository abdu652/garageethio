import Auth from "../utils/Auth.jsx";
import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [employee, setEmployee] = useState(null);
	const value = { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, employee };

	useEffect(() => {
		async function fetchData() {
			const loggedInEmployee = await Auth();
			console.log("loggedInEmployee:", loggedInEmployee);

			// Explicitly check if `loggedInEmployee` is not null/undefined and has the required property
			if (loggedInEmployee && Object.keys(loggedInEmployee).length > 0) {
				setEmployee(loggedInEmployee);
				setIsLoggedIn(true);

				if (loggedInEmployee.employeeRole === 1) {
					setIsAdmin(true);
				}
			}
		}
		fetchData();
	}, []);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
