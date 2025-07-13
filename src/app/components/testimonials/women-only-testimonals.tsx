export default function WomenOnlyTestimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Students Say
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
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

          {/* Camilla Damlund */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                CD
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Camilla Damlund</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Learning Krav Maga with SKMS is a true confidence builder. Robert
              and the other trainers are dedicated to making training fun and
              epic while maintaining a safe environment for all.
            </p>
          </div>

          {/* Alyna Karim */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                AK
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Alyna Karim</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              I began Krav Maga in 2016, with the pro-active intention to learn
              some basic self-defence as I started university. The classes are
              fun, energetic and informative. They have greatly helped to build
              and improve my self-confidence.
            </p>
          </div>

          {/* Marion Ambrose */}
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                MA
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">Marion Ambrose</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Absolutely love SKMS classes! Everyone is super friendly and the
              trainers are patient and understanding. I&apos;ve definitely
              learned some self defence techniques that I hopefully will never
              need to use, but I feel prepared!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
