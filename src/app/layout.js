export const metadata = {
  title: "E-Wallet",
  description: "Votre portefeuille numérique sécurisé",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
