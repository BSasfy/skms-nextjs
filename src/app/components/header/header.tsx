import Link from "next/link";

export default function HeaderBanner({
  title,
  subtitle,
  description,
  link,
  linkText,
}: {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">{subtitle}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">{description}</p>
        <Link
          href={link}
          className="rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-orange-700"
        >
          {linkText}
        </Link>
      </div>
    </section>
  );
}
