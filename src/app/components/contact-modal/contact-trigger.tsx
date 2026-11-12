"use client";

import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { useContactModal } from "./contact-modal-context";
import {
  subjectFromPathname,
  type ContactSubject,
} from "./contact-subjects";

export default function ContactTrigger({
  children,
  className,
  subject,
  ...props
}: {
  children: ReactNode;
  className?: string;
  /** Overrides the path-based default subject. */
  subject?: ContactSubject;
} & Omit<
  ComponentProps<"button">,
  "type" | "onClick" | "children" | "className"
>) {
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        openContactModal(subject ?? subjectFromPathname(pathname))
      }
      {...props}
    >
      {children}
    </button>
  );
}
