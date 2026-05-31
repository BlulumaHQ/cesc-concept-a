import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import community from "@/assets/community-impact.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/community-impact")({
  head: () => ({
    meta: [
      { title: "Community Impact — CESC" },
      { name: "description", content: "Investing in mentorship, education, and multicultural collaboration that strengthens Canada's future communities." },
      { property: "og:title", content: "Community Impact — CESC" },
      { property: "og:description", content: "Leadership in service of community, education, and the next generation." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  const t = useT();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Community Impact"
        title="Leadership in service of community, education, and the next generation."
        subtitle="CESC believes in creating meaningful impact beyond business through education, mentorship, collaboration, and community engagement initiatives that strengthen multicultural communities across Canada."
        image={community}
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-3 gap-12">
          {[
            { k: "200+", v: "Mentees Supported" },
            { k: "35+", v: "Community Partners" },
            { k: "$1.2M", v: "Annual Community Investment" },
          ].map((s) => (
            <div key={s.v} className="border-t border-[var(--gold)] pt-6">
              <div className="font-display text-5xl text-[var(--primary)]">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">{t(s.v)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-y border-[var(--border)]">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {[
            { t: "Mentorship Program", d: "Pairing emerging entrepreneurs with experienced executives across industries for one-on-one guidance and long-term development." },
            { t: "Scholarship & Education", d: "Supporting the next generation of Canadian leaders through scholarship initiatives and educational partnerships." },
            { t: "Cross-Cultural Dialogue", d: "Convening communities, institutions, and industries to advance multicultural collaboration and understanding." },
            { t: "Civic Engagement", d: "Encouraging meaningful participation in the cultural, economic, and civic life of cities across Canada." },
          ].map((p) => (
            <div key={p.t} className="p-2">
              <p className="eyebrow mb-4">{t("Initiative")}</p>
              <h3 className="font-display text-2xl">{t(p.t)}</h3>
              <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">{t(p.d)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[var(--primary)] text-white text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            {t("Partner with CESC to advance community-driven leadership.")}
          </h2>
          <Link to="/partnership" className="mt-8 inline-flex btn btn-gold">{t("Become a Partner")}</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
