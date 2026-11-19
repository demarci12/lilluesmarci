import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Mrs_Saint_Delafield } from "next/font/google";
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
const script = Mrs_Saint_Delafield({
  variable: "--font-script-raw",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liluesmarci.hu"),
  title: "Lilu & Marci — Esküvői meghívó",
  description: "Lilu és Marci esküvője — 2027. július 10., Etyek, Kálna Mátyás Malom",
  openGraph: {
    title: "Lilu & Marci — Esküvői meghívó",
    description: "2027. július 10. · Etyeki templom, majd Kálna Mátyás Malom",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable} ${script.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
