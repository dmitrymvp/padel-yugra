import { notFound } from "next/navigation";
import Link from "next/link";
import { newsItems } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

type NewsPageProps = {
  params: { slug: string };
};

export default function NewsArticlePage({ params }: NewsPageProps) {
  const article = newsItems.find((item) => item.slug === params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
        >
          ← все новости
        </Link>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
          <span>{article.category}</span>
          <span className="h-px w-6 bg-white/15" aria-hidden />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h1 className="text-4xl font-semibold text-white">{article.title}</h1>
      </div>
      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <p>
          Это демо-материал новости. Здесь будет рассказ о предстоящем событии,
          турнире или изменениях в расписании. В реальном проекте текст будет
          подтягиваться из CMS или API.
        </p>
        <p>
          Добавьте фотографии, расписание матчей, список приглашённых команд и
          удобные ссылки на регистрацию. Можно использовать адаптивные галереи
          и блоки с карточками.
        </p>
        <p>
          Для SEO полезно включить ключевые слова: падел, турниры, клуб,
          расписание, бронирование. Дополнительно — FAQ и CTA с кнопкой
          регистрации.
        </p>
      </div>
    </article>
  );
}


