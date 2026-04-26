import { AdminSidebar } from "@/components/layouts/admin-sidebar";
import { DashboardNavbar } from "@/components/layouts/dashboard-navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <DashboardNavbar />
        <main className="flex-1 p-6 bg-muted/30">{children}</main>
      </div>
    </div>
  );
}

