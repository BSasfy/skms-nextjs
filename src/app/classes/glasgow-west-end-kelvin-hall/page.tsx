import Link from "next/link";

export default function GlasgowWestEndKelvinHallPage() {
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
              <li>
                <Link href="/classes" className="hover:text-blue-200">
                  Classes
                </Link>
              </li>
              <li className="text-blue-200">Krav Maga at Kelvin Hall</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Krav Maga at Kelvin Hall
            </h1>
            <p className="mb-8 text-xl">
              Professional self-defense training at Glasgow Club Kelvin Hall
            </p>
            <Link
              href="/trial"
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book a Beginners Course
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Location Info */}
          <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Glasgow Club Kelvin Hall
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              <strong>
                Mixed Adult class for all levels, trialists welcome all year
                round!
              </strong>
            </p>
          </div>

          {/* Beginners Course Section */}
          <div className="mb-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-900">
              New beginners courses starting on the 25th of September, 2025!
            </h3>
            <p className="mb-6 text-gray-700">
              For 4 weeks, this venue will be running a Women Only and a Mixed
              Adult beginners course simultaneously – taught by two different
              instructors. Only £40 for the 4 weeks or £30 for students!
            </p>

            <div className="mb-6 rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Course details:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Thursdays, 6-7pm.</li>
                <li>• Glasgow Club Kelvinhall</li>
                <li>• For 4 weeks, from the 25th of September</li>
                <li>• Only £40!</li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/trial"
                className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                BOOK NOW!
              </Link>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <p className="leading-relaxed text-gray-700">
              The courses focus on teaching awareness, prevention, building
              self-confidence, recognising and utilising your natural instincts
              to stay safe and grow stronger mentally and physically. We&apos;ll
              learn the basics of Krav Maga, the worlds most effective
              self-defense system. All techniques are modular and suitable for
              all ages and abilities.
            </p>
          </div>

          {/* Regular Classes */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Regular class – running all year round after the beginners
              courses:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Class times:</span>
                <span className="text-gray-600">
                  Thursdays, 6-7 pm – all year round!
                </span>
              </div>
              <p className="text-gray-700">
                Beginners are always welcome. These classes are the most
                suitable for complete beginners! All ages and fitness levels are
                welcome!
              </p>
              <p className="text-sm text-gray-600">
                Ages 15-17 are welcome but should be accompanied by an adult.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/trial"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a trial class HERE!
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Phone:</strong> Barbara on 07849114110
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              If you have any questions, email us at info@scotkravmaga.co.uk or
              call Barbara on 07849114110.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Send us a message!
            </h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
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
