import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-powered Study Explainer",
  description: "Enter any study topic and get a simple explanation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}