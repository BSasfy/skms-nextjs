import Image from "next/image";
import Link from "next/link";

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-[#181818] text-[#FFFBF2]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-3">
        {/* Desktop contact row — same 900px cutover as the nav */}
        <div
          id="desktop-footer"
          className="hidden w-full items-center justify-between gap-6 min-[901px]:flex"
        >
          <div className="flex shrink-0 flex-col gap-2 text-sm font-medium">
            <div className="flex gap-2">
              <span className="material-symbols-outlined">call</span>
              <Link href="tel:+4407512027411">07512027411</Link>
            </div>
            <div className="flex gap-2">
              <span className="material-symbols-outlined">mail</span>
              <Link href="mailto:info@scotkravmaga.co.uk">
                info@scotkravmaga.co.uk
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 gap-4">
            <div className="relative mt-[3px] h-6 w-6">
              <Link href="https://www.instagram.com/skmskravmaga/">
                <Image src="/instagram_logo.png" alt="Instagram Logo" fill />
              </Link>
            </div>
            <div className="relative mt-[3px] h-6 w-6">
              <Link href="https://www.facebook.com/scottishkravmaga/">
                <Image src="/facebook_logo.png" alt="Facebook Logo" fill />
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 text-sm">
            <div className="flex whitespace-nowrap">
              <span className="material-symbols-outlined mr-1 pt-1">
                location_on
              </span>
              <Link href="https://g.co/kgs/pkVZCCb">
                Firhill Sports Complex, G20 7HH
              </Link>
            </div>
            <div className="flex whitespace-nowrap">
              <span className="material-symbols-outlined mr-1 pt-1">
                location_on
              </span>
              <Link href="https://maps.app.goo.gl/nsXgcsAQ6jiSkzaVA">
                Glasgow Club Kelvinhall, G3 8AW
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile / narrow contact row */}
        <div
          id="mobile-footer"
          className="flex justify-between min-[901px]:hidden"
        >
          <div className="flex items-center gap-5">
            <div className="relative h-4 w-4">
              <Link href="https://www.facebook.com/scottishkravmaga/">
                <Image src="/facebook_logo.png" alt="Facebook Logo" fill />
              </Link>
            </div>

            <div className="relative h-4 w-4">
              <Link href="https://www.instagram.com/skmskravmaga/">
                <Image src="/instagram_logo.png" alt="Instagram Logo" fill />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link href="https://g.co/kgs/pkVZCCb" className="flex pr-2">
              <div className="pr-2">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              Firhill
            </Link>

            <Link
              href="https://maps.app.goo.gl/nsXgcsAQ6jiSkzaVA"
              className="flex"
            >
              <div className="pr-2">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              Kelvinhall
            </Link>
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-[#FFFBF2]/80 sm:text-sm">
          Scot Krav Maga Systems Ltd - Copyright © 2011-{copyrightYear}. All
          Rights Reserved.{" "}
          <Link href="/privacy" className="underline hover:text-blue-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
