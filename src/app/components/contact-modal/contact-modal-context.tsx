"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ContactSubject } from "./contact-subjects";

type ContactModalContextValue = {
  isOpen: boolean;
  defaultSubject: ContactSubject;
  openContactModal: (subject?: ContactSubject) => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSubject, setDefaultSubject] =
    useState<ContactSubject>("general-inquiry");

  const openContactModal = useCallback((subject?: ContactSubject) => {
    setDefaultSubject(subject ?? "general-inquiry");
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, defaultSubject, openContactModal, closeContactModal }),
    [isOpen, defaultSubject, openContactModal, closeContactModal],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
