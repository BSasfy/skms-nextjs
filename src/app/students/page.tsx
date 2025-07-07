import Link from "next/link";

export default function StudentsPage() {
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
              <li className="text-blue-200">
                Beginners UofG Self Defence Course
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Beginners UofG Self Defence Course
            </h1>
            <p className="mb-8 text-xl">Not just for students!</p>
            <Link
              href="/trial"
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book a beginners course!
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Course Highlight Section */}
          <div className="mb-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8">
            <h2 className="mb-4 text-3xl font-bold text-red-900">
              4-Week Krav Maga Beginners course - starting on the 27th of March,
              only £30!
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Self-defence beginners classes at the Kelvin Hall! Only £30! Open
              to all age groups over 18 and to all fitness levels.
            </p>

            <div className="text-center">
              <Link
                href="/trial"
                className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                Self Defence beginners course for only £30! Book now!
              </Link>
            </div>
          </div>

          {/* Course Details */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Mixed Adult and Women Only Beginners Courses – Glasgow Club Kelvin
              Hall:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Schedule:</span>
                <span className="text-gray-600">Thursdays, 6-7 pm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Start Date:</span>
                <span className="text-gray-600">27th of March, 2025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Price:</span>
                <span className="text-gray-600">£30</span>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
            <p className="leading-relaxed text-gray-700">
              These induction courses are designed to give you the basic skills
              required to gain a fundamental understanding of the basics of
              self-defence. It&apos;ll give you a great workout, teach you several
              techniques and you&apos;ll meet like-minded others. Places are limited
              – Book now!
            </p>
          </div>

          {/* Location Information */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Glasgow Club Kelvinhall
            </h3>
            <p className="mb-4 text-gray-700">
              Message us if you can&apos;t find us or ask reception for Self Defence!
            </p>
            <p className="text-gray-700">
              Got a question? You can reach us on WhatsApp (07512027411) or via
              info@steadfastselfdefence.co.uk!
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-700">
                  <strong>WhatsApp:</strong> 07512027411
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@steadfastselfdefence.co.uk
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

          {/* Course Benefits */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              What You&apos;ll Learn
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold text-gray-900">
                  Basic Self-Defence Skills
                </h4>
                <p className="text-sm text-gray-700">
                  Fundamental understanding of self-defence techniques and
                  principles
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900">Great Workout</h4>
                <p className="text-sm text-gray-700">
                  Physical training that improves fitness, strength, and
                  endurance
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900">
                  Practical Techniques
                </h4>
                <p className="text-sm text-gray-700">
                  Learn several effective self-defence techniques you can use in
                  real situations
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900">Community</h4>
                <p className="text-sm text-gray-700">
                  Meet like-minded people who share your interest in
                  self-defence
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Start Your Self-Defence Journey?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
              Join our 4-week beginners course and learn essential self-defence
              skills in a supportive environment.
            </p>
            <Link
              href="/trial"
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book Your Course Now - Only £30!
            </Link>
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
