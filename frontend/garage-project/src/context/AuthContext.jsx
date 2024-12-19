import Auth from '../utils/Auth.jsx';
import React, { useState, useContext, useEffect} from 'react';
// import './AuthContext.css'
const AuthContext = React.createContext()

export function useAuth(){
   return useContext(AuthContext);
}

function AuthProvider({children}){
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [employee, setEmployee] =useState(null);
   const value = {isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin,employee }
   
   useEffect(()=>{
      async function fetchData() {
      const loggedInEmployee = await Auth();
      const {employee_role} = loggedInEmployee;   
      if(loggedInEmployee){
         setEmployee(loggedInEmployee)
         setIsLoggedIn(true);
      }
      if(employee_role === 1){
         setIsAdmin(true)
      }
   }
   fetchData()
   },[])
   return (
      <AuthContext.Provider value ={value}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;