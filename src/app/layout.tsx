import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./components/nav-bar/nav-bar";

export const metadata: Metadata = {
  title: "SKMS Krav Maga",
  description: "Krav Maga in Glasgow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
