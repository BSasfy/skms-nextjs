import Link from "next/link";

export default function BarbaraSasfyPage() {
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
              <li className="text-red-200">Barbara Sasfy</li>
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
          <div className="mb-8 skms-card p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-white">
                Barbara Sasfy
              </h2>
              <div className="space-y-2">
                <p className="text-lg font-semibold skms-link">
                  IKMF Civilian Krav Maga Instructor
                </p>
                <p className="text-lg font-semibold skms-link">
                  Kids and Teens Instructor
                </p>
                <p className="text-lg font-semibold skms-link">
                  Women Only Krav Maga Instructor
                </p>
              </div>
            </div>

            {/* Qualifications and Teaching */}
            <div className="mb-8 border-l-4 border-red-500 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-400">
                Lead Instructor in Civilian Krav Maga
              </h3>
              <p className="mb-4 text-zinc-400">
                Barbara has completed Civilian, Kids and Women&apos;s instruction
                courses. She is teaching:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Mixed Adult classes</li>
                <li>• Kids classes</li>
                <li>• Women&apos;s Beginners courses</li>
              </ul>
            </div>
          </div>

          {/* Community Work */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Community Work and Seminars
            </h3>
            <p className="mb-4 text-zinc-400">
              Barbara has carried out Women&apos;s self-defence Seminars and classes
              for:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">
                    Young Farmers Club East Kilbride
                  </h4>
                </div>
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">
                    Garnethill Neighbourhood Watch
                  </h4>
                </div>
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">
                    Woodlands Community
                  </h4>
                  <p className="mt-1 text-sm text-zinc-500">
                    After the devastating death of Esther Brown
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">LuluLemon</h4>
                  <p className="mt-1 text-sm text-zinc-500">
                    Corporate training and Sunday Community Classes
                  </p>
                </div>
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">
                    Dumbarton Community
                  </h4>
                </div>
                <div className="rounded-lg bg-zinc-900/50 p-4">
                  <h4 className="font-bold text-white">Mearns Primary</h4>
                  <p className="mt-1 text-sm text-zinc-500">
                    Sports day activities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Background */}
          <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">
              About Barbara
            </h3>
            <div className="space-y-4 text-zinc-400">
              <p>
                In her day job, Barbara is a software developer and in her spare
                time, she enjoys indoor climbing, spending time with friends,
                reading comic books and gaming.
              </p>
            </div>
          </div>

          {/* SKMS Branding */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              SKMS - Krav Maga
            </h3>
            <p className="text-zinc-400">
              Barbara is part of the SKMS team, dedicated to making Krav Maga
              accessible, affordable and fun for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="py-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
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

          {/* Instructor Specializations */}
          <div className="mb-8 skms-card">
            <h3 className="mb-4 text-xl font-bold text-white">
              Barbara&apos;s Specializations
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">
                  Civilian Krav Maga
                </h4>
                <p className="text-sm text-zinc-500">
                  Professional instruction in civilian self-defense techniques
                </p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">Kids & Teens</h4>
                <p className="text-sm text-zinc-500">
                  Age-appropriate training for young students
                </p>
              </div>
              <div className="rounded-lg border border-zinc-700 p-4 text-center">
                <h4 className="mb-2 font-bold text-white">Women Only</h4>
                <p className="text-sm text-zinc-500">
                  Specialized women&apos;s self-defense courses
                </p>
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
