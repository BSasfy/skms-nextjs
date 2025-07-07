import Link from "next/link";

export default function TimetablePage() {
  return (
    <div>
      <h1>Beginners Courses and Classes</h1>
      <div>classes layout (screenshot) with:</div>
      <ul>
        <li>Sign me up button leading to sumup</li>
        <li>Welcome to SKMS Krav Maga!</li>
        <li>We have beginners blocks and regular classses all year round!</li>
        <li>
          Beginners Women Only and Mixed Adult Courses starting on the 25th of
          September, 2025!
        </li>
        <li>
          Both courses will be running on Thursdays, 6-7pm at Glasgow Club
          Kelvinhall for 4 weeks from the 25th of September. The 4 weeks are
          only £40 and there’s even a student discount! Limited places, book
          now!
        </li>
        <li>
          The courses will introduce you to the basics of Krav Maga, teaching
          awareness, prevention and physical self-defence techniques against a
          variety of attacks. We’ll also introduce weapons and the mixed adult
          course will cover an intro to sparring.
        </li>
        <li>
          Whatever your reason for attending, you’re guaranteed to learn about
          attacker and bully psychology, teach you about body mechanics, keep
          your mind engaged and challenge your physical abilities, making you
          faster, fitter and stronger!
        </li>
        <li>
          On top of this, the women-only class is designed to empower and
          increase self-confidence.
        </li>
        <Link href="/trial">BOOK HERE – Mixed Adult Course</Link>
        <Link href="/trial">BOOK HERE – Women Only Course</Link>
        <li>
          Still unsure? Take a look at our reviews on Google and Facebook! (link
          to google)
        </li>
        <li>
          No experience necessary – in fact, it’s better if you have none! No
          minimum fitness level required – if you’re fit, we’ll push you harder,
          if you’re not, you’ll be able to build up your fitness at your own
          pace – and we’ll motivate you along the way!
        </li>{" "}
        <li>
          If you have any questions, email us at info@scotkravmaga.co.uk, or
          WhatsApp/call Barbara on 07512027411. (link to wa and email)
        </li>
      </ul>
      <div>Timetable</div>
      <div>
        We welcome beginners to every venue, every class, all year round! If
        you’d like to book a trial class, click Book a Trial and send us a
        message! No experience required to join any of our classes! £12 online,
        £17 at the class. Kids trial is £8.
      </div>{" "}
      If you’d like to sign up to the mailing list, send us a message at
      info@scotkravmaga.co.uk or via WhatsApp (07512027411). We run beginners
      courses often, have a look around the site or message us! These courses
      will teach you avoidance, awareness and prevention – the fundamentals of
      Krav Maga, the world’s most effective self-defence system. You will learn
      basic blocks, punches, kicks, and defences to the most common attacks you
      might come across during your life, such as intimidation, verbal and
      physical abuse, punches, kicks, chokes, knife attacks and other dangers.
      Sign up now! All classes welcome beginners, don’t hesitate to come along
      with no experience!
      <div>send us a message button form by typeforms leads no jumps</div>
    </div>
  );
}
