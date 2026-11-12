"use client";

import type { ComponentProps, ReactNode } from "react";
import { useContactModal } from "./contact-modal-context";

export default function ContactTrigger({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "type" | "onClick" | "children" | "className">) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={className}
      onClick={openContactModal}
      {...props}
    >
      {children}
    </button>
  );
}
