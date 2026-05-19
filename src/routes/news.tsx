import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — CESC" },
      { name: "description", content: "Editorial perspectives on entrepreneurship, leadership, and international business from the CESC community." },
      { property: "og:title", content: "News & Insights — CESC" },
      { property: "og:description", content: "Perspectives on leadership, entrepreneurship, and international business." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [featured, ...rest] = articles;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & Insights"
        title="Perspectives on leadership, entrepreneurship, and international business."
        subtitle="Editorial commentary and reporting from the CESC community on the trends shaping Canada's economic future."
      />

      <section className="py-24">
        <div className="container-x">
          <Link
            to="/news/$slug"
            params={{ slug: featured.slug }}
            className="group grid md:grid-cols-12 gap-10 items-center"
          >
            <div className="md:col-span-7 aspect-[4/3] overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{featured.category} · {featured.date}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight group-hover:text-[var(--secondary)]">{featured.title}</h2>
              <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-block text-sm border-b border-[var(--gold)] pb-1">Read Article</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[var(--border)]">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {rest.map((a) => (
            <Link key={a.slug} to="/news/$slug" params={{ slug: a.slug }} className="group block">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{a.category} · {a.date}</p>
                <h3 className="font-display text-2xl mt-3 leading-tight group-hover:text-[var(--secondary)]">{a.title}</h3>
                <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
