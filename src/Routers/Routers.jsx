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
import { AuthContext } from "../Components/useContext/useContext";
import { useState } from "react";
import Header from "../Components/Header/Header";

const Routers = () => {
  const [cartedData, setCartedData] = useState([]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  return (
    <Box className="in_routes">
      <AuthContext.Provider
        value={{
          cartedData,
          setCartedData,
          count,
          setCount,
          data,
          setData,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Header />}>
              <Route exact path="/home" element={<Home />} />
              <Route path="/home/cart" element={<Cart />} />
              <Route path="/home/billing" element={<BillingPage />} />
              <Route path="/home/termsCondition" element={<TermsCondition />} />
              <Route path="/home/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/home/cartItems" element={<CartItems />} />
              <Route path="/home/products" element={<Products />} />
              <Route path="/home/profile" element={<ProfileTabs />} />
              <Route path="/home/singleProducts" element={<SingleProduct />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </Box>
  );
};

export default Routers;
