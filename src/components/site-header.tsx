import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/cesc-logo-header.png";
import logoLight from "@/assets/cesc-logo-footer.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News" },
  { to: "/community-impact", label: "Impact" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled;
  const textClass = transparent ? "text-white" : "text-[var(--ink)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-24 md:h-28 gap-4">
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="CESC — Chinese Enterprises Society of Canada"
        >
          <img
            src={transparent ? logoLight : logoDark}
            alt="CESC — Chinese Enterprises Society of Canada"
            width={1344}
            height={303}
            className="block h-[44px] md:h-[52px] lg:h-[60px] w-auto"
          />
        </Link>

        <nav className="hidden xl:flex items-center justify-center flex-1 gap-5 2xl:gap-9 px-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link font-sans text-[11px] 2xl:text-[12px] uppercase tracking-[0.18em] whitespace-nowrap transition-colors ${textClass} hover:text-[var(--gold)]`}
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-end">
          <Link
            to="/membership"
            className={`hidden md:inline-flex btn px-5 py-3 text-[11px] uppercase tracking-[0.18em] whitespace-nowrap ${transparent ? "btn-gold" : "btn-primary"}`}
          >
            Become a Member
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden p-2 ${textClass}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-[var(--primary)] text-white">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-base tracking-wide py-2 border-b border-white/10"
                activeProps={{ className: "text-[var(--gold)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/membership" className="btn btn-gold mt-3 w-full">Become a Member</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
