import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { leaders, type Leader } from "@/lib/site-data";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "10th Term Leadership — CESC" },
      { name: "description", content: "Meet the 10th term Board of Directors of the Chinese Enterprises Society of Canada — President, Vice Presidents, Secretary General, and Mentors." },
      { property: "og:title", content: "10th Term Leadership — CESC" },
      { property: "og:description", content: "President, Vice Presidents, Secretary General, and Mentors of CESC's 10th term." },
    ],
  }),
  component: LeadershipPage,
});

const GROUPS: { key: Leader["group"]; eyebrow: string; heading: string; cols: string }[] = [
  { key: "President", eyebrow: "10th Term President", heading: "Leading CESC into a new chapter.", cols: "md:grid-cols-1 max-w-2xl mx-auto" },
  { key: "Vice President", eyebrow: "Vice Presidents", heading: "Industry leaders driving CESC forward.", cols: "md:grid-cols-2 lg:grid-cols-3" },
  { key: "Secretary General", eyebrow: "Secretary General", heading: "Coordinating operations and partnerships.", cols: "md:grid-cols-2 lg:grid-cols-3" },
  { key: "Mentor", eyebrow: "CESC Mentors", heading: "Distinguished advisors and industry icons.", cols: "md:grid-cols-2 lg:grid-cols-3" },
];

function LeadershipPage() {
  const t = useT();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The 10th Term Council"
        title="Distinguished leaders advancing Canadian and international business."
        subtitle="The 10th term Board of Directors of CESC unites entrepreneurs, executives, and industry mentors committed to collaboration, mentorship, and the long-term growth of the Chinese Canadian business community."
      />

      {GROUPS.map((group, idx) => {
        const people = leaders.filter((l) => l.group === group.key);
        if (people.length === 0) return null;
        const dark = idx % 2 === 1;
        return (
          <section key={group.key} className={`py-20 md:py-28 ${dark ? "bg-[var(--cream)]" : ""}`}>
            <div className="container-x">
              <div className="mb-12 md:mb-16">
                <p className="eyebrow mb-4">{t(group.eyebrow)}</p>
                <h2 className="font-display text-3xl md:text-4xl leading-[1.1] max-w-3xl">{t(group.heading)}</h2>
              </div>
              <div className={`grid gap-10 md:gap-12 ${group.cols}`}>
                {people.map((l) => (
                  <article key={l.name} className="group">
                    <div className="aspect-[4/5] overflow-hidden bg-[var(--secondary)]">
                      <img src={l.image} alt={l.name} loading="lazy" width={768} height={960} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="pt-6">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{t(l.title)}</p>
                      <h3 className="font-display text-2xl md:text-3xl mt-3">
                        {t(l.name)}
                        {l.chineseName && (
                          <span className="block text-base text-[var(--ink-soft)] font-sans tracking-wide mt-1">{l.chineseName}</span>
                        )}
                      </h3>
                      <p className="mt-4 text-[var(--ink-soft)] leading-relaxed text-[15px]">{t(l.bio)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </SiteLayout>
  );
}
