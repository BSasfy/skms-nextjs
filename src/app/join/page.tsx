import Link from "next/link";
import HeaderBanner from "../components/header/header";
import MembershipsGrid from "../components/memberships/memberships-grid";

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
      <div className="my-10 lg:my-20">
        <MembershipsGrid />
      </div>
      {/* <section className="py-16">
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
      </section> */}

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
              href="mailto:info@scotkravmaga.co.uk"
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
