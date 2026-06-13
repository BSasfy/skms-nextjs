export default function Testimonials() {
  return (
    <section className="border-t border-zinc-800 py-16">
      <div className="container mx-auto px-4">
        <p className="skms-section-label text-center">Real People. Real Results.</p>
        <h2 className="mb-12 text-center text-4xl font-black text-white uppercase">
          What Our Students Say
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="skms-card">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                DC
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-white">Deirdre Craddock</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Training KM was the best decision I have ever made for my health
              as well as my safety. Without a doubt I am safer, feel braver but
              best of all it helps control my Fibromyalgia so now I have less
              pain.
            </p>
          </div>

          <div className="skms-card">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                M
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-white">Mitch</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              My son and I started Krav Maga with SKMS just over two years ago.
              Since then we have both really enjoyed it, made friends, got
              fitter and traded bruises in a friendly atmosphere.
            </p>
          </div>

          <div className="skms-card">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                SP
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-white">Solange Pompl</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              I took the women&apos;s self defense class whilst living in
              Scotland for a year. Krav Maga has made me fitter, stronger and
              more self-confident.
            </p>
          </div>

          <div className="skms-card">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                GM
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-white">Gracie Moffat</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Learning Krav Maga has allowed me to feel confident in my ability
              to defend myself and others. Best decision I&apos;ve made for my
              self confidence!
            </p>
          </div>

          <div className="skms-card">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                MB
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-white">Manoj Bagha</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Private lessons helped me develop my Krav skills very quickly. We
              trained outside in potentially real life situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
