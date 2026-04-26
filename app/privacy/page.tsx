export const metadata = { title: "Privacy Policy - Odlix" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>At Odlix, we value your privacy. This policy outlines how we collect, use, and protect your data.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Data Collection</h2>
        <p>We collect information you provide during registration, course enrollment, and platform usage. This includes name, email, payment details, and learning progress.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Usage</h2>
        <p>Your data is used to provide personalized learning experiences, process payments, and improve our services.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Cookies</h2>
        <p>We use cookies to enhance user experience and analyze traffic patterns.</p>
        <h2 className="text-xl font-semibold text-foreground mt-6">Contact</h2>
        <p>For privacy concerns, email us at teamoblivent@gmail.com</p>
      </div>
    </div>
  );
}

