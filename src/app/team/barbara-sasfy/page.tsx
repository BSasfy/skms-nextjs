import Link from "next/link";

export default function BarbaraSasfyPage() {
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
              <li className="text-blue-200">Barbara Sasfy</li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Barbara Sasfy
            </h1>
            <p className="mb-8 text-xl">Krav Maga Instructor</p>
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
                Barbara Sasfy
              </h2>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-blue-600">
                  IKMF Civilian Krav Maga Instructor
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Kids and Teens Instructor
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Women Only Krav Maga Instructor
                </p>
              </div>
            </div>

            {/* Qualifications and Teaching */}
            <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-900">
                Lead Instructor in Civilian Krav Maga
              </h3>
              <p className="mb-4 text-gray-700">
                Barbara has completed Civilian, Kids and Women's instruction
                courses. She is teaching:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Mixed Adult classes</li>
                <li>• Kids classes</li>
                <li>• Women's Beginners courses</li>
              </ul>
            </div>
          </div>

          {/* Community Work */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Community Work and Seminars
            </h3>
            <p className="mb-4 text-gray-700">
              Barbara has carried out Women's self-defence Seminars and classes
              for:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">
                    Young Farmers Club East Kilbride
                  </h4>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">
                    Garnethill Neighbourhood Watch
                  </h4>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">
                    Woodlands Community
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    After the devastating death of Esther Brown
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">LuluLemon</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Corporate training and Sunday Community Classes
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">
                    Dumbarton Community
                  </h4>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-bold text-gray-900">Mearns Primary</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Sports day activities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Background */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              About Barbara
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                In her day job, Barbara is a software developer and in her spare
                time, she enjoys indoor climbing, spending time with friends,
                reading comic books and gaming.
              </p>
            </div>
          </div>

          {/* SKMS Branding */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              SKMS - Krav Maga
            </h3>
            <p className="text-gray-700">
              Barbara is part of the SKMS team, dedicated to making Krav Maga
              accessible, affordable and fun for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Interested in booking a beginners course or 1-2-1 tuition?
            </h2>
            <Link
              href="/contact-us"
              className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              SEND US A MESSAGE!
            </Link>
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

          {/* Instructor Specializations */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Barbara's Specializations
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">
                  Civilian Krav Maga
                </h4>
                <p className="text-sm text-gray-600">
                  Professional instruction in civilian self-defense techniques
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">Kids & Teens</h4>
                <p className="text-sm text-gray-600">
                  Age-appropriate training for young students
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 text-center">
                <h4 className="mb-2 font-bold text-gray-900">Women Only</h4>
                <p className="text-sm text-gray-600">
                  Specialized women's self-defense courses
                </p>
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
