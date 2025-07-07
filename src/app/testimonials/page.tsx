import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li className="text-blue-200">Testimonials</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Testimonials
            </h1>
            <p className="mb-8 text-xl">
              What our students say about SKMS Krav Maga
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Testimonials Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Deirdre Craddock */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  DC
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Deirdre Craddock
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Training KM was the best decision I have ever made for my
                health as well as my safety. Without a doubt I am safer, feel
                braver but best of all it helps control my Fibromyalgia so now I
                have less pain. It helped restore my strength after major
                surgery too, stopping me feeling so vulnerable after being sick.
                I encourage everyone to treat Krav Maga as an important life
                skill that will benefit you for the rest of your life. Seize any
                opportunity with open arms to train with the excellent,
                welcoming and encouraging teachers at SKMS. Don't be timid! The
                company is great too- very sociable and warm hearted, you'll
                have so many laughs as they teach that you'll be amazed what you
                can do and how fast you learn skills. every single time you go,
                that could save your life. No one is competitive, age, height
                etc. doesn't matter because everyone helps each other, there's
                nothing I haven't liked about going to SKMS. I feel very lucky
                they crossed my path. 🙂"
              </blockquote>
            </div>

            {/* Steven Clark */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  SC
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Steven Clark
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "I can thoroughly recommend the SKMS classes and tutors. I had
                some base in other martial arts but had none in Krav Maga.
                Finding a martial art which I could practice and work around a
                injured knee was my aim. I was also keen to build up my fitness
                after becoming a father. Before attending I contacted Robert who
                was very happy to discuss the ideology around Krav and my knee
                injury in particular. At my request I began with one private
                lesson which I really enjoyed. This is great value for money. I
                then attended a beginners class which was great fun with a good
                atmosphere. I am now about to attend a regular class. My
                experience is that the community and communication aspects are
                of a very high standard. The email and Whatsapp group are all
                very informative and welcoming."
              </blockquote>
            </div>

            {/* Mitch */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Mitch</h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "My son and I started Krav Maga with SKMS just over two years
                ago. He wanted to do something more varied and practical than
                traditional martial arts and I went to keep him company. Since
                then we have both really enjoyed it, made friends, got fitter
                and traded bruises in a friendly atmosphere. The instructors are
                great and will encourage you to achieve your best and are always
                ready to help with advice. I'm heading to Israel next year to
                train with the Global Instructors Team which is a reflection of
                how much I have got from Robert and his top team."
              </blockquote>
            </div>

            {/* Solange Pompl */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  SP
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Solange Pompl
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "I took the women's self defense class whilst living in Scotland
                for a year, as I wanted to learn to protect myself better. I
                liked it so much that I started the regular course until I left
                Scotland. Now, two years later, I've started taking up classes
                in The Netherlands again. It may sound cliché, but there's a
                "krav" vibe that is connected to the sports itself, and you can
                find it in any country. Krav Maga has made me fitter, stronger
                and more self-confident. I feel like they should make it a
                mandatory subject in all schools. But until that has become a
                reality, taking classes with Robert at SKMS is a great
                alternative"
              </blockquote>
            </div>

            {/* Gracie Moffat */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  GM
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Gracie Moffat
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Learning Krav Maga has allowed me to feel confident in my
                ability to defend myself and others, whether it's on a night out
                or travelling alone in a new country. Best decision I've made
                for my self confidence!"
              </blockquote>
            </div>

            {/* Manoj Bagha */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  MB
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Manoj Bagha
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Private lessons helped me develop my Krav skills very quickly.
                The one on one lessons are fantastic they were at a time that
                suited me. We trained outside in potentially real life
                situation. It was easy for Robert to pin point and fix mistakes
                that might not get picked up in a class full of students. All in
                all, I would highly recommend SKMS private lessons."
              </blockquote>
            </div>

            {/* Camilla Damlund */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  CD
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Camilla Damlund
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Learning Krav Maga with SKMS is a true confidence builder.
                Robert and the other trainers are dedicated to making training
                fun and epic while maintaining a safe environment for all.
                Couldn't ask for more team spirit, more dedication, or a better
                Krav Maga experience."
              </blockquote>
            </div>

            {/* Alyna Karim */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  AK
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Alyna Karim
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "I began Krav Maga in 2016, with the pro-active intention to
                learn some basic self-defence as I started university. The
                classes are fun, energetic and informative. They have greatly
                helped to build and improve my self-confidence. Overall I highly
                recommend learning Krav Maga through SKMS, it was definitely one
                of the best decisions I made."
              </blockquote>
            </div>

            {/* Finlay Matheson */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  FM
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Finlay Matheson
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Krav classes have had a positive effect on both my confidence
                and my fitness levels. A very welcoming community and keen
                instructors. Would recommend for anyone looking for pragmatic
                self defence experience."
              </blockquote>
            </div>

            {/* Ronnie */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  R
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Ronnie</h3>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Both my daughters attend and I've watched their confidence
                blossom around other kids AND adults since day one."
              </blockquote>
            </div>
          </div>

          {/* Pagination */}
          <div className="mb-8 flex items-center justify-center space-x-4">
            <span className="text-gray-600">Posts navigation</span>
            <div className="flex space-x-2">
              <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
                1
              </button>
              <button className="rounded bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300">
                2
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Join Our Community?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
              Experience the same confidence, fitness, and community that our
              students rave about. Start your Krav Maga journey today!
            </p>
            <Link
              href="/trial"
              className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book a Trial Class
            </Link>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-8 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-900">
              Want to keep up-to-date with SKMS?
            </h3>
            <p className="mb-4 text-blue-800">Subscribe our newsletter</p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Motto */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Stay Safe, Get Fit, Hit Hard!
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              <strong>SKMS Krav Maga</strong> will bring out the best in you. We
              make Krav Maga accessible, affordable and fun.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Scot Krav Maga Ltd - Copyright © 2011-2024. All Rights Reserved.
          </p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-blue-300">
              Website Disclaimer
            </Link>
            <Link href="/accessibility" className="hover:text-blue-300">
              Accessibility Policy
            </Link>
            <Link href="/sitemap" className="hover:text-blue-300">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
