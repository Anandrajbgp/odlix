export const metadata = { title: "Terms & Conditions - Odlix" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>Welcome to Odlix. By using our platform, you agree to these terms.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Acceptance</h2>
        <p>By accessing Odlix, you accept these terms in full. If you disagree, please do not use our services.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Services</h2>
        <p>Odlix provides e-learning, digital agency services, test preparation, trading tools, app marketplace, and e-commerce.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Payments & Refunds</h2>
        <p>All payments are processed securely. Refunds are subject to our refund policy available upon request.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Intellectual Property</h2>
        <p>All content on Odlix is protected by copyright. Unauthorized use is prohibited.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Contact</h2>
        <p>For queries: team.odlix@gmail.com | +91 7372891228</p>
      </div>
    </div>
  );
}

