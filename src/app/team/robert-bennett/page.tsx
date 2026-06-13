import Link from "next/link";

export default function RobertBennettPage() {
  return (
    <main className="skms-page">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-zinc-950 to-red-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/" className="hover:text-red-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-red-200">
                  SKMS Main Instructors
                </Link>
              </li>
              <li className="text-red-200">Robert Bennett</li>
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
          <div className="mb-8 skms-card p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-white">
                Robert Bennett
              </h2>
              <p className="text-lg font-semibold skms-link">
                IKMF Civilian, Women Only and Kids Krav Maga Instructor
              </p>
            </div>

            {/* Senior Instructor Status */}
            <div className="mb-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-900">
                Senior SKMS Instructor
              </h3>
              <div className="space-y-3 text-zinc-400">
                <p>
                  <strong>Current Level:</strong> IKMF Expert Level 1
                </p>
                <p>
                  <strong>Role:</strong> Oversees all instructors&apos;
                  development
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
            <div className="mb-8 border-l-4 border-red-500 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-400">
                Martial Arts Experience
              </h3>
              <div className="space-y-3 text-zinc-400">
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
            <div className="mb-8 skms-card">
              <h3 className="mb-4 text-xl font-bold text-white">
                Teaching Qualifications
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• Qualified to teach Krav Maga to children</li>
                <li>• Qualified to teach Krav Maga to youths</li>
                <li>• Qualified to teach Krav Maga to adults</li>
                <li>• Women-only groups (IKMF Stay Away program)</li>
                <li>• Krav Maga Security Instructor</li>
              </ul>
            </div>
          </div>

          {/* Teaching Schedule */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Teaching Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Location:</span>
                <span className="text-zinc-400">Firhill Sports Complex</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Wednesday Classes:</span>
                <span className="text-zinc-400">Regular classes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Saturday Classes:</span>
                <span className="text-zinc-400">Regular classes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Saturday Teens Class:</span>
                <span className="text-zinc-400">Saturday mornings</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/timetable"
                className="font-semibold skms-link hover:text-red-300"
              >
                See our timetable HERE
              </Link>
            </div>
          </div>

          {/* Private Tuition */}
          <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">
              1-2-1 Tuition
            </h3>
            <p className="mb-4 text-zinc-400">
              Robert offers 1-2-1 tuition anywhere in Glasgow:
            </p>
            <ul className="mb-4 space-y-2 text-zinc-400">
              <li>• At your garden</li>
              <li>• Nearby park</li>
              <li>• David Lloyd Anniesland venue</li>
            </ul>
            <div className="space-y-2">
              <p className="text-zinc-400">
                To see our rates, visit
                <Link
                  href="/prices"
                  className="font-semibold skms-link hover:text-red-300"
                >
                  THIS page
                </Link>
                .
              </p>
              <p className="text-zinc-400">
                To book in, just drop us a message at info@scotkravmaga.co.uk or
                give Robert a call on 07849114110.
              </p>
            </div>
          </div>

          {/* Personal Quote */}
          <div className="mb-8 border-l-4 border-red-500 bg-zinc-900/50 p-6">
            <blockquote className="text-lg text-zinc-400 italic">
              &quot;As a father, I quickly realised how effective and practical
              Krav Maga was in relation to other systems when dealing with self
              defence, especially for kids.&quot;
            </blockquote>
            <p className="mt-2 text-right text-zinc-500">- Robert Bennett</p>
          </div>

          {/* SKMS Branding */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              SKMS - Krav Maga
            </h3>
            <p className="text-zinc-400">
              Robert is the founder and main owner of SKMS, dedicated to making
              Krav Maga accessible, affordable and fun for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
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
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-zinc-400">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
              <div>
                <p className="text-zinc-400">
                  <strong>Phone:</strong> Robert on 07849114110
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-red-400">
              Want to keep up-to-date with SKMS?
            </h3>
            <p className="mb-4 text-red-300">Subscribe our newsletter</p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Instructor Achievements */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Robert&apos;s Achievements
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">Expert Level 1</h4>
                <p className="text-sm text-zinc-500">
                  Highest IKMF certification level
                </p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">3rd Dan Karate</h4>
                <p className="text-sm text-zinc-500">
                  Shotokan Karate black belt
                </p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">20+ Years</h4>
                <p className="text-sm text-zinc-500">Martial arts experience</p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">SKMS Founder</h4>
                <p className="text-sm text-zinc-500">Founder and main owner</p>
              </div>
            </div>
          </div>

          {/* Motto */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Stay Safe, Get Fit, Hit Hard!
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
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
            <Link href="/privacy" className="hover:text-red-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-red-300">
              Website Disclaimer
            </Link>
            <Link href="/accessibility" className="hover:text-red-300">
              Accessibility Policy
            </Link>
            <Link href="/sitemap" className="hover:text-red-300">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
