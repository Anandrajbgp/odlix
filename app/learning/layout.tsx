import { LearningNavbar } from "@/components/layouts/learning-navbar";
import { LearningFooter } from "@/components/layouts/learning-footer";

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LearningNavbar />
      <main className="flex-1">{children}</main>
      <LearningFooter />
    </>
  );
}

