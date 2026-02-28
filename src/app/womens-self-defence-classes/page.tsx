import Link from "next/link";
import { type Metadata } from "next";
import HeaderBanner from "../components/header/header";
import WomenOnlyTestimonials from "../components/testimonials/women-only-testimonals";
import { womensSelfDefenceClasses } from "./utils";
import WomenOnlyPageViews from "../components/tracking/meta/women-only-page-views";

export const metadata: Metadata = {
  title: "Women Only Self Defence Classes | SKMS Krav Maga Glasgow",
  description: `Join our Women Only Self Defence Beginners Course in Glasgow. ${womensSelfDefenceClasses.duration} course for just ${womensSelfDefenceClasses.price} starting ${womensSelfDefenceClasses.startDate}. Learn Krav Maga in a safe, supportive environment at ${womensSelfDefenceClasses.location}. Suitable for all ages and abilities.`,
  keywords: [
    "women only self defence",
    "women self defence classes Glasgow",
    "Krav Maga women",
    "self defence course Glasgow",
    "women only Krav Maga",
    "self defence training Glasgow",
    "Kelvinhall self defence",
    "women beginners self defence",
  ],
  openGraph: {
    title: "Women Only Self Defence Classes | SKMS Krav Maga Glasgow",
    description: `Join our ${womensSelfDefenceClasses.duration} Women Only Self Defence Beginners Course for just ${womensSelfDefenceClasses.price}. Starting ${womensSelfDefenceClasses.startDate} at ${womensSelfDefenceClasses.location}.`,
    url: "https://scotkravmaga.co.uk/womens-self-defence-classes",
    siteName: "SKMS Krav Maga",
    images: [
      {
        url: "/banners/helmet.jpg",
        width: 1200,
        height: 630,
        alt: "Women Only Self Defence Classes at SKMS Krav Maga",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women Only Self Defence Classes | SKMS Krav Maga",
    description: `Join our ${womensSelfDefenceClasses.duration} Women Only Self Defence Beginners Course for just ${womensSelfDefenceClasses.price}.`,
    images: ["/banners/helmet.jpg"],
  },
  alternates: {
    canonical: "https://scotkravmaga.co.uk/womens-self-defence-classes",
  },
};

export default function WomensSelfDefenceClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      <WomenOnlyPageViews />
      {/* Hero Section */}
      <HeaderBanner
        img="/banners/helmet.jpg"
        title="Women Only Self Defence"
        subtitle="Glasgow Club Kelvinhall - Glasgow West End"
        description="Learn practical self defence skills in a safe, supportive environment."
        link={womensSelfDefenceClasses.ticketLink}
        linkText="Book now"
      />

      <div className="flex flex-col md:flex-row">
        {/* Course Details Section */}
        <section
          id="beginnersCourse"
          className="w-full border-b border-gray-500 bg-gray-50 pt-12 pb-8"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 h-20 content-center text-center text-3xl font-extrabold">
                Women Only Beginners Course –{" "}
                {womensSelfDefenceClasses.monthAndYear}
              </h2>

              <div className="mb-8 rounded-lg border-t-2 border-gray-100 bg-white p-8 shadow-lg/30">
                <h3 className="mb-4 justify-self-center text-2xl font-bold text-[#12467b]">
                  4-weeks for just {womensSelfDefenceClasses.price}!
                </h3>
                <p className="mb-6 text-lg">
                  Come along and learn the basics of Krav Maga – with only women
                  participants. It&apos;s a safe space and a time just for you.
                </p>

                <div className="mb-6 rounded-lg border border-gray-100 bg-gray-50 p-6">
                  <h4 className="mb-4 text-xl font-bold text-[#12467b]">
                    Course details:
                  </h4>
                  <ul className="list-disc space-y-3 text-gray-800 sm:pl-7">
                    <li className="flex items-start">
                      <span className="font-semibold">
                        {womensSelfDefenceClasses.dayAndTime}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold">
                        {womensSelfDefenceClasses.duration} from the{" "}
                        {womensSelfDefenceClasses.startDate}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold">
                        {womensSelfDefenceClasses.location}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-xl font-bold text-[#12467b]">
                    {womensSelfDefenceClasses.price} for the{" "}
                    {womensSelfDefenceClasses.duration} – all{" "}
                    {womensSelfDefenceClasses.numberOfClasses} classes!
                  </p>
                  <p className="text-lg text-gray-800">
                    Are you a student? Then it&apos;s only{" "}
                    {womensSelfDefenceClasses.studentsPrice}!
                  </p>

                  <Link
                    href={womensSelfDefenceClasses.ticketLink}
                    className="inline-block rounded-lg bg-[#1C67B1] px-6 py-3 font-bold text-gray-50 transition-colors duration-200 hover:bg-[#1C67B1]/80"
                  >
                    Book now
                  </Link>

                  <p className="text-gray-600">
                    Our Self-Defence courses are suitable for women of all ages
                    and abilities; no previous martial arts or self-defence
                    training is necessary. You do what you can or want to. You
                    can even request to cover specific question or scenarios
                    you&apos;d like to learn!
                  </p>
                  <p className="text-gray-600">
                    The classes are aimed at 18+ but teens 14 and above are
                    welcome with a participating adult.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Program Information Section */}
      <section className="border-b border-gray-500 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#12467b]">
              About the Course
            </h2>
            <p className="mb-8 text-lg">
              Our courses have been designed to deal with the unique threats
              faced by women. Men and woman are built differently and our
              courses teach you to use modified counter attacks to fend off
              attackers.
            </p>
            <p className="mb-8 text-lg">
              Not only do we teach you physical skills, but we also teach you
              about attacker psychology, deescalation, avoidance, and how to
              mark your boundaries with strangers and those you know.
            </p>
            <div className="my-8">
              <p className="text-center text-xl font-semibold text-blue-900">
                Our objective is simple: to ensure that as many women as
                possible attend these courses and stay safe.
              </p>
            </div>
            <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
              <p className="text-6xl font-bold">&quot;</p>
              <p className="mb-6 text-lg">
                Women have to confront two main threats: sexual assault and
                sexual harassment. It&apos;s a common assumption that resisting
                and counter attacking the attacker may aggravate him and cause
                him to become more violent.
              </p>
              <p className="text-lg">
                This assumption is wrong: studies have shown that immediate and
                aggressive responses including fighting back are effective (Dr
                Judith Herman, author Trauma and Recovery).
              </p>
              <p className="justify-self-end text-6xl font-bold">&quot;</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">
                Participants on the beginners courses will learn how to:
              </h3>
              <ul className="mx-auto max-w-2xl space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>
                    Overcome the difference in attacker&apos;s size and strength
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of body language</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Dealing with knife threats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Effective counter attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The use of everyday common objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>The essence of danger</span>
                </li>
              </ul>
            </div>

            <p className="my-8 text-lg">
              The course will focus on teaching awareness, prevention, building
              self-confidence, and recognising and utilising your natural
              instincts to stay safe and grow stronger both mentally,
              emotionally and physically.
            </p>
            <p className="mb-8 text-lg">
              You&apos;ll meet our friendly instructors, get to meet some new
              friends all while getting a great workout and having fun!
            </p>

            <p className="mb-4 text-lg">
              If you have any questions, you can get in touch with Barbara on{" "}
              <a href="tel:07512027411" className="text-blue-600 underline">
                07512027411
              </a>{" "}
              or at{" "}
              <a
                href="mailto:info@scotkravmaga.co.uk"
                className="text-blue-600 underline"
              >
                info@scotkravmaga.co.uk
              </a>
            </p>
            <div className="text-center">
              <Link
                href={womensSelfDefenceClasses.ticketLink}
                className="inline-block flex-1 rounded-lg bg-[#1C67B1] px-6 py-3 font-bold text-gray-50 transition-colors duration-200 hover:bg-[#1C67B1]/80"
              >
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <WomenOnlyTestimonials />

      {/* Footer Section */}
      <section className="bg-blue-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Do you have a question? Email, WhatsApp or Call us!
          </h2>

          <div className="mx-auto max-w-2xl space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Call Barbara</h3>
              <a
                href="tel:07512027411"
                className="text-2xl font-bold transition-colors duration-200 hover:text-purple-300"
              >
                07512027411
              </a>
              <p className="mt-2 text-lg">
                or email us at info@scotkravmaga.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Women Only Self Defence Beginners Course",
            description:
              "A 4-week beginners course in Krav Maga self-defence designed specifically for women. Learn effective self-defence techniques in a safe, supportive environment.",
            provider: {
              "@type": "Organization",
              name: "SKMS Krav Maga",
              url: "https://scotkravmaga.co.uk",
              telephone: "+447512027411",
              email: "info@scotkravmaga.co.uk",
              streetAddress: "Glasgow Club Kelvinhall",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Glasgow",
                addressCountry: "GB",
              },
            },
            courseCode: "WO-BEGINNERS",
            educationalCredentialAwarded: "Certificate of Completion",
            teaches: [
              "Self-defence techniques",
              "Krav Maga basics",
              "Attacker psychology",
              "De-escalation techniques",
              "Boundary setting",
              "Knife threat defense",
              "Body language",
            ],
            coursePrerequisites: "No previous experience required",
            offers: {
              "@type": "Offer",
              price: womensSelfDefenceClasses.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              url: womensSelfDefenceClasses.ticketLink,
              validFrom: new Date().toISOString(),
            },
            location: {
              "@type": "Place",
              name: womensSelfDefenceClasses.location,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Glasgow",
                addressCountry: "GB",
              },
            },
            startDate: womensSelfDefenceClasses.startDate,
            duration: womensSelfDefenceClasses.duration,
            schedule: womensSelfDefenceClasses.dayAndTime,
            audience: {
              "@type": "Audience",
              audienceType: "Women 18+",
              gender: "Female",
            },
            image: "https://scotkravmaga.co.uk/banners/helmet.jpg",
          }),
        }}
      />
    </main>
  );
}
