import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import Header from "../components/header/header";
import Testimonials from "../components/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Krav Maga Classes Glasgow",
  description:
    "Browse SKMS Krav Maga classes in Glasgow — women-only self defence, adult beginners classes, teens, and private tuition.",
  alternates: {
    canonical: "https://scotkravmaga.co.uk/classes",
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

export default function ClassesPage() {
  return (
    <main className="skms-page">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="Krav Maga Classes Glasgow"
        subtitle="Self defence for adults and teens"
        description="Women-only courses, adult Krav Maga, and teens — beginners welcome at Firhill and Kelvinhall."
        link="/trial"
        linkText="Book a Trial Class"
      />
      <div className="container mx-auto lg:px-9">
        <div className="mx-auto max-w-screen-xl md:py-10">
          <div className="grid h-[600px] w-full gap-4 max-md:p-10 md:grid-cols-2 md:gap-3">
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

        <Testimonials />
      </div>
    </main>
  );
}
