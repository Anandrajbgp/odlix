import { TestsNavbar } from "@/components/layouts/tests-navbar";
import { TestsFooter } from "@/components/layouts/tests-footer";

export default function TestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TestsNavbar />
      <main className="flex-1">{children}</main>
      <TestsFooter />
    </>
  );
}

