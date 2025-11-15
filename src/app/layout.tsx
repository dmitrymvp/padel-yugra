import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padel Prime Court — Премиальный падел клуб",
  description:
    "Падел клуб с современными кортами, онлайн-бронированием, расписанием и тренерскими программами.",
  metadataBase: new URL("https://padel-prime.local"),
  openGraph: {
    title: "Padel Prime Court",
    description:
      "Премиальный падел клуб с онлайн-бронированием, расписанием и тренерами.",
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-slate-950">
      <body
        className={`${inter.variable} ${montserrat.variable} min-h-screen bg-slate-950 font-sans text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.12),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.08),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_60%)]" />
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
        {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
