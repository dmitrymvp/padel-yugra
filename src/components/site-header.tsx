import Image from "next/image";
import Link from "next/link";

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О корте" },
  { href: "/pricing", label: "Цены" },
  { href: "/tournaments", label: "Турниры" },
  { href: "/players", label: "Игроки" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакты" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 pl-0">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="relative w-35 h-20">
            <Image
              src="/logo.png"
              alt="Padel YUGRA logo"
              fill
              className="object-cover"
              priority
            />
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium uppercase tracking-wide text-white/80 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="hidden rounded-full border border-lime-400/40 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-lime-200 transition hover:border-lime-200 hover:text-white lg:inline-flex"
          >
            Забронировать
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-300 hover:text-lime-200 lg:hidden"
            aria-label="Меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
