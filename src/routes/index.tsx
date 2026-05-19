import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { leaders, events, articles } from "@/lib/site-data";
import heroImg from "@/assets/hero-summit.jpg";
import skyline from "@/assets/vancouver-skyline.jpg";
import community from "@/assets/community-impact.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CESC — Empowering Chinese Canadian Business Leadership" },
      { name: "description", content: "A premier network of entrepreneurs, executives, and innovators advancing leadership and international opportunity across Canada." },
      { property: "og:title", content: "CESC — Chinese Enterprises Society of Canada" },
      { property: "og:description", content: "A premier network of entrepreneurs, executives, and innovators across Canada." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[var(--primary)] text-white">
        <img
          src={heroImg}
          alt="CESC executive networking summit in Vancouver"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/70 via-[var(--primary)]/40 to-[var(--primary)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/80 via-transparent to-transparent" />

        <div className="relative container-x pb-24 md:pb-32 pt-32">
          <p className="eyebrow mb-6">Established in Canada · Connected to the World</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl text-balance">
            Empowering the Next Generation of Chinese Canadian Business Leadership
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
            Connecting entrepreneurs, innovators, and industry leaders through collaboration, community
            engagement, and international business opportunities across Canada and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/membership" className="btn btn-gold">
              Become a Member <ArrowRight size={16} />
            </Link>
            <Link to="/events" className="btn btn-outline text-white border-white/40 hover:bg-white/10">
              Explore Upcoming Events
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl">
            {[
              { k: "20+", v: "Years of Leadership" },
              { k: "500+", v: "Active Members" },
              { k: "40+", v: "Annual Events" },
              { k: "12", v: "Industry Sectors" },
            ].map((s) => (
              <div key={s.v} className="bg-[var(--primary)] px-5 py-6">
                <div className="font-display text-3xl text-[var(--gold)]">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">About CESC</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
              A modern leadership organization shaping Canada's business future.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <div className="space-y-6 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              <p>
                CESC Chinese Enterprises Society of Canada is a modern leadership organization dedicated to
                fostering meaningful business connections, professional growth, and cross-cultural collaboration
                throughout Canada and international markets.
              </p>
              <p>
                Through networking initiatives, educational events, community engagement, and strategic
                partnerships, CESC provides a platform for entrepreneurs and professionals to build lasting
                relationships and create meaningful economic and social impact.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1 hover:text-[var(--secondary)]">
              Learn More About CESC <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 md:py-32 bg-[var(--primary)] text-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5">The Council</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">Executive Leadership</h2>
            </div>
            <Link to="/leadership" className="text-sm tracking-wide text-white/80 border-b border-[var(--gold)] pb-1 hover:text-white">
              View Full Council
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l) => (
              <article key={l.name} className="group hover-lift">
                <div className="aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{l.title}</p>
                  <h3 className="font-display text-xl mt-2">{l.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5">Convenings</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">Upcoming Events</h2>
            </div>
            <Link to="/events" className="text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1">
              View All Events
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e) => (
              <article key={e.slug} className="group hover-lift bg-white border border-[var(--border)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.image} alt={e.title} loading="lazy" width={1280} height={896} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{e.date}</p>
                  <h3 className="font-display text-2xl mt-3 leading-tight">{e.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{e.description}</p>
                  <p className="mt-5 text-xs text-[var(--ink-soft)]">{e.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="relative py-32 overflow-hidden">
        <img src={community} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--primary)]/85" />
        <div className="relative container-x text-white max-w-4xl">
          <p className="eyebrow mb-6">Community Impact</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            Building Stronger Communities Through Leadership
          </h2>
          <div className="mt-8 space-y-5 text-white/80 text-lg leading-relaxed max-w-3xl">
            <p>
              CESC believes that strong business communities create stronger cities, stronger partnerships, and
              greater opportunities for future generations.
            </p>
            <p>
              Our organization supports initiatives focused on entrepreneurship, mentorship, education, cultural
              collaboration, and meaningful community engagement across Canada.
            </p>
          </div>
          <Link to="/community-impact" className="mt-10 inline-flex btn btn-gold">
            Explore Our Impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5">Editorial</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">News & Insights</h2>
            </div>
            <Link to="/news" className="text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1">
              All Articles
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {articles.map((a) => (
              <Link
                key={a.slug}
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="group block hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <img src={a.image} alt={a.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{a.category} · {a.date}</p>
                  <h3 className="font-display text-2xl mt-3 leading-tight group-hover:text-[var(--secondary)]">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="relative py-28 overflow-hidden bg-[var(--primary)] text-white">
        <img src={skyline} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/85 to-[var(--primary)]/60" />
        <div className="relative container-x text-center max-w-3xl">
          <p className="eyebrow mb-6">Membership</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            Join a Community of Entrepreneurs, Leaders, and Innovators
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Become part of a growing network of professionals and business leaders committed to collaboration,
            leadership, innovation, and community impact.
          </p>
          <Link to="/membership" className="mt-10 inline-flex btn btn-gold">
            Apply for Membership <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
