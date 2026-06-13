import Link from "next/link";
import HeaderBanner from "../components/header/header";
import MottoSection from "../components/motto-section/motto-section";

const inputClass =
  "w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-transparent focus:ring-2 focus:ring-red-500";

export default function ContactUsPage() {
  return (
    <main className="skms-page">
      <HeaderBanner
        img="/banners/punching-bag-banner.jpg"
        title="Contact Us"
        subtitle="Get in Touch with SKMS Krav Maga"
        description="Questions about classes, trials, or membership? We're here to help."
        link="#contact-form"
        linkText="Send a Message"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="skms-section-label">We&apos;re Here For You</p>
            <h2 className="mb-4 text-2xl font-black text-white uppercase">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Interested in coming along to a class or finding out more about
              Krav Maga? Fill out the form and we&apos;ll be in touch soon.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="skms-card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                <span className="material-symbols-outlined text-3xl text-white">
                  mail
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
              <a href="mailto:info@scotkravmaga.co.uk" className="skms-link text-lg">
                info@scotkravmaga.co.uk
              </a>
            </div>

            <div className="skms-card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                <span className="material-symbols-outlined text-3xl text-white">
                  call
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Call</h3>
              <a href="tel:07512027411" className="skms-link text-lg">
                07512027411
              </a>
            </div>
          </div>

          <div id="contact-form" className="skms-card mb-12 scroll-mt-24 p-8">
            <h3 className="mb-6 text-center text-2xl font-black text-white uppercase">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-zinc-400">
                    First Name *
                  </label>
                  <input type="text" id="firstName" name="firstName" required className={inputClass} placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-zinc-400">
                    Last Name *
                  </label>
                  <input type="text" id="lastName" name="lastName" required className={inputClass} placeholder="Your last name" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" required className={inputClass} placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-400">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" className={inputClass} placeholder="Your phone number" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-400">
                  Subject *
                </label>
                <select id="subject" name="subject" required className={inputClass}>
                  <option value="">Select a subject</option>
                  <option value="trial-class">Book a Trial Class</option>
                  <option value="beginners-course">Beginners Course Information</option>
                  <option value="private-lessons">Private Lessons</option>
                  <option value="membership">Membership Information</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
                  Message *
                </label>
                <textarea id="message" name="message" required rows={6} className={inputClass} placeholder="Tell us more about what you're looking for..." />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="newsletter" name="newsletter" className="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-red-600 focus:ring-red-500" />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-zinc-400">
                  I would like to receive updates about SKMS classes and events
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="skms-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mb-12 border-l-4 border-red-500 bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-red-400">What to Expect</h3>
            <div className="space-y-3 text-zinc-400">
              <p>• We typically respond to all inquiries within 24 hours</p>
              <p>• For urgent matters, please call us directly</p>
              <p>• We&apos;re happy to answer any questions about our classes, pricing, or Krav Maga in general</p>
              <p>• Feel free to ask about trial classes, beginners courses, or private lessons</p>
            </div>
          </div>

          <div className="mb-12 rounded-xl border border-zinc-700 bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Want to keep up-to-date with SKMS?</h3>
            <p className="mb-4 text-zinc-400">Subscribe to our newsletter</p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input type="email" placeholder="Your Email Address" className={inputClass} />
              <button type="submit" className="skms-btn shrink-0">
                Subscribe
              </button>
            </form>
          </div>

          <div className="skms-card mb-12">
            <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold text-zinc-300">Classes & Courses</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/trial" className="skms-link">Book a Trial Class</Link></li>
                  <li><Link href="/classes" className="skms-link">View All Classes</Link></li>
                  <li><Link href="/beginners" className="skms-link">Beginners Courses</Link></li>
                  <li><Link href="/private-corporate-tuition" className="skms-link">Private Lessons</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-zinc-300">Information</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/join" className="skms-link">Membership Prices</Link></li>
                  <li><Link href="/timetable" className="skms-link">Class Timetable</Link></li>
                  <li><Link href="/instructors" className="skms-link">Meet Our Instructors</Link></li>
                  <li><Link href="/testimonials" className="skms-link">Student Testimonials</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <MottoSection />
        </div>
      </div>
    </main>
  );
}
