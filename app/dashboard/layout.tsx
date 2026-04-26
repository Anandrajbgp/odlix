import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { DashboardNavbar } from "@/components/layouts/dashboard-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <DashboardNavbar />
        <main className="flex-1 p-6 bg-muted/30">{children}</main>
      </div>
    </div>
  );
}

