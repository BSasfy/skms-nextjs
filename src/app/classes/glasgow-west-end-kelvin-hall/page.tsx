import HeaderBanner from "@/app/components/header/header";
import Link from "next/link";

export default function GlasgowWestEndKelvinHallPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <HeaderBanner
        img="/banners/punching-bag-banner.jpg"
        title="Join SKMS"
        subtitle="Sign Up to a Monthly Membership"
        description="Join Glasgow's only IKMF affiliated Krav Maga club."
        link="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class"
        linkText="Join a Trial Class"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Location Info */}

          {/* Regular Classes */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Regular class – running all year round after the beginners
              courses:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Class times:</span>
                <span className="text-gray-600">
                  Thursdays, 6-7 pm – all year round!
                </span>
              </div>
              <p className="text-gray-700">
                Beginners are always welcome. These classes are the most
                suitable for complete beginners! All ages and fitness levels are
                welcome!
              </p>
              <p className="text-sm text-gray-600">
                Ages 15-17 are welcome but should be accompanied by an adult.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/trial-class"
                className="rounded-lg bg-[#005EB8] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#0059b8cf]"
              >
                Book a trial class!
              </Link>
            </div>
          </div>
          <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Glasgow Club Kelvin Hall
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.645197636717!2d-4.294278200000001!3d55.868821999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884571b57f74d9%3A0x2e6de1c3ea49aee2!2sGlasgow%20Club%20Kelvin%20Hall!5e0!3m2!1sen!2suk!4v1752526188680!5m2!1sen!2suk"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-4 text-lg text-gray-700">
              <strong>
                Mixed Adult class for all levels, trialists welcome all year
                round!
              </strong>
            </p>
          </div>

          {/* Beginners Course Section */}
          <div className="mb-8 rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-900">
              New beginners courses starting on the 25th of September, 2025!
            </h3>
            <p className="mb-6 text-gray-700">
              For 4 weeks, this venue will be running a Women Only and a Mixed
              Adult beginners course simultaneously – taught by two different
              instructors. Only £40 for the 4 weeks or £30 for students!
            </p>

            <div className="mb-6 rounded-lg bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Course details:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Thursdays, 6-7pm.</li>
                <li>• Glasgow Club Kelvinhall</li>
                <li>• For 4 weeks, from the 25th of September</li>
                <li>• Only £40!</li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/beginners-course"
                className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                BOOK NOW!
              </Link>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <p className="leading-relaxed text-gray-700">
              The courses focus on teaching awareness, prevention, building
              self-confidence, recognising and utilising your natural instincts
              to stay safe and grow stronger mentally and physically. We&apos;ll
              learn the basics of Krav Maga, the worlds most effective
              self-defense system. All techniques are modular and suitable for
              all ages and abilities.
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
                  <strong>Email:</strong> info@scotkravmaga.co.uk
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Phone:</strong> Barbara on 07849114110
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              If you have any questions, email us at info@scotkravmaga.co.uk or
              call Barbara on 07849114110.
            </p>
          </div>

          {/* Contact Form */}
          {/* <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
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
          </div> */}

          {/* Motto */}
        </div>
      </div>
      <div className="bg-[#023462] py-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Stay Safe, Get Fit, Hit Hard!
        </h2>
        <p className="mx-auto max-w-2xl text-lg">
          <strong>SKMS Krav Maga</strong> will bring out the best in you. We
          make Krav Maga accessible, affordable and fun.
        </p>
      </div>
    </main>
  );
}
