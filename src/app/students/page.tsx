import Link from "next/link";
import { womensSelfDefenceClasses } from "../womens-self-defence-classes/utils";

export default function StudentsPage() {
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
              <li className="text-red-200">
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
              4-Week Krav Maga Beginners course - starting on the{" "}
              {womensSelfDefenceClasses.startDate}, only{" "}
              {womensSelfDefenceClasses.studentsPrice}!
            </h2>
            <p className="mb-6 text-lg text-zinc-400">
              Self-defence beginners classes at the Kelvin Hall! Only{" "}
              {womensSelfDefenceClasses.studentsPrice}! Open to all age groups
              over 18 and to all fitness levels.
            </p>

            <div className="text-center">
              <Link
                href="/trial"
                className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                Self Defence beginners course for only{" "}
                {womensSelfDefenceClasses.studentsPrice}! Book now!
              </Link>
            </div>
          </div>

          {/* Course Details */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Mixed Adult and Women Only Beginners Courses – Glasgow Club Kelvin
              Hall:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Schedule:</span>
                <span className="text-zinc-500">
                  {womensSelfDefenceClasses.dayAndTime}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Start Date:</span>
                <span className="text-zinc-500">
                  {womensSelfDefenceClasses.startDate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Price:</span>
                <span className="text-zinc-500">
                  {womensSelfDefenceClasses.studentsPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8 border-l-4 border-red-500 bg-zinc-900/50 p-6">
            <p className="leading-relaxed text-zinc-400">
              These induction courses are designed to give you the basic skills
              required to gain a fundamental understanding of the basics of
              self-defence. It&apos;ll give you a great workout, teach you
              several techniques and you&apos;ll meet like-minded others. Places
              are limited – Book now!
            </p>
          </div>

          {/* Location Information */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              {womensSelfDefenceClasses.location}
            </h3>
            <p className="mb-4 text-zinc-400">
              Message us if you can&apos;t find us or ask reception for Self
              Defence!
            </p>
            <p className="text-zinc-400">
              Got a question? You can reach us on WhatsApp (07512027411) or via
              info@scotkravmaga.co.uk!
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">
              Contact Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-zinc-400">
                  <strong>WhatsApp:</strong>{" "}
                  <Link href="tel:07512027411">07512027411</Link>
                </p>
              </div>
              <div>
                <p className="text-zinc-400">
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:info@scotkravmaga.co.uk">
                    info@scotkravmaga.co.uk
                  </Link>
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

          {/* Course Benefits */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              What You&apos;ll Learn
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold text-white">
                  Basic Self-Defence Skills
                </h4>
                <p className="text-sm text-zinc-400">
                  Fundamental understanding of self-defence techniques and
                  principles
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-white">Great Workout</h4>
                <p className="text-sm text-zinc-400">
                  Physical training that improves fitness, strength, and
                  endurance
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-white">
                  Practical Techniques
                </h4>
                <p className="text-sm text-zinc-400">
                  Learn several effective self-defence techniques you can use in
                  real situations
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-white">Community</h4>
                <p className="text-sm text-zinc-400">
                  Meet like-minded people who share your interest in
                  self-defence
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Start Your Self-Defence Journey?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-zinc-400">
              Join our {womensSelfDefenceClasses.duration} beginners course and
              learn essential self-defence skills in a supportive environment.
            </p>
            <Link
              href="/trial"
              className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Book Your Course Now - Only{" "}
              {womensSelfDefenceClasses.studentsPrice}!
            </Link>
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
