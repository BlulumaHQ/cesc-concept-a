import { useEffect, useState, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logoDark from "@/assets/cesc-logo-header.png";
import logoLight from "@/assets/cesc-logo-footer.png";
import { LanguageSwitcher, useT } from "@/lib/i18n";

type NavLink = { to: string; label: string };

type NavItem =
  | { type: "link"; to: string; label: string }
  | { type: "dropdown"; label: string; items: NavLink[] };

const NAV: NavItem[] = [
  { type: "link", to: "/", label: "Home" },
  {
    type: "dropdown",
    label: "About",
    items: [
      { to: "/about", label: "About" },
      { to: "/leadership", label: "Leadership" },
      { to: "/secretariat", label: "Secretariat" },
    ],
  },
  { type: "link", to: "/events", label: "Events" },
  { type: "link", to: "/news", label: "News" },
  {
    type: "dropdown",
    label: "Community",
    items: [
      { to: "/community-impact", label: "Impact" },
      { to: "/partnership", label: "Partnership" },
    ],
  },
  
  { type: "link", to: "/contact", label: "Contact" },
];

function isDropdownActive(items: NavLink[], pathname: string): boolean {
  return items.some((i) => i.to === pathname);
}

export function SiteHeader() {
  const t = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMobileExpanded({}); }, [pathname]);

  const transparent = isHome && !scrolled;
  const textClass = transparent ? "text-white" : "text-[var(--ink)]";

  const showDropdown = (label: string) => {
    if (dropdownTimers.current[label]) clearTimeout(dropdownTimers.current[label]);
    setActiveDropdown(label);
  };
  const hideDropdown = (label: string) => {
    dropdownTimers.current[label] = setTimeout(() => {
      setActiveDropdown((prev) => (prev === label ? null : prev));
    }, 150);
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      {/* Mobile top bar: language switcher only */}
      <div
        className={`xl:hidden border-b ${
          transparent
            ? "border-white/15 bg-[var(--primary)]/40 backdrop-blur-sm"
            : "border-[var(--border)] bg-[var(--muted)]/60"
        }`}
      >
        <div className="container-wide flex items-center justify-end h-8">
          <LanguageSwitcher className={textClass} />
        </div>
      </div>

      <div className="container-wide flex items-center justify-between h-[68px] md:h-[96px] gap-4">
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
            className="block h-[52px] md:h-[76px] lg:h-[84px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center justify-center flex-1 gap-5 2xl:gap-9 px-3">
          {NAV.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link font-sans text-[13px] 2xl:text-[14px] uppercase tracking-[0.18em] whitespace-nowrap transition-colors ${textClass} hover:text-[var(--gold)]`}
                  activeProps={{ className: "text-[var(--gold)]" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {t(item.label)}
                </Link>
              );
            }

            const isActive = isDropdownActive(item.items, pathname);
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => showDropdown(item.label)}
                onMouseLeave={() => hideDropdown(item.label)}
              >
                <button
                  type="button"
                  className={`nav-link font-sans text-[13px] 2xl:text-[14px] uppercase tracking-[0.18em] whitespace-nowrap transition-colors flex items-center gap-1 ${textClass} hover:text-[var(--gold)] ${isActive ? "text-[var(--gold)]" : ""}`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {t(item.label)}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-xl overflow-hidden py-1"
                    onMouseEnter={() => showDropdown(item.label)}
                    onMouseLeave={() => hideDropdown(item.label)}
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`block px-5 py-2.5 text-[13px] uppercase tracking-[0.14em] whitespace-nowrap transition-colors ${
                          pathname === sub.to ? "text-[var(--gold)]" : "text-[var(--ink)]"
                        } hover:text-[var(--gold)] hover:bg-[var(--muted)]`}
                      >
                        {t(sub.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 justify-end">
          {/* Desktop language switcher: between Contact and Become a Member */}
          <LanguageSwitcher className={`hidden xl:inline-flex ${transparent ? "text-white" : "text-[var(--ink)]"}`} />
          <Link
            to="/membership"
            className={`hidden xl:inline-flex btn px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] whitespace-nowrap ${transparent ? "btn-gold" : "btn-primary"}`}
          >
            {t("Become a Member")}
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden p-2 -mr-2 ${textClass}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="xl:hidden bg-[var(--primary)] text-white">
          <nav className="container-wide py-6 flex flex-col gap-2">
            {NAV.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-base tracking-wide py-2 border-b border-white/10"
                    activeProps={{ className: "text-[var(--gold)]" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {t(item.label)}
                  </Link>
                );
              }

              const expanded = !!mobileExpanded[item.label];
              return (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleMobileExpand(item.label)}
                    className="flex items-center justify-between w-full py-2 text-base tracking-wide"
                    aria-expanded={expanded}
                  >
                    {t(item.label)}
                    <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`text-sm tracking-wide py-1.5 ${pathname === sub.to ? "text-[var(--gold)]" : "text-white/80"}`}
                        >
                          {t(sub.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/membership" className="btn btn-gold mt-3 w-full">{t("Become a Member")}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
