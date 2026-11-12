import Link from "next/link";
import { type Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Scot Krav Maga Systems Ltd collects and uses personal data for classes, contact enquiries, and the SKMS newsletter.",
  alternates: {
    canonical: "https://scotkravmaga.co.uk/privacy",
  },
};

const LAST_UPDATED = "12 November 2026";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li className="text-blue-200">Privacy Policy</li>
            </ul>
          </nav>
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <article className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              This privacy notice explains how{" "}
              <strong className="font-semibold text-gray-900">
                Scot Krav Maga Systems Ltd
              </strong>{" "}
              (“SKMS”, “we”, “us”) collects and uses personal data when you use{" "}
              <a
                href="https://scotkravmaga.co.uk"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                scotkravmaga.co.uk
              </a>
              , contact us, subscribe to our newsletter, or book classes.
            </p>
            <p>
              We are a private limited company registered in Scotland (company
              number{" "}
              <strong className="font-semibold text-gray-900">SC431744</strong>).
              Registered office: Laurnic House, Ross Cottage Drive, Hamilton,
              ML3 7WR, Scotland.
            </p>
            <p>
              Contact for privacy matters:{" "}
              <a
                href="mailto:info@scotkravmaga.co.uk"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                info@scotkravmaga.co.uk
              </a>
              .
            </p>
          </div>

          <Section id="what-we-collect" title="1. What data we collect">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold text-gray-900">
                  Contact / enquiry forms:
                </strong>{" "}
                name, email, phone (optional), subject, message, and whether you
                opted into the newsletter.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Newsletter signup:
                </strong>{" "}
                email address (and name if you provided it via the contact
                form).
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Class bookings and payments:
                </strong>{" "}
                when you book or pay via SumUp, GoCardless, or similar, that
                provider collects the details needed for the booking and
                payment. We may receive your name, contact details, and booking
                or membership information so we can run the class and manage
                payments.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Technical data:
                </strong>{" "}
                standard server and hosting logs (for example IP address,
                browser type, pages requested) used for security, spam
                prevention, and keeping the site working.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Marketing / ads (selected pages):
                </strong>{" "}
                on some pages (for example our women-only classes page) we may
                use Meta (Facebook/Instagram) pixels or similar tools to measure
                ads and improve campaigns. Those tools may set cookies or
                similar identifiers.
              </li>
            </ul>
          </Section>

          <Section id="why-we-use-data" title="2. Why we use your data">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold text-gray-900">
                  Responding to enquiries
                </strong>{" "}
                — to reply to messages and arrange trials or classes. Legal
                basis: legitimate interests (running our club and answering
                you), and where relevant steps toward a contract.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Transactional emails
                </strong>{" "}
                — for example an automatic acknowledgement after you submit the
                contact form. Legal basis: legitimate interests / steps toward a
                contract.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Newsletter and marketing email
                </strong>{" "}
                — only if you opt in. Legal basis: consent (PECR / UK GDPR). You
                can unsubscribe at any time via the link in our emails or by
                contacting us.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Running classes and memberships
                </strong>{" "}
                — registers, safety, and admin. Legal basis: contract and
                legitimate interests.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Security and spam prevention
                </strong>{" "}
                — rate limits and abuse checks on forms. Legal basis: legitimate
                interests.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Advertising measurement
                </strong>{" "}
                — where used, to understand campaign performance. Legal basis:
                consent where required for non-essential cookies/pixels, and/or
                legitimate interests for limited measurement depending on the
                tool and settings.
              </li>
            </ul>
          </Section>

          <Section id="who-we-share-with" title="3. Who we share data with">
            <p>We use service providers who process data for us, including:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold text-gray-900">Brevo</strong> —
                email delivery, contact auto-replies, and newsletter list
                management.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Vercel</strong> —
                website hosting.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">SumUp</strong> —
                online bookings and card payments (their own privacy notice
                applies to the checkout).
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  GoCardless
                </strong>{" "}
                — Direct Debit / recurring membership payments (their own
                privacy notice applies).
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Meta</strong> —
                where ad pixels are active on a page.
              </li>
            </ul>
            <p>
              We do not sell your personal data. We may disclose information if
              required by law or to protect the club, our members, or others.
            </p>
          </Section>

          <Section id="international-transfers" title="4. International transfers">
            <p>
              Some providers (including Brevo, Vercel, Meta, SumUp, or
              GoCardless) may process data outside the UK. Where that happens,
              they should use appropriate safeguards (for example UK adequacy
              regulations or standard contractual clauses). Details are in each
              provider’s privacy notice.
            </p>
          </Section>

          <Section id="retention" title="5. How long we keep data">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold text-gray-900">
                  Enquiries:
                </strong>{" "}
                usually for as long as needed to handle your request and for a
                short period afterwards for follow-up and records (typically up
                to 24 months unless you become a member or the conversation
                continues).
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Newsletter:
                </strong>{" "}
                until you unsubscribe or we delete the list entry. We keep
                suppression/unsubscribe records as needed so we do not email you
                again by mistake.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">
                  Members / students:
                </strong>{" "}
                for the membership period and a reasonable period afterwards for
                admin, safety, and legal reasons.
              </li>
            </ul>
          </Section>

          <Section id="your-rights" title="6. Your rights">
            <p>Under UK GDPR you can ask us to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>access your personal data</li>
              <li>correct inaccurate data</li>
              <li>erase data (in some cases)</li>
              <li>restrict or object to certain processing</li>
              <li>receive data in a portable format (in some cases)</li>
              <li>withdraw consent (for newsletter / marketing) at any time</li>
            </ul>
            <p>
              Email{" "}
              <a
                href="mailto:info@scotkravmaga.co.uk"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                info@scotkravmaga.co.uk
              </a>{" "}
              to exercise these rights. You can also complain to the{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </Section>

          <Section id="children" title="7. Children and teens">
            <p>
              We run classes for children and teens. Enquiries and bookings for
              under-18s should be made by a parent or guardian. We do not
              knowingly send marketing email to children. If you believe we hold
              a child’s data inappropriately, contact us and we will correct it.
            </p>
          </Section>

          <Section id="cookies" title="8. Cookies and similar tech">
            <p>
              The site needs basic technical storage to function. Non-essential
              tools (such as Meta advertising pixels on selected pages) may use
              cookies or similar technologies. We ask for your choice via a
              cookie banner before loading optional tracking. You can also
              control cookies through your browser settings. Blocking some
              cookies may affect ad measurement.
            </p>
            <p>
              To change a previous choice on this device, clear site data for
              scotkravmaga.co.uk (or local storage key{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
                skms-cookie-consent
              </code>
              ) and reload the page.
            </p>
          </Section>

          <Section id="changes" title="9. Changes">
            <p>
              We may update this notice from time to time. The “Last updated”
              date at the top will change when we do.
            </p>
          </Section>

          <Section id="contact" title="10. Contact">
            <p>
              Scot Krav Maga Systems Ltd
              <br />
              Email:{" "}
              <a
                href="mailto:info@scotkravmaga.co.uk"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                info@scotkravmaga.co.uk
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+4407512027411"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                07512 027411
              </a>
              <br />
              Website:{" "}
              <Link
                href="/contact-us"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                Contact us
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              This page is a practical privacy notice for our club website. It
              is not legal advice.
            </p>
          </Section>
        </article>
      </div>
    </main>
  );
}
