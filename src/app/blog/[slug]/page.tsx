import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
        >
          ← все статьи
        </Link>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
          <span>{post.category}</span>
          <span className="h-px w-6 bg-white/15" aria-hidden />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
      </div>
      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <p>
          Здесь будет основное содержание статьи. Расскажите про технику,
          тренировочные планы или обзоры экипировки. Это заглушка, чтобы
          показать структуру страницы и вёрстку.
        </p>
        <p>
          Используйте подзаголовки, выделения, вставки цитат и изображения для
          иллюстрации материала. Добавьте полезные ссылки на бронирование,
          расписание или другие статьи блога.
        </p>
        <p>
          Статья может заканчиваться призывом к действию: забронировать корт,
          записаться на тренировку или оформить клубную карту.
        </p>
      </div>
    </article>
  );
}


