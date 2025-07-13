import Link from "next/link";

export default function HeaderBanner({
  title,
  subtitle,
  description,
  link,
  link2,
  linkText,
  link2Text,
  img,
}: {
  title: string;
  subtitle: string;
  description?: string;
  link: string;
  link2?: string;
  linkText: string;
  link2Text?: string;
  img?: string;
}) {
  return (
    <section
      className="relative h-50 content-center bg-cover bg-center bg-no-repeat text-gray-50 lg:h-80"
      style={{
        backgroundColor: "rgba(75, 75, 75, 0.7)",
        backgroundImage: `linear-gradient(rgba(6,46,95,0.9), rgba(6,46,95,0.9)), url(${img})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
        <h2 className="mb-6 text-2xl font-bold max-lg:hidden md:text-3xl">
          {subtitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl max-lg:hidden">
          {description}
        </p>
        <div className="flex justify-center gap-10">
          <Link
            href={link}
            className="rounded-lg bg-[#1C67B1] px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-blue-900"
          >
            {linkText}
          </Link>
          {link2 && (
            <Link
              href={link2}
              className="rounded-lg bg-[#1C67B1] px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-blue-900"
            >
              {link2Text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
