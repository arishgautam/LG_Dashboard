import { Outlet } from "react-router-dom";
import AppSidebar from "../../components/dashboard/AppSidebar.tsx";
import Navbar from "../../components/dashboard/Navbar.tsx";
import { SidebarProvider } from "../../components/ui/sidebar.tsx";

export default function DashboardLayout() {
  const defaultOpen = localStorage.getItem("sidebar_state");
  return (
    <div className="flex">
      <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />

      <main className="w-full">
        <Navbar />

        {/* pages render here */}
        <div className="px-4">
        <Outlet />
        </div>
      </main>
      </SidebarProvider>
    </div>
  );
}
