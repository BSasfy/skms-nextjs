import Link from "next/link";
import HeaderBanner from "../components/header/header";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeaderBanner
        img="/banners/punching-bag-banner.jpg"
        title="Join SKMS"
        subtitle="Sign Up to a Monthly Membership"
        description="Join Glasgow's only IKMF affiliated Krav Maga club."
        link="/trial"
        linkText="Join a Trial Class"
      />

      {/* Main Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-center text-2xl font-bold text-blue-900">
                Learn life changing skills, gain confidence and get in shape all
                at the same time!
              </h3>
              <p className="mb-6 text-center text-lg">
                Sign up today for unlimited training and attend any of our
                regular classes.
              </p>
              <div className="rounded-lg bg-yellow-50 p-4">
                <p className="text-center text-gray-700">
                  <strong>
                    Concession pricing applies to students or those who are
                    unemployed.
                  </strong>
                  If in doubt, drop us a message!
                </p>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-blue-50 p-6">
              <p className="text-center text-lg text-blue-900">
                Click on a membership option below and you will be redirected to
                GoCardless our secure payment option.
              </p>
            </div>

            {/* Membership Options */}
            <div className="space-y-8">
              {/* Beginners Courses */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">
                  Beginners Courses
                </h3>
                <Link
                  href="/trial"
                  className="mb-4 inline-block text-blue-600 underline hover:text-blue-800"
                >
                  (click HERE for more info)
                </Link>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-xl font-bold text-blue-900">
                    4-week course - £40
                  </p>
                </div>
              </div>

              {/* Mixed Adult Classes */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">
                  Mixed Adult Classes
                </h3>
                <Link
                  href="/adults-krav-maga"
                  className="mb-4 inline-block text-blue-600 underline hover:text-blue-800"
                >
                  (click HERE for more info)
                </Link>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-bold text-blue-900">
                      Adult Unlimited - £55/Month
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-bold text-blue-900">
                      Adult - Kelvin Hall Only - £40/month
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-bold text-blue-900">
                      Student Unlimited - £45/month
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-lg font-bold text-blue-900">
                      Student Kelvinhall Only - £30/month
                    </p>
                  </div>
                </div>
              </div>

              {/* Kids and Junior Classes */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">
                  Toddler, Kids and Junior Classes
                </h3>
                <Link
                  href="/kids-krav-maga"
                  className="mb-4 inline-block text-blue-600 underline hover:text-blue-800"
                >
                  (click HERE for more info)
                </Link>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-xl font-bold text-blue-900">
                    Kids & Teens Krav Maga - £35 Per Month
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    (You will be redirected to set up your payment plan)
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Integration Placeholder */}
            <div className="mt-12 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-center text-2xl font-bold text-blue-900">
                Secure Payment with GoCardless
              </h3>
              <div className="rounded-lg bg-gray-100 p-6 text-center">
                <p className="mb-4 text-gray-700">
                  [GoCardless Payment Integration Component]
                </p>
                <p className="text-sm text-gray-600">
                  All payments are processed securely through GoCardless, our
                  trusted payment partner.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 rounded-lg bg-blue-50 p-6">
              <h4 className="mb-4 text-lg font-bold text-blue-900">
                What&apos;s Included:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Access to all regular classes at your chosen location</li>
                <li>
                  • Professional instruction from certified IKMF instructors
                </li>
                <li>• Progressive training program</li>
                <li>• Supportive training environment</li>
                <li>• Flexible membership options</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-8 rounded-lg bg-white p-6 text-center shadow-lg">
              <p className="mb-4 text-lg">
                Questions about membership? Contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:info@scotkravmaga.co.uk"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@scotkravmaga.co.uk
                  </a>
                </p>
                <p>
                  <a
                    href="tel:07849114110"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    07849114110 (Robert)
                  </a>
                </p>
                <p>
                  <a
                    href="tel:07512027411"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    07512027411 (Barbara)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Start Your Krav Maga Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Join Glasgow&apos;s premier Krav Maga club and transform your life
            with confidence, fitness, and self-defense skills.
          </p>

          <div className="space-y-4">
            <Link
              href="/trial"
              className="inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-orange-700"
            >
              Book a Trial Class
            </Link>
            <br />
            <Link
              href="/trial"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Contact Us for More Info
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Stay Safe, Get Fit, Hit Hard!
          </h3>
          <p className="mb-4 text-lg">
            <strong>SKMS Krav Maga</strong> will bring out the best in you. We
            make Krav Maga accessible, affordable and fun.
          </p>
          <p className="text-sm text-gray-400">
            Scot Krav Maga Ltd - Copyright © 2011-2024. All Rights Reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
