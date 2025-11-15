import Link from "next/link";
import { navLinks } from "./site-header";

const socialLinks = [
  {
    name: "VK",
    href: "https://vk.com/padelyugra",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.785 16.241s.287-.029.436-.18c.136-.137.133-.39.133-.39s-.02-1.13.51-1.295c.52-.16 1.19.335 1.87.76.42.265.74.494.85.64.13.17.095.39.095.39s-.095.7-.405.7h-1.5s-.31.02-.54-.12c-.38-.22-.81-.64-1.11-.64-.24 0-.31.18-.31.39v.59s-.01.29-.15.39c-.15.1-.35.07-.35.07h-1.05s-1.56.1-2.57-.5c-.51-.3-.9-.85-1.2-1.45-.52-1.2-1.15-3.38-1.61-4.85-.09-.3.02-.46.25-.46h1.5s.35.02.48.25c.12.22.4.73.65 1.18.42.7.59.92.78.92.11 0 .19-.08.19-.25v-1.95s-.01-.54.12-.62c.12-.08.27-.05.37-.05h1.85s.38-.02.52.15c.12.14.12.35.12.35v1.5s0 .2.08.28c.08.08.19.08.19.08h.4s.24-.05.35-.2l.5-.7c.1-.15.25-.2.25-.2h1.5s.4-.02.5.15c.1.15.05.35.05.35s-.5 1.35-.7 1.85c-.15.35-.1.5.05.65.12.12.5.5.5.5s.35.3.4.58c.05.28-.05.42-.05.42s-.3.35-1.15.35h-1.5s-.35.02-.48-.15c-.12-.15-.25-.45-.25-.45s-.15-.35-.35-.5c-.2-.15-.3-.2-.3-.2s-.15-.05-.25.05c-.1.1-.1.3-.1.3v.5s0 .3-.15.4c-.15.1-.35.05-.35.05h-1.05z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/padelyugra",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.858-.924 6.33-1.303 8.398-.152.825-.45 1.101-.74 1.128-.63.056-1.108-.417-1.718-.817-.95-.63-1.488-1.022-2.41-1.639-1.07-.66-.376-1.023.233-1.616.16-.157 2.93-2.688 2.984-2.916.007-.027.013-.125-.047-.185-.06-.06-.147-.037-.211-.022-.09.02-1.51.96-4.26 2.82-.404.27-.77.4-1.1.393-.364-.008-1.062-.205-1.58-.374-.636-.21-1.14-.325-1.096-.687.022-.18.322-.364.886-.552 3.47-1.47 5.79-2.44 6.97-2.91 3.24-1.27 3.91-1.49 4.35-1.5.098 0 .32.024.464.144.12.1.153.234.168.33.016.096.036.315.02.485z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/79999999999",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "PADEL YUGRA",
    description: "Падел клуб в Югорске с современными кортами, онлайн-бронированием и профессиональными тренерами",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Остравская, 1",
      addressLocality: "Югорск",
      addressCountry: "RU",
    },
    telephone: "+79999999999",
    email: "padel-yugra@yandex.ru",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "01:00",
      },
    ],
    url: "https://padelyugra.ru",
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex justify-between gap-8 md:grid-cols-4">
            <div className="space-y-4">
              
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <div key={social.name} className="flex items-center gap-2 transition hover:border-lime-300/50 hover:text-lime-200">
                    <a href={social.href} target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex items-center gap-2 transition hover:border-lime-300/50 hover:text-lime-200">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition  hover:text-lime-200"
                        >
                          {social.icon}
                      </span>
                      <span className="text-sm transition hover:border-lime-300/50 hover:text-lime-200">{social.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Навигация
              </h3>
              <nav>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/60 sm:grid-cols-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Контакты
              </h3>
              <address className="not-italic text-sm text-white/60">
                <p className="mb-2">
                  <span className="block text-white/80">Адрес:</span>
                  <a
                    href="https://yandex.ru/maps/?text=Югорск,+ул.+Остравская+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-lime-200"
                  >
                    Югорск, ул. Остравская, 1
                  </a>
                </p>
                <p className="mb-2">
                  <span className="block text-white/80">Телефон:</span>
                  <a
                    href="tel:+79999999999"
                    className="transition hover:text-lime-200"
                  >
                    +7 (999) 999-99-99
                  </a>
                </p>
                <p>
                  <span className="block text-white/80">Email:</span>
                  <a
                    href="mailto:padel-yugra@yandex.ru"
                    className="transition hover:text-lime-200"
                  >
                    padel-yugra@yandex.ru
                  </a>
                </p>
              </address>
            </div>
            
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
              <p>
                © {currentYear} PADEL YUGRA. Все права защищены.
              </p>
              <p>
                Разработка сайта —{" "}
                <a
                  href="https://m.vk.com/masqueunclub17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 transition hover:text-sky-300"
                >
                  DmitryMVP
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
