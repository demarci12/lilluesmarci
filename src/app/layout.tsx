import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./site.css";

// latin-ext is required for Hungarian ő/ű; "latin" alone falls back to a system font for them.
const serif = Instrument_Serif({
  variable: "--font-serif-raw",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const sans = Atkinson_Hyperlegible_Next({
  variable: "--font-sans-raw",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const mono = Atkinson_Hyperlegible_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin", "latin-ext"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Lilu & Marci — Esküvői meghívó",
  description: "Lilu és Marci esküvője — 2027. július 10., Etyek, Kálna Mátyás Malom",
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" data-theme="lilu" className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
