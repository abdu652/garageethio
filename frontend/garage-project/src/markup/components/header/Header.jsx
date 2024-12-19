import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "../../../assets/images/garage-logo.png";
import "../../../assets/styles/Header.css";
import { useAuth } from "../../../context/AuthContext.jsx";

function Header() {
	const navigate = useNavigate();
	const loggedInEmployee = useAuth();
	const { isLoggedIn, employee, setIsLoggedIn } = loggedInEmployee;
	return (
		<header className="main-header">
			<div className="header-description">
				<h1>Enjoy the Beso while we fix your car</h1>
				{isLoggedIn ? (
					<p>Welcome {employee.employeeFirstName}</p>
				) : (
					<span className="header-description-set-time">
						<p>Monday-Saturday 7:00AM-6:00PM</p>
						<p>Schedule your appointment: 1800 1230 3456</p>
					</span>
				)}
			</div>
			<nav className="header-nav">
				<div className="header-logo-container">
					<img className="header-logo" src={HeaderLogo} alt="logo" />
				</div>

				<div className="header-nav-list">
					<div>
						<Link to="#">HOME</Link>
					</div>
					<div>
						<Link to="#">ABOUT US</Link>
					</div>
					<div>
						<Link to="#">SERVICES</Link>
					</div>
					<div>
						<Link to="#">CONTACT</Link>
					</div>
				</div>
				<div className="login-btn-container">
					{isLoggedIn ? (
						<button
							className="login-btn"
							onClick={() => {
								localStorage.removeItem("employee")
								setIsLoggedIn(false);
								navigate("/login");
							}}>
							Logout
						</button>
					) : (
						<button
							className="login-btn"
							onClick={() => navigate("/login")}>
							Login
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Header;
