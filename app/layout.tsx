import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Gonzalo Alfredo Muniz | DevOps & Cloud Jr.",
  description:
    "Portafolio de Ingeniero Junior en DevOps y Cloud — CI/CD, Infraestructura como Codigo, Kubernetes y observabilidad.",
};

export const viewport: Viewport = {
  themeColor: "#1a1d2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
