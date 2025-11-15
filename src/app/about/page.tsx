import { SectionHeading } from "@/components/section-heading";

const gallery = [
  {
    title: "Главный корт",
    image:
      "https://images.unsplash.com/photo-1646649852365-3e89e23dee7b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Главный корт",
    image:
      "https://images.unsplash.com/photo-1658491830143-72808ca237e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhZGVsJTIwcmFja2V0fGVufDB8fDB8fHww",
  },
  {
    title: "Трибуны",
    image:
      "https://images.unsplash.com/photo-1658491830143-72808ca237e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhZGVsJTIwcmFja2V0fGVufDB8fDB8fHww",
  },
  {
    title: "Раздевалки",
    image:
      "https://images.unsplash.com/photo-1658491830143-72808ca237e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhZGVsJTIwcmFja2V0fGVufDB8fDB8fHww",
  },
  
];

const coaches = [
  {
    role: "Тренер",
    name: "Тренер Тренеров",
    bio: "Игровой опыт 6 лет, помогает поставить удары и подобрать партнёра по уровню.",
    photo:
      "data:image/png;base64,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",
  },
  {
    role:"Администратор",
    name: "Тренер Тренеров",
    bio: "Ведёт детские занятия и разбирает базовые комбинации для взрослых новичков.",
    photo:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMSEhMSFRUSEhAWEhIWExAVFhcSFhUYFhgXGRUYHSggGBolGxUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHx4wNS0vLTA1Mi0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS01LS0tLS0tLS0tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABAUGAwIHAQj/xABAEAACAQICBgYGCAQHAQAAAAAAAQIDEQQhBRIxQVFhBiJxgZGhEzJSscHRByNCYnKSwvBzorLhFDNDU4LS8Rb/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAnEQEBAAIBBAIBAwUAAAAAAAAAAQIRAwQSITEyQSITUXEjM2HR8P/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABznXitrQHQEaWOjzfceHj17L8Q57omAh/wCPXsvxPSx0eD8gd0SgcoYmL3rvy951DrYAAAAAAAAAAAAAAAAAAAAAAAAAcq9dR27dyBt0bItXHJernz3EOtWctvhuOYVXP9nSpXlLa+7ccwCXADhjMbTpLWq1IQXGUkvftMlpH6RqEW44enUrNfa/y4eLV/JHNyk9pmNvptAfPodPMU81hadvxz99rFlgencG7YihVpffX1kO+yTXgzmcuP7urxZz6a8906jWxtHDDYiFSKnTlGUXslF3R0LHHpNpY72l3r5EyE01dO5THqnUcXdOwdzO/a5BHw+KUsnk/f2EghZLsAASAAAAAAAAAAAAAAByxFbVV9+5AteMViNXJbStlJt3YlK7u95+EqMstgBA0vpH0UVZJ1J5U4897f3URbJN1Elt1EXpDpv0CUYJSqSV1e9ox4tLN8l2mH0hprETvrSrNcpShH8sLJnrSNaUpOz1m31qkt74pe5bEkU2IoTv1ndt2WbebMWXLcq3YcUxn+UHST1lvu3nd+9vcetHVKcLZpy8X3ftEvpBoKpGtKmoyas5U0s7x3577Z3fJbLkPA68M1klbJLJvnJZvdtY+nXqrSrpVR9aMlzadvEm4TFU572ue1d6/v3FZDSsl/mQUo75Quml+F3uWFLR0H9ZS2NX6uTs9+rw8VxzK7I6i30biJ4WevFXhP1kn1Zc+UuZt9H4+FaOtB/iT2xfBowOAxOrlLODylwV95c0IuElOm7SS7pR9mXFc9p1x89wur6V8nDM/M9tcCPgcXGrHWWW6UXtjLg/3mSDfLLNxhs14oT8Jir9WW3c+P8AcgAlMul2CNg8RrKz2rzRJIXS7AAEgAAAAAAAAAA/GypxFXWd/DsJmkKtlq8dvYV4VZ36AASreatRRTlJ2UU23wSzZiMZi5VNes8nO8YL2KS+PxZd9K8S9WFCO2rLrfgT+f8ASzOaaqKPUWyEW5dkU/ckzF1Oe72xt6fDU7qoMfjZKcaNKOtVm0ox4X2Gu0L0cjTSnWfpauTu/Ui/up8OL8in6AaMctfG1F1qjlGlfdHZKS/pXKL4m1ONaacMfuh5jBK9klfN2SV3zPQC1R6Z6N06qcoJU6m5pWjJ/eS96z7TL6LqSoVHSqRas29Xepb3F81nwZ9EKjpBodV4qULKrD1HxW3VfL3eJFm5pxlj9xHnhYySqQs1JZ8JLemtzO1GFlbctnYQtBYmzcJdWWyUJLK62prc/wD0up0LdZZreuXyKLKiVxw2IdOWus904+1H5rau9bzS05qSUou6aTT4p7DOzo8Nj2PnwZJ0LitWXonsld0+Utso/q/Maem5NXsrN1HHud0XYAN7C9Qk001uLalU1kmt5TkvR9Wz1eOztDvC6ulgACFwAAAAAAAAAc687Rb5AVuInrSb8Ow5AEs4Ac8TV1ISm/sRlLwV/gEM3rekxVaq/Vo9SPasn563iUOkcBVrQmoRk3WqKnrJNqNPWSlJvhb3F5o+Grh03tqPWfbJ39yLPR9SKpqMWrwirreubXM82flnuvVwx8afmGwqpwjCCtGEYxiuSVkddR8D8bIOmtI/4ehUrWctRK0b2u3JRWe5XaO/C30nOL4H4Zrol0qnipzpzhGMox10461nG6TTTvZ9ZeZqklIaJduR+pHX0aRS9KNOPC0fSKOs3NQis0rtN3bW60WNa9lukjSOilVzS1Zq1p9mxPivcedHOsupUg8tklZplf0T6QyxcJ68VGdNxvqt6rUr2avmn1Xl2F5VgpJp3s+bT7mthzcY51L5frpbrZcCDj6LtrRdpJpp8JrNP5kzR7nFSjUlrKLWpN7XF7E/vK3uPc1e/O5zljJNxzZpOwOKVWnGovtLNcHsa7mmjuUuhp6lWpR3SXpafflNeNmXR6HHl3YyvM5Me3KwP2Ls78D8B24XMJXSfFHojYCV424Nr4kkhol3AABIAAAAAEbSD6va18/gSSHpJ5LtYc5ekAAEqArukMrYeaW2WrBf8pKPubLEqtPyypQ9qqm+yMX8XEr5brC1ZxzecQ8UrRjFbl7lYhYHExpyxNWo7QhGnrSs3ZWd3ZK5PxCvNcot+/5ETRdJS9OpK6lLVknvWpZrwZ52Hyenis1JWus01dPkccRGM4yhNKUZJqUXmmmZ6ljJ4L6mupyoL/JxCTlqw3QqJZq2y/7U2OmKEldV6Vv4kF5N5FjRhjKl6J0VQoa3oYKOtbWd5SbtsV5Nu3Im0cbBynTjK86eprqz6usrrO1r23Gfraf1rwwkfT1HldX9FDnOey3JFroXR/oaerKWvOcnOrU9qpLa+zYlyRMrjKSekiWMjTpOdSVoxV5StJ2ztfJN2zPOPwtOrBwqRU4StdPyaa2Pmjo6CcHCSUoyUlJPY09q8zN0cXUwf1VdTlQjlSxCTlqw3RqJZq2y42SbXOjcFSoR1KMFFN3ebbb4tvNk6Milhpig1dV6Nv4kF72Rq3SJS+rwkfT1XldJ+jh96U9luwjbvLCSeFnpGvGcKsYSvPDyhOSSlk7ayV9j6t8lsyJuFra8VLikRNEaM9DS1HLXnNylVm9s6k/Wfw7Ej80C/qo/vl8DnJnzdMfPUnRrexUSl+CfVZoih0lS1qU48Yu3as0Wmiq+vRpz3uEb/iSs/NM0dNl7jF1OPqpQANbKm6NfrLsJxXaO9Z/hfvRYkLsPQAA7AAAAAAh6S2R7WTCLpBdXsaDnL0rgASoCj0xO+IpR9mDf5pxX6WXhm8fK+Ll92FFebl8SjqbrBf08/N3qrOb4Q+YxeBlhVSm5wlDEVoxks4uM5werqu7U03FK1ltvyPdRZS/D8GfPumFWbq0+vO1OcHBOUmovqu8U8lnYx8et+W22zzH0SSIU9GUm7ulSb4+jhf3HrQ2kViKMKq+0usvZmspR7n5WJp20TJyo0LLJWS4LI6EvR+L9HK/2XlJfHtNHBxkk1Zp7GWYccyntTyctxvmMkeZQvsNhqLgvBFJpfHKXUi+qvWfF8OwnLjmM3ajDmuV8RnZ6MpN3dKm3xcIN+NiVRpKKskkuCSS8EdT8k0ld5JZt8EVL7lt7w2GlWnKnCcIOMFJycXNrWbUbQur+rLO+5bbkLR2GdOLptpuE5xbWx6raujD19Jzq4p1Kc5wu9WLjKUX6NbFdZ2dr25m9wlPVhGPCKuc52eIz7tte6/qvsZ66My+pcfYq1Y+et+o5YmXUfOxy6I1tZV0v91vxuv0nfT3+oq55+DQAA3sCVo/1n+F+9FiQNGrOT5L9+RPIXYegAB2AAAAAByxMbxa5e7M6gFUgPdaFpNcH5HglmDNY9WxVR8Y0X5NfA0pQaap2ra3tUorvjKX/AGRn6n+20dNfzSWvMwXSul1k+z9/ym+TMj0to+6T8Gn8WYp7jZ9M10a0+8JWnGd3RqS66Wbi900uzJreuxH1ChWjOKnCSlGSvGSd01xTPi2kKfWVvtJLv2fIttBaVr4ScYxetTnKKnB31bt2bXsvnv3mjt3NuceWY3tr6sdsPipw9WTXLavBnFg4l00WbSa+PqTVnLLgrIjAE22+yST0GN6UdIYz1qFGV0narNbG98E9/N93Ej9OtMV1UeHpvUhqxc5q6clJXs3uXJZvyM7o7CvqwW1t+8a1NqcuSW9saPoho/XnrtZRz/ff7jZ4udovnkR9DYNUqaW97SNpbE9aEFvnBd2sr/BFNu0yJWlq+pTcvZUpflVyB9Hknq1L71TfnP5nLplXtRa9pxj4u78onboBC3pOUKXnct4PnP8AvpVz/CtgAfqR6Dz1ho+PVvxZKPFKFklwR7IaJNQAASAAAAAAAAhaQp7Jdz+BBLmcbpp7ypqwcW09xKrOedvBT9IMtSXCNS/Z1WXBQdMqmrRb+5V81FfEp55vjqeC/nHXCyvCDe+EW+2yKTpbC0YS4TjfsacfiiynjIUaUZVJKMUrXfJbEt7yMn0g6V0a1OVOMZ7VaTtuaexX4GLHDLL1G3Lkxx91nMfS1ZZ/Yn5bPkzzKrqyz2PY+DJ2PrRm1KN84Q1rr7SVmQqrttV1v5f2NvFLJ5YOfPHLLwvcH0nxEMnJVF99Xf5lZ+Nyyp9NH9qiu6o15OJiU7ZwkmvZZ+xxi3p9x1cMb9Ix5+XH1W1n00f2aK76jfkolXjulGJnlGUaa+6mn4u78Gig/wAXHn4HieM4LxInHjPovPy5e684xSb1pS1m97ebZq+iOE15Kb5fv3+BkIJzln3vgj6L0HoWpSlxk7diSXzK+o+Kzpr+emhxFTVjl2Iy062tXi9ynFLufzNDjpZpcF7zLU3aouU1/UYft6CV0zetKlDjNvuUV/2L3oTT6lWXGcY/lV/1Ge6RyvWo/hqeNo/I03Qp/Uz/AI0v6IGjp/lFHUfGr8k4GneV90ffuI6Ra4elqxt49pvY8JuuoAIXAAAAAAAAAAAEfF0NZXW1bOfIkAIs2pDLdPZ2pwXFVb9nVNzi8NfrR271x/ufPPpEqZU1wjP+aUV8Djl846cYTty3+3+mB07pOdeo9urG6jHco/vb/wCEPD2Su823ZI6YiOrGy2yeb47yNJar7LeP/pMkk1FFty81ZgIEuHCrhU9mT/e4jywkuTJ4Cdq//Cy4eaOkMG978CYAbeacElZH0PojC2Ghzc3/ADM+fH0HolK+Fhyc1/MyjqPjP5ael+d/h70pUtOPOcF4r5lLiaPWq8YtTXY3n714Fh0ok4wc19idGXhJHudFOUZrNTjKL7Hmv3zRh9PRU+nKl50ZL2JSXjG/k2aboZPKrH+HNd6afg1YyOkeq6d/9Kcoy/BK2fv8UbzoToecV6SorRtKMF7cW01LsyduN/G/g33TSnmm8a0mBw/2n3fMmgG9nk0AAJAAAAAAAAAAAAAAzPTHossXHWhJRqxVle+rJJ3s+Gb2rzNMCLNlfz5pPRtSjU9HWhKE4u+q9/NPY1zRW0Y3lO/H4/2P6I0roqjiIalaCmt18nF8YyWcX2HznTf0a1ISlUwsvSJ/6cmozXY/Vl5d4Z8uOz0xAO2Kws6UtSpCUJezKLi/B7VzOIUgAAAAAbXoPXvSlD2ZvwaT+Zii/wCheJtX1P8AcWS4tcuxvwKeebwaOmuuRoukNPWp1V9yXilrL4EborWdWioLOUMkt947P5WvA0//AM/UqvNqEXq3bzbW9avZlmW+g9AUMLFqlHOWcpyd5SfbuXJWRnw4Msvfhvy5JPSrwHRKDqOrWSlstSaTjdb5cd2WzLeagA24YTCajPllbfIADpAAAAAAAAAAAAAAAAAAAAAA44vCU6sdWpCE4+zKMZLwZmsf9H2DqZxjOk/uTy/LO6XdY1YCLjL7fOMT9GD/ANPErkp0v1KXwIM/o0xW6ph32yqr9DPqoDj9LF8pj9GuL31MOv8AlVf6CZQ+jCf28TBco05S83JH0oA/SxY7BfRzhIZ1HVq8nLVj4QSfmaXR+i6NBWo0oU+OrFJvte195MAdTGT0AAOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
  },
  {
    role:"Детский тренер",
    name: "Тренер Тренеров",
    bio: "Ведёт детские занятия и разбирает базовые комбинации для взрослых новичков.",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf527IA2ko1UvjrvnkORk-ozwzNPqKe_2_TN7cU0lA2341GRQKmMgTGv_WzReotLU2w0&usqp=CAU",
  },

];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="О корте"
          title="Padel YUGRA — падел в Югорске"
          description="Мы делаем падел доступным в небольшом городе: поддерживаем игроков на старте, держим оборудование в порядке, проводим турниры для всех желающих любого уровня."
        />
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6">
            {gallery.map((item) => (
              <article
                key={item.title}
                className="group relative h-64 w-[380px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Инфраструктура"
          title="Что ждёт на площадке"
          description="Современный корт класса World Padel Tour: просторные раздельные раздевалки с душевыми, трибуна на 30 зрителей и комфортная зона отдыха, где вы сможете восстановиться перед следующим сетом."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Покрытие</h3>
            <p className="mt-2">
            Искусственный газон нового поколения с кварцевым песком. Такое покрытие обеспечивает отличное сцепление, мягкость движений и снижает нагрузку на суставы, делая игру максимально комфортной.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Ограждение и стекло</h3>
            <p className="mt-2">
            Прозрачные панели из закалённого стекла толщиной 12 мм, устойчивые к ударам. Они создают эффект открытого пространства и позволяют зрителям наблюдать игру с любого ракурса.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Инфраструктура</h3>
            <p className="mt-2">
            Раздельные раздевалки с душевыми и уютная зона отдыха, где можно восстановить силы к следующему сету.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Трибуны</h3>
            <p className="mt-2">
            Отдельная зрительская зона на 30 мест, с отличным обзором и комфортными сиденьями. Здесь можно наблюдать за игрой, поддерживать друзей и наслаждаться атмосферой соревнований.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Инвентарь</h3>
            <p className="mt-2">
              Прокат ракеток и комплектов мячей, а также поможем с выбором собственного снаряжения.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/70">
            <h3 className="text-base font-semibold text-white">Комьюнити</h3>
            <p className="mt-2">
              Небольшой чат игроков: ищем партнёров, договариваемся о матчах и делимся новостями.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Команда"
          title="Тренеры и администраторы"
          description="Поможем освоить игру, подобрать время и сделать падел привычкой."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-20 w-20 overflow-hidden rounded-full border border-white/10 bg-slate-900/50"
                  style={{
                    backgroundImage: coach.photo ? `url(${coach.photo})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!coach.photo ? (
                    <span className="flex h-full w-full items-center justify-center text-xl font-semibold text-white">
                      {coach.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  ) : null}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-lime-200/80">
                    {coach.role}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{coach.name}</h3>
                </div>
              </div>
              <p className="text-sm text-white/60">{coach.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}





