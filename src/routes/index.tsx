import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { leaders, articles, featuredEventData } from "@/lib/site-data";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/hero-summit.jpg";
import heroForum from "@/assets/hero-forum.jpg";
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
  const t = useT();
  const president = leaders.find((l) => l.group === "President");
  const vps = leaders.filter((l) => l.group === "Vice President");
  const [vpPicks, setVpPicks] = useState(() => vps.slice(0, 3));
  useEffect(() => {
    setVpPicks([...vps].sort(() => Math.random() - 0.5).slice(0, 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const featuredLeaders = president ? [president, ...vpPicks] : vpPicks;
  return (
    <SiteLayout>
      {/* HERO — dual-slide cinematic */}
      <section className="relative min-h-[108svh] flex items-end overflow-hidden bg-[var(--primary)] text-white">
        {/* Slide A — Executive Leadership */}
        <div className="absolute inset-0 hero-slide-a">
          <img
            src={heroImg}
            alt="CESC executive networking summit in Vancouver"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/75 via-[var(--primary)]/40 to-[var(--primary)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/85 via-transparent to-transparent" />
        </div>
        {/* Slide B — Global Business Collaboration */}
        <div className="absolute inset-0 hero-slide-b">
          <img
            src={heroForum}
            alt="International business forum and executive collaboration"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/75 via-[var(--primary)]/40 to-[var(--primary)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/85 via-transparent to-transparent" />
        </div>

        <div className="relative container-wide pb-28 md:pb-36 pt-40 w-full">
          {/* Slide A copy */}
          <div className="hero-slide-a">
            <p className="eyebrow mb-6">{t("Executive Leadership · Established in Canada")}</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[88px] leading-[1.02] max-w-5xl text-balance">
              {t("Empowering the Next Generation of Chinese Canadian Business Leadership")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
              {t("Connecting entrepreneurs, innovators, and industry leaders through collaboration, community engagement, and international business opportunities across Canada and beyond.")}
            </p>
          </div>
          {/* Slide B copy (absolutely overlaid, aligned to slide A) */}
          <div className="hero-slide-b absolute inset-x-0 top-0 pt-40 px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[1560px]">
              <p className="eyebrow mb-6">{t("Global Business Collaboration")}</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[88px] leading-[1.02] max-w-5xl text-balance">
                {t("Building Stronger Connections Between Canadian and Global Markets")}
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
                {t("Creating opportunities for innovation, entrepreneurship, leadership, and international collaboration through meaningful business relationships.")}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 relative">
            <Link to="/membership" className="btn btn-gold">
              {t("Become a Member")} <ArrowRight size={16} />
            </Link>
            <Link to="/events" className="btn btn-outline text-white border-white/40 hover:bg-white/10">
              {t("Explore Upcoming Events")}
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
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{t(s.v)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">{t("About CESC")}</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
              {t("A modern leadership organization shaping Canada's business future.")}
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <div className="space-y-6 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              <p>
                {t("CESC Chinese Enterprises Society of Canada is a modern leadership organization dedicated to fostering meaningful business connections, professional growth, and cross-cultural collaboration throughout Canada and international markets.")}
              </p>
              <p>
                {t("Through networking initiatives, educational events, community engagement, and strategic partnerships, CESC provides a platform for entrepreneurs and professionals to build lasting relationships and create meaningful economic and social impact.")}
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1 hover:text-[var(--secondary)]">
              {t("Learn More About CESC")} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        className="relative py-24 md:py-32 bg-[var(--primary)] text-white"
        style={{
          backgroundImage: "url(/images/texture-primary.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5">{t("The Council")}</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">{t("Executive Leadership")}</h2>
            </div>
            <Link to="/leadership" className="text-sm tracking-wide text-white/80 border-b border-[var(--gold)] pb-1 hover:text-white">
              {t("View Full Council")}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLeaders.map((l) => (
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
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{t(l.title)}</p>
                  <h3 className="font-display text-xl mt-2">
                    {t(l.name)}
                    {l.chineseName && (
                      <span className="block text-xs text-white/60 font-sans tracking-wide mt-1">{l.chineseName}</span>
                    )}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT — editorial */}
      <section className="py-28 md:py-36 bg-[var(--cream)]">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12">
            <p className="eyebrow">{t(featuredEventData.category)}</p>
            <Link to="/events" className="text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1">
              {t("View All Events")}
            </Link>
          </div>

          <article className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-7 relative overflow-hidden bg-[var(--primary)] aspect-[4/3] lg:aspect-auto lg:min-h-[620px]">
              <img
                src={featuredEventData.image}
                alt={featuredEventData.title}
                loading="lazy"
                width={1600}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-[11px] uppercase tracking-[0.22em]">
                {t(featuredEventData.location)}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">{t(featuredEventData.date)}</p>
              <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
                {t(featuredEventData.title)}
              </h2>
              <div className="mt-6 w-12 h-px bg-[var(--gold)]" />
              <p className="mt-7 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                {t(featuredEventData.shortDescription)}
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-y-4 text-sm">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">{t("Date")}</dt>
                <dd className="text-[var(--ink)]">{t(featuredEventData.date)}</dd>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">{t("Venue")}</dt>
                <dd className="text-[var(--ink)]">{t(featuredEventData.location)}</dd>
              </dl>
              <div className="mt-10">
                <Link to="/events" className="btn btn-primary">
                  {t("Reserve Your Spot")} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="relative py-32 overflow-hidden">
        <img src={community} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--primary)]/85" />
        <div className="relative container-x text-white max-w-4xl">
          <p className="eyebrow mb-6">{t("Community Impact")}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            {t("Building Stronger Communities Through Leadership")}
          </h2>
          <div className="mt-8 space-y-5 text-white/80 text-lg leading-relaxed max-w-3xl">
            <p>
              {t("CESC believes that strong business communities create stronger cities, stronger partnerships, and greater opportunities for future generations.")}
            </p>
            <p>
              {t("Our organization supports initiatives focused on entrepreneurship, mentorship, education, cultural collaboration, and meaningful community engagement across Canada.")}
            </p>
          </div>
          <Link to="/community-impact" className="mt-10 inline-flex btn btn-gold">
            {t("Explore Our Impact")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5">{t("Editorial")}</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">{t("News & Insights")}</h2>
            </div>
            <Link to="/news" className="text-sm tracking-wide text-[var(--primary)] border-b border-[var(--gold)] pb-1">
              {t("All Articles")}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {articles.slice(0, 6).map((a) => (
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
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{t(a.category)} · {t(a.date)}</p>
                  <h3 className="font-display text-2xl mt-3 leading-tight group-hover:text-[var(--secondary)]">{t(a.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{t(a.excerpt)}</p>
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
        <img
          src="/images/world-map.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-screen pointer-events-none"
          loading="lazy"
        />
        <div className="relative container-x text-center max-w-3xl">
          <p className="eyebrow mb-6">{t("Membership")}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            {t("Join a Community of Entrepreneurs, Leaders, and Innovators")}
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            {t("Become part of a growing network of professionals and business leaders committed to collaboration, leadership, innovation, and community impact.")}
          </p>
          <Link to="/membership" className="mt-10 inline-flex btn btn-gold">
            {t("Apply for Membership")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
