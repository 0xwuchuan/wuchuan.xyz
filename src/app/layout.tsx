import "./globals.css";
import type { Metadata } from "next";
import { Chivo, Inter } from "next/font/google";
import localfont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const chivo = Chivo({ subsets: ["latin"], variable: "--font-chivo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satoshi = localfont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: {
    template: "wuchuan • %s",
    default: "wuchuan • home",
  },
  icons: {
    icon: "/icon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Standard layout: Center children vertically in one column */}
      <body
        className={`flex flex-col items-center min-h-screen overflow-x-hidden
          ${chivo.variable}
          ${satoshi.variable}
          ${inter.variable}`}
      >
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
