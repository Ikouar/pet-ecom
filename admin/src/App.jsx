import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./components/Product/ProductList";

import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./components/User/UserList";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetail from "./components/Orders/OrderDetail";
import UserForm from "./components/User/UserForm";
import UserDetail from "./components/User/UserDetail";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === "/";
  return (
    <div>
      {!isLoginPage && <Sidebar />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/new" element={<UserForm />} />
        <Route path="/users/:userId/edit" element={<UserForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
