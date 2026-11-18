import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import "./olive-letter.css";

// latin-ext is required for Hungarian ő/ű; "latin" alone falls back to a system font for them.
const serif = Cormorant_Garamond({
  variable: "--font-serif-raw",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans-raw",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

// Calligraphic display face for the names and section titles only (never body text).
const script = Pinyon_Script({
  variable: "--font-script-raw",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lilu & Marci — Esküvői meghívó",
  description: "Lilu és Marci esküvője — 2027. július 10., Kálna, Mátyás malom",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable} ${script.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
