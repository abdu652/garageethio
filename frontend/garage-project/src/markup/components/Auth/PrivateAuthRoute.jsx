import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import getAuth from "../../../utils/Auth.jsx";

const PrivateAuthRoute = ({ roles, children }) => {
const [isVerified, setIsVerified] = useState(false);
const [isChecked, setIsChecked] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
   const validateUser = async () => {
      try {
         const employee = await getAuth();
         console.log(employee);
         if (employee && Object.keys(employee).length > 0) {
            setIsLoggedIn(true);
            if (roles && roles.includes(employee.employeeRole)) {
               setIsVerified(true);
            }
         }
      } 
      catch (err) {
         console.error("Error during authentication:", err);
      } 
      finally {
         setIsChecked(true);
      }
   };
   validateUser(); // Call the function inside useEffect
}, [roles]);

// While authentication is being checked
   if (!isChecked) {
      return <div>Loading...</div>;
   }

// Redirect if not logged in
   if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
   }

   // Redirect if not authorized
   if (!isVerified) {
      return <Navigate to="/unautherized" replace />; //unautherized
   }

   // Render children if logged in and authorized
   return children;
};

export default PrivateAuthRoute;
