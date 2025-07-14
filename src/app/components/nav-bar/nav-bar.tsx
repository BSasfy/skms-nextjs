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
    <div className="min-h-20 content-center justify-between bg-gray-950/90 px-8 text-sm font-bold text-white">
      <div className="mx-auto flex max-w-[1400px] gap-10 lg:gap-20 xl:gap-42">
        <Link href={"/"}>
          <Image src="/logo.png" alt="SKMS Logo" width={100} height={100} />
        </Link>

        <div className="flex w-full items-center justify-between overflow-hidden max-[900px]:hidden">
          <Link href="/">HOME</Link>
          <div
            onMouseOver={() => setIsClassesOpen(true)}
            onMouseLeave={() => setIsClassesOpen(false)}
          >
            <Link href="/classes">CLASSES</Link>
            <ul
              className={`${isClassesOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-7 text-gray-100 xl:text-lg`}
            >
              <div className="-ml-15 bg-gray-900 p-4">
                <li className="hover:text-blue-800">
                  <Link
                    href="/timetable/"
                    onClick={() => setIsClassesOpen(false)}
                  >
                    Beginners Krav Maga
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/adults-krav-maga/"
                    onClick={() => setIsClassesOpen(false)}
                  >
                    Adults Krav Maga
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/womens-self-defence-classes/"
                    onClick={() => setIsClassesOpen(false)}
                  >
                    Women&apos;s Self Defence Glasgow
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/kids-krav-maga/"
                    onClick={() => setIsClassesOpen(false)}
                  >
                    Kids & Teens
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/private-corporate-tuition/"
                    onClick={() => setIsClassesOpen(false)}
                  >
                    Private & Corporate Tuition
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link href="/join/" onClick={() => setIsClassesOpen(false)}>
                    Membership Prices
                  </Link>
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
              className={`${isLocationsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-7 text-gray-100 xl:text-lg`}
            >
              <div className="-ml-15 bg-gray-950 p-4">
                <li className="hover:text-blue-800">
                  <Link
                    href="/classes/krav-maga-glasgow-west-end/"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    Mixed Adult - Firhill
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/classes/glasgow-west-end-kelvin-hall/"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    Mixed Adult - Kelvinhall
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/classes/womens-self-defence-classes/"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    Women Only - Kelvinhall
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/kids-krav-maga/"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    Kids & Teens
                  </Link>
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
              className={`${isEventsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-7 text-gray-100 xl:text-lg`}
            >
              <div className="-ml-15 bg-gray-950 p-4">
                <li className="hover:text-blue-800">
                  <Link
                    href="/womens-self-defence-classes/"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Women Only Course - Kelvinhall
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/timetable/"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Beginners Course March 2025
                  </Link>
                </li>
                {/* <li className="hover:text-blue-800">
          <Link href="/students/" onClick={() => setIsEventsOpen(false)}>
            UoG Student Classes
          </Link>
        </li> */}
              </div>
            </ul>
          </div>
          {/* <div
            onMouseOver={() => setIsAboutUsOpen(true)}
            onMouseLeave={() => setIsAboutUsOpen(false)}
          >
            <Link
              href="/about-krav-maga/"
              onClick={() => setIsAboutUsOpen(false)}
            >
              ABOUT US
            </Link>
            <ul
              className={`${isAboutUsOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-7 text-gray-100 xl:text-lg`}
            >
              <div className="-ml-15 bg-gray-950 p-4">
                <li className="hover:text-blue-800">
                  <Link
                    href="/about-krav-maga/"
                    onClick={() => setIsAboutUsOpen(false)}
                  >
                    About Krav Maga & SKMS
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/instructors/"
                    onClick={() => setIsAboutUsOpen(false)}
                  >
                    SKMS Instructors
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/testimonials/"
                    onClick={() => setIsAboutUsOpen(false)}
                  >
                    Student Testimonials
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/gallery/"
                    onClick={() => setIsAboutUsOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
              </div>
            </ul>
          </div> */}
          <div
            onMouseOver={() => setIsTrialOpen(true)}
            onMouseLeave={() => setIsTrialOpen(false)}
          >
            <Link href="/trial">BOOK A TRIAL CLASS</Link>
            <ul
              className={`${isTrialOpen ? "block" : "hidden"} text-md absolute z-50 rounded-md p-7 text-gray-100 xl:text-lg`}
            >
              <div className="-ml-15 bg-gray-950 p-4">
                <li className="hover:text-blue-800">
                  <Link href="/trial/" onClick={() => setIsTrialOpen(false)}>
                    Book a Trial Class
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link
                    href="/timetable/"
                    onClick={() => setIsTrialOpen(false)}
                  >
                    Timeable and Beginners Courses
                  </Link>
                </li>
                <li className="hover:text-blue-800">
                  <Link href="/join/" onClick={() => setIsTrialOpen(false)}>
                    Membership Prices & Join
                  </Link>
                </li>

                <li className="hover:text-blue-800">
                  <Link
                    href="/contact-us/"
                    onClick={() => setIsTrialOpen(false)}
                  >
                    Contact Us
                  </Link>
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
                isMobileMenuOpen
                  ? "translate-y-1 rotate-45"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "-translate-y-1 -rotate-45"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
