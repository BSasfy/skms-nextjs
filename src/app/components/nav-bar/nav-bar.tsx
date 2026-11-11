"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import MobileNavBar from "./mobile-nav-bar";
import { usePathname } from "next/navigation";

type DropdownItem = {
  href: string;
  label: ReactNode;
};

function DesktopDropdown({
  open,
  items,
  onNavigate,
}: {
  open: boolean;
  items: DropdownItem[];
  onNavigate: () => void;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 z-50 min-w-52 -translate-x-1/2 pt-0 transition-opacity duration-150 ease-out ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <ul className="border-b border-white/10 bg-gray-950 py-1.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-gray-100 transition-colors hover:bg-gray-900 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesktopMenuItem({
  label,
  href,
  open,
  onOpen,
  onClose,
  items,
}: {
  label: string;
  href?: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  items: DropdownItem[];
}) {
  const triggerClass = `inline-flex items-center gap-1 border-b-2 py-6 transition-colors hover:text-blue-200 ${
    open ? "border-blue-500 text-blue-200" : "border-transparent"
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
    >
      {href ? (
        <Link href={href} className={triggerClass}>
          {label}
        </Link>
      ) : (
        <button type="button" className={triggerClass}>
          {label}
        </button>
      )}
      <DesktopDropdown open={open} items={items} onNavigate={onClose} />
    </div>
  );
}

export default function NavBar() {
  const [isClassesOpen, setIsClassesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathName = usePathname();

  const closeDesktopMenus = () => {
    setIsClassesOpen(false);
    setIsLocationsOpen(false);
    setIsEventsOpen(false);
    setIsTrialOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    closeDesktopMenus();
  }, [pathName]);

  useEffect(() => {
    const onScroll = () => closeDesktopMenus();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const html = document.documentElement;
    const { body } = document;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative z-50 min-h-20 content-center justify-between bg-gray-950 px-8 text-sm font-bold text-white">
      <div className="mx-auto flex max-w-[1400px] gap-10 lg:gap-20 xl:gap-42">
        <Link href={"/"}>
          <Image src="/Logo.png" alt="SKMS Logo" width={100} height={100} />
        </Link>

        <div className="flex w-full items-center justify-between max-[900px]:hidden">
          <Link href="/" className="py-6 transition-colors hover:text-blue-200">
            HOME
          </Link>

          <DesktopMenuItem
            label="CLASSES"
            href="/classes"
            open={isClassesOpen}
            onOpen={() => setIsClassesOpen(true)}
            onClose={() => setIsClassesOpen(false)}
            items={[
              { href: "/timetable/", label: "Beginners Krav Maga" },
              { href: "/adults-krav-maga/", label: "Adults Krav Maga" },
              {
                href: "/womens-self-defence-classes/",
                label: "Women's Self Defence",
              },
              { href: "/kids-krav-maga/", label: "Teens Krav Maga" },
              {
                href: "/private-corporate-tuition/",
                label: "Private & Corporate Tuition",
              },
              { href: "/join/", label: "Membership Prices" },
            ]}
          />

          <Link
            href="/join"
            className="py-6 transition-colors hover:text-blue-200"
          >
            PRICES
          </Link>

          <DesktopMenuItem
            label="LOCATIONS"
            open={isLocationsOpen}
            onOpen={() => setIsLocationsOpen(true)}
            onClose={() => setIsLocationsOpen(false)}
            items={[
              {
                href: "/classes/krav-maga-glasgow-west-end/",
                label: "Mixed Adult - Firhill",
              },
              {
                href: "/classes/glasgow-west-end-kelvin-hall/",
                label: "Mixed Adult - Kelvinhall",
              },
              {
                href: "/womens-self-defence-classes/",
                label: "Women Only",
              },
              { href: "/kids-krav-maga/", label: "Teens Krav Maga" },
            ]}
          />

          <DesktopMenuItem
            label="EVENTS"
            open={isEventsOpen}
            onOpen={() => setIsEventsOpen(true)}
            onClose={() => setIsEventsOpen(false)}
            items={[
              {
                href: "/womens-self-defence-classes/",
                label: "Women Only Events",
              },
              {
                href: "/timetable/",
                label: "Beginners Course January 2027",
              },
            ]}
          />

          <DesktopMenuItem
            label="BOOK A TRIAL CLASS"
            href="/trial"
            open={isTrialOpen}
            onOpen={() => setIsTrialOpen(true)}
            onClose={() => setIsTrialOpen(false)}
            items={[
              { href: "/trial/", label: "Book a Trial Class" },
              {
                href: "/timetable/",
                label: "Timetable and Beginners Courses",
              },
              { href: "/join/", label: "Membership Prices & Join" },
              { href: "/contact-us/", label: "Contact Us" },
            ]}
          />

          <Link
            href="/shop"
            className="py-6 transition-colors hover:text-blue-200"
          >
            SHOP
          </Link>
        </div>

        {/* mobile nav bar — flex + justify-end so the hamburger stays right on iOS Safari */}
        <div
          data-testid="mobile-nav-controls"
          className="flex w-full items-center justify-end min-[901px]:hidden"
        >
          <div
            data-mobilenavbar={isMobileMenuOpen}
            className="h-87vh absolute bottom-0 z-10 w-full p-0 data-[mobilenavbar=false]:hidden"
          >
            <MobileNavBar />
          </div>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="ml-auto flex flex-col items-center justify-center p-4"
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
