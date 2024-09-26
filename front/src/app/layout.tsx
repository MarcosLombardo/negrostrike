// Estilos y componentes
import "./reset.css";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";

// Metadata
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Negro-Strike",
  description:
    "Página de las estadísticas del Negro-Strike. Arrecifes, Buenos Aires, Argentina.",
};

// -----------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-lucida-console bg-secondary text-letter">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
