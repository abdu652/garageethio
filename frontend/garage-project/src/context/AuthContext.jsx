import Auth from '../utils/Auth.jsx';
import { useState, useContext, useEffect, createContext, Children } from 'react';
// import './AuthContext.css'
const AuthContext = createContext();

export useAuth = ()=>{
   return useContext(AuthContext);
}

async function AuthProvider(){
   const loggedInEmployee = await Auth();
   const {employee_role} = loggedInEmployee;   
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [employee, setEmployee] =useState(null);
   const value = {isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin,employee }
   
   useEffect(()=>{
      if(loggedInEmployee){
         setEmployee(loggedInEmployee)
         setIsLoggedIn(true);
      }
      if(employee_role === 1){
         setIsAdmin(true)
      }
   },[])
   return (
      <AuthContext.Provider value ={value}>
         {Children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;