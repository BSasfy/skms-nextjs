export const CONTACT_SUBJECTS = [
  "trial-class",
  "beginners-course",
  "women-only",
  "private-corporate",
  "membership",
  "general-inquiry",
  "other",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const CONTACT_SUBJECT_LABELS: Record<ContactSubject, string> = {
  "trial-class": "Book a Trial Class",
  "beginners-course": "Beginners Course Information",
  "women-only": "Women Only",
  "private-corporate": "Private or Corporate",
  membership: "Membership Information",
  "general-inquiry": "General Inquiry",
  other: "Other",
};

export function isContactSubject(value: string): value is ContactSubject {
  return (CONTACT_SUBJECTS as readonly string[]).includes(value);
}

/** Default subject based on the page the Message Us button sits on. */
export function subjectFromPathname(pathname: string): ContactSubject {
  if (
    pathname.startsWith("/private-corporate-tuition") ||
    pathname.startsWith("/private")
  ) {
    return "private-corporate";
  }
  if (pathname.startsWith("/join")) {
    return "membership";
  }
  if (pathname.startsWith("/trial")) {
    return "trial-class";
  }
  if (pathname.startsWith("/womens-self-defence-classes")) {
    return "women-only";
  }
  if (pathname.startsWith("/timetable")) {
    return "beginners-course";
  }
  if (
    pathname.startsWith("/adults-krav-maga") ||
    pathname.startsWith("/kids-krav-maga") ||
    pathname.startsWith("/classes")
  ) {
    return "trial-class";
  }
  return "general-inquiry";
}
