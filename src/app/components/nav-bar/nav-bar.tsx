"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute flex min-h-24 w-full justify-center bg-[#171D29]/75 text-lg font-bold text-white">
      <div className="flex w-full max-w-7xl justify-between px-4">
        <Image src="/logo.png" alt="SKMS Logo" width={100} height={100} />

        <div className="flex items-center gap-10">
          <Link href="/">HOME</Link>
          <div
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link href="/classes">CLASSES</Link>
            <ul className={`${isOpen ? "block" : "hidden"} absolute pt-10`}>
              <li>
                <Link href="/timetable/">Beginners Krav Maga</Link>
              </li>
              <li>
                <Link href="/adults-krav-maga/">Adults Krav Maga</Link>
              </li>
              <li>
                <Link href="/womens-self-defence-classes/">
                  Women's Self Defence Glasgow
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
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="cursor-pointer">LOCATIONS</div>
            <ul className={`${isOpen ? "block" : "hidden"} absolute pt-10`}>
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
          <div className="cursor-pointer">EVENTS</div>
          <Link href="/about-krav-maga">ABOUT US</Link>
          <Link href="/trial">BOOK A TRIAL CLASS</Link>
          <Link href="/shop">SHOP</Link>
        </div>
      </div>
    </div>
  );
}
