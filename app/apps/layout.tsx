import { AppsNavbar } from "@/components/layouts/apps-navbar";
import { AppsFooter } from "@/components/layouts/apps-footer";

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppsNavbar />
      <main className="flex-1">{children}</main>
      <AppsFooter />
    </>
  );
}

