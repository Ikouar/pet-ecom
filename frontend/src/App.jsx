import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./components/ForgotPassword";
import Contact from "./pages/Contact";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import PetsDetails from "./pages/Pets/PetsDetails";
import Pets from "./pages/Pets/Pets";
import About from "./pages/About";
import FAQs from "./pages/FAQs"
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetsDetails />} />
        <Route path="/about" element={<About/>} />
        <Route path="/FAQs" element={<About/>} />

      </Routes>
    </div>
  );
}

export default App;
