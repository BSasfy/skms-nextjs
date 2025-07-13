import Link from "next/link";
import HeaderBanner from "../components/header/header";
import WomenOnlyTestimonials from "../components/testimonials/women-only-testimonals";

export default function WomensSelfDefenceClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeaderBanner
        img="/banners/helmet.jpg"
        title="Women Only Self Defence"
        subtitle="Glasgow Club Kelvinhall"
        description="Low cardio, beginners focused, fun and effective!"
        link="/trial"
        linkText="Book now"
      />

      {/* Course Details Section */}
      <section className="border-b border-gray-500 bg-gray-50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-center text-3xl font-extrabold">
              Women Only Beginners Course – Autumn 2025
            </h1>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-[#12467b]">
                4-weeks for just £40!
              </h3>
              <p className="mb-6 text-lg">
                Come along and learn the basics of Krav Maga – with only women
                participants. It&apos;s a safe space and a time just for you.
              </p>

              <div className="mb-6 rounded-lg border border-gray-100 bg-gray-50 p-6">
                <h4 className="mb-4 text-xl font-bold text-[#12467b]">
                  Class details:
                </h4>
                <ul className="list-disc space-y-3 text-gray-800 sm:pl-7">
                  <li className="flex items-start">
                    <span className="font-semibold">Thursdays, 6-7pm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold">
                      4-weeks from 25th of September, 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold">
                      Glasgow Club Kelvinhall
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-xl font-bold text-[#12467b]">
                  £40 for the 4 weeks – all 4 classes!
                </p>
                <p className="text-lg text-gray-800">
                  Are you a student? Then it&apos;s only £30!
                </p>

                <Link
                  href="/trial"
                  className="inline-block rounded-lg bg-[#1C67B1] px-6 py-3 font-bold text-gray-50 transition-colors duration-200 hover:bg-[#1C67B1]/80"
                >
                  Book now
                </Link>

                <p className="text-gray-600">
                  Our Self-Defence courses are suitable for women of all ages
                  and abilities; no previous martial arts or self-defence
                  training is necessary.
                </p>
                <p className="text-gray-600">
                  The classes are aimed at 18+ but teens 14 and above are
                  welcome with a participating adult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Information Section */}
      <section className="border-b border-gray-500 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#12467b]">
              About the Course
            </h2>
            <p className="mb-8 text-lg">
              Our courses have been designed to deal with the unique threats
              faced by women. Men and woman are built differently and our
              courses teach you to use modified counter attacks to fend off
              attackers.
            </p>
            <p className="mb-8 text-lg">
              Not only do we teach you physical skills, but we also teach you
              about attacker psychology, deescalation, avoidance, and how to
              mark your boundaries with strangers and those you know.
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="text-6xl font-bold">&quot;</p>
              <p className="mb-6 text-lg">
                Women have to confront two main threats: sexual assault and
                sexual harassment. It&apos;s a common assumption that resisting
                and counter attacking the attacker may aggravate him and cause
                him to become more violent.
              </p>
              <p className="text-lg">
                This assumption is wrong: studies have shown that immediate and
                aggressive responses including fighting back are effective (Dr
                Judith Herman, author Trauma and Recovery).
              </p>
              <p className="justify-self-end text-6xl font-bold">&quot;</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">
                Participants on the courses will learn how to:
              </h3>
              <ul className="mx-auto max-w-2xl space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>
                    Overcome the difference in attacker&apos;s size and strength
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of body language</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Dealing with knife threats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Effective counter attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of everyday common objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The essence of danger</span>
                </li>
              </ul>
            </div>

            <div className="my-8">
              <p className="text-center text-xl font-semibold text-blue-900">
                Our objective is simple: to ensure that as many women as
                possible attend these courses and stay safe.
              </p>
            </div>

            <p className="mb-8 text-lg">
              The course will focus on teaching awareness, prevention, building
              self-confidence, and recognising and utilising your natural
              instincts to stay safe and grow stronger both mentally,
              emotionally and physically.
            </p>
            <p className="mb-8 text-lg">
              You&apos;ll meet our friendly instructors, get to meet some new
              friends all while getting a great workout and having fun!
            </p>

            <p className="mb-4 text-lg">
              If you have any questions, you can get in touch with Barbara on{" "}
              <a href="tel:07512027411" className="text-blue-600 underline">
                07512027411
              </a>{" "}
              or at{" "}
              <a
                href="mailto:info@scotkravmaga.co.uk"
                className="text-blue-600 underline"
              >
                info@scotkravmaga.co.uk
              </a>
            </p>
            <div className="text-center">
              <Link
                href="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/women-only-self-defence-beginners-course-autumn-2025"
                className="inline-block rounded-lg bg-[#1C67B1] px-6 py-3 font-bold text-gray-50 transition-colors duration-200 hover:bg-[#1C67B1]/80"
              >
                Book now!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start Training Section */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Start Training with SKMS!
            </h2>
            <p className="mb-8 text-xl">
              Fill in our form, and we will contact you as soon as we can!
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg">
                Women have to confront two main threats: sexual assault and
                sexual harassment. It&apos;s a common assumption that resisting
                and counter attacking the attacker may aggravate him and cause
                him to become more violent.
              </p>
              <p className="text-lg">
                This assumption is wrong: studies have shown that immediate and
                aggressive responses including fighting back are effective (Dr
                Judith Herman, author Trauma and Recovery).
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">
                Participants on the courses will learn how to:
              </h3>
              <ul className="mx-auto max-w-2xl space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>
                    Overcome the difference in attacker&apos;s size and strength
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of body language</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Dealing with knife threats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Effective counter attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of everyday common objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The essence of danger</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xl font-semibold text-blue-900">
                Our objective is simple: to ensure that as many women as
                possible attend these courses and stay safe.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <WomenOnlyTestimonials />

      {/* Footer Section */}
      <section className="bg-blue-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Do you have a question? Email, WhatsApp or Call us!
          </h2>

          <div className="mx-auto max-w-2xl space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Call Barbara</h3>
              <a
                href="tel:07512027411"
                className="text-2xl font-bold transition-colors duration-200 hover:text-purple-300"
              >
                07512027411
              </a>
              <p className="mt-2 text-lg">
                or email us at info@scotkravmaga.co.uk
              </p>
            </div>

            {/* <div className="space-y-4">
              <Link
                href="https://scottish-krav-maga-systems-ltd.sumupstore.com/product/women-only-self-defence-beginners-course-autumn-2025"
                className="inline-block rounded-lg bg-pink-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-pink-700"
              >
                Book now!
              </Link>
              <br />
              <Link
                href="/trial"
                className="inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-purple-700"
              >
                Book now
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
