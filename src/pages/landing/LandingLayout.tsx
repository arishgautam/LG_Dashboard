import { Outlet } from "react-router-dom";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import ScrollToTopComponent from "../../components/landing/ScrollToTopComponent";

export default function LandingLayout() {
  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* <TopLoader /> */}
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
        </main>
      <ScrollToTopComponent />
      {/* Footer */}
      <Footer />
    </div>
  );
}
