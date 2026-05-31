import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { secretariat } from "@/lib/site-data";

export const Route = createFileRoute("/secretariat")({
  head: () => ({
    meta: [
      { title: "10th Term Secretariat — CESC" },
      { name: "description", content: "Meet the 10th term Secretariat of the Chinese Enterprises Society of Canada — the team driving daily operations, member services, and external collaboration." },
      { property: "og:title", content: "10th Term Secretariat — CESC" },
      { property: "og:description", content: "New energy, new journey — the secretariat powering CESC's daily operations and member experience." },
    ],
  }),
  component: SecretariatPage,
});

function SecretariatPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="New Energy · New Journey"
        title="The 10th Term Secretariat of CESC."
        subtitle="The CESC Secretariat manages day-to-day operations, member engagement, partnership development, and communications — connecting members with government, chambers of commerce, and business partners to amplify the influence of Chinese Canadian entrepreneurs."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="eyebrow mb-4">Secretariat Members</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1]">
              Operations, partnerships, and member experience.
            </h2>
            <p className="mt-6 text-[var(--ink-soft)] leading-relaxed">
              The Secretariat coordinates meetings, member activities, document and financial management,
              external relations, communications, and member services — ensuring CESC operates with the rigor
              and care its members deserve.
            </p>
          </div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {secretariat.map((l) => (
              <article key={l.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[var(--secondary)]">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{l.title}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-3">
                    {l.name}
                    {l.chineseName && (
                      <span className="block text-base text-[var(--ink-soft)] font-sans tracking-wide mt-1">
                        {l.chineseName}
                      </span>
                    )}
                  </h3>
                  <p className="mt-4 text-[var(--ink-soft)] leading-relaxed text-[15px]">{l.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}