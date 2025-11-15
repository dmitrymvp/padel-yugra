import Link from "next/link";
import { blogPosts } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export function BlogList() {
  return (
    <section className="mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-white">Блог</h2>
          <p className="mt-2 text-sm text-white/60">
            Советы по технике, обзоры снаряжения и интересное о паделе.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white sm:inline-flex"
        >
          Все статьи
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-200/40 hover:bg-white/10"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                <span>{post.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white transition group-hover:text-lime-100">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {post.excerpt}
              </p>
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
    </section>
  );
}





