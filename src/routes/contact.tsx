import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CESC" },
      { name: "description", content: "Get in touch with the CESC team in Vancouver, BC, Canada." },
      { property: "og:title", content: "Contact CESC" },
      { property: "og:description", content: "We welcome inquiries from members, partners, and the wider community." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="We welcome inquiries from members, partners, and the wider community." />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div>
              <p className="eyebrow mb-3">Headquarters</p>
              <p className="flex gap-3 text-[var(--ink-soft)]"><MapPin size={16} className="mt-1 text-[var(--gold)]" /> Vancouver, British Columbia, Canada</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Email</p>
              <p className="flex gap-3 text-[var(--ink-soft)]"><Mail size={16} className="mt-1 text-[var(--gold)]" /> info@cescglobal.org</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <p className="flex gap-3 text-[var(--ink-soft)]"><Phone size={16} className="mt-1 text-[var(--gold)]" /> (604) 555-0188</p>
            </div>
          </div>

          <form className="md:col-span-8 grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Company" name="company" />
            <Field label="Phone" name="phone" />
            <Field label="Subject" name="subject" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] mb-2">Message</label>
              <textarea id="message" name="message" rows={6} className="w-full bg-white border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
            </div>
            <button className="btn btn-primary sm:col-span-2 justify-self-start" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] mb-2">{label}</label>
      <input id={name} name={name} type={type} className="w-full bg-white border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
    </div>
  );
}
