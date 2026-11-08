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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="SKMS Krav Maga Glasgow"
        subtitle="Self defence classes for all ages"
        description="Learn practical self defence, gain confidence and get fit — beginners welcome at our Glasgow classes."
        link="/trial"
        linkText="Book a Trial Class"
      />
      {/* <div>Banner with WO, Adults, Kids, clickable</div> */}
      <div className="container mx-auto lg:px-9">
        <div className="mx-auto max-w-screen-xl md:py-10">
          <div className="grid h-full w-full gap-5 max-md:p-10 sm:h-[600px] md:grid-cols-2 md:gap-3">
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/Women-only-classes.jpg"
                fill
                alt="Women-only self defence class training Krav Maga in Glasgow"
                className="object-cover"
                priority={true}
              />
              <Link href="/womens-self-defence-classes" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Women Only Self Defence
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/adult-krav-maga.jpg"
                fill
                alt="Adult beginners Krav Maga class in Glasgow West End"
                className="object-cover"
                priority={true}
              />
              <Link href="/adults-krav-maga" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Adult Krav Maga Classes
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/kids-teens-krav-maga.jpg"
                fill
                alt="Teens Krav Maga self defence class in Glasgow"
                className="object-cover"
                priority={true}
              />
              <Link href="/kids-krav-maga" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Teens Krav Maga
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/corporate-krav-maga.jpg"
                fill
                alt="people facing the camera and smiling"
                className="object-cover"
                priority={true}
              />
              <Link href="/private-corporate-tuition" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Private & Corporate Tuition
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
          </div>
        </div>
        {/* What skills will you learn */}
        <div className="my-6 grid w-full grid-cols-1 max-md:p-10 max-md:px-10 md:gap-6 lg:grid-cols-2">
          <div>
            <div className="text-center text-4xl font-extrabold uppercase">
              <span className="text-[#005EB8]">What skills</span> <br /> will
              you learn?
            </div>
            <div className="mt-5 mb-9 w-1/4 justify-self-center border-2 border-[#005EB8]"></div>
            <div className="mb-14 flex flex-col gap-4 text-center text-lg">
              <div>
                <strong>Krav Maga</strong> is the most effective self defence
                system in the world. First used by the military, it has evolved
                into training civilians can use in everyday life — taught in
                Glasgow at SKMS.{" "}
              </div>
              <div>
                Krav Maga contains no sporting elements; it&apos;s based on real
                life situations. <strong>It works!</strong>
              </div>

              <Link
                href="/trial"
                className="text-md flex w-fit gap-2 self-center rounded-sm bg-[#005EB8] p-4 font-bold text-white uppercase"
              >
                <div>Book a Trial Class Today</div>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="mb-10">
            <ul className="flex flex-col gap-4 text-xl font-bold uppercase">
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>
                Awareness – Know Your Surroundings
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>
                Confidence – Knowledge of Self
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>
                Prevention – De-escalation Techniques
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>Hand to
                Hand – No Nonsense Striking Skills
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>Self
                Defence – Against Single and Multiple Attackers
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>Strength
                – Through High Intensity Training
              </li>
              <li>
                <span className="mr-4 text-3xl text-[#005EB8]">+</span>
                Aggression – Learn how to control & channel your aggression
              </li>
            </ul>
          </div>
        </div>

        {/* <div>Blue banner screenshot</div> */}
      </div>
      <MembershipsGrid />
      <Testimonials />
    </main>
  );
}
