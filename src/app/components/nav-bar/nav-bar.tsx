"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileNavBar from "./mobile-nav-bar";
import { usePathname } from "next/navigation";

type NavDropdownItem = {
  href: string;
  label: string;
};

function NavDropdown({
  label,
  href,
  items,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  href?: string;
  items: NavDropdownItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const triggerClass = `inline-flex items-center border-b-2 py-7 transition-colors hover:text-red-400 ${
    isOpen ? "border-red-500 text-red-400" : "border-transparent"
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

      <div
        className={`absolute top-full left-1/2 z-50 min-w-56 -translate-x-1/2 transition-opacity duration-150 ease-out ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="border-b border-red-600/20 bg-zinc-950 py-1.5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-2.5 text-sm font-bold whitespace-nowrap text-white transition-colors hover:bg-zinc-900 hover:text-red-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const classesItems: NavDropdownItem[] = [
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
];

const locationsItems: NavDropdownItem[] = [
  {
    href: "/classes/krav-maga-glasgow-west-end/",
    label: "Mixed Adult - Firhill",
  },
  {
    href: "/classes/glasgow-west-end-kelvin-hall/",
    label: "Mixed Adult - Kelvinhall",
  },
  { href: "/womens-self-defence-classes/", label: "Women Only" },
  { href: "/kids-krav-maga/", label: "Teens Krav Maga" },
];

const eventsItems: NavDropdownItem[] = [
  { href: "/womens-self-defence-classes/", label: "Women Only Events" },
  { href: "/timetable/", label: "Beginners Course January 2027" },
];

const trialItems: NavDropdownItem[] = [
  { href: "/trial/", label: "Book a Trial Class" },
  { href: "/timetable/", label: "Timetable and Beginners Courses" },
  { href: "/join/", label: "Membership Prices & Join" },
  { href: "/contact-us/", label: "Contact Us" },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<
    "classes" | "locations" | "events" | "trial" | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);
  const headerRef = useRef<HTMLElement>(null);

  const pathName = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathName]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;

    // Freeze scroll in place. Avoid body position:fixed — that pulls a sticky
    // header off-screen. Avoid overflow:hidden alone — that jumps iOS to top.
    const preventScroll = (event: TouchEvent | WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-mobile-menu-panel]")) return;
      event.preventDefault();
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  const linkClass =
    "inline-flex items-center border-b-2 border-transparent py-7 transition-colors hover:text-red-400";

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-[100] overflow-visible border-b border-red-600/20 bg-zinc-950 px-8 text-sm font-bold text-white"
      >
        <div className="mx-auto flex min-h-20 max-w-[1400px] items-center gap-10 overflow-visible lg:gap-20 xl:gap-42">
          <Link href="/">
            <Image src="/Logo.png" alt="SKMS Logo" width={100} height={100} />
          </Link>

          <nav className="flex w-full items-center justify-between overflow-visible max-[900px]:hidden">
            <Link href="/" className={linkClass}>
              HOME
            </Link>

            <NavDropdown
              label="CLASSES"
              href="/classes"
              items={classesItems}
              isOpen={openMenu === "classes"}
              onOpen={() => setOpenMenu("classes")}
              onClose={() => setOpenMenu(null)}
            />

            <Link href="/join" className={linkClass}>
              PRICES
            </Link>

            <NavDropdown
              label="LOCATIONS"
              items={locationsItems}
              isOpen={openMenu === "locations"}
              onOpen={() => setOpenMenu("locations")}
              onClose={() => setOpenMenu(null)}
            />

            <NavDropdown
              label="EVENTS"
              items={eventsItems}
              isOpen={openMenu === "events"}
              onOpen={() => setOpenMenu("events")}
              onClose={() => setOpenMenu(null)}
            />

            <NavDropdown
              label="BOOK A TRIAL CLASS"
              href="/trial"
              items={trialItems}
              isOpen={openMenu === "trial"}
              onOpen={() => setOpenMenu("trial")}
              onClose={() => setOpenMenu(null)}
            />

            <Link href="/shop" className={linkClass}>
              SHOP
            </Link>
          </nav>

          {/* flex + justify-end so the hamburger stays right on iOS Safari */}
          <div
            data-testid="mobile-nav-controls"
            className="flex w-full items-center justify-end min-[901px]:hidden"
          >
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-auto flex flex-col items-center justify-center p-4"
            >
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "translate-y-1 rotate-45"
                    : "-translate-y-0.5"
                }`}
              />
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "-translate-y-1 -rotate-45"
                    : "translate-y-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          data-mobile-menu-panel
          className="fixed inset-x-0 bottom-0 z-[90] bg-zinc-950 min-[901px]:hidden"
          style={{ top: headerHeight }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <MobileNavBar />
        </div>
      )}
    </>
  );
}
