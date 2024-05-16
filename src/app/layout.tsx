import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SkeletonTheme } from "react-loading-skeleton";

import Navbar from "@/components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Il mio portfolio",
    default: "Il mio portfolio",
  },
  description:
    "Proident laborum nulla dolore est laboris tempor enim non irure qui.",
  openGraph: {
    title: "Il mio portfolio",
    description:
      "Proident laborum nulla dolore est laboris tempor enim non irure qui.",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SkeletonTheme
          baseColor="rgb(100, 100, 100)"
          highlightColor="rgb(120, 120,120)"
        >
          <main className="max-w-4xl m-auto p-10">
            <Navbar />
            {children}
          </main>
        </SkeletonTheme>
      </body>
    </html>
  );
}
