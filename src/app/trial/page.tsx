import Link from "next/link";

export default function TrialPage() {
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
              <li className="text-blue-200">Book a Trial Now</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Book a Trial Now
            </h1>
            <p className="mb-8 text-xl">
              Start Training with SKMS! Book a trial class below or send us a
              message!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Introduction Section */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Book a trial class to come along this week or fill in our form,
              and we will contact you as soon as we can!
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Our trial class will give you an introduction to what Krav Maga is
              all about. You'll meet our friendly instructors, get to meet some
              new friends all while getting a great workout and having fun!
            </p>
          </div>

          {/* Trial Class Pricing */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Book a trial class
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Trial Class</h4>
                <p className="text-3xl font-bold text-blue-600">£12.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 text-center">
                <h4 className="mb-2 text-lg font-bold">
                  Kids and Junior Trial
                </h4>
                <p className="text-3xl font-bold text-blue-600">£8.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Concession</h4>
                <p className="text-3xl font-bold text-blue-600">£10.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
            </div>
          </div>

          {/* Class Timetable */}
          <div className="mb-12 border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-900">
              Class timetable:
            </h3>
            <p className="mb-6 text-gray-700">
              <strong>Class locations:</strong> Firhill Sports Complex (kids,
              teens and adults) and Kelvin Hall (adults).
            </p>

            {/* Adults Schedule */}
            <div className="mb-6 rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">Adults:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Wednesdays:</strong> 7-8.30 pm – Firhill Sports
                  Complex
                </li>
                <li>
                  • <strong>Thursdays:</strong> 6-7 pm – Glasgow Club Kelvin
                  Hall
                </li>
                <li>
                  • <strong>Saturdays:</strong> 10-11.30 am – Firhill Sports
                  Complex
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Would you prefer a beginners' block? Have a look{" "}
                <Link
                  href="/beginners"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  HERE!
                </Link>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Teens aged 14+ are welcome to an adult class with an
                accompanying adult. Ages 17+ are welcome without an accompanying
                adult.
              </p>
            </div>

            {/* Kids Schedule */}
            <div className="mb-6 rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Minis – ages 5-11 and Teens – 12-16:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Saturdays:</strong> 9-10 am – Firhill Sports Complex
                </li>
              </ul>
            </div>

            {/* Ages 8-12 Schedule */}
            <div className="mb-6 rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Ages 8-12:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Fridays:</strong> 6.30-7.30 pm – Mearns Castle Golf
                  Academy
                </li>
              </ul>
            </div>

            {/* Beginners Courses */}
            <div className="rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Women Only and Mixed Adult Beginners Courses:
              </h4>
              <p className="text-gray-700">
                Check out our beginners' courses{" "}
                <Link
                  href="/beginners"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  HERE!
                </Link>
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-12 py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Book a trial class now – there are always spaces!
            </h2>
            <Link
              href="/contact-us"
              className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Send us a message!
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mb-12 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-700">
                  <strong>Phone:</strong> 07512027411
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              You can also call us on – 07512027411, or email us at
              info@scotkravmaga.co.uk
            </p>
          </div>

          {/* Student Testimonials */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              What Our Students Say
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Deirdre Craddock */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    DC
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Deirdre Craddock
                    </h4>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "Training KM was the best decision I have ever made for my
                  health as well as my safety. Without a doubt I am safer, feel
                  braver but best of all it helps control my Fibromyalgia so now
                  I have less pain. It helped restore my strength after major
                  surgery too, stopping me feeling so vulnerable after being
                  sick. I encourage everyone to treat Krav Maga as an important
                  life skill that will benefit you for the rest of your life.
                  Seize any opportunity with open arms to train with the
                  excellent, welcoming and encouraging teachers at SKMS. Don't
                  be timid! The company is great too- very sociable and warm
                  hearted, you'll have so many laughs as they teach that you'll
                  be amazed what you can do and how fast you learn skills. every
                  single time you go, that could save your life. No one is
                  competitive, age, height etc. doesn't matter because everyone
                  helps each other, there's nothing I haven't liked about going
                  to SKMS. I feel very lucky they crossed my path. 🙂"
                </blockquote>
              </div>

              {/* Mitch */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Mitch</h4>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "My son and I started Krav Maga with SKMS just over two years
                  ago. He wanted to do something more varied and practical than
                  traditional martial arts and I went to keep him company. Since
                  then we have both really enjoyed it, made friends, got fitter
                  and traded bruises in a friendly atmosphere. The instructors
                  are great and will encourage you to achieve your best and are
                  always ready to help with advice. I'm heading to Israel next
                  year to train with the Global Instructors Team which is a
                  reflection of how much I have got from Robert and his top
                  team."
                </blockquote>
              </div>

              {/* Solange Pompl */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    SP
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Solange Pompl
                    </h4>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "I took the women's self defense class whilst living in
                  Scotland for a year, as I wanted to learn to protect myself
                  better. I liked it so much that I started the regular course
                  until I left Scotland. Now, two years later, I've started
                  taking up classes in The Netherlands again. It may sound
                  cliché, but there's a "krav" vibe that is connected to the
                  sports itself, and you can find it in any country. Krav Maga
                  has made me fitter, stronger and more self-confident. I feel
                  like they should make it a mandatory subject in all schools.
                  But until that has become a reality, taking classes with
                  Robert at SKMS is a great alternative"
                </blockquote>
              </div>

              {/* Gracie Moffat */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    GM
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Gracie Moffat
                    </h4>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "Learning Krav Maga has allowed me to feel confident in my
                  ability to defend myself and others, whether it's on a night
                  out or travelling alone in a new country. Best decision I've
                  made for my self confidence!"
                </blockquote>
              </div>

              {/* Manoj Bagha */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    MB
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Manoj Bagha
                    </h4>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "Private lessons helped me develop my Krav skills very
                  quickly. The one on one lessons are fantastic they were at a
                  time that suited me. We trained outside in potentially real
                  life situation. It was easy for Robert to pin point and fix
                  mistakes that might not get picked up in a class full of
                  students. All in all, I would highly recommend SKMS private
                  lessons."
                </blockquote>
              </div>
            </div>
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
