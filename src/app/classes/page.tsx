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

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="Krav Maga Classes Glasgow"
        subtitle="Self defence for adults and teens"
        description="Women-only courses, adult Krav Maga, and teens — beginners welcome at Firhill and Kelvinhall."
        link="/trial"
        linkText="Book a Trial Class"
      />
      {/* <div>Banner with WO, Adults, Kids, clickable</div> */}
      <div className="container mx-auto lg:px-9">
        <div className="mx-auto max-w-screen-xl md:py-10">
          <div className="grid h-[600px] w-full gap-5 max-md:p-10 md:grid-cols-2 md:gap-3">
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
                src="/Teens.jpg"
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

        <Testimonials />
      </div>
    </main>
  );
}
