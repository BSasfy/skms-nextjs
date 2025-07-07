import Link from "next/link";

export default function MariosVasileiouPage() {
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
                <Link href="/instructors" className="hover:text-blue-200">
                  SKMS Main Instructors
                </Link>
              </li>
              <li className="text-blue-200">Marios Vasileiou</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Marios Vasileiou
            </h1>
            <p className="mb-8 text-xl">IKMF Civilian Krav Maga Instructor</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Instructor Profile */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Marios Vasileiou
              </h2>
              <p className="text-lg font-semibold text-blue-600">
                IKMF Civilian Krav Maga Instructor
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Krav Maga Experience
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 6 years of Krav Maga training</li>
                  <li>• 3 years of teaching experience</li>
                  <li>• Teaches Mixed Adult regular classes</li>
                  <li>• Leads Beginners Courses</li>
                  <li>• Assists at Women Only classes</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Additional Experience
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Callisthenics workouts</li>
                  <li>• Regular runner</li>
                  <li>• Basketball player for close to a decade</li>
                  <li>• Brings non-martial arts experience to training</li>
                </ul>
              </div>
            </div>

            {/* Personal Background */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                About Marios
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Marios is eagerly training to improve his Krav Maga skills as
                  well as expand his knowledge of other systems.
                </p>
                <p>
                  In his day job, Marios is a software developer. In his spare
                  time, Marios enjoys the occasional DnD session, video games
                  and reading.
                </p>
              </div>
            </div>
          </div>

          {/* Teaching Schedule */}
          <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-900">
              Teaching Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Location:</span>
                <span className="text-gray-700">Glasgow Club Kelvin Hall</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Schedule:</span>
                <span className="text-gray-700">Thursdays, 6-7pm</span>
              </div>
            </div>
          </div>

          {/* Private Classes */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Private 1-2-1 Classes
            </h3>
            <p className="mb-4 text-gray-700">
              Private classes are available with Marios at:
            </p>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li>• Glasgow West End</li>
              <li>• Nearby park</li>
              <li>• David Lloyd Anniesland</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-700">
                  <strong>Phone:</strong> Barbara at 07512027411
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-gray-700">
                <strong>Direct Email:</strong>{" "}
                marios.vasileiou@kravmaga-ikmf.co.uk
              </p>
            </div>
          </div>

          {/* Instructor Development */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Instructor Development
            </h3>
            <p className="text-gray-700">
              All our instructors participate in weekly Instructor Training and
              their development is overseen by Robert Bennett, Expert Level Head
              Instructor with over 40 years of Martial Arts experience.
            </p>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to get started?
            </h2>
            <div className="space-y-4">
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                SEND US A MESSAGE!
              </Link>
              <div className="mt-4">
                <p className="mb-2 text-gray-700">
                  <strong>Or email Marios directly at:</strong>
                </p>
                <a
                  href="mailto:marios.vasileiou@kravmaga-ikmf.co.uk"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  marios.vasileiou@kravmaga-ikmf.co.uk
                </a>
              </div>
            </div>
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
