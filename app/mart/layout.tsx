import { MartNavbar } from "@/components/layouts/mart-navbar";
import { MartFooter } from "@/components/layouts/mart-footer";

export default function MartLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MartNavbar />
      <main className="flex-1">{children}</main>
      <MartFooter />
    </>
  );
}

