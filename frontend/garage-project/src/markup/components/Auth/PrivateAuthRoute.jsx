import React,{useState, useEffect} from "react";
import {getAuth} from "../../../utils/Auth.jsx";
import {useNavigate} from 'react-router-dom'
const PrivateAuthRoute =({roles, children})=>{
   const [isVerified, setIsVerified] = useState(false);
   conat [isChecked, setIsChecked] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(()=>{
      const navigate = useNavigate();
      const {employee} = getAuth();
      if(employee){
         setIsLoggedIn(true);
         if(roles && roles.includes(employee.employeeRole)){
            setIsVerified(true);
         }
      }
      setIsChecked(true);
      if(isChecked){
         if(!isLoggedIn){
           return navigate("/login");
         }
         if(isLoggedIn && !isVerified){
            return navigate("/unauthorized");
         }
      }
      return children;

   },[roles, children])
}