"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/nav-links";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);

  // Вычисление высоты хедера
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Блокировка скролла body и добавление блюра когда меню открыто
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between  px-6 lg:py-4 py-2 lg:pl-0 pl-3">
        <Link href="/" className="flex items-center gap-3 text-white" onClick={closeMenu}>
          <span className="relative lg:w-35 lg:h-20 h-16 w-20">
            <Image
              src="/logo.png"
              alt="Padel YUGRA logo"
              fill
              className="object-cover "
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
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-300 hover:text-lime-200 lg:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div
          className="fixed inset-x-0 z-40 bg-slate-950/98 backdrop-blur-lg border-b border-white/10 lg:hidden overflow-y-auto custom-scrollbar"
          style={{ 
            top: `${headerHeight}px`,
            maxHeight: `calc(100vh - ${headerHeight}px)`
          }}
        >
        <nav className="mx-auto max-w-6xl px-6 py-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-lime-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <Link
                href="/booking"
                onClick={closeMenu}
                className="block w-full rounded-full border border-lime-400/40 bg-lime-400/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-lime-200 transition hover:border-lime-200 hover:bg-lime-400/20"
              >
                Забронировать
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      )}

      {/* Overlay для затемнения фона */}
      <div
        className={`fixed inset-0 z-30 bg-black/70 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: `${headerHeight}px` }}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}
