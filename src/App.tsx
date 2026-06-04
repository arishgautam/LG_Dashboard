import { Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import ProductDetail from "./pages/landing/ProductDetail";
import Products from "./pages/landing/products";
import Category from "./pages/landing/category";
import Checkout from "./pages/landing/checkout";
import Contact from "./pages/landing/contact";
import Privacy from "./pages/landing/privacy";
import Terms from "./pages/landing/terms";
import Cart from "./pages/landing/cart";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ResetPassword from "./pages/auth/reset-password";
import OtpVerify from "./pages/auth/otp-verify";
import ForgotPassword from "./pages/auth/forgot-password";

import LandingLayout from "./pages/landing/LandingLayout";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import UsersPage from "./pages/dashboard/users/UsersPage";
import SinglePage from "./pages/dashboard/users/SinglePage";
import PaymentPage from "./pages/dashboard/payments/PaymentPage";


const App = () => {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otp-verify" element={<OtpVerify />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:username" element={<SinglePage />} />
        <Route path="payments" element={<PaymentPage />} />
        {/* <Route path="products" element={<ProductsPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
