import Link from "next/link";
import ContactTrigger from "../components/contact-modal/contact-trigger";
import HeaderBanner from "../components/header/header";
import { PRICES } from "../constants/prices";

export default function PrivateCorporateTuitionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeaderBanner
        title="Private & corporate tuition"
        subtitle="1-2-1 with Barbara · Corporate sessions with Robert"
        description="Practical training, outdoor or indoor around Glasgow. Rates below — inquire to book."
        messageUsText="Inquire now"
        contactSubject="private-corporate"
        img="/banners/Lulul.jpg"
        imgPosition="27%"
      />

      {/* Private Tuition Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Private Tuition
            </h2>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-xl font-semibold text-indigo-900">
                Private tuition is available anywhere in Glasgow!
              </p>
              <p className="mb-6 text-lg">
                Private classes are taught by Barbara Sasfy — women-only, kids
                and adult Krav Maga instructor.
              </p>

              <div className="mb-6 rounded-lg bg-indigo-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-indigo-900">
                  Private classes are:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-indigo-800">
                      For 1 person:
                    </span>
                    <span className="ml-2 text-gray-700">
                      £{PRICES.private_lesson}/hour
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-indigo-800">
                      For 2 people:
                    </span>
                    <span className="ml-2 text-gray-700">
                      £{PRICES.private_lesson_2}/hour (£
                      {PRICES.private_lesson_2 / 2}/person)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-indigo-800">
                      For 3 people:
                    </span>
                    <span className="ml-2 text-gray-700">
                      £{PRICES.private_lesson_3}/hour (£
                      {PRICES.private_lesson_3 / 3}/person)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-indigo-800">
                      For 4 people:
                    </span>
                    <span className="ml-2 text-gray-700">
                      £{PRICES.private_lesson_4}/hour (£
                      {PRICES.private_lesson_4 / 4}/person)
                    </span>
                  </li>
                </ul>
                <div className="mt-4 rounded bg-yellow-50 p-3">
                  <p className="font-semibold text-indigo-900">
                    Discount available for booking 10 sessions at once for £
                    {PRICES.private_lesson_10}.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900">
                    Location:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Outdoor: Anywhere in Glasgow – at a park near you or in
                      your garden.
                    </li>
                    <li>
                      • Indoor: We have an agreement with multiple gyms, we can
                      arrange something near you!
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900">
                    Time and day:
                  </h4>
                  <p className="text-gray-700">
                    To be agreed between you and Barbara.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructors Section */}
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-indigo-900">
                Instructor:
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="text-lg font-bold text-indigo-900">
                    Barbara Sasfy -{" "}
                    <Link href="tel:07512027411">07512027411</Link>
                  </h4>
                  <p className="text-gray-700">
                    Women Only, Kids and Adult Krav Maga instructor, 10 years of
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Corporate</h2>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg">
                Prices from £{PRICES.corporate_booking} for a 2.5-hour session
                and a 30 minute QnA for up to 20 people. Charities can access
                the session with a discount, starting from £
                {PRICES.corporate_booking_charity}. Please message us for
                details.
              </p>
              <p className="mb-6 text-lg">
                Session length, number of participants, content and price are
                all negotiable. Please give us a call or email to discuss.
              </p>

              <div className="rounded-lg bg-indigo-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-indigo-900">
                  What we offer:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • We can take any amount of people, there&apos;s no upper
                    limit
                  </li>
                  <li>
                    • We can have multiple instructors who can come along to
                    assist
                  </li>
                  <li>
                    • We have partnerships with a number of venues in Glasgow if
                    you don&apos;t have a suitable area
                  </li>
                  <li>
                    • The rental fee for our venues would be on top of the event
                    fee
                  </li>
                  <li>
                    • We provide a minimum of two instructors for each seminar
                  </li>
                  <li>
                    • We provide more than this if the group size is over 40
                  </li>
                  <li>• We will bring all the equipment necessary</li>
                  <li>
                    • You don&apos;t need to wear gym clothes to do Krav Maga
                    but trainers are encouraged for ankle stability
                  </li>
                  <li>
                    • The classes are not physically demanding, therefore
                    they&apos;re suitable for mid-day as well
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="mb-4 text-lg">
                  To book, call Robert on 07849114110 or message us.
                </p>
                <ContactTrigger
                  subject="private-corporate"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Contact Us
                </ContactTrigger>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Students Say
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Steven Clark */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                  SC
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Steven Clark</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                I can thoroughly recommend the SKMS classes and tutors. I had
                some base in other martial arts but had none in Krav Maga.
                Finding a martial art which I could practice and work around a
                injured knee was my aim. I was also keen to build up my fitness
                after becoming a father.
              </p>
            </div>

            {/* Manoj Bagha */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                  MB
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Manoj Bagha</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Private lessons helped me develop my Krav skills very quickly.
                The one on one lessons are fantastic they were at a time that
                suited me. We trained outside in potentially real life
                situation. It was easy for Robert to pin point and fix mistakes
                that might not get picked up in a class full of students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Inquire now</h2>

          <div className="space-y-4">
            <ContactTrigger
              subject="private-corporate"
              className="inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-orange-700"
            >
              Send us a message
            </ContactTrigger>

            <div className="mt-8 space-y-4">
              <div>
                <p className="mb-1 text-lg">Private tuition — Barbara</p>
                <a
                  href="tel:07512027411"
                  className="text-2xl font-bold transition-colors duration-200 hover:text-indigo-300"
                >
                  07512027411
                </a>
              </div>
              <div>
                <p className="mb-1 text-lg">Corporate — Robert</p>
                <a
                  href="tel:07849114110"
                  className="text-2xl font-bold transition-colors duration-200 hover:text-indigo-300"
                >
                  07849114110
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Stay Safe, Get Fit, Hit Hard!
          </h3>
          <p className="text-lg">
            <strong>SKMS Krav Maga</strong> will bring out the best in you. We
            make Krav Maga accessible, affordable and fun.
          </p>
        </div>
      </section>
    </main>
  );
}
