import type { ReactNode } from "react";
import { useT } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  const t = useT();
  return (
    <section
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)] text-white"
      style={{
        backgroundImage: "url(/images/texture-primary.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/80 via-[var(--primary)]/70 to-[var(--primary)]" />
        </>
      )}
      <div className="relative container-x max-w-[900px]">
        {eyebrow && <p className="eyebrow mb-6">{t(eyebrow)}</p>}
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">{t(title)}</h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">{t(subtitle)}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
