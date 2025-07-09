"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isClassesOpen, setIsClassesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <div className="flex min-h-24 w-full justify-center bg-[#171D29]/75 text-lg font-bold text-white">
      <div className="flex w-full max-w-7xl justify-between px-4">
        <Image src="/logo.png" alt="SKMS Logo" width={100} height={100} />

        <div className="flex items-center gap-10">
          <Link href="/">HOME</Link>
          <div
            onMouseOver={() => setIsClassesOpen(true)}
            onMouseLeave={() => setIsClassesOpen(false)}
          >
            <Link href="/classes">CLASSES</Link>
            <ul
              className={`${isClassesOpen ? "block" : "hidden"} text-md absolute rounded-md p-8 text-gray-900`}
            >
              <li className="bg-white px-4">
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
            </ul>
          </div>

          <Link href="/join">PRICES</Link>
          <div
            onMouseOver={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
          >
            <div className="cursor-pointer">LOCATIONS</div>
            <ul
              className={`${isLocationsOpen ? "block" : "hidden"} text-md absolute mt-5 -ml-10 rounded-md bg-white px-8 py-5 text-gray-900`}
            >
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
            </ul>
          </div>
          <div
            onMouseOver={() => setIsEventsOpen(true)}
            onMouseLeave={() => setIsEventsOpen(false)}
          >
            <div className="cursor-pointer">EVENTS</div>

            <ul
              className={`${isEventsOpen ? "block" : "hidden"} text-md absolute mt-5 -ml-10 rounded-md bg-white px-8 py-5 text-gray-900`}
            >
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
            </ul>
          </div>
          <div
            onMouseOver={() => setIsAboutUsOpen(true)}
            onMouseLeave={() => setIsAboutUsOpen(false)}
          >
            <Link href="/about-krav-maga/">ABOUT US</Link>
            <ul
              className={`${isAboutUsOpen ? "block" : "hidden"} text-md absolute mt-5 -ml-10 rounded-md bg-white px-8 py-5 text-gray-900`}
            >
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
            </ul>
          </div>
          <div
            onMouseOver={() => setIsTrialOpen(true)}
            onMouseLeave={() => setIsTrialOpen(false)}
          >
            <Link href="/trial">BOOK A TRIAL CLASS</Link>
            <ul
              className={`${isTrialOpen ? "block" : "hidden"} text-md absolute mt-5 -ml-10 rounded-md bg-white px-8 py-5 text-gray-900`}
            >
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
            </ul>
          </div>
          <Link href="/shop">SHOP</Link>
        </div>
      </div>
    </div>
  );
}
