import type { Metadata } from "next";
import { Beau_Rivage, Questrial } from "next/font/google";
import "./globals.css";

const scriptFont = Beau_Rivage({
  variable: "--font-script-raw",
  subsets: ["latin"],
  weight: "400",
});

const questrial = Questrial({
  variable: "--font-sans-raw",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lilu & Marci — Esküvő",
  description: "Lilu és Marci esküvője — 2027.07.10, Kálna, Mátyás Malom",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${scriptFont.variable} ${questrial.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
