import Link from "next/link";
import { type Metadata } from "next";
import Header from "./components/header/header";
import Image from "next/image";
import MembershipsGrid from "./components/memberships/memberships-grid";
import Testimonials from "./components/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Krav Maga Glasgow | Self Defence Classes",
  description:
    "Krav Maga Glasgow with SKMS — self defence classes for adults and teens at Firhill and Kelvinhall. Women-only beginners courses, trials from £10.",
  alternates: {
    canonical: "https://scotkravmaga.co.uk",
  },
  openGraph: {
    title: "Krav Maga Glasgow | SKMS Self Defence Classes",
    description:
      "Beginners-friendly Krav Maga and self defence classes in Glasgow’s West End. Women-only, teen and adult classes.",
    url: "https://scotkravmaga.co.uk",
  },
};

const classTiles = [
  {
    href: "/womens-self-defence-classes",
    src: "/Women-only-classes.jpg",
    alt: "Women-only self defence class training Krav Maga in Glasgow",
    title: "Women Only Self Defence",
  },
  {
    href: "/adults-krav-maga",
    src: "/adult-krav-maga.jpg",
    alt: "Adult beginners Krav Maga class in Glasgow West End",
    title: "Adult Krav Maga Classes",
  },
  {
    href: "/kids-krav-maga",
    src: "/kids-teens-krav-maga.jpg",
    alt: "Teens Krav Maga self defence class in Glasgow",
    title: "Teens Krav Maga",
  },
  {
    href: "/private-corporate-tuition",
    src: "/corporate-krav-maga.jpg",
    alt: "people facing the camera and smiling",
    title: "Private & Corporate Tuition",
  },
];

const skills = [
  "Awareness – Know Your Surroundings",
  "Confidence – Knowledge of Self",
  "Prevention – De-escalation Techniques",
  "Hand to Hand – No Nonsense Striking Skills",
  "Self Defence – Against Single and Multiple Attackers",
  "Strength – Through High Intensity Training",
  "Aggression – Learn how to control & channel your aggression",
];

export default function HomePage() {
  return (
    <main className="skms-page">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="SKMS Krav Maga Glasgow"
        subtitle="Self defence classes for all ages"
        description="Learn practical self defence, gain confidence and get fit — beginners welcome at our Glasgow classes."
        link="/trial"
        linkText="Book a Trial Class"
      />

      <div className="container mx-auto lg:px-9">
        <div className="mx-auto max-w-screen-xl md:py-10">
          <div className="grid h-full w-full gap-4 max-md:p-10 sm:h-[600px] md:grid-cols-2 md:gap-3">
            {classTiles.map((tile) => (
              <div
                key={tile.href}
                className="group relative content-center overflow-hidden text-center text-[#FFFBF2]"
              >
                <Image
                  src={tile.src}
                  fill
                  alt={tile.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors group-hover:from-red-950/80" />
                <Link href={tile.href} className="relative z-10 block">
                  <div className="p-4 text-4xl font-black drop-shadow-2xl">
                    {tile.title}
                  </div>
                  <div className="mx-auto w-1/3 border-2 border-red-500 transition-all group-hover:w-1/2" />
                  <div className="mt-2 text-xl font-bold tracking-wide uppercase">
                    View More
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 grid w-full grid-cols-1 max-md:p-10 max-md:px-10 md:gap-6 lg:grid-cols-2">
          <div>
            <p className="skms-section-label text-center">What You&apos;ll Learn</p>
            <div className="text-center text-4xl font-black text-white uppercase">
              What Skills <br />
              <span className="text-red-500">Will You Learn?</span>
            </div>
            <div className="mx-auto mt-5 mb-9 h-0.5 w-20 bg-red-500" />
            <div className="mb-14 flex flex-col gap-4 text-center text-lg text-zinc-400">
              <div>
                <strong className="text-white">Krav Maga</strong> is the most
                effective self defence system in the world. First used by the
                military, it has evolved into training civilians can use in
                everyday life — taught in Glasgow at SKMS.{" "}
              </div>
              <div>
                Krav Maga contains no sporting elements; it&apos;s based on real
                life situations. <strong className="text-white">It works!</strong>
              </div>

              <Link href="/trial" className="skms-btn self-center">
                Book a Trial Class Today
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="mb-10">
            <ul className="flex flex-col gap-4 text-xl font-bold text-zinc-300 uppercase">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="mr-4 text-3xl text-red-500">+</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <MembershipsGrid />
      <Testimonials />
    </main>
  );
}
