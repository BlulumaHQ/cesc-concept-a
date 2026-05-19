import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cesc-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News & Insights" },
  { to: "/community-impact", label: "Community Impact" },
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
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="CESC" className="h-11 w-auto" />
          <span className={`hidden md:block text-[11px] leading-tight tracking-[0.18em] uppercase ${textClass}`}>
            Chinese Enterprises<br />Society of Canada
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[13px] tracking-wide transition-colors ${textClass} hover:text-[var(--gold)]`}
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/membership"
            className={`hidden md:inline-flex btn ${transparent ? "btn-gold" : "btn-primary"}`}
          >
            Become a Member
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden p-2 ${textClass}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-[var(--primary)] text-white">
          <nav className="container-x py-6 flex flex-col gap-4">
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
