import Link from "next/link";
import { type Metadata } from "next";
import Header from "../components/header/header";
import Testimonials from "../components/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Adult Krav Maga Classes Glasgow | Beginners Welcome",
  description:
    "Adult Krav Maga classes in Glasgow — beginners welcome. Wed & Sat at Firhill, Thu at Kelvinhall. Trial £12. Practical self defence with SKMS.",
  keywords: [
    "adult Krav Maga classes Glasgow",
    "beginners Krav Maga Glasgow",
    "Krav Maga Kelvinhall",
    "Krav Maga Firhill",
    "self defence classes West End Glasgow",
  ],
  alternates: {
    canonical: "https://scotkravmaga.co.uk/adults-krav-maga",
  },
  openGraph: {
    title: "Adult Krav Maga Classes Glasgow | SKMS",
    description:
      "Beginners Krav Maga in Glasgow’s West End. Three weekly adult classes at Firhill and Kelvinhall.",
    url: "https://scotkravmaga.co.uk/adults-krav-maga",
  },
};

export default function AdultsKravMagaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Header
        img="/banners/adult-gloves.jpg"
        title="Adult Krav Maga Classes Glasgow"
        subtitle="Beginners Krav Maga at Firhill & Kelvinhall"
        description="All levels welcome — start with a trial class any week. Stay Safe, Get Fit, Hit Hard."
        link="/trial"
        linkText="Book a Trial Class!"
      />

      {/* Class Timetable Section */}
      <div className="container mx-auto px-4">
        <div className="mx-4 my-10 border-10 border-[#1C67B1] p-4 lg:p-10">
          <h2 className="mb-4 text-center text-3xl font-extrabold">
            Adult Class Timetable
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Firhill Sports Complex */}
            <Link href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-blue-900">
                  Location: Firhill Sports Complex
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-gray-800">
                      Wednesdays:
                    </span>
                    <span className="ml-2 text-gray-600">
                      7-8.30 pm – all levels, beginners welcome
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-gray-800">
                      Saturdays:
                    </span>
                    <span className="ml-2 text-gray-600">
                      10-11.30 am – all levels, beginners welcome
                    </span>
                  </li>
                </ul>
              </div>
            </Link>

            {/* Glasgow Club Kelvin Hall */}
            <Link href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-blue-900">
                  Location: Glasgow Club Kelvin Hall
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-gray-800">
                      Thursdays:
                    </span>
                    <span className="ml-2 text-gray-600">
                      6-7 pm – all levels, beginners welcome
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-8 text-gray-600">
              Teens aged 14+ are welcome to the Adult class with an accompanying
              adult. Ages 17+ are welcome without an accompanying adult.
            </p>
            <Link
              href="/trial"
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Book a trial class
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/timetable" className="text-lg font-medium">
              Looking for a beginners&apos; course instead?{" "}
              <span className="text-blue-600 underline hover:text-blue-800">
                Click HERE!
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
      {/* Footer Section */}
      <section className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Stay Safe, Get Fit, Hit Hard!
          </h3>
          <p className="mb-4 text-lg">
            <strong>SKMS Krav Maga</strong> will bring out the best in you. We
            make Krav Maga accessible, affordable and fun.
          </p>
          <p className="text-sm text-gray-400">
            Scot Krav Maga Ltd - Copyright © 2011-{new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
