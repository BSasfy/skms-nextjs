import Link from "next/link";
import HeaderBanner from "../components/header/header";
import ContactBanner from "../components/contact-banner/contact-banner";
import { PRICES } from "../constants/prices";

export default function KidsKravMagaPage() {
  return (
    <main className="skms-page">
      {/* Hero Section */}
      <HeaderBanner
        img="/banners/kids-banner.jpg"
        title="Kids and Teens Krav Maga"
        subtitle={`Weekly classes all year round for £${PRICES.kids}/month!`}
        description="Saturdays, 9-10am, Firhill Sports Complex"
        link="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/kids-and-teens-trial-class"
        linkText="Book a Trial Class"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <section>
          <div className="mx-2 my-10 skms-content-box p-8 lg:mx-12">
            <section className="py-8">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Regular classes all year round:
              </h2>
              <div className="mb-8 grid gap-10 px-4 md:grid-cols-2 lg:gap-20">
                <Link
                  href="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/kids-and-teens-trial-class"
                  className="skms-card text-center shadow-md"
                >
                  <h3 className="mb-1 text-xl font-bold text-red-400">
                    Kids Krav Maga (5-10yo)
                  </h3>

                  <h4 className="text-md mb-4 font-semibold">
                    Saturdays, 9-10am
                  </h4>
                  <p className="text-zinc-500">
                    Age-appropriate self-defense and confidence building for
                    children, learning through games. Focusing on learning the
                    rules of society, how to use their voice, how to be
                    assertive and how to be safe.
                  </p>
                </Link>
                <Link
                  href="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/kids-and-teens-trial-class"
                  className="skms-card text-center shadow-md"
                >
                  <h3 className="mb-4 text-xl font-bold text-red-400">
                    Teens Krav Maga (11-15yo)
                  </h3>
                  <h4 className="text-md mb-4 font-semibold">
                    Saturdays, 9-10am
                  </h4>
                  <p className="text-zinc-500">
                    Preparing for the real world, learning how to stand up for
                    themselves, how to mark their boundaries and how to
                    physically defend themselves, while making friends and
                    improving social skills.
                  </p>
                </Link>
              </div>

              <Link
                href="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/kids-and-teens-trial-class"
                className="mx-auto block w-fit rounded-lg bg-red-700 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-red-600"
              >
                Book Now!
              </Link>
            </section>

            <p className="mb-6 px-4 text-lg">
              The classes focus on health, exercise, self-confidence and of
              course, a whole range of anti-bullying and self-defence techniques
              taught in a fun and engaging format. In addition to the above,
              there&apos;s also a focus on personal and group interactive social
              skills.
            </p>
            <p className="mb-6 px-4 text-lg">
              All kids and teens classes are taught through games and activities
              and are designed to be inclusive to all.
            </p>

            <div className="mb-8 border border-red-600/30 bg-zinc-900/50 p-8 shadow-md">
              <p className="mb-6 text-lg">
                Our trial class will give your Kids and Teens an introduction to
                what Krav Maga is all about. We don&apos;t break for the summer,
                so feel free to book in for a trial, no need to message ahead!
                But if you&apos;d like to, you can reach Barbara on 07512027411.
              </p>
              <p className="text-lg">
                They&apos;ll meet our friendly instructors, and get to meet some
                new friends all while learning some valuable life skills and
                having fun!
              </p>
            </div>

            {/* Class Timetable */}
            <div className="mb-8 skms-card p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-400">
                Class timetable:
              </h3>

              <div className="rounded-lg bg-zinc-900/50 p-6">
                <h4 className="mb-4 text-xl font-bold text-red-400">
                  Firhill Sports Complex
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-red-300">
                      Saturdays 9-10 am
                    </span>
                    <span className="ml-2 text-zinc-500">
                      – ages 5-10 and 11+ in separate groups.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-zinc-900/50 p-4">
                <p className="text-zinc-400">
                  Ages 14-16 are welcome to join the adult class with an
                  accompanying adult or can stay in the teens&apos; class. Ages
                  17+ are welcome to the adult class without an accompanying
                  adult. Adult membership prices will apply.
                </p>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="mb-8 skms-card p-8">
              <div className="space-y-4 text-center">
                <p className="text-xl font-bold text-red-400">
                  The trial class is £{PRICES.kids_trial}, monthly kids
                  membership is £{PRICES.kids}.
                </p>
                <p className="text-lg text-zinc-400">
                  We always have spaces, no need to message us, just book and
                  turn up!
                </p>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="font-semibold text-zinc-400">
                    We don&apos;t stop the classes for school holidays, but we
                    do stop for September weekend, one weekend in August, and
                    two weeks over Christmas and New Years!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg bg-zinc-900/50 p-8 text-center">
              <p className="mb-4 text-lg">
                Book a trial class or contact us for more details!
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  <a
                    href="mailto:info@scotkravmaga.co.uk"
                    className="skms-link hover:text-red-400"
                  >
                    info@scotkravmaga.co.uk
                  </a>
                </p>
                <p className="text-lg">
                  <a
                    href="tel:07512027411"
                    className="skms-link hover:text-red-400"
                  >
                    07512027411 (Barbara)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-zinc-900/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              What Parents Say
            </h2>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Ronnie */}
              <div className="skms-card">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    R
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-zinc-300">Ronnie</h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  Both my daughters attend and I&apos;ve watched their
                  confidence blossom around other kids AND adults since day one.
                </p>
              </div>

              {/* Brian */}
              <div className="skms-card">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    B
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-zinc-300">Brian</h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  My boy always enjoys the classes and has become much more
                  confident.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Booking Section */}
      <ContactBanner />
    </main>
  );
}
