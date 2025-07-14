import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-300 bg-[#181818]">
      {/* Desktop Footer */}
      <div
        id="desktop-footer"
        className="mx-auto flex w-full max-w-screen-xl flex-col justify-between gap-4 px-4 py-2 text-[#FFFBF2] max-md:hidden max-md:items-center md:flex-row"
      >
        <span className="text-md flex w-1/3 flex-col justify-center justify-items-center gap-2 font-medium md:justify-items-start">
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
        </span>
        <div className="w-1/3 content-center justify-items-center">
          <div className="flex gap-4">
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
        </div>
        <div className="w-1/3 justify-items-center max-md:text-center md:justify-items-end">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <span className="material-symbols-outlined mr-1 pt-1">
                location_on
              </span>
              <Link href="https://g.co/kgs/pkVZCCb">
                Firhill Sports Complex, G20 7HH
              </Link>
            </div>
            <div className="flex">
              <span className="material-symbols-outlined mr-1 pt-1">
                location_on
              </span>
              <Link href="https://maps.app.goo.gl/nsXgcsAQ6jiSkzaVA">
                Glasgow Club Kelvinhall, G3 8AW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div
        id="mobile-footer"
        className="mx-4 flex justify-between text-[#FFFBF2] md:hidden"
      >
        <div className="flex items-center gap-5">
          {/* <div className="relative">
            <Link href="tel:+4407512027411">
              <div className="">
                <span className="material-symbols-outlined">call</span>
              </div>
            </Link>
          </div> */}

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

        <div className="mx-auto flex gap-4 pt-1 pl-[10%]"></div>

        <div className="right-0 flex items-center pt-1">
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
    </footer>
  );
}
