import { Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Layout from "./layout";
import Dashboard from "./components/dashboard/Dashboard";
import UsersPage from "./pages/dashboard/users/UsersPage";
import SinglePage from "./pages/dashboard/users/SinglePage";
import PaymentPage from "./pages/dashboard/payments/PaymentPage";

const App = () => {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/users/:id" element={<EditUser />} /> */}

      {/* Dashboard */}
      <Route path="/dashboard" element={<Layout />}>
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
