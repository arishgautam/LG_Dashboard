import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Pages without layout */}
      <Route path="/" element={<Home />} />

      {/* Pages with layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/user" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
