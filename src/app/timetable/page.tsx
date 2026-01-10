import Link from "next/link";
import Header from "../components/header/header";
import {
  mixedAdultSelfDefenceClasses,
  womensSelfDefenceClasses,
} from "../womens-self-defence-classes/utils";

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header
        img="/banners/punching-bag-banner.jpg"
        title="Timetable"
        subtitle="Beginners Courses and Regular Classes"
        description="Beginners welcome at any of our classes!"
        link="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/beginners-course"
        linkText="Book a Beginners Course"
      />
      <div className="container mx-auto lg:px-9">
        <div className="mx-4 my-10 border-10 border-[#1C67B1] p-4">
          <h1 className="mb-4 text-center text-3xl font-extrabold">
            Welcome to SKMS Krav Maga!
          </h1>
          <div className="mb-4 font-semibold">
            Beginners are welcome to any of our classes!
          </div>

          <h2 className="mb-1 text-2xl font-bold">Beginners Courses:</h2>
          <ul className="list-disc pl-7">
            <li className="mb-2">
              <Link href={mixedAdultSelfDefenceClasses.ticketLink}>
                Mixed Adult Course{" "}
                <span className="ml-2 rounded-md bg-[#1C67B1] px-2 py-1 text-sm text-white">
                  Book Here
                </span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href={womensSelfDefenceClasses.ticketLink}>
                Women Only Course{" "}
                <span className="ml-2 rounded-md bg-[#1C67B1] px-2 py-1 text-sm text-white">
                  Book Here
                </span>
              </Link>
            </li>
          </ul>

          <div>
            Both courses will be running on Thursdays, 6-7pm at Glasgow Club
            Kelvinhall for {womensSelfDefenceClasses.duration} from the{" "}
            {womensSelfDefenceClasses.startDate}. The{" "}
            {womensSelfDefenceClasses.duration} are only{" "}
            {womensSelfDefenceClasses.price} and there’s even a student
            discount! Limited places,{" "}
            <Link href="https://scottish-krav-maga-systems-ltd.sumupstore.com/category/beginners-course">
              book now!
            </Link>
          </div>
          <div>
            The courses will introduce you to the basics of Krav Maga, teaching
            awareness, prevention and physical self-defence techniques against a
            variety of attacks. We’ll also introduce weapons and the mixed adult
            course will cover an intro to sparring.
          </div>
          <div>
            Whatever your reason for attending, you’re guaranteed to learn about
            attacker and bully psychology, teach you about body mechanics, keep
            your mind engaged and challenge your physical abilities, making you
            faster, fitter and stronger!
          </div>
          <div>
            On top of this, the women-only class is designed to empower and
            increase self-confidence.
          </div>
          <div>
            Still unsure? Take a look at our reviews on{" "}
            <Link href="https://www.google.com/search?sca_esv=55b51c43d294a49c&authuser=0&hl=en&gl=uk&output=search&q=Scottish+Krav+Maga+Systems&ludocid=4166520286696144191&lsig=AB86z5V1CU5mK1VqRlZD62Jg4LzC&ved=1i%3A0%2Ct%3A109124%2Ce%3A64%2Cp%3ATKdzaNXzDJCohbIP1u6F-AI%3A135#mpd=~11401468021824995288/customers/reviews">
              Google
            </Link>{" "}
            and{" "}
            <Link href="https://www.facebook.com/scottishkravmaga/reviews">
              Facebook
            </Link>
            !
          </div>
        </div>
        <div className="mx-4 my-10">
          <h2 className="mb-4 text-2xl font-bold">Timetable</h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_gngduj97s8n96ui1k567o64vro%40group.calendar.google.com&ctz=Europe%2FLondon"
            style={{ border: 0 }}
            width="100%"
            height="600"
            className="w-full"
          ></iframe>
          <div>
            We welcome beginners to every venue, every class, all year round! If
            you’d like to book a trial class, click Book a Trial and send us a
            message! No experience required to join any of our classes! £12
            online, £17 at the class. Kids trial is £8.
          </div>{" "}
          If you’d like to sign up to the mailing list, send us a message at
          info@scotkravmaga.co.uk or via WhatsApp (07512027411). We run
          beginners courses often, have a look around the site or message us!
          These courses will teach you avoidance, awareness and prevention – the
          fundamentals of Krav Maga, the world’s most effective self-defence
          system. You will learn basic blocks, punches, kicks, and defences to
          the most common attacks you might come across during your life, such
          as intimidation, verbal and physical abuse, punches, kicks, chokes,
          knife attacks and other dangers. Sign up now! All classes welcome
          beginners, don’t hesitate to come along with no experience!
          <div>send us a message button form by typeforms leads no jumps</div>
        </div>
      </div>
    </main>
  );
}
