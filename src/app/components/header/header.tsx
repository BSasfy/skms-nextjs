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
        backgroundColor: "rgba(9, 9, 11, 0.9)",
        backgroundImage: `linear-gradient(rgba(9,9,11,0.75), rgba(127,29,29,0.55)), url(${img})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black tracking-wide uppercase lg:mb-6 lg:text-6xl">
          {title}
        </h1>
        <h2 className="mb-4 text-xl font-bold text-red-200 max-lg:hidden lg:mb-6 lg:text-2xl">
          {subtitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 max-lg:hidden lg:text-xl">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-10">
          <Link href={link} className="skms-btn">
            {linkText}
          </Link>
          {link2 && (
            <Link href={link2} className="skms-btn-outline border-white/30 text-white hover:border-white hover:bg-white/10">
              {link2Text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
