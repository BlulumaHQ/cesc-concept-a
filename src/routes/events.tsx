import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { events } from "@/lib/site-data";
import eventSummit from "@/assets/event-summit.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Networking — CESC" },
      { name: "description", content: "Premium leadership forums, networking events, and galas connecting Canadian and international business communities." },
      { property: "og:title", content: "CESC Events & Networking" },
      { property: "og:description", content: "Curated convenings for entrepreneurs, executives, and innovators." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const featured = events[0];
  const rest = events.slice(1);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events & Networking"
        title="Convenings designed for collaboration, insight, and lasting relationships."
        subtitle="CESC events foster meaningful business relationships, encourage collaboration, and support leadership development across industries and communities."
        image={eventSummit}
      />

      <section className="py-24">
        <div className="container-x">
          <p className="eyebrow mb-5">Featured</p>
          <article className="grid md:grid-cols-12 gap-10 items-center mt-6">
            <div className="md:col-span-7 aspect-[4/3] overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{featured.date} · {featured.location}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">{featured.title}</h2>
              <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">{featured.description}</p>
              <button className="btn btn-primary mt-8" type="button">Register Interest</button>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[var(--border)]">
        <div className="container-x">
          <p className="eyebrow mb-5">Upcoming</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12">The CESC calendar.</h2>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {[featured, ...rest].map((e) => (
              <div key={e.slug} className="grid md:grid-cols-12 gap-6 py-8 items-center">
                <p className="md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{e.date}</p>
                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl leading-tight">{e.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{e.description}</p>
                </div>
                <p className="md:col-span-3 text-sm text-[var(--ink-soft)]">{e.location}</p>
                <div className="md:col-span-1 md:text-right">
                  <button className="text-sm border-b border-[var(--gold)] pb-1 hover:text-[var(--secondary)]" type="button">RSVP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {[
            { t: "Leadership Forums", d: "Curated discussions with executives and policy leaders shaping Canada's economic future." },
            { t: "Networking Galas", d: "Signature evenings of formal celebration, recognition, and high-level introductions." },
            { t: "Educational Panels", d: "Working sessions and masterclasses for founders, professionals, and emerging leaders." },
          ].map((c) => (
            <div key={c.t}>
              <p className="eyebrow mb-4">Format</p>
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
