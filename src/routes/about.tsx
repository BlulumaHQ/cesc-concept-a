import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import skyline from "@/assets/vancouver-skyline.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CESC Chinese Enterprises Society of Canada" },
      { name: "description", content: "Our mission, vision, and commitment to entrepreneurship, leadership development, and cross-cultural collaboration across Canada." },
      { property: "og:title", content: "About CESC" },
      { property: "og:description", content: "Empowering entrepreneurs and professionals through leadership and partnership." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="A platform for entrepreneurship, leadership, and global collaboration."
        subtitle="CESC is committed to supporting entrepreneurship, professional leadership, and cross-cultural collaboration through meaningful community engagement and international business initiatives."
        image={skyline}
      />

      <section className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">{t("Who We Are")}</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.15]">
              {t("Bringing together leaders who share a vision of stronger connections.")}
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            <p>
              {t("CESC Chinese Enterprises Society of Canada is committed to supporting entrepreneurship, professional leadership, and cross-cultural collaboration through meaningful community engagement and international business initiatives.")}
            </p>
            <p>
              {t("Our organization brings together entrepreneurs, professionals, executives, innovators, and community leaders who share a common vision of creating stronger connections, sustainable growth, and future opportunities throughout Canada and beyond.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-[var(--border)]">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-5">{t("Our Mission")}</p>
            <h3 className="font-display text-3xl leading-tight">
              {t("To empower entrepreneurs and professionals through collaboration and mentorship.")}
            </h3>
            <p className="mt-6 text-[var(--ink-soft)] leading-relaxed">
              {t("We develop leadership, build strategic partnerships, and create platforms that drive long-term community and economic impact across Canada and international markets.")}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">{t("Our Vision")}</p>
            <h3 className="font-display text-3xl leading-tight">
              {t("To become a leading platform for international business collaboration.")}
            </h3>
            <p className="mt-6 text-[var(--ink-soft)] leading-relaxed">
              {t("A modern home for entrepreneurial innovation and multicultural leadership across Canada — built on trust, generosity, and the long view.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <p className="eyebrow mb-5">{t("What We Stand For")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-14 max-w-2xl">{t("Principles that guide our community.")}</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {[
              { t: "Excellence", d: "We pursue the highest standards of leadership, conduct, and contribution." },
              { t: "Collaboration", d: "We believe lasting success is built through partnership, not competition." },
              { t: "Stewardship", d: "We invest in the next generation of leaders and the communities we serve." },
              { t: "Integrity", d: "We operate with transparency, respect, and accountability in all relationships." },
              { t: "Innovation", d: "We support entrepreneurs reimagining industries across Canada and beyond." },
              { t: "Global Perspective", d: "We connect Canadian leadership with international opportunity." },
            ].map((v) => (
              <div key={v.t} className="bg-[var(--background)] p-8">
                <h4 className="font-display text-xl mb-3">{t(v.t)}</h4>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{t(v.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--primary)] text-white text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            {t("Become part of Canada's leading Chinese Canadian business community.")}
          </h2>
          <Link to="/membership" className="mt-8 inline-flex btn btn-gold">{t("Apply for Membership")}</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
