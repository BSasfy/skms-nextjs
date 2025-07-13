"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNavBar from "./mobile-nav-bar";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isClassesOpen, setIsClassesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);
  return (
    <div className="flex min-h-20 justify-between gap-20 bg-gray-950/90 px-4 text-sm font-bold text-white">
      <Image src="/logo.png" alt="SKMS Logo" width={100} height={100} />

      <div className="flex w-full items-center justify-between overflow-hidden max-[900px]:hidden">
        <Link href="/">HOME</Link>
        <div
          onMouseOver={() => setIsClassesOpen(true)}
          onMouseLeave={() => setIsClassesOpen(false)}
        >
          <Link href="/classes">CLASSES</Link>
          <ul
            className={`${isClassesOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-8 text-gray-900`}
          >
            <div className="-ml-15 bg-[#FAFFFD] p-4">
              <li>
                <Link href="/timetable/">Beginners Krav Maga</Link>
              </li>
              <li>
                <Link href="/adults-krav-maga/">Adults Krav Maga</Link>
              </li>
              <li>
                <Link href="/womens-self-defence-classes/">
                  Women&apos;s Self Defence Glasgow
                </Link>
              </li>
              <li>
                <Link href="/kids-krav-maga/">Kids & Teens</Link>
              </li>
              <li>
                <Link href="/private-corporate-tuition/">
                  Private & Corporate Tuition
                </Link>
              </li>
              <li>
                <Link href="/join/">Membership Prices</Link>
              </li>
            </div>
          </ul>
        </div>

        <Link href="/join">PRICES</Link>
        <div
          onMouseOver={() => setIsLocationsOpen(true)}
          onMouseLeave={() => setIsLocationsOpen(false)}
        >
          <div className="cursor-pointer">LOCATIONS</div>
          <ul
            className={`${isLocationsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-8 text-gray-900`}
          >
            <div className="-ml-15 bg-[#FAFFFD] p-4">
              <li>
                <Link href="/timetable/">Mixed Adult - Firhill</Link>
              </li>
              <li>
                <Link href="/classes/krav-maga-glasgow-west-end/">
                  Mixed Adult - Kelvinhall
                </Link>
              </li>
              <li>
                <Link href="/classes/glasgow-west-end-kelvin-hall/">
                  Women Only - Kelvinhall
                </Link>
              </li>
              <li>
                <Link href="/kids-krav-maga/">Kids & Teens</Link>
              </li>
            </div>
          </ul>
        </div>
        <div
          onMouseOver={() => setIsEventsOpen(true)}
          onMouseLeave={() => setIsEventsOpen(false)}
        >
          <div className="cursor-pointer">EVENTS</div>

          <ul
            className={`${isEventsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-8 text-gray-900`}
          >
            <div className="-ml-15 bg-[#FAFFFD] p-4">
              <li>
                <Link href="/womens-self-defence-classes/">
                  Women Only Course - Kelvinhall
                </Link>
              </li>
              <li>
                <Link href="/timetable/">Beginners Course March 2025</Link>
              </li>
              <li>
                <Link href="/students/">UoG Student Classes</Link>
              </li>
            </div>
          </ul>
        </div>
        <div
          onMouseOver={() => setIsAboutUsOpen(true)}
          onMouseLeave={() => setIsAboutUsOpen(false)}
        >
          <Link href="/about-krav-maga/">ABOUT US</Link>
          <ul
            className={`${isAboutUsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-8 text-gray-900`}
          >
            <div className="-ml-15 bg-[#FAFFFD] p-4">
              <li>
                <Link href="/about-krav-maga/">About Krav Maga & SKMS</Link>
              </li>
              <li>
                <Link href="/instructors/">SKMS Instructors</Link>
              </li>
              <li>
                <Link href="/testimonials/">Student Testimonials</Link>
              </li>
              <li>
                <Link href="/gallery/">Gallery</Link>
              </li>
            </div>
          </ul>
        </div>
        <div
          onMouseOver={() => setIsTrialOpen(true)}
          onMouseLeave={() => setIsTrialOpen(false)}
        >
          <Link href="/trial">BOOK A TRIAL CLASS</Link>
          <ul
            className={`${isTrialOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-8 text-gray-900`}
          >
            <div className="-ml-15 bg-[#FAFFFD] p-4">
              <li>
                <Link href="/trial/">Book a Trial Class</Link>
              </li>
              <li>
                <Link href="/timetable/">Timeable and Beginners Courses</Link>
              </li>
              <li>
                <Link href="/join/">Membership Prices & Join</Link>
              </li>

              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
            </div>
          </ul>
        </div>
        <Link href="/shop">SHOP</Link>
      </div>
      {/* mobile nav bar */}
      <div className="w-full content-center min-[901px]:hidden">
        <div
          data-mobilenavbar={isMobileMenuOpen}
          className="h-87vh absolute bottom-0 z-10 w-full p-0 data-[mobilenavbar=false]:hidden"
        >
          <MobileNavBar />
        </div>
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="flex flex-col items-center justify-center justify-self-end p-4"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}
