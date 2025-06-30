import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./privateRoute";
import Accueil from "../pages/HomePage";
import Devis from "../pages/QuoteForm";

// import Login from "../pages/Login/login";
// import Signup from "../components/SignUp/signup";
// import ForgotPassword from "../components/ForgotPassword/forgotPassword";
// import ProductPreview from "../components/ProductPreview/productPreview";
// import AccueilClient from "../components/AccueilClient/AccueilClient";
// import Contactus from "../components/ContactUs/Contactus";
// import Expedition from "../components/expedition/expedition";
// import Dashboard from "../pages/DashboardAdmin/Dashboard";
// import Profile from "../pages/Profile";
// import {
//   PROFILE_INFO_ROUTE,
//   PROFILE_PWD_ROUTE,
//   PROFILE_ROUTE,
// } from "../constants/routes";
// import InformationProfile from "../pages/Profile/InformationProfil";
// import Motdepasse from "../pages/Profile/MotdepasseAdmin";
// import FridgePreview from "../pages/FridgePreview";
// import Cart from "../pages/Cart/PanierPage";
// import AvisClient from "../pages/AvisClient/AvisClientsPage";
const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
    </Router>
  );
};
export default RouterConfig;
