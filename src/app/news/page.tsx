import Link from "next/link";
import { newsItems } from "@/lib/mock-data";
import { SectionHeading } from "@/components/section-heading";
import { formatDate } from "@/lib/utils";

export default function NewsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Новости"
        title="Новости и события клуба"
        description="Анонсы турниров, новые тренеры, специальные предложения и отчёты о прошедших играх."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={item.slug}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                <span>{item.category}</span>
                <span className="h-px w-6 bg-white/15" aria-hidden />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              <h3 className="text-xl font-semibold text-white">
                <Link href={`/news/${item.slug}`}>{item.title}</Link>
              </h3>
              <p className="text-sm text-white/60">{item.excerpt}</p>
            </div>
            <Link
              href={`/news/${item.slug}`}
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





