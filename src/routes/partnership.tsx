import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import partner from "@/assets/partnership.jpg";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — CESC" },
      { name: "description", content: "Partnership opportunities for organizations, sponsors, and institutions invested in entrepreneurship and community impact." },
      { property: "og:title", content: "Partnership Opportunities — CESC" },
      { property: "og:description", content: "Collaborate with CESC to advance leadership, innovation, and community impact." },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partnership"
        title="Strategic collaboration with organizations shaping Canada's future."
        subtitle="CESC welcomes partnerships with organizations, sponsors, institutions, and industry leaders who share our commitment to innovation, entrepreneurship, leadership, and community impact."
        image={partner}
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {[
            { t: "Corporate Partners", d: "Multi-year partnerships positioning your organization at the centre of Canada's most influential business community." },
            { t: "Event Sponsorship", d: "Signature sponsorship of leadership summits, galas, and forums with high-profile audiences." },
            { t: "Institutional Allies", d: "Collaboration with universities, government, and cultural institutions advancing shared priorities." },
          ].map((p) => (
            <div key={p.t} className="border-t border-[var(--gold)] pt-6">
              <p className="eyebrow mb-3">Tier</p>
              <h3 className="font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-y border-[var(--border)]">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-5">Why Partner With CESC</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Access a curated community of decision-makers across Canada and Asia-Pacific markets.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-[var(--ink-soft)]">
            <p>Audience built of executives, founders, investors, and senior professionals across high-growth industries.</p>
            <p>Programs designed for substance — from intimate roundtables to large-scale leadership forums.</p>
            <p>Year-round visibility through editorial, events, and member communications.</p>
            <p>Long-term relationships rooted in mutual purpose and measurable impact.</p>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-x max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl">Start a partnership conversation.</h2>
          <p className="mt-4 text-[var(--ink-soft)]">Reach our partnerships team at <a href="mailto:partners@cesccanada.org" className="text-[var(--primary)] border-b border-[var(--gold)]">partners@cesccanada.org</a>.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
