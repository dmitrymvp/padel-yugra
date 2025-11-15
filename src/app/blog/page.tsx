import Link from "next/link";
import { blogPosts } from "@/lib/mock-data";
import { SectionHeading } from "@/components/section-heading";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Блог"
        title="Тактика, экипировка и стиль жизни падел игрока"
        description="Делимся опытом тренеров, проводим сравнения экипировки, рассказываем о стратегии и ментальной подготовке."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                <span>{post.category}</span>
                <span className="h-px w-6 bg-white/15" aria-hidden />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h3 className="text-xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-white/60">{post.excerpt}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
            >
              Читать →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}


