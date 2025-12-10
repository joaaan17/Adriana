import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriana Tortosa - Especialista en Microblading",
  description: "Especialista en Microblading. Trazos que elevan tu esencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

