import React from "react";
import '../../../assets/styles/AdminMenu.css';
import { Link } from "react-router-dom";
function AdminMenu(){
   return (
		<div className="admin">
			<div className="admin-dashboard">
			<h1>Admin Menu</h1>
				<div className="admin top">
					<Link to="">Dashboard</Link>
				</div>
				<div className="admin">
					<Link to="">Orders</Link>
				</div>
				<div className="admin">
					<Link to="">New order</Link>
				</div>
				<div className="admin">
					<Link to="">Add employee</Link>
				</div>
				<div className="admin">
					<Link to="">Employees</Link>
				</div>
				<div className="admin">
					<Link to="">Add customer</Link>
				</div>
				<div className="admin">
					<Link to="">Customers</Link>
				</div>
				<div className="admin">
					<Link to="">Services</Link>
				</div>
			</div>
		</div>
	);
}

export default AdminMenu;