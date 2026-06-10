import Link from "next/link";
import HeaderBanner from "../components/header/header";
import { PRICES } from "../constants/prices";
import ImageCarousel from "./components/image-carousel";
import TestimonialMarquee from "./components/testimonial-marquee";

const pricingOptions = [
  {
    title: "Adult Trial Class",
    price: PRICES.adult_trial,
    href: "https://scottish-krav-maga-systems-ltd.sumupstore.com/product/adult-trial-class",
    tag: "Most Popular",
  },
  {
    title: "Kids & Junior Trial",
    price: PRICES.kids_trial,
    href: "https://scottish-krav-maga-systems-ltd.sumupstore.com/product/kids-and-teens-trial-class",
    tag: "Ages 5–16",
  },
  {
    title: "Adult Concession",
    price: PRICES.concession_trial,
    href: "https://scottish-krav-maga-systems-ltd.sumupstore.com/product/adult-trial-class-student-discount",
    tag: "Student Discount",
  },
];

const stats = [
  { value: "100%", label: "Beginner Friendly" },
  { value: "Real", label: "Self-Defence Skills" },
  { value: "All", label: "Ages & Abilities" },
  { value: "Zero", label: "Excuses Needed" },
];

export default function TrialPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeaderBanner
        img="/banners/punching-bag-banner.jpg"
        title="Book Your Trial"
        subtitle="Step On The Mat. Own Your Power."
        description="One class is all it takes to discover what you're capable of. No experience needed — just show up ready to train."
        link="#book-trial"
        linkText={`Book Now — From £${PRICES.adult_trial}`}
      />

      {/* Stats strip */}
      <section className="border-y border-red-600/30 bg-black">
        <div className="container mx-auto grid grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <span className="text-3xl font-black text-red-500 md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro + Image Carousel */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.3em] text-red-500 uppercase">
                Your First Fight Is With Fear
              </p>
              <h2 className="mb-6 text-4xl leading-tight font-black text-white uppercase md:text-5xl">
                Walk In Unsure.
                <br />
                <span className="text-red-500">Walk Out Unstoppable.</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                Our trial class gives you a real taste of Krav Maga — practical
                self-defence, a serious workout, and a community that has your
                back. Meet our instructors, push your limits, and find out why
                Glasgow&apos;s fighters choose SKMS.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#book-trial"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-black tracking-wide text-white uppercase transition-all hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                  Book a Trial
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-8 py-4 text-lg font-bold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Image placeholder grid */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-bold tracking-[0.3em] text-red-500 uppercase">
              Train With Purpose
            </p>
            <h2 className="text-3xl font-black text-white uppercase md:text-4xl">
              This Is What You&apos;re Signing Up For
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "front_hand", label: "Strike & Defend" },
              { icon: "fitness_center", label: "Get Combat Fit" },
              { icon: "groups", label: "Train Together" },
              { icon: "shield", label: "Stay Safe" },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)]"
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]" />
                <span className="material-symbols-outlined relative mb-3 text-5xl text-red-500 transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <p className="relative text-sm font-black tracking-widest text-zinc-300 uppercase">
                  {item.label}
                </p>
                <p className="relative mt-1 text-xs text-zinc-600">Photo soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="book-trial" className="scroll-mt-24 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-bold tracking-[0.3em] text-red-500 uppercase">
              Pick Your Class
            </p>
            <h2 className="text-3xl font-black text-white uppercase md:text-4xl">
              Book a Trial Class
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Choose your class type below. There are always spaces — no waiting
              lists, no gatekeeping.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {pricingOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 p-8 text-center transition-all hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]"
              >
                <span className="mb-4 inline-block rounded-full bg-red-600/20 px-3 py-1 text-xs font-bold tracking-wider text-red-400 uppercase">
                  {option.tag}
                </span>
                <h3 className="mb-4 text-xl font-black text-white">
                  {option.title}
                </h3>
                <p className="text-5xl font-black text-red-500">
                  £{option.price}
                </p>
                <p className="mt-1 text-sm text-zinc-500">GBP</p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold tracking-wide text-zinc-400 uppercase transition-colors group-hover:text-red-400">
                  Book Now
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-600/50" />
              <h2 className="text-2xl font-black tracking-wide text-white uppercase md:text-3xl">
                Class Timetable
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-600/50" />
            </div>

            <p className="mb-8 text-center text-zinc-400">
              <strong className="text-zinc-200">Locations:</strong>{" "}
              <Link
                href="https://maps.app.goo.gl/fsp7TmioZ25shdn97"
                className="text-red-400 hover:text-red-300"
              >
                Firhill Sports Complex
              </Link>{" "}
              (kids, teens & adults) ·{" "}
              <Link
                href="https://maps.app.goo.gl/dyyS8K2JAoVcZcwr5"
                className="text-red-400 hover:text-red-300"
              >
                Kelvin Hall
              </Link>{" "}
              (adults)
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-red-500 uppercase">
                  <span className="material-symbols-outlined">person</span>
                  Adults
                </h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex flex-wrap gap-x-2">
                    <strong className="text-white">Wednesdays</strong>
                    <span className="text-zinc-500">·</span>
                    <span>7–8.30 pm</span>
                    <span className="text-zinc-500">·</span>
                    <Link
                      href="https://maps.app.goo.gl/fsp7TmioZ25shdn97"
                      className="text-red-400 hover:text-red-300"
                    >
                      Firhill
                    </Link>
                  </li>
                  <li className="flex flex-wrap gap-x-2">
                    <strong className="text-white">Thursdays</strong>
                    <span className="text-zinc-500">·</span>
                    <span>6–7 pm</span>
                    <span className="text-zinc-500">·</span>
                    <Link
                      href="https://maps.app.goo.gl/dyyS8K2JAoVcZcwr5"
                      className="text-red-400 hover:text-red-300"
                    >
                      Kelvin Hall
                    </Link>
                  </li>
                  <li className="flex flex-wrap gap-x-2">
                    <strong className="text-white">Saturdays</strong>
                    <span className="text-zinc-500">·</span>
                    <span>10–11.30 am</span>
                    <span className="text-zinc-500">·</span>
                    <Link
                      href="https://maps.app.goo.gl/fsp7TmioZ25shdn97"
                      className="text-red-400 hover:text-red-300"
                    >
                      Firhill
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-zinc-500">
                  Prefer a beginners&apos; block?{" "}
                  <Link
                    href="/beginners"
                    className="font-bold text-red-400 hover:text-red-300"
                  >
                    Check here →
                  </Link>
                </p>
                <p className="mt-2 text-xs text-zinc-600">
                  Teens 14+ welcome with an accompanying adult. Ages 17+ welcome
                  solo.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-red-500 uppercase">
                  <span className="material-symbols-outlined">child_care</span>
                  Minis (5–11) & Teens (12–16)
                </h3>
                <ul className="text-zinc-300">
                  <li className="flex flex-wrap gap-x-2">
                    <strong className="text-white">Saturdays</strong>
                    <span className="text-zinc-500">·</span>
                    <span>9–10 am</span>
                    <span className="text-zinc-500">·</span>
                    <span>Firhill Sports Complex</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-red-500 uppercase">
                  <span className="material-symbols-outlined">school</span>
                  Beginners Courses
                </h3>
                <p className="text-zinc-300">
                  Women Only and Mixed Adult Beginners Courses —{" "}
                  <Link
                    href="/beginners"
                    className="font-bold text-red-400 hover:text-red-300"
                  >
                    View courses →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialMarquee />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800 py-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_40px)]" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-black text-white uppercase md:text-5xl">
            Ready to Hit Back?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-red-100">
            Book your trial now — there are always spaces. Or drop us a message
            and we&apos;ll get you sorted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#book-trial"
              className="inline-block rounded-lg bg-black px-10 py-4 text-lg font-black tracking-wide text-white uppercase transition-all hover:bg-zinc-900 hover:shadow-xl"
            >
              Book a Trial Class
            </Link>
            <Link
              href="/contact-us"
              className="inline-block rounded-lg border-2 border-white px-10 py-4 text-lg font-black tracking-wide text-white uppercase transition-all hover:bg-white/10"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left">
            <div>
              <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                Phone
              </p>
              <Link
                href="tel:07512027411"
                className="text-lg font-bold text-white hover:text-red-400"
              >
                07512027411
              </Link>
            </div>
            <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
            <div>
              <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                Email
              </p>
              <Link
                href="mailto:info@scotkravmaga.co.uk"
                className="text-lg font-bold text-white hover:text-red-400"
              >
                info@scotkravmaga.co.uk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="border-t border-zinc-800 py-16 text-center">
        <h2 className="text-4xl font-black tracking-wide text-white uppercase md:text-5xl">
          Stay Safe.{" "}
          <span className="text-red-500">Get Fit.</span> Hit Hard.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          <strong className="text-zinc-200">SKMS Krav Maga</strong> will bring
          out the best in you. Accessible, affordable, and seriously fun.
        </p>
      </section>
    </main>
  );
}
