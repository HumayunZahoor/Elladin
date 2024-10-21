import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/authModule/SignUp";
import SignIn from "./components/authModule/SignIn";
import ForgotPassword from "./components/authModule/ForgotPassword";
import CreateNewPassword from "./components/authModule/CreateNewPassword";
import Dashboard from "./components/dashboard/Dashboard";
import Menu from "./components/navigation/Menu";
import Api from "./components/api/Api";
import EBook from "./components/e-book/EBook";
import CoverTemplates from "./components/covertemplates/CoverTemplates";
import Payments from "./components/payments/Payments";
import HelpSupport from "./components/help&support/HelpSupport";
import CreateEBook from "./components/createEbook/CreateEBook";
import CreateEBook2 from "./components/createEbook/CreateEBook2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {

  
  return (
    <Router>
    {/* <Menu/> */}
      <Routes>
      <Route path="/" exact element={<SignUp/>} />
      <Route path="/SignIn" exact element={<SignIn/>} />
      <Route path="/ForgotPassword" exact element={<ForgotPassword/>} />
      <Route path="/CreateNewPassword" exact element={<CreateNewPassword/>} />
      <Route path="/Dashboard" exact element={<Dashboard/>} />
      <Route path="/Menu" exact element={<Menu/>} />
      <Route path="/EBook" exact element={<EBook/>} />
      <Route path="/CoverTemplates" exact element={<CoverTemplates/>} />
      <Route path="/Payments" exact element={<Payments/>} />
      <Route path="/Api" exact element={<Api/>} />
      <Route path="/HelpSupport" exact element={<HelpSupport/>} />
      <Route path="/CreateEBook" exact element={<CreateEBook/>} />
      <Route path="/CreateEBook2" exact element={<CreateEBook2/>} />
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
