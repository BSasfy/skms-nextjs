import Link from "next/link";

export default function WomensSelfDefenceClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Women&apos;s Self Defence Classes and Seminars
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Women&apos;s Only Self Defence Glasgow
          </p>
          <Link
            href="/trial"
            className="rounded-lg bg-pink-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-pink-700"
          >
            Book now
          </Link>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Women Only Beginners Course – Autumn 2025
            </h2>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-purple-900">
                4-weeks for just £40!
              </h3>
              <p className="mb-6 text-lg">
                Come along and learn the basics of Krav Maga – with only women
                participants. It&apos;s a safe space and a time just for you.
              </p>

              <div className="mb-6 rounded-lg bg-purple-50 p-6">
                <h4 className="mb-4 text-xl font-bold text-purple-900">
                  Class details:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-purple-800">
                      Thursdays, 6-7pm
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-purple-800">
                      4-weeks from 25th of September, 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-purple-800">
                      Glasgow Club Kelvinhall
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-xl font-bold text-purple-900">
                  £40 for the 4 weeks – all 4 classes!
                </p>
                <p className="text-lg text-purple-800">
                  Are you a student? Then it&apos;s only £30!
                </p>
                <p className="text-gray-600">
                  The classes are aimed at 18+ but teens 14 and above are
                  welcome with a participating adult.
                </p>
                <p className="text-gray-600">
                  Any questions, just let us know!
                </p>
                <Link
                  href="/trial"
                  className="inline-block rounded-lg bg-pink-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-pink-700"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-lg">
              The classes will follow our <strong>STAY AWAY Program</strong> and
              is for women only. We use both male and female instructors for the
              course, and we will focus on teaching awareness, prevention,
              building self-confidence, and recognising and utilising your
              natural instincts to stay safe and grow stronger both mentally and
              physically.
            </p>

            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <p className="text-gray-700">
                No equipment or previous experience is necessary but please
                remember to bring water.
              </p>
            </div>

            <div className="mb-12 text-center">
              <p className="mb-4 text-xl font-semibold text-purple-900">
                Learning Krav Maga is not only about preventing attacks! It is
                also a life-changing experience that will stay with you forever
                and empower you in everyday life!!
              </p>
              <p className="text-lg text-gray-700">
                You&apos;ll meet our friendly instructors, get to meet some new
                friends all while getting a great workout and having fun!
              </p>
              <p className="mt-4 text-gray-600">
                Ages 14-17 are welcome to the course with an adult accompanying.
              </p>
            </div>

            <div className="text-center">
              <p className="mb-4 text-lg">
                Send us a message to be the first one to hear about upcoming
                courses! If you have any questions, you can get in touch with
                Barbara on 07512027411 or at info@scotkravmaga.co.uk
              </p>
              <Link
                href="/trial"
                className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-purple-700"
              >
                Send us a message!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-purple-900 py-16 text-white">
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

            <div className="space-y-4">
              <Link
                href="/trial"
                className="inline-block rounded-lg bg-pink-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-pink-700"
              >
                Send us a message!
              </Link>
              <br />
              <Link
                href="/trial"
                className="inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-purple-700"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start Training Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Start Training with SKMS!
            </h2>
            <p className="mb-8 text-xl">
              Fill in our form, and we will contact you as soon as we can!
            </p>

            <p className="mb-8 text-lg">
              Stay Away Women&apos;s Self-Defence courses and seminars are suitable
              for women of all abilities; no previous martial arts or
              self-defence training is necessary.
            </p>

            <p className="mb-8 text-lg">
              Our courses have been designed to deal with the unique threats
              faced by women. Men and woman are built differently and our
              courses teach you to use modified counter attacks to fend off
              attackers.
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg">
                Women have to confront two main threats: sexual assault and
                sexual harassment. It&apos;s a common assumption that resisting and
                counter attacking the attacker may aggravate him and cause him
                to become more violent.
              </p>
              <p className="text-lg">
                This assumption is wrong: studies have shown that immediate and
                aggressive responses including fighting back are effective (Dr
                Judith Herman, author Trauma and Recovery).
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-purple-900">
                Participants on the courses will learn how to:
              </h3>
              <ul className="mx-auto max-w-2xl space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>
                    Overcome the difference in attacker&apos;s size and strength
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>The use of body language</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>Dealing with knife threats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>Effective counter attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>The use of everyday common objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-purple-600">•</span>
                  <span>The essence of danger</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xl font-semibold text-purple-900">
                Our objective is simple: to ensure that as many women as
                possible attend these courses and stay safe.
              </p>
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
            {/* Solange Pompl */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  SP
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Solange Pompl</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                I took the women&apos;s self defense class whilst living in Scotland
                for a year, as I wanted to learn to protect myself better. I
                liked it so much that I started the regular course until I left
                Scotland. Now, two years later, I&apos;ve started taking up classes
                in The Netherlands again.
              </p>
            </div>

            {/* Gracie Moffat */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  GM
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Gracie Moffat</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Learning Krav Maga has allowed me to feel confident in my
                ability to defend myself and others, whether it&apos;s on a night out
                or travelling alone in a new country. Best decision I&apos;ve made
                for my self confidence!
              </p>
            </div>

            {/* Camilla Damlund */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  CD
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">
                    Camilla Damlund
                  </h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Learning Krav Maga with SKMS is a true confidence builder.
                Robert and the other trainers are dedicated to making training
                fun and epic while maintaining a safe environment for all.
              </p>
            </div>

            {/* Alyna Karim */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  AK
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Alyna Karim</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                I began Krav Maga in 2016, with the pro-active intention to
                learn some basic self-defence as I started university. The
                classes are fun, energetic and informative. They have greatly
                helped to build and improve my self-confidence.
              </p>
            </div>

            {/* Marion Ambrose */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  MA
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">
                    Marion Ambrose
                  </h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Absolutely love SKMS classes! Everyone is super friendly and the
                trainers are patient and understanding. I&apos;ve definitely learned
                some self defence techniques that I hopefully will never need to
                use, but I feel prepared!
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
