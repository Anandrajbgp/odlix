import { AgencyNavbar } from "@/components/layouts/agency-navbar";
import { AgencyFooter } from "@/components/layouts/agency-footer";

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AgencyNavbar />
      <main className="flex-1">{children}</main>
      <AgencyFooter />
    </>
  );
}

