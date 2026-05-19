import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { leaders } from "@/lib/site-data";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — CESC" },
      { name: "description", content: "Meet the executive leadership advancing CESC's mission across Canada and international markets." },
      { property: "og:title", content: "Executive Leadership — CESC" },
      { property: "og:description", content: "Distinguished executives, entrepreneurs, and community leaders." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Council"
        title="Distinguished leaders advancing Canadian and international business."
        subtitle="Our leadership council is composed of entrepreneurs, executives, and community leaders united in a shared commitment to mentorship and meaningful collaboration."
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {leaders.map((l) => (
            <article key={l.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--secondary)]">
                <img src={l.image} alt={l.name} loading="lazy" width={768} height={960} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{l.title}</p>
                <h3 className="font-display text-3xl mt-3">{l.name}</h3>
                <p className="mt-4 text-[var(--ink-soft)] leading-relaxed">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
