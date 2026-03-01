import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image"
import "./globals.css";

export const metadata: Metadata = {
  title: "DD club app",
  description: "A place to share your deep dungeon runs and see what others have done as well",
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
      <body className="antialiased flex flex-col min-h-screen text-base md:text-lg w-full">
        <header className="sticky top-0 z-10 py-4 px-4 bg-[#2A2E6E] shadow-sm md:py-6 md:px-6 w-full">
          <nav className="flex flex-row w-full justify-between">
            <div className="flex flex-col md:flex-row">
              <Link href="/" className="text-white hover:underline mb-1 md:mb-0 md:mr-4">
                Home
              </Link>
              <Link href="/articles" className="text-white hover:underline mb-1">
                Articles
              </Link>
              <a
                href="https://discord.gg/CBaKwGPqXH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BE0E0] hover:underline ml-0 md:ml-4"
              >
                Join the Discord
              </a>
            </div>
            <Image
              src="/header_image.png"
              alt="DD Club Header Image"
              width={250}
              height={250}
              className="md:ml-auto mt-2 md:mt-0"
            />
          </nav>
        </header>
        <main className="flex-grow max-w-full p-4 md:max-w-3xl md:mx-auto md:p-6">
          {children}
        </main>
        <footer className="bg-[#2A2E6E] text-white">
          <div className="max-w-full md:max-w-3xl mx-auto px-8 py-6 space-y-4">
            <p>
              This is the companion site for the discord found{" "}
              <a
                href="https://discord.gg/CBaKwGPqXH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BE0E0] underline hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                here
              </a>
            </p>
            <p>
              If you want to participate, please join the discord.
            </p>
            <p>
              If you want to check out submissions
              from previous months click the Articles tab above.
            </p>
            <div className="mt-4 text-sm">
              If you want to contribute to the site, the repo is{" "}
              <a
                href="https://github.com/vindaloonatic/dd-of-the-month"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BE0E0] underline hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                here
              </a>
              .
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
