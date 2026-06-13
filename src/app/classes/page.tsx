import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Testimonials from "../components/testimonials/testimonials";

const classTiles = [
  {
    href: "/womens-self-defence-classes",
    src: "/Women-only-classes.jpg",
    alt: "a woman hitting another woman in the jaw with her palm",
    title: "Women Only Classes",
  },
  {
    href: "/adults-krav-maga",
    src: "/adult-krav-maga.jpg",
    alt: "man punching a pad that another man is holding",
    title: "Adults Krav Maga",
  },
  {
    href: "/kids-krav-maga",
    src: "/kids-teens-krav-maga.jpg",
    alt: "young kids facing the camera with their fists up",
    title: "Kids Krav Maga",
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
        title="Welcome to SKMS"
        subtitle="Krav Maga in Glasgow for all ages and abilities"
        description="Learn life changing skills, gain confidence and get in shape all at the same time!"
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
