import Link from "next/link";

export default function KravMagaGlasgowWestEndPage() {
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
              <li className="text-blue-200">Krav Maga Glasgow West End</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Krav Maga Glasgow West End
            </h1>
            <p className="mb-8 text-xl">
              Professional self-defense training in Glasgow's West End
            </p>
            <Link
              href="/trial"
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book a Trial Class
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
              Glasgow West End Location
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              <strong>The club is open to new members!</strong>
            </p>
            <p className="text-gray-700">
              Join us by simply booking your class here! Beginners are welcome
              anytime!
            </p>
          </div>

          {/* Class Schedules */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Adult Classes */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Adult Classes – All Levels
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Wednesdays</span>
                  <span className="text-gray-600">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Saturdays</span>
                  <span className="text-gray-600">10:00 AM - 11:30 AM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Suitable for all fitness levels and experience
              </p>
            </div>

            {/* Kids Classes */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Kids Classes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Ages 5-10</span>
                  <span className="text-gray-600">9:00 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Ages 11+</span>
                  <span className="text-gray-600">9:00 AM - 10:00 AM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Ages 15+ may attend Adult Classes following assessment. 17+
                welcome without assessment.
              </p>
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
                  <strong>Phone:</strong> 07512027411
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Trial Class Booking */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Book a Trial Class
            </h3>
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Trial Class</h4>
                <p className="text-2xl font-bold text-blue-600">£12.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Kids & Junior Trial</h4>
                <p className="text-2xl font-bold text-blue-600">£8.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Concession</h4>
                <p className="text-2xl font-bold text-blue-600">£10.00</p>
                <p className="text-sm text-gray-600">GBP</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/trial"
                className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Book Your Trial Class
              </Link>
            </div>
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
