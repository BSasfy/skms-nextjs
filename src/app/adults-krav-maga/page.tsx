import Link from "next/link";
import Header from "../components/header/header";
import Testimonials from "../components/testimonials/testimonials";
import MottoSection from "../components/motto-section/motto-section";

export default function AdultsKravMagaPage() {
  return (
    <main className="skms-page">
      <Header
        img="/banners/adult-gloves.jpg"
        title="Start Training with SKMS!"
        subtitle="Beginners welcome at any of our classes!"
        link="/trial"
        linkText="Book a Trial Class!"
      />

      <div className="container mx-auto px-4">
        <div className="mx-4 my-10 skms-content-box lg:mx-auto lg:max-w-5xl">
          <h1 className="mb-4 text-center text-3xl font-black text-white uppercase">
            Class Timetable
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class">
              <div className="skms-card transition-all hover:border-red-500/50">
                <h3 className="mb-4 text-xl font-bold text-red-400">
                  Location: Firhill Sports Complex
                </h3>
                <ul className="space-y-3 text-zinc-400">
                  <li>
                    <span className="font-semibold text-white">Wednesdays:</span>{" "}
                    7-8.30 pm – all levels, beginners welcome
                  </li>
                  <li>
                    <span className="font-semibold text-white">Saturdays:</span>{" "}
                    10-11.30 am – all levels, beginners welcome
                  </li>
                </ul>
              </div>
            </Link>

            <Link href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class">
              <div className="skms-card transition-all hover:border-red-500/50">
                <h3 className="mb-4 text-xl font-bold text-red-400">
                  Location: Glasgow Club Kelvin Hall
                </h3>
                <ul className="space-y-3 text-zinc-400">
                  <li>
                    <span className="font-semibold text-white">Thursdays:</span>{" "}
                    6-7 pm – all levels, beginners welcome
                  </li>
                </ul>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-8 text-zinc-500">
              Kids ages 14+ are welcome to the Adult class with an accompanying
              adult. Ages 17+ are welcome without an accompanying adult.
            </p>
            <Link href="/trial" className="skms-btn">
              Book a trial class
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/timetable" className="text-lg font-medium text-zinc-300">
              Looking for a beginners&apos; course instead?{" "}
              <span className="skms-link underline">Click HERE!</span>
            </Link>
          </div>
        </div>
      </div>

      <Testimonials />
      <MottoSection />
    </main>
  );
}
