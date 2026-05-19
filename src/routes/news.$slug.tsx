import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { articles } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — CESC` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article — CESC" }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-40 text-center">
        <h1 className="font-display text-3xl">Article not found</h1>
        <Link to="/news" className="mt-6 inline-flex btn btn-primary">Back to News</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-x py-40 text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article>
        <header className="pt-40 pb-12 bg-[var(--primary)] text-white">
          <div className="container-x max-w-3xl">
            <Link to="/news" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-8">
              <ArrowLeft size={14} /> News & Insights
            </Link>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold)]">{article.category} · {article.date}</p>
            <h1 className="font-display text-3xl md:text-5xl mt-4 leading-[1.1] text-balance">{article.title}</h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">{article.excerpt}</p>
          </div>
        </header>

        <div className="container-x max-w-5xl -mt-2">
          <div className="aspect-[16/9] overflow-hidden">
            <img src={article.image} alt={article.title} width={1280} height={800} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container-x max-w-3xl py-20">
          <div className="space-y-7 text-[17px] leading-[1.8] text-[var(--ink)]">
            {article.body.map((p: string, i: number) => (<p key={i}>{p}</p>))}
          </div>
          <div className="mt-16 border-t border-[var(--border)] pt-8">
            <Link to="/news" className="text-sm border-b border-[var(--gold)] pb-1">← All Articles</Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
