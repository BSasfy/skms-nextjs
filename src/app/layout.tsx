import "@/app/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";
import { ContactModalProvider } from "./components/contact-modal/contact-modal-context";
import ContactModal from "./components/contact-modal/contact-modal";

export const metadata: Metadata = {
  title: {
    default: "Krav Maga Glasgow | Self Defence Classes | SKMS",
    template: "%s | SKMS",
  },
  description:
    "Krav Maga and self defence classes in Glasgow. Beginners welcome at Firhill and Kelvinhall. Women-only courses, teens, and adult classes.",
  keywords: [
    "Krav Maga Glasgow",
    "self defence classes Glasgow",
    "beginners Krav Maga Glasgow",
    "SKMS Krav Maga",
  ],
  metadataBase: new URL("https://scotkravmaga.co.uk"),
  openGraph: {
    siteName: "SKMS Krav Maga",
    locale: "en_GB",
    type: "website",
  },
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
      <body className="bg-white">
        <ContactModalProvider>
          <NavBar />
          {children}
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
