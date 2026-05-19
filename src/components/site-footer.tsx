import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/cesc-logo-horizontal.png";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--primary)] text-white/85 mt-24">
      <div className="container-wide py-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="bg-white/95 rounded-sm px-6 py-5 inline-block">
            <img src={logo} alt="CESC — Chinese Enterprises Society of Canada" className="h-16 md:h-20 w-auto object-contain" />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-white/70 max-w-md">
            CESC Chinese Enterprises Society of Canada is dedicated to fostering leadership, entrepreneurship,
            innovation, and meaningful business collaboration across Canada and international communities.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/leadership" className="hover:text-white">Leadership</Link></li>
            <li><Link to="/membership" className="hover:text-white">Membership</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/news" className="hover:text-white">News & Insights</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">Community</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/community-impact" className="hover:text-white">Community Impact</Link></li>
            <li><Link to="/partnership" className="hover:text-white">Partnership</Link></li>
            <li><Link to="/membership" className="hover:text-white">Join CESC</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={14} className="mt-1 shrink-0 text-[var(--gold)]" /> Vancouver, BC, Canada</li>
            <li className="flex gap-2"><Mail size={14} className="mt-1 shrink-0 text-[var(--gold)]" /> info@cescglobal.org</li>
            <li className="flex gap-2"><Phone size={14} className="mt-1 shrink-0 text-[var(--gold)]" /> (604) 555-0188</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/60">
          <p>© 2026 CESC Chinese Enterprises Society of Canada. All rights reserved.</p>
          <p>
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:text-white">
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
