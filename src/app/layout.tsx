import "@/app/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "SKMS Krav Maga",
  description: "Krav Maga in Glasgow",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-zinc-950 text-zinc-300">
        <NavBar />
        <div className="relative z-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
