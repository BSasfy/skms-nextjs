import Link from "next/link";
import HeaderBanner from "../components/header/header";
import MembershipsGrid from "../components/memberships/memberships-grid";
import MottoSection from "../components/motto-section/motto-section";

export default function JoinPage() {
  return (
    <main className="skms-page">
      <HeaderBanner
        img="/banners/punching-bag-banner.jpg"
        title="Join SKMS"
        subtitle="Sign Up to a Monthly Membership"
        description="Join Glasgow's only IKMF affiliated Krav Maga club."
        link="/trial"
        linkText="Join a Trial Class"
      />
      <div className="my-10 lg:my-20">
        <MembershipsGrid />
      </div>

      <section className="skms-cta-section">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_40px)]" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-black text-white uppercase">
            Ready to Start Your Krav Maga Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-100">
            Join Glasgow&apos;s premier Krav Maga club and transform your life
            with confidence, fitness, and self-defense skills.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/trial"
              className="inline-block rounded-lg bg-black px-8 py-4 text-lg font-black tracking-wide text-white uppercase transition-all hover:bg-zinc-900 hover:shadow-xl"
            >
              Book a Trial Class
            </Link>
            <Link
              href="mailto:info@scotkravmaga.co.uk"
              className="inline-block rounded-lg border-2 border-white px-8 py-4 text-lg font-black tracking-wide text-white uppercase transition-all hover:bg-white/10"
            >
              Contact Us for More Info
            </Link>
          </div>
        </div>
      </section>

      <MottoSection />
    </main>
  );
}
