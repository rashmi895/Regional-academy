import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regional Academy | Admin Dashboard",
  description: "Admin dashboard for Regional Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-slate-900 bg-white dark:bg-[#060a13] dark:text-white transition-colors duration-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
