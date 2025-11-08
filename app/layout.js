import "./globals.css";

export const metadata = {
  title: "Intelliwave | Agence d'automatisation AI",
  description:
    "Intelliwave conçoit des chatbots sur mesure et des automatisations n8n pour accélérer votre croissance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
