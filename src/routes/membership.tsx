import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Check } from "lucide-react";
import eventGala from "@/assets/event-gala.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — CESC" },
      { name: "description", content: "Join a growing network of entrepreneurs, executives, and industry leaders across Canada and international markets." },
      { property: "og:title", content: "CESC Membership" },
      { property: "og:description", content: "Access exclusive leadership events, mentorship, and international business connections." },
    ],
  }),
  component: MembershipPage,
});

const BENEFITS = [
  "Professional Networking Opportunities",
  "Exclusive Leadership Events",
  "Business Collaboration Opportunities",
  "Community Engagement Initiatives",
  "Entrepreneurial Mentorship",
  "International Business Connections",
];

const TIERS = [
  { name: "Professional", price: "From $480 / year", desc: "For emerging professionals and entrepreneurs building their network and expertise.", perks: ["Member events & forums", "Quarterly publications", "Community programs"] },
  { name: "Executive", price: "From $1,200 / year", desc: "For senior leaders and established entrepreneurs seeking deeper collaboration.", perks: ["All Professional benefits", "Invitation-only roundtables", "Council introductions", "Speaking opportunities"], featured: true },
  { name: "Corporate", price: "Custom", desc: "For organizations advancing leadership and partnership at scale.", perks: ["Up to 8 named seats", "Sponsorship programs", "Custom convenings"] },
];

function MembershipPage() {
  const t = useT();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Membership"
        title="Membership is an invitation into a community of leaders."
        subtitle="CESC membership provides access to a growing network of entrepreneurs, executives, professionals, and industry leaders across Canada and international markets."
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow mb-5">{t("Member Benefits")}</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
              {t("What you gain as a CESC member.")}
            </h2>
            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 items-start text-[15px]">
                  <Check size={18} className="mt-0.5 text-[var(--gold)] shrink-0" />
                  <span>{t(b)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={eventGala} alt="" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-[var(--border)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-5">{t("Tiers")}</p>
            <h2 className="font-display text-3xl md:text-4xl">{t("Choose the membership that fits your journey.")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`p-10 border ${tier.featured ? "bg-[var(--primary)] text-white border-[var(--gold)]" : "bg-[var(--background)] border-[var(--border)]"}`}
              >
                <p className={`text-[11px] uppercase tracking-[0.22em] ${tier.featured ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>{t(tier.name)}</p>
                <p className="font-display text-2xl mt-3">{t(tier.price)}</p>
                <p className={`mt-4 text-sm leading-relaxed ${tier.featured ? "text-white/75" : "text-[var(--ink-soft)]"}`}>{t(tier.desc)}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check size={14} className="mt-0.5 text-[var(--gold)]" /> {t(p)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-5">{t("Apply")}</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">{t("Apply for Membership")}</h2>
          <p className="text-[var(--ink-soft)] leading-relaxed mb-10">
            {t("Memberships are reviewed on a rolling basis. Share a few details about yourself and our team will be in touch.")}
          </p>
          <p className="text-sm text-[var(--ink-soft)] mb-10">
            {t("Prefer email? Write to")}{" "}
            <a href="mailto:membership@cescglobal.org" className="text-[var(--primary)] border-b border-[var(--gold)]">membership@cescglobal.org</a>.
          </p>
          <MembershipForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function MembershipForm() {
  const t = useT();
  return (
    <form className="grid md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
      <Field label={t("Full Name")} name="name" />
      <Field label={t("Email")} name="email" type="email" />
      <Field label={t("Company")} name="company" />
      <Field label={t("Title")} name="title" />
      <Field label={t("Industry")} name="industry" className="md:col-span-2" />
      <div className="md:col-span-2">
        <label className="block text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] mb-2">{t("Tell us about your interest in CESC")}</label>
        <textarea rows={5} className="w-full bg-white border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
      </div>
      <button className="btn btn-primary md:col-span-2 justify-self-start mt-2" type="submit">{t("Submit Application")}</button>
    </form>
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
