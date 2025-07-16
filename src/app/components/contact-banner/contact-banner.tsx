export default function ContactBanner() {
  return (
    <section className="bg-blue-900 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">Got a question?</h2>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="mt-8">
            <p className="mb-2 text-lg">Call/WhatsApp us on</p>
            <a
              href="tel:07512027411"
              className="text-2xl font-bold transition-colors duration-200 hover:text-blue-300"
            >
              07512027411
            </a>
            <p className="mt-2 text-lg">or message us at</p>
            <a
              href="mailto:info@scotkravmaga.co.uk"
              className="text-2xl font-bold transition-colors duration-200 hover:text-blue-300"
            >
              info@scotkravmaga.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
