import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/authModule/SignUp";
import SignIn from "./components/authModule/SignIn";
import ForgotPassword from "./components/authModule/ForgotPassword";
import CreateNewPassword from "./components/authModule/CreateNewPassword";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {

  
  return (
    <Router>
    {/* <Navbar/> */}
      <Routes>
      <Route path="/" exact element={<SignUp/>} />
      <Route path="/SignIn" exact element={<SignIn/>} />
      <Route path="/ForgotPassword" exact element={<ForgotPassword/>} />
      <Route path="/CreateNewPassword" exact element={<CreateNewPassword/>} />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
