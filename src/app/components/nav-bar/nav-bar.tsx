"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setMenuPos({ top: rect.bottom + 4, left: rect.left });
  };

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  const handleEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    updatePosition();
    onOpen();
  };

  const handleLeave = () => {
    closeTimerRef.current = setTimeout(onClose, 120);
  };

  const menu =
    isOpen &&
    typeof document !== "undefined" &&
    createPortal(
      <ul
        className="fixed z-[9999] min-w-56 rounded-md border border-zinc-700 bg-zinc-900 p-4 shadow-2xl"
        style={{ top: menuPos.top, left: menuPos.left }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {items.map((item) => (
          <li key={item.href} className="py-1 hover:text-red-500">
            <Link href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>,
      document.body,
    );

  return (
    <div
      ref={triggerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {href ? (
        <Link href={href}>{label}</Link>
      ) : (
        <span className="cursor-pointer">{label}</span>
      )}
      {menu}
    </div>
  );
}

const classesItems: NavDropdownItem[] = [
  { href: "/timetable/", label: "Beginners Krav Maga" },
  { href: "/adults-krav-maga/", label: "Adults Krav Maga" },
  {
    href: "/womens-self-defence-classes/",
    label: "Women's Self Defence Glasgow",
  },
  { href: "/kids-krav-maga/", label: "Kids & Teens" },
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
  { href: "/kids-krav-maga/", label: "Kids & Teens" },
];

const eventsItems: NavDropdownItem[] = [
  { href: "/womens-self-defence-classes/", label: "Women Only Events" },
  { href: "/timetable/", label: "Beginners Course January 2026" },
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

  const pathName = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathName]);

  return (
    <header className="sticky top-0 z-[100] overflow-visible border-b border-red-600/20 bg-zinc-950 px-8 text-sm font-bold text-white">
      <div className="mx-auto flex min-h-20 max-w-[1400px] items-center gap-10 overflow-visible lg:gap-20 xl:gap-42">
        <Link href="/">
          <Image src="/Logo.png" alt="SKMS Logo" width={100} height={100} />
        </Link>

        <nav className="flex w-full items-center justify-between overflow-visible max-[900px]:hidden">
          <Link href="/">HOME</Link>

          <NavDropdown
            label="CLASSES"
            href="/classes"
            items={classesItems}
            isOpen={openMenu === "classes"}
            onOpen={() => setOpenMenu("classes")}
            onClose={() => setOpenMenu(null)}
          />

          <Link href="/join">PRICES</Link>

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

          <Link href="/shop">SHOP</Link>
        </nav>

        <div className="relative w-full content-center min-[901px]:hidden">
          <div
            data-mobilenavbar={isMobileMenuOpen}
            className="fixed inset-x-0 top-20 z-[9999] h-[calc(100vh-5rem)] data-[mobilenavbar=false]:hidden"
          >
            <MobileNavBar />
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col items-center justify-center justify-self-end p-4"
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
  );
}
