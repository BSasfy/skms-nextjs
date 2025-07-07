import Link from "next/link";

export default function ContactUsPage() {
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
              <li className="text-blue-200">Contact Us</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="mb-8 text-xl">Get in touch with SKMS Krav Maga</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction Section */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              We'd love to hear from you. If you're interested in coming along
              to one of our classes or would like to find out more about Krav
              Maga, please fill out the form and we'll be in touch soon.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Email Contact */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Email</h3>
                <a
                  href="mailto:info@scotkravmaga.co.uk"
                  className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                >
                  info@scotkravmaga.co.uk
                </a>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Call</h3>
                <a
                  href="tel:07512027411"
                  className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                >
                  07512027411
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Send us a message!
            </h3>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="trial-class">Book a Trial Class</option>
                  <option value="beginners-course">
                    Beginners Course Information
                  </option>
                  <option value="private-lessons">Private Lessons</option>
                  <option value="membership">Membership Information</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more about what you're looking for..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I would like to receive updates about SKMS classes and events
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mb-12 border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-900">
              What to Expect
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>• We typically respond to all inquiries within 24 hours</p>
              <p>• For urgent matters, please call us directly</p>
              <p>
                • We're happy to answer any questions about our classes,
                pricing, or Krav Maga in general
              </p>
              <p>
                • Feel free to ask about trial classes, beginners courses, or
                private lessons
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-12 rounded-lg bg-blue-50 p-6">
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

          {/* Quick Links */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Quick Links
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold text-gray-900">
                  Classes & Courses
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/trial"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Book a Trial Class
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/classes"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View All Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/beginners"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Beginners Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/private-corporate-tuition"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Private Lessons
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900">Information</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/prices"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Membership Prices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/timetable"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Class Timetable
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instructors"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Meet Our Instructors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Student Testimonials
                    </Link>
                  </li>
                </ul>
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
