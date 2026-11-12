import Link from "next/link";
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup";
import ContactForm from "./contact-form";

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
              We&apos;d love to hear from you. If you&apos;re interested in
              coming along to one of our classes or would like to find out more
              about Krav Maga, please fill out the form and we&apos;ll be in
              touch soon.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Send us a message!
            </h3>
            <ContactForm />
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

          <NewsletterSignup />

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
                      href="/timetable"
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
                      href="/join"
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

    </main>
  );
}
