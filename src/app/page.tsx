import Link from "next/link";
import Header from "./components/header/header";
import Image from "next/image";
import MembershipsGrid from "./components/memberships/memberships-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="Welcome to SKMS"
        subtitle="Krav Maga in Glasgow for all ages and abilities"
        description="Learn life changing skills, gain confidence and get in shape all at the same time!"
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
                alt="a woman hitting another woman in the jaw with her palm"
                className="object-cover"
                priority={true}
              />
              <Link href="/womens-self-defence-classes" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Women Only Classes
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/adult-krav-maga.jpg"
                fill
                alt="man punching a pad that another man is holding"
                className="object-cover"
                priority={true}
              />
              <Link href="/adults-krav-maga" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Adults Krav Maga
                </div>
                <div className="w-1/3 justify-self-center border-2"></div>
                <div className="text-xl font-normal">View More</div>
              </Link>
            </div>
            <div className="relative content-center text-center text-[#FFFBF2]">
              <Image
                src="/kids-teens-krav-maga.jpg"
                fill
                alt="young kids facing the camera with their fists up"
                className="object-cover"
                priority={true}
              />
              <Link href="/kids-krav-maga" className="relative">
                <div className="p-4 text-4xl font-bold drop-shadow-2xl">
                  Kids Krav Maga
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
        <div className="flex flex-col lg:flex-row">
          <div>
            <div>
              What skills <br /> will you learn?
            </div>
            <div className="w-1/3 justify-self-center border-2 border-blue-700"></div>
            <div className="flex flex-col gap-4">
              <div>
                <strong>Krav Maga</strong> is the most effective self-defence
                system in the world. Krav Maga was first used by the military
                but has evolved into a system that can be used by civilians in
                their everyday lives.{" "}
              </div>
              <div>
                Krav Maga contains no sporting elements; its based on real life
                situations. <strong>It works!</strong>
              </div>
            </div>
            <div>
              <Link
                href="/trial"
                className="rounded-sm bg-blue-700 p-4 text-lg text-white uppercase"
              >
                Book a Trial Class Today
                <span className="material-symbols-outlined pl-2">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div>
            <ul>
              <li>Awareness – Know Your Surroundings</li>
              <li>Confidence – Knowledge of Self</li>
              <li>Prevention – De-escalation Techniques</li>
              <li>Hand to Hand – No Nonsense Striking Skills</li>
              <li>Self Defence – Against Single and Multiple Attackers</li>
              <li>Strength – Through High Intensity Training</li>
              <li>
                Aggression – Learn how to control & channel your aggression
              </li>
            </ul>
          </div>
        </div>

        <MembershipsGrid />
        <div>Blue banner screenshot</div>
        {/* <div>Testimonials section, screenshot</div> */}
      </div>
    </main>
  );
}
