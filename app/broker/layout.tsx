import { BrokerNavbar } from "@/components/layouts/broker-navbar";
import { BrokerFooter } from "@/components/layouts/broker-footer";

export default function BrokerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrokerNavbar />
      <main className="flex-1">{children}</main>
      <BrokerFooter />
    </>
  );
}

