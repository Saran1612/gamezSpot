import { Box } from "@mui/material";
import React from "react";
import BillingPage from "../Pages/BillingPage/BillingPage";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsCondition from "../Pages/Terms&Condition/Terms&Condition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import CartItems from "../Pages/CartItems/CartItems";
import Products from "../Pages/Products/Products";
import ProfileTabs from "../Pages/Profile/ProfileTabs";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const Routers = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cartItems" element={<CartItems />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<ProfileTabs />} />
          <Route path="/singleProducts" element={<SingleProduct />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Routers;