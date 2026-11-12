import Link from "next/link";
import type { ReactNode } from "react";
import ContactTrigger from "../contact-modal/contact-trigger";
import type { ContactSubject } from "../contact-modal/contact-subjects";

const ctaClassName =
  "r flex w-fit gap-2 self-center rounded-sm bg-[#005EB8] px-8 py-3 text-sm font-bold text-white uppercase";

export default function MembershipTile({
  title,
  schedule,
  price,
  benefits,
  link,
  linkText = "Sign up",
  contactSubject,
}: {
  title: string;
  schedule?: ReactNode;
  price: string;
  benefits: string[];
  link?: string;
  linkText?: string;
  contactSubject?: ContactSubject;
}) {
  return (
    <div className="flex h-full max-w-[408px] min-w-[307px] flex-1 flex-col bg-gray-100 px-8 py-12 text-center">
      <div className="mb-3 flex flex-col text-lg">
        <div className="font-extrabold uppercase">{title}</div>
        {schedule && (
          <div className="text-md font-extrabold text-gray-800">{schedule}</div>
        )}
      </div>

      <div className="mb-6 text-4xl font-extrabold text-[#005EB8]">{price}</div>

      <ul className="mb-10 flex flex-col gap-2.5 pl-4 text-left">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex flex-row gap-2">
            <span className="material-symbols-outlined">check</span>
            <div>{benefit}</div>
          </li>
        ))}
      </ul>
      {contactSubject ? (
        <ContactTrigger
          className={`${ctaClassName} mt-auto`}
          subject={contactSubject}
        >
          <div className="content-center">{linkText}</div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </ContactTrigger>
      ) : (
        <Link href={link!} className={`${ctaClassName} mt-auto`}>
          <div className="content-center">{linkText}</div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
