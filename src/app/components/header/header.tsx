import Link from "next/link";
import ContactTrigger from "../contact-modal/contact-trigger";

const bannerButtonClassName =
  "inline-flex h-12 items-center justify-center rounded-lg border-2 border-transparent bg-[#1C67B1] px-5 text-base leading-none font-bold text-white transition-colors duration-200 hover:bg-blue-900 sm:h-14 sm:px-8 sm:text-lg";

const messageUsButtonClassName =
  "inline-flex h-12 items-center justify-center rounded-lg border-2 border-white bg-white/25 px-5 text-base leading-none font-bold text-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35),inset_0_1px_8px_rgba(0,0,0,0.3)] [text-shadow:0_1px_3px_rgba(0,0,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-[#062E5F] hover:shadow-none hover:[text-shadow:none] sm:h-14 sm:px-8 sm:text-lg";

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
      className="relative flex h-auto flex-col bg-cover bg-center bg-no-repeat text-gray-50 lg:h-80"
      style={{
        backgroundColor: "rgba(75, 75, 75, 0.7)",
        backgroundImage: `linear-gradient(rgba(6,46,95,0.7), rgba(6,46,95,0.7)), url(${img})`,
      }}
    >
      {/* Desktop: leftover height above title. Mobile: tight top space */}
      <div className="h-5 lg:min-h-0 lg:flex-1" aria-hidden="true" />

      <div className="container mx-auto flex w-full flex-col items-center px-4 text-center">
        <div className="flex flex-col items-center gap-3 lg:gap-4">
          <h1 className="text-4xl font-bold lg:text-6xl">{title}</h1>
          <h2 className="text-2xl font-bold max-lg:hidden lg:text-3xl">
            {subtitle}
          </h2>
          {description ? (
            <p className="mx-auto max-w-2xl text-xl max-lg:hidden">
              {description}
            </p>
          ) : null}
        </div>

        {/* Same spacer above and below the button row */}
        <div className="h-6 w-full sm:h-8" aria-hidden="true" />

        <div className="flex flex-nowrap justify-center gap-3 sm:gap-10">
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

        <div className="h-6 w-full sm:h-8" aria-hidden="true" />
      </div>
    </section>
  );
}
