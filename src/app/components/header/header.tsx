import Link from "next/link";
import ContactTrigger from "../contact-modal/contact-trigger";

const bannerButtonClassName =
  "rounded-lg bg-[#1C67B1] px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-blue-900";

const messageUsButtonClassName =
  "rounded-lg border-2 border-white bg-white/25 px-8 py-4 text-lg font-bold text-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35),inset_0_1px_8px_rgba(0,0,0,0.3)] [text-shadow:0_1px_3px_rgba(0,0,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-[#062E5F] hover:shadow-none hover:[text-shadow:none]";

export default function HeaderBanner({
  title,
  subtitle,
  description,
  link,
  link2,
  linkText,
  link2Text,
  messageUsText,
  img,
}: {
  title: string;
  subtitle: string;
  description?: string;
  link: string;
  link2?: string;
  linkText: string;
  link2Text?: string;
  messageUsText?: string;
  img?: string;
}) {
  return (
    <section
      className="relative h-50 content-center bg-cover bg-center bg-no-repeat text-gray-50 lg:h-80"
      style={{
        backgroundColor: "rgba(75, 75, 75, 0.7)",
        backgroundImage: `linear-gradient(rgba(6,46,95,0.7), rgba(6,46,95,0.7)), url(${img})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">{title}</h1>
        <h2 className="mb-6 text-2xl font-bold max-lg:hidden lg:text-3xl">
          {subtitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl max-lg:hidden">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
          <Link href={link} className={bannerButtonClassName}>
            {linkText}
          </Link>
          {messageUsText && (
            <ContactTrigger className={messageUsButtonClassName}>
              {messageUsText}
            </ContactTrigger>
          )}
          {link2 && (
            <Link href={link2} className={bannerButtonClassName}>
              {link2Text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
