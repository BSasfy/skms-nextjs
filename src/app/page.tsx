import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div>Banner with WO, Adults, Kids, clickable</div>
      <Link href="/trial">Book a Trial Class</Link>
      <div>same component as in /classes with all the 4 classes</div>
      <h2>What skills Will you Learn?</h2>
      <div>
        Krav Maga is the most effective self-defence system in the world. Krav
        Maga was first used by the military but has evolved into a system that
        can be used by civilians in their everyday lives. Krav Maga contains no
        sporting elements; it’s based on real life situations. It works!
      </div>
      <Link href="/trial">Book a Trial Class Today</Link>
      <ul>
        <li>Awareness – Know Your Surroundings</li>
        <li>Confidence – Knowledge of Self</li>
        <li>Prevention – De-escalation Techniques</li>
        <li>Hand to Hand – No Nonsense Striking Skills</li>
        <li>Self Defence – Against Single and Multiple Attackers</li>
        <li>Strength – Through High Intensity Training</li>
        <li>Aggression – Learn how to control & channel your aggression</li>
      </ul>
      <div>about skms section, screenshot </div>
      <div>Blue banner screenshot</div>
      <div>membership options tiles, screenshot</div>
      <div>Testimonials section, screenshot</div>
      <div>Recent News section, screenshot</div>
    </main>
  );
}
