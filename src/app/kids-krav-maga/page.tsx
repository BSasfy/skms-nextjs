import Link from "next/link";
import { type Metadata } from "next";
import HeaderBanner from "../components/header/header";
import ContactBanner from "../components/contact-banner/contact-banner";
import { BOOKING_LINKS, PRICES } from "../constants/prices";

export const metadata: Metadata = {
  title: "Teens Krav Maga Glasgow",
  description:
    `Teens Krav Maga Glasgow (11–15) at Firhill Sports Complex. Saturdays 9–10am. Trial £${PRICES.teens_trial}, then £${PRICES.teens}/month. Confidence, boundaries and practical self defence.`,
  keywords: [
    "teens Krav Maga Glasgow",
    "self defence for teenagers Glasgow",
    "Krav Maga for teens Firhill",
    "teens self defence classes Glasgow",
  ],
  alternates: {
    canonical: "https://scotkravmaga.co.uk/kids-krav-maga",
  },
  openGraph: {
    title: "Teens Krav Maga Glasgow | SKMS",
    description:
      `Teens Krav Maga (11–15) at Firhill Sports Complex. Saturdays 9–10am. Trial £${PRICES.teens_trial}.`,
    url: "https://scotkravmaga.co.uk/kids-krav-maga",
  },
};

export default function KidsKravMagaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeaderBanner
        img="/banners/kids-banner.jpg"
        title="Teens Krav Maga Glasgow"
        subtitle={`Self defence for ages 11–15 · £${PRICES.teens}/month`}
        description={`Saturdays 9–10am at Firhill Sports Complex. Trial £${PRICES.teens_trial}.`}
        link={BOOKING_LINKS.teensTrial}
        linkText="Book a Trial Class"
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <section>
          <div className="mx-2 my-10 border-10 border-[#1C67B1] bg-gray-50 p-8 lg:mx-12">
            <section className="py-8">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Regular teens class all year round
              </h2>
              <div className="mx-auto mb-8 max-w-2xl px-4">
                <Link
                  href={BOOKING_LINKS.teensTrial}
                  className="block rounded-lg bg-white p-6 text-center shadow-md"
                >
                  <h3 className="mb-4 text-xl font-bold text-blue-900">
                    Teens Krav Maga (11–15yo)
                  </h3>
                  <h4 className="text-md mb-4 font-semibold">
                    Saturdays, 9–10am · Firhill Sports Complex
                  </h4>
                  <p className="text-gray-600">
                    Preparing for the real world — learning how to stand up for
                    themselves, mark their boundaries and physically defend
                    themselves, while making friends and improving social
                    skills.
                  </p>
                </Link>
              </div>

              <Link
                href={BOOKING_LINKS.teensTrial}
                className="mx-auto block w-fit rounded-lg bg-blue-900 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-blue-800"
              >
                Book Now!
              </Link>
            </section>

            <p className="mb-6 px-4 text-lg">
              The class focuses on health, exercise, self-confidence and a whole
              range of anti-bullying and self-defence techniques taught in a fun
              and engaging format. There&apos;s also a focus on personal and
              group interactive social skills.
            </p>
            <p className="mb-6 px-4 text-lg">
              Sessions are designed to be inclusive to all fitness levels and
              experience.
            </p>

            <div className="mb-8 border border-[#1C67B1] bg-blue-50 p-8 shadow-md">
              <p className="mb-6 text-lg">
                Our trial class will give your teen an introduction to what Krav
                Maga is all about. We don&apos;t break for the summer, so feel
                free to book in for a trial — no need to message ahead! But if
                you&apos;d like to, you can reach Barbara on 07512027411.
              </p>
              <p className="text-lg">
                They&apos;ll meet our friendly instructors, and get to meet some
                new friends all while learning valuable life skills and having
                fun!
              </p>
            </div>

            {/* Class Timetable */}
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">
                Class timetable:
              </h3>

              <div className="rounded-lg bg-blue-50 p-6">
                <h4 className="mb-4 text-xl font-bold text-blue-900">
                  Firhill Sports Complex
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-800">
                      Saturdays 9–10 am
                    </span>
                    <span className="ml-2 text-gray-600">
                      – Teens Krav Maga, ages 11–15
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <p className="text-gray-700">
                  Ages 14–16 are welcome to join the adult class with an
                  accompanying adult or can stay in the teens&apos; class. Ages
                  17+ are welcome to the adult class without an accompanying
                  adult. Adult membership prices will apply.
                </p>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <div className="space-y-4 text-center">
                <p className="text-xl font-bold text-blue-900">
                  The trial class is £{PRICES.teens_trial}, monthly teens
                  membership is £{PRICES.teens}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href={BOOKING_LINKS.teensTrial}
                    className="rounded-lg bg-blue-900 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800"
                  >
                    Book a trial
                  </Link>
                  <Link
                    href={BOOKING_LINKS.teensMembership}
                    className="rounded-lg border-2 border-blue-900 px-6 py-3 font-bold text-blue-900 transition-colors hover:bg-blue-50"
                  >
                    Join monthly membership
                  </Link>
                </div>
                <p className="text-lg text-gray-700">
                  We always have spaces, no need to message us, just book and
                  turn up!
                </p>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="font-semibold text-gray-700">
                    We don&apos;t stop the classes for school holidays, but we
                    do stop for September weekend, one weekend in August, and
                    two weeks over Christmas and New Years!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg bg-blue-50 p-8 text-center">
              <p className="mb-4 text-lg">
                Book a trial class or contact us for more details!
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  <a
                    href="mailto:info@scotkravmaga.co.uk"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    info@scotkravmaga.co.uk
                  </a>
                </p>
                <p className="text-lg">
                  <a
                    href="tel:07512027411"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    07512027411 (Barbara)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              What Parents Say
            </h2>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Ronnie */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    R
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Ronnie</h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Both my daughters attend and I&apos;ve watched their
                  confidence blossom around other kids AND adults since day one.
                </p>
              </div>

              {/* Brian */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    B
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Brian</h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
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
