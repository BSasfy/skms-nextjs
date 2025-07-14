export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold uppercase">
          What Our Students Say
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Deirdre Craddock */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                DC
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">
                  Deirdre Craddock
                </h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Training KM was the best decision I have ever made for my health
              as well as my safety. Without a doubt I am safer, feel braver but
              best of all it helps control my Fibromyalgia so now I have less
              pain. It helped restore my strength after major surgery too,
              stopping me feeling so vulnerable after being sick.
            </p>
          </div>

          {/* Mitch */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                M
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Mitch</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              My son and I started Krav Maga with SKMS just over two years ago.
              He wanted to do something more varied and practical than
              traditional martial arts and I went to keep him company. Since
              then we have both really enjoyed it, made friends, got fitter and
              traded bruises in a friendly atmosphere.
            </p>
          </div>

          {/* Solange Pompl */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                SP
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Solange Pompl</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              I took the women&apos;s self defense class whilst living in
              Scotland for a year, as I wanted to learn to protect myself
              better. I liked it so much that I started the regular course until
              I left Scotland. Now, two years later, I&apos;ve started taking up
              classes in The Netherlands again.
            </p>
          </div>

          {/* Gracie Moffat */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                GM
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Gracie Moffat</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Learning Krav Maga has allowed me to feel confident in my ability
              to defend myself and others, whether it&apos;s on a night out or
              travelling alone in a new country. Best decision I&apos;ve made
              for my self confidence!
            </p>
          </div>

          {/* Manoj Bagha */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                MB
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Manoj Bagha</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Private lessons helped me develop my Krav skills very quickly. The
              one on one lessons are fantastic they were at a time that suited
              me. We trained outside in potentially real life situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
