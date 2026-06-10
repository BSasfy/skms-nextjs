const testimonials = [
  {
    initials: "DC",
    name: "Deirdre Craddock",
    quote:
      "Training KM was the best decision I have ever made for my health as well as my safety. I am safer, feel braver, and it helps control my Fibromyalgia.",
  },
  {
    initials: "M",
    name: "Mitch",
    quote:
      "We have both really enjoyed it, made friends, got fitter and traded bruises in a friendly atmosphere. The instructors are great.",
  },
  {
    initials: "SP",
    name: "Solange Pompl",
    quote:
      "Krav Maga has made me fitter, stronger and more self-confident. Taking classes with Robert at SKMS is a great alternative.",
  },
  {
    initials: "GM",
    name: "Gracie Moffat",
    quote:
      "Learning Krav Maga has allowed me to feel confident in my ability to defend myself and others. Best decision for my self confidence!",
  },
  {
    initials: "MB",
    name: "Manoj Bagha",
    quote:
      "Private lessons helped me develop my Krav skills very quickly. I would highly recommend SKMS private lessons.",
  },
];

function TestimonialCard({
  initials,
  name,
  quote,
}: (typeof testimonials)[number]) {
  return (
    <div className="mx-3 w-[340px] shrink-0 rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white">
          {initials}
        </div>
        <span className="font-bold text-white">{name}</span>
      </div>
      <p className="text-sm leading-relaxed text-zinc-300 italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-zinc-950 py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-bold tracking-[0.3em] text-red-500 uppercase">
          Real People. Real Results.
        </p>
        <h2 className="text-3xl font-black text-white uppercase md:text-4xl">
          What Our Fighters Say
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

        <div className="trial-marquee flex w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
