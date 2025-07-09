import Link from "next/link";
import HeaderBanner from "../components/header/header";

export default function KidsKravMagaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeaderBanner
        title="Kids and Teens Krav Maga with SKMS!"
        subtitle="Weekly classes all year round for £35/month!"
        description="Weekly classes all year round for £35/month!"
        link="/trial"
        linkText="Book a Trial Class"
      />

      {/* Main Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg">
                The classes focus on health, exercise, self-confidence and of
                course, a whole range of anti-bullying and self-defence
                activities taught in a fun and engaging format. In addition to
                the above, there&apos;s also a focus on personal and group
                interactive social skills.
              </p>
              <p className="text-lg">
                All kids&apos; and teens&apos; classes are taught through games
                and activities and are designed to be inclusive to all.
              </p>
            </div>

            <h2 className="mb-8 text-center text-3xl font-bold">
              Regular classes all year round:
            </h2>

            <div className="mb-8 rounded-lg bg-green-50 p-8">
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
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-green-900">
                Class timetable:
              </h3>

              <div className="rounded-lg bg-green-50 p-6">
                <h4 className="mb-4 text-xl font-bold text-green-900">
                  Firhill Sports Complex
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-green-800">
                      Saturdays 9-10 am
                    </span>
                    <span className="ml-2 text-gray-600">
                      – ages 5-10 and 11+ in separate groups.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <p className="text-gray-700">
                  Ages 14-16 are welcome to join the adult class with an
                  accompanying adult or can stay in the teens&apos; class. Ages
                  17+ are welcome to the adult class without an accompanying
                  adult. Adult membership prices will apply.
                </p>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <div className="space-y-4 text-center">
                <p className="text-xl font-bold text-green-900">
                  The trial class is £8, monthly kids membership is £35.
                </p>
                <p className="text-lg text-gray-700">
                  We always have spaces, no need to message us, just book and
                  turn up!
                </p>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="font-semibold text-gray-700">
                    We don&apos;t stop the classes for school holidays, only for
                    two weeks over Christmas and New Years!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg bg-green-50 p-8 text-center">
              <p className="mb-4 text-lg">
                Book a trial class or contact us for more details!
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  <a
                    href="mailto:info@scotkravmaga.co.uk"
                    className="text-green-700 hover:text-green-900"
                  >
                    info@scotkravmaga.co.uk
                  </a>
                </p>
                <p className="text-lg">
                  <a
                    href="tel:07512027411"
                    className="text-green-700 hover:text-green-900"
                  >
                    07512027411 (Barbara)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Classes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Kids Classes
            </h2>
            {/* add images */}

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <h3 className="mb-4 text-xl font-bold text-green-900">
                  Junior Krav Maga Glasgow
                </h3>
                <p className="text-gray-600">
                  Specialized classes for younger children focusing on fun,
                  fitness, and fundamental skills.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <h3 className="mb-4 text-xl font-bold text-green-900">
                  Kids Krav Maga
                </h3>
                <p className="text-gray-600">
                  Age-appropriate self-defense and confidence building for
                  children and teens.
                </p>
              </div>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  R
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Ronnie</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Both my daughters attend and I&apos;ve watched their confidence
                blossom around other kids AND adults since day one.
              </p>
            </div>

            {/* Brian */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
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

      {/* Booking Section */}
      <section className="bg-green-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Kids Krav Maga trial class enquiry!
          </h2>

          {/* make this the paypal link and component (screenshot) */}
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="rounded-lg bg-white p-6 text-gray-800">
              <h3 className="mb-4 text-xl font-bold">Book a trial class</h3>
              <div className="rounded bg-gray-100 p-4">
                <p className="font-semibold">
                  Kids and Junior Trial Class £8.00 GBP
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/trial"
                className="inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-orange-700"
              >
                Send us a message!
              </Link>
            </div>

            <div className="mt-8">
              <p className="mb-2 text-lg">You can also call/WhatsApp us on</p>
              <a
                href="tel:07512027411"
                className="text-2xl font-bold transition-colors duration-200 hover:text-green-300"
              >
                07512027411
              </a>
              <p className="mt-2 text-lg">
                or message us at info@scotkravmaga.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>

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
            Scot Krav Maga Ltd - Copyright © 2011-2024. All Rights Reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
