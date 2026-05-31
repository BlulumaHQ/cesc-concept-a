import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { featuredEventData, pastEvents } from "@/lib/site-data";
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
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events & Networking"
        title="Convenings designed for collaboration, insight, and lasting relationships."
        subtitle="CESC events foster meaningful business relationships, encourage collaboration, and support leadership development across industries and communities."
        image={eventSummit}
      />

      {/* FEATURED EVENT */}
      <section className="py-28 md:py-36 bg-[var(--cream)]">
        <div className="container-wide">
          <p className="eyebrow mb-8">{featuredEventData.category}</p>
          <article className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-7 relative overflow-hidden bg-[var(--primary)] aspect-[4/3] lg:aspect-auto lg:min-h-[640px]">
              <img
                src={featuredEventData.image}
                alt={featuredEventData.title}
                loading="lazy"
                width={1600}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent" />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">{featuredEventData.date} · {featuredEventData.location}</p>
              <h1 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
                {featuredEventData.title}
              </h1>
              <div className="mt-6 w-12 h-px bg-[var(--gold)]" />
              <p className="mt-7 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                {featuredEventData.longDescription}
              </p>
              <a href="mailto:events@cescglobal.org" className="btn btn-primary mt-10 self-start">
                Request the Forum Recap <ArrowRight size={16} />
              </a>
              <p className="mt-4 text-xs text-[var(--ink-soft)]">
                For media coverage, photos, or partnership inquiries, contact{" "}
                <a href="mailto:events@cescglobal.org" className="border-b border-[var(--gold)]">events@cescglobal.org</a>
              </p>
            </div>
          </article>

          {/* Agenda + Speakers + Networking */}
          <div className="grid md:grid-cols-3 gap-12 mt-24 pt-16 border-t border-[var(--border)]">
            <div>
              <p className="eyebrow mb-5">Agenda Highlights</p>
              <ul className="space-y-4">
                {featuredEventData.agenda.map((a) => (
                  <li key={a.item} className="flex gap-4">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] pt-1 w-20 shrink-0">{a.time}</span>
                    <span className="text-[14px] text-[var(--ink)] leading-relaxed">{a.item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">Speakers & Honored Guests</p>
              <ul className="space-y-4 text-[14px] text-[var(--ink-soft)] leading-relaxed">
                {featuredEventData.speakers.map((s) => (
                  <li key={s} className="border-l border-[var(--gold)] pl-4">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">Strategic Outcomes</p>
              <p className="text-[14px] text-[var(--ink-soft)] leading-relaxed">
                CESC and the Canadian Chinese Entrepreneurs Federation signed a strategic cooperation
                agreement to integrate resources across enterprise services, project matching, policy
                interpretation, and international market expansion — strengthening the influence and
                competitiveness of Chinese Canadian enterprises across North America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-24 md:py-32 bg-white border-t border-[var(--border)]">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">Archive</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">Past Events</h2>
            </div>
            <p className="text-sm text-[var(--ink-soft)] max-w-sm hidden md:block">
              A selection of recent CESC convenings, panels, and gatherings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastEvents.slice(0, 4).map((e) => (
              <article key={e.slug} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <img src={e.image} alt={e.title} loading="lazy" width={1280} height={896} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">{e.date}</p>
                  <h3 className="font-display text-lg mt-2 leading-snug">{e.title}</h3>
                  <p className="mt-2 text-xs text-[var(--ink-soft)]">{e.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
