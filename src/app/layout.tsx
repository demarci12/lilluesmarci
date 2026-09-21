import type { Metadata } from "next";
import { Ephesis, Questrial } from "next/font/google";
import "./globals.css";

const ephesis = Ephesis({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const questrial = Questrial({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lilu & Marci — Esküvő",
  description: "Lilu és Marci esküvője — 2027.07.10, Kálna, Mátyás Malom",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${ephesis.variable} ${questrial.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
