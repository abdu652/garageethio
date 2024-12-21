 import React from 'react';
 import {Routes, Route} from 'react-router-dom';
 import Home from './markup/pages/Home';
 import Login from './markup/pages/Login';
 import AddEmployee from './markup/pages/admin/AddEmployee';
 import Header from './markup/components/header/Header';
 import Footer from './markup/components/footer/Footer';
 import Unautherized from './markup/pages/Unautherize.jsx';
 import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute.jsx';
 function App(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />   
        <Route path='/unautherized' element={<Unautherized/>} />   
       < Route path='/admin/add-employee'  element = {
          <PrivateAuthRoute roles={[1]}>
            {<AddEmployee />}
          </PrivateAuthRoute>
       }/>
      </Routes>
      <Footer/>
    </div>
  )
 }
 export default App;