export function ContactInfo() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-white/70">
      <div>
        <h3 className="text-lg font-semibold text-white">Padel YUGRA</h3>
        <p className="mt-1 text-white/50">Югорск, ул. Остравская, 1</p>
      </div>
      <div className="space-y-2">
        <div>
          
          <div className="mt-1 text-white">
            <a href="tel:+79999999999" className="transition hover:text-lime-100">
              +7 (999) 999-99-99
            </a>
          </div>
        </div>
        <div>
          
          <div className="mt-1 text-white">
            <a
              href="mailto:padel-yugra@yandex.ru"
              className="transition hover:text-lime-100"
            >
              padel-yugra@yandex.ru
            </a>
          </div>
        </div>
      </div>
      <div>
        <span className="text-xs uppercase tracking-[0.35em] text-white ">
          График работы
        </span>
        <ul className="space-y-2 text-white/60 mt-2">
          <li>Пн–Пт: 08:00–22:00</li>
          <li>Сб–Вс: 08:00–23:00</li>
        </ul>
      </div>
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">
          Социальные сети
        </span>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://vk.com/padelyugra"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-lime-100"
            aria-label="VK"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.785 16.241s.287-.029.436-.18c.136-.137.133-.39.133-.39s-.02-1.13.51-1.295c.52-.16 1.19.335 1.87.76.42.265.74.494.85.64.13.17.095.39.095.39s-.095.7-.405.7h-1.5s-.31.02-.54-.12c-.38-.22-.81-.64-1.11-.64-.24 0-.31.18-.31.39v.59s-.01.29-.15.39c-.15.1-.35.07-.35.07h-1.05s-1.56.1-2.57-.5c-.51-.3-.9-.85-1.2-1.45-.52-1.2-1.15-3.38-1.61-4.85-.09-.3.02-.46.25-.46h1.5s.35.02.48.25c.12.22.4.73.65 1.18.42.7.59.92.78.92.11 0 .19-.08.19-.25v-1.95s-.01-.54.12-.62c.12-.08.27-.05.37-.05h1.85s.38-.02.52.15c.12.14.12.35.12.35v1.5s0 .2.08.28c.08.08.19.08.19.08h.4s.24-.05.35-.2l.5-.7c.1-.15.25-.2.25-.2h1.5s.4-.02.5.15c.1.15.05.35.05.35s-.5 1.35-.7 1.85c-.15.35-.1.5.05.65.12.12.5.5.5.5s.35.3.4.58c.05.28-.05.42-.05.42s-.3.35-1.15.35h-1.5s-.35.02-.48-.15c-.12-.15-.25-.45-.25-.45s-.15-.35-.35-.5c-.2-.15-.3-.2-.3-.2s-.15-.05-.25.05c-.1.1-.1.3-.1.3v.5s0 .3-.15.4c-.15.1-.35.05-.35.05h-1.05z" />
            </svg>
          </a>
          <a
            href="https://t.me/padelyugra"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-lime-100"
            aria-label="Telegram"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.858-.924 6.33-1.303 8.398-.152.825-.45 1.101-.74 1.128-.63.056-1.108-.417-1.718-.817-.95-.63-1.488-1.022-2.41-1.639-1.07-.66-.376-1.023.233-1.616.16-.157 2.93-2.688 2.984-2.916.007-.027.013-.125-.047-.185-.06-.06-.147-.037-.211-.022-.09.02-1.51.96-4.26 2.82-.404.27-.77.4-1.1.393-.364-.008-1.062-.205-1.58-.374-.636-.21-1.14-.325-1.096-.687.022-.18.322-.364.886-.552 3.47-1.47 5.79-2.44 6.97-2.91 3.24-1.27 3.91-1.49 4.35-1.5.098 0 .32.024.464.144.12.1.153.234.168.33.016.096.036.315.02.485z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}





