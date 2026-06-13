export default function ContactBanner() {
  return (
    <section className="skms-cta-section">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_40px)]" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-black text-white uppercase">
          Got a Question?
        </h2>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="mt-8">
            <p className="mb-2 text-lg text-red-100">Call/WhatsApp us on</p>
            <a
              href="tel:07512027411"
              className="text-2xl font-black text-white transition-colors duration-200 hover:text-red-200"
            >
              07512027411
            </a>
            <p className="mt-2 text-lg text-red-100">or message us at</p>
            <a
              href="mailto:info@scotkravmaga.co.uk"
              className="text-2xl font-black text-white transition-colors duration-200 hover:text-red-200"
            >
              info@scotkravmaga.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
