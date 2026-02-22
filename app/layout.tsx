import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DD club app",
  description: "create next app",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps
) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-base md:text-lg`}>
        <header className="sticky top-0 z-10 py-2 px-4 bg-white shadow-sm md:py-4 md:px-6">
          <nav className="flex flex-col md:flex-row">
            <Link href="/" className="text-blue-600 hover:underline mb-2 md:mb-0 md:mr-4">Home</Link>
            <Link href="/articles" className="text-blue-600 hover:underline">Articles</Link>
          </nav>
        </header>
        <main className="max-w-full p-4 md:max-w-3xl md:mx-auto md:p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
