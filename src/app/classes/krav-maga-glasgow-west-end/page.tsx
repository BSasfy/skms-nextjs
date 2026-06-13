import { PRICES } from "@/app/constants/prices";
import Link from "next/link";

export default function KravMagaGlasgowWestEndPage() {
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
                <Link href="/classes" className="hover:text-red-200">
                  Classes
                </Link>
              </li>
              <li className="text-red-200">Krav Maga Glasgow West End</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Krav Maga Glasgow West End
            </h1>
            <p className="mb-8 text-xl">
              Professional self-defense training in Glasgow&apos;s West End
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
          <div className="mb-8 border-l-4 border-red-500 bg-zinc-900/50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-red-400">
              Glasgow West End Location
            </h2>
            <p className="mb-4 text-lg text-zinc-400">
              <strong>The club is open to new members!</strong>
            </p>
            <p className="text-zinc-400">
              Join us by simply booking your class here! Beginners are welcome
              anytime!
            </p>
          </div>

          {/* Class Schedules */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Adult Classes */}
            <div className="skms-card shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                Adult Classes – All Levels
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Wednesdays</span>
                  <span className="text-zinc-500">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Saturdays</span>
                  <span className="text-zinc-500">10:00 AM - 11:30 AM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Suitable for all fitness levels and experience
              </p>
            </div>

            {/* Kids Classes */}
            <div className="skms-card shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                Kids Classes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Ages 5-10</span>
                  <span className="text-zinc-500">9:00 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Ages 11+</span>
                  <span className="text-zinc-500">9:00 AM - 10:00 AM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Ages 15+ may attend Adult Classes following assessment. 17+
                welcome without assessment.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-zinc-400">
                  <strong>Phone:</strong> 07512027411
                </p>
              </div>
              <div>
                <p className="text-zinc-400">
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Trial Class Booking */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Book a Trial Class
            </h3>
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Trial Class</h4>
                <p className="text-2xl font-bold skms-link">
                  £{PRICES.adult_trial}
                </p>
                <p className="text-sm text-zinc-500">GBP</p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Kids & Junior Trial</h4>
                <p className="text-2xl font-bold skms-link">
                  £{PRICES.kids_trial}
                </p>
                <p className="text-sm text-zinc-500">GBP</p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 text-lg font-bold">Adult Concession</h4>
                <p className="text-2xl font-bold skms-link">
                  £{PRICES.concession_trial}
                </p>
                <p className="text-sm text-zinc-500">GBP</p>
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
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Send us a message!
            </h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-500"
              >
                Send Message
              </button>
            </form>
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
