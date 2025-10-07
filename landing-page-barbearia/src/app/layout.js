import "./globals.css";

export const metadata = {
  title: "Barbearia",
  description: "Landing Page Barbearia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
