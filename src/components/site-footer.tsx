import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/cesc-logo-footer.png";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="bg-[var(--primary)] text-white/85 mt-24">
      <div className="container-wide py-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo} alt="CESC — Chinese Enterprises Society of Canada" className="h-20 md:h-24 w-auto object-contain" />
          <p className="mt-8 text-sm leading-relaxed text-white/70 max-w-md">
            {t("CESC Chinese Enterprises Society of Canada is dedicated to fostering leadership, entrepreneurship, innovation, and meaningful business collaboration across Canada and international communities.")}
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">{t("Navigation")}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white">{t("About")}</Link></li>
            <li><Link to="/leadership" className="hover:text-white">{t("Leadership")}</Link></li>
            <li><Link to="/membership" className="hover:text-white">{t("Membership")}</Link></li>
            <li><Link to="/events" className="hover:text-white">{t("Events")}</Link></li>
            <li><Link to="/news" className="hover:text-white">{t("News & Insights")}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">{t("Community")}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/community-impact" className="hover:text-white">{t("Community Impact")}</Link></li>
            <li><Link to="/partnership" className="hover:text-white">{t("Partnership")}</Link></li>
            <li><Link to="/membership" className="hover:text-white">{t("Join CESC")}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">{t("Contact")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={14} className="mt-1 shrink-0 text-[var(--gold)]" /> {t("Vancouver, BC, Canada")}</li>
            <li className="flex gap-2"><Mail size={14} className="mt-1 shrink-0 text-[var(--gold)]" /><a href="mailto:info@cescglobal.org" className="hover:text-white">info@cescglobal.org</a></li>
            <li className="flex gap-2"><Phone size={14} className="mt-1 shrink-0 text-[var(--gold)]" /> (604) 555-0188</li>
            <li className="flex gap-2"><a href="https://cescglobal.org" className="hover:text-white text-[var(--gold)]">cescglobal.org</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/60">
          <p>{t("© 2026 CESC Chinese Enterprises Society of Canada. All rights reserved.")}</p>
          <p>
            {t("Web Design by")}{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:text-white">
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
