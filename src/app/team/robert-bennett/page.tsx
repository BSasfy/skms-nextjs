import Link from "next/link";

export default function RobertBennettPage() {
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
              <li className="text-blue-200">Robert Bennett</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Robert Bennett
            </h1>
            <p className="mb-8 text-xl">Expert Level Krav Maga Instructor</p>
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
                Robert Bennett
              </h2>
              <p className="text-lg font-semibold text-blue-600">
                IKMF Civilian, Women Only and Kids Krav Maga Instructor
              </p>
            </div>

            {/* Senior Instructor Status */}
            <div className="mb-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-900">
                Senior SKMS Instructor
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Current Level:</strong> IKMF Expert Level 1
                </p>
                <p>
                  <strong>Role:</strong> Oversees all instructors' development
                </p>
                <p>
                  <strong>Status:</strong> Highest-ranking instructor in
                  Scotland
                </p>
                <p>
                  <strong>Position:</strong> Founder and main owner of SKMS
                </p>
              </div>
            </div>

            {/* Martial Arts Experience */}
            <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-900">
                Martial Arts Experience
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Duration:</strong> Over 20 years involved in martial
                  arts
                </p>
                <p>
                  <strong>Shotokan Karate:</strong> 3rd Dan ranking
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Teaching Qualifications
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Qualified to teach Krav Maga to children</li>
                <li>• Qualified to teach Krav Maga to youths</li>
                <li>• Qualified to teach Krav Maga to adults</li>
                <li>• Women-only groups (IKMF Stay Away program)</li>
                <li>• Krav Maga Security Instructor</li>
              </ul>
            </div>
          </div>

          {/* Teaching Schedule */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Teaching Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Location:</span>
                <span className="text-gray-700">Firhill Sports Complex</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Wednesday Classes:</span>
                <span className="text-gray-700">Regular classes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Saturday Classes:</span>
                <span className="text-gray-700">Regular classes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Saturday Teens Class:</span>
                <span className="text-gray-700">Saturday mornings</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/timetable"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                See our timetable HERE
              </Link>
            </div>
          </div>

          {/* Private Tuition */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              1-2-1 Tuition
            </h3>
            <p className="mb-4 text-gray-700">
              Robert offers 1-2-1 tuition anywhere in Glasgow:
            </p>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li>• At your garden</li>
              <li>• Nearby park</li>
              <li>• David Lloyd Anniesland venue</li>
            </ul>
            <div className="space-y-2">
              <p className="text-gray-700">
                To see our rates, visit{" "}
                <Link
                  href="/prices"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  THIS page
                </Link>
                .
              </p>
              <p className="text-gray-700">
                To book in, just drop us a message at info@scotkravmaga.co.uk or
                give Robert a call on 07849114110.
              </p>
            </div>
          </div>

          {/* Personal Quote */}
          <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
            <blockquote className="text-lg text-gray-700 italic">
              "As a father, I quickly realised how effective and practical Krav
              Maga was in relation to other systems when dealing with self
              defence, especially for kids."
            </blockquote>
            <p className="mt-2 text-right text-gray-600">- Robert Bennett</p>
          </div>

          {/* SKMS Branding */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              SKMS - Krav Maga
            </h3>
            <p className="text-gray-700">
              Robert is the founder and main owner of SKMS, dedicated to making
              Krav Maga accessible, affordable and fun for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to try a class or book a 1-2-1 session?
            </h2>
            <Link
              href="/contact-us"
              className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              SEND US A MESSAGE!
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
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
                  <strong>Phone:</strong> Robert on 07849114110
                </p>
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

          {/* Instructor Achievements */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Robert's Achievements
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">Expert Level 1</h4>
                <p className="text-sm text-gray-600">
                  Highest IKMF certification level
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">3rd Dan Karate</h4>
                <p className="text-sm text-gray-600">
                  Shotokan Karate black belt
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">20+ Years</h4>
                <p className="text-sm text-gray-600">Martial arts experience</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">SKMS Founder</h4>
                <p className="text-sm text-gray-600">Founder and main owner</p>
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
