import "./globals.css";
import type { Metadata } from "next";
import { Chivo, Open_Sans } from "next/font/google";
import localfont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const satoshi = localfont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-chivo",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
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
        className={`flex min-h-screen flex-col items-center overflow-x-hidden antialiased ${satoshi.variable} ${chivo.variable} ${openSans.variable}`}
      >
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
