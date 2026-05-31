import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { zhDict } from "./zh-dict";

export type Lang = "en" | "zh";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

const STORAGE_KEY = "cesc.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // hydrate from localStorage after mount (SSR-safe)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "zh" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    try { document.documentElement.lang = l === "zh" ? "zh-CN" : "en"; } catch {}
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() { return useContext(LangContext); }

export function useT() {
  const { lang } = useLang();
  return useCallback((s: string | undefined | null): string => {
    if (!s) return "";
    if (lang === "en") return s;
    return zhDict[s.trim()] ?? s;
  }, [lang]);
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const base = "px-2 py-1 text-[12px] tracking-wider transition-colors";
  const active = "text-[var(--gold)] font-medium";
  const inactive = "opacity-70 hover:opacity-100";
  return (
    <div className={`inline-flex items-center gap-1 select-none ${className}`} role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? active : inactive}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="opacity-30">/</span>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`${base} ${lang === "zh" ? active : inactive}`}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
    </div>
  );
}