import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import HeaderLogo from '../../../assets/images/garage-logo.png';
import "../../../assets/styles/Header.css";
import Login from "../../pages/Login.jsx";
import { use } from "react";

function Header(){
   const navigate = useNavigate();
   return (
		<header className="main-header">
			<div className="header-description">
				<h1>Enjoy the Beso while we fix your car</h1>
				<span className="header-description-set-time">
					<p>Monday-Saturday 7:000AM-6:00PM</p>
					<p>Schedule your appointement:1800 1230 3456 </p>
				</span>
			</div>
			<nav className="header-nav">
				<div className="header-logo-container">
					<img className="header-logo" src={HeaderLogo} alt="logo" />
				</div>

				<div className="header-nav-list">
					<div>
						<Link to={'#'}>HOME</Link>
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
					<button className="login-btn" onClick={()=>navigate('/login')}>
						Login
					</button>
				</div>
			</nav>
		</header>
	);
}
export default Header;