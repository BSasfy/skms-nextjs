import Link from "next/link";

export default function AdultsKravMagaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Start Training with SKMS!
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Book a course or a trial class or fill in our form, and we will
            contact you as soon as we can!
          </p>
          <Link
            href="/trial"
            className="rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-red-700"
          >
            Book a Trial Class!
          </Link>
        </div>
      </section>

      {/* Class Timetable Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Class Timetable
            </h2>

            <div className="mb-8 text-center">
              <Link
                href="/trial"
                className="text-lg font-semibold text-blue-600 underline hover:text-blue-800"
              >
                Looking for a beginners' course? Click HERE!
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Firhill Sports Complex */}
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

              {/* Glasgow Club Kelvin Hall */}
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
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Kids ages 14+ are welcome to the Adult class with an
                accompanying adult. Ages 17+ are welcome without an accompanying
                adult.
              </p>
              <Link
                href="/trial"
                className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Book a trial class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Students Say
          </h2>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Deirdre Craddock */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  DC
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">
                    Deirdre Craddock
                  </h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Training KM was the best decision I have ever made for my health
                as well as my safety. Without a doubt I am safer, feel braver
                but best of all it helps control my Fibromyalgia so now I have
                less pain. It helped restore my strength after major surgery
                too, stopping me feeling so vulnerable after being sick.
              </p>
            </div>

            {/* Mitch */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Mitch</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                My son and I started Krav Maga with SKMS just over two years
                ago. He wanted to do something more varied and practical than
                traditional martial arts and I went to keep him company. Since
                then we have both really enjoyed it, made friends, got fitter
                and traded bruises in a friendly atmosphere.
              </p>
            </div>

            {/* Solange Pompl */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  SP
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Solange Pompl</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                I took the women's self defense class whilst living in Scotland
                for a year, as I wanted to learn to protect myself better. I
                liked it so much that I started the regular course until I left
                Scotland. Now, two years later, I've started taking up classes
                in The Netherlands again.
              </p>
            </div>

            {/* Gracie Moffat */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  GM
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Gracie Moffat</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Learning Krav Maga has allowed me to feel confident in my
                ability to defend myself and others, whether it's on a night out
                or travelling alone in a new country. Best decision I've made
                for my self confidence!
              </p>
            </div>

            {/* Manoj Bagha */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  MB
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Manoj Bagha</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Private lessons helped me develop my Krav skills very quickly.
                The one on one lessons are fantastic they were at a time that
                suited me. We trained outside in potentially real life
                situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Sign up for a trial class below!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            We'll be in touch once we have updates on restarting the classes
            post COVID.
          </p>

          <div className="space-y-4">
            <Link
              href="/trial"
              className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-red-700"
            >
              Send us a message!
            </Link>

            <div className="mt-8">
              <p className="mb-2 text-lg">You can also call us on</p>
              <a
                href="tel:07849114110"
                className="text-2xl font-bold transition-colors duration-200 hover:text-blue-300"
              >
                07849114110
              </a>
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
