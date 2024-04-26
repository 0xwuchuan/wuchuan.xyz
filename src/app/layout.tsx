import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
        className={
          "flex flex-col items-center min-h-screen overflow-x-hidden" +
          inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
