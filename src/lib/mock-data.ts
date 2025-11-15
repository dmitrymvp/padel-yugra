export const pricingPlans = [
  {
    id: "prime-hour",
    title: "UNO",
    price: "2 000 ₽",
    description: "Полный доступ к корту и раздевалке. Ракетки по запросу.",
    features: [
      "90 минут на корте",
      "2-4 игрока",
      "Инвентарь по запросу",
    ],
  },
  {
    id: "pack-four",
    title: "CUATRO",
    price: "7 000 ₽",
    description: "Абонемент на 4 посещения по 90 минут",
    features: [
      "Бла бла бла",
      "Бла бла бла",
      "Бла бла бла",
    ],
  },
  {
    id: "prime-hour",
    title: "OCHO",
    price: "13 000 ₽",
    description: " Абонемент на 8 посещения по 90 минут",
    features: [
      "Бла бла бла",
      "Бла бла бла",
      "Бла бла бла",
    ],
  },
  {
    id: "club-pass",
    title: "MÁXIMO",
    price: "40 000 ₽",
    description: "Месяц ежедневных тренировок с планированием расписания",
    features: [
      "Составим расписание удобное для вас",
      "Бла бла бла",
      "Бла бла бла",
    ],
  },
];

// Генерация всех возможных слотов (8:00 - 23:00, интервал 90 минут)
function generateAllSlots() {
  const slots = [];
  let hour = 8;
  let minute = 0;
  
  while (hour < 24) {
    const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    // Примерное распределение статусов для демонстрации
    const status = Math.random() > 0.4 ? "free" : "busy";
    slots.push({ time: timeStr, status });
    
    minute += 90;
    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute = minute % 60;
    }
  }
  
  return slots;
}

export const scheduleSlots = generateAllSlots();


export const blogPosts = [
  {
    slug: "start-playing-padel",
    title: "Как начать играть в падел: гид для новичков",
    excerpt: "Разбираем базовые удары, экипировку и правила игры.",
    category: "Гайд",
    date: "2024-12-15",
  },
  {
    slug: "padel-vs-tennis",
    title: "Падел против тенниса: что выбрать?",
    excerpt: "Сравниваем динамику, нагрузку и обучение двум видам спорта.",
    category: "Аналитика",
    date: "2024-12-10",
  },
  {
    slug: "equipment-guide",
    title: "Выбираем ракетку для падела",
    excerpt: "Какие параметры учитывать и что подойдёт новичку.",
    category: "Экипировка",
    date: "2024-12-05",
  },
];

export const tournaments = [
  {
    id: "winter-cup-2025",
    name: "Турнир открытия",
    date: "2025-01-25",
    time: "18:00",
    entryFee: "Взнос 1 200 ₽ с игрока",
    status: "Регистрация открыта",
    type: "upcoming",
    description:
      "Формат — круговой этап + финал для двух лучших пар.",
    location: "Padel YUGRA, ул. Остравская, 1",
    maxTeams: 6,
    contactPhone: "+7 (999) 999-99-99",
    contactEmail: "padel-yugra@yandex.ru",
  },

  {
    id: "new-year-cup-2024",
    name: "Новогодний кубок 2024",
    date: "2024-12-20",
    time: "19:00",
    entryFee: "Взнос 1 000 ₽ с игрока",
    status: "Состоялся",
    type: "past",
    description:
      "Праздничные матчи в формате быстрых сетов. Победители — Пётр Смирнов и Сергей Котов.",
    location: "Padel YUGRA, ул. Остравская, 1",
    maxTeams: 6,
    contactPhone: "+7 (999) 999-99-99",
    contactEmail: "padel-yugra@yandex.ru",
    result: "1 место — Смирнов/Котов, 2 место — Сергеев/Орлова",
    standings: [
      { position: 1, team: "Смирнов/Котов", wins: 5, losses: 0, setsWon: 10, setsLost: 2 },
      { position: 2, team: "Сергеев/Орлова", wins: 4, losses: 1, setsWon: 8, setsLost: 4 },
      { position: 3, team: "Петров/Иванов", wins: 3, losses: 2, setsWon: 7, setsLost: 5 },
      { position: 4, team: "Сидоров/Кузнецов", wins: 2, losses: 3, setsWon: 5, setsLost: 7 },
      { position: 5, team: "Волков/Новиков", wins: 1, losses: 4, setsWon: 3, setsLost: 8 },
      { position: 6, team: "Морозов/Лебедев", wins: 0, losses: 5, setsWon: 2, setsLost: 10 },
    ],
    matches: [
      { round: "Групповой этап", team1: "Смирнов/Котов", score1: 6, score2: 2, team2: "Петров/Иванов" },
      { round: "Групповой этап", team1: "Сергеев/Орлова", score1: 6, score2: 4, team2: "Сидоров/Кузнецов" },
      { round: "Групповой этап", team1: "Смирнов/Котов", score1: 6, score2: 1, team2: "Волков/Новиков" },
      { round: "Групповой этап", team1: "Сергеев/Орлова", score1: 6, score2: 3, team2: "Морозов/Лебедев" },
      { round: "Полуфинал", team1: "Смирнов/Котов", score1: 6, score2: 2, team2: "Петров/Иванов" },
      { round: "Полуфинал", team1: "Сергеев/Орлова", score1: 6, score2: 4, team2: "Сидоров/Кузнецов" },
      { round: "Финал", team1: "Смирнов/Котов", score1: 6, score2: 4, team2: "Сергеев/Орлова" },
    ],
  },
  {
    id: "autumn-league-2024",
    name: "Осенняя лига",
    date: "2024-10-05",
    time: "10:00",
    entryFee: "Взнос 800 ₽ с игрока",
    status: "Состоялся",
    type: "past",
    description:
      "Серия матчей выходного дня. Сыграли 24 участника, лучшая пара — Лебедева/Гусев.",
    location: "Padel YUGRA, ул. Остравская, 1",
    maxTeams: 12,
    contactPhone: "+7 (999) 999-99-99",
    contactEmail: "padel-yugra@yandex.ru",
    result: "Лучшая пара — Анна Лебедева и Сергей Гусев",
    standings: [
      { position: 1, team: "Лебедева/Гусев", wins: 8, losses: 1, setsWon: 17, setsLost: 4 },
      { position: 2, team: "Ковалёв/Петров", wins: 7, losses: 2, setsWon: 15, setsLost: 6 },
      { position: 3, team: "Орлова/Белова", wins: 6, losses: 3, setsWon: 13, setsLost: 8 },
      { position: 4, team: "Смирнов/Иванов", wins: 5, losses: 4, setsWon: 11, setsLost: 10 },
    ],
    matches: [
      { round: "Групповой этап", team1: "Лебедева/Гусев", score1: 6, score2: 3, team2: "Ковалёв/Петров" },
      { round: "Групповой этап", team1: "Орлова/Белова", score1: 6, score2: 4, team2: "Смирнов/Иванов" },
      { round: "Полуфинал", team1: "Лебедева/Гусев", score1: 6, score2: 2, team2: "Орлова/Белова" },
      { round: "Полуфинал", team1: "Ковалёв/Петров", score1: 6, score2: 4, team2: "Смирнов/Иванов" },
      { round: "Финал", team1: "Лебедева/Гусев", score1: 6, score2: 4, team2: "Ковалёв/Петров" },
    ],
  },
];

export const playerProfiles = [
  {
    id: "alexey-kovalev",
    name: "Алексей Ковалёв",
    rank: 1,
    rating: 1820,
    winRate: "78%",
    tournaments: 12,
    level: "PRO",
    bio: "Игрок сборной клуба, победитель Prime League 2024, тренируется 5 раз в неделю.",
    plays: "Правша, атака",
    achievements: ["1 место — Prime League 2024", "Топ-4 — City Open 2024"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "maria-orlova",
    name: "Мария Орлова",
    rank: 2,
    rating: 1755,
    winRate: "74%",
    tournaments: 15,
    level: "PRO",
    bio: "Лидер женской команды, специализация — тактика и точность ударов.",
    plays: "Левша, контроль",
    achievements: ["1 место — Night Mix Doubles 2024", "2 место — Urban Masters"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "nikita-petrov",
    name: "Никита Петров",
    rank: 3,
    rating: 1690,
    winRate: "70%",
    tournaments: 11,
    level: "ADVANCED",
    bio: "Тренируется в клубе 3 года, проводит мастер-классы для новичков.",
    plays: "Правша, универсал",
    achievements: ["3 место — Prime League 2024", "Лучший подающий 2024"],
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "ekaterina-belova",
    name: "Екатерина Белова",
    rank: 4,
    rating: 1635,
    winRate: "68%",
    tournaments: 9,
    level: "ADVANCED",
    bio: "Активный участник клубных турниров, специализируется на тактической игре.",
    plays: "Правша, контроль",
    achievements: ["Участник Prime League 2024", "Лучший новичок сезона"],
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "ildar-safarov",
    name: "Ильдар Сафаров",
    rank: 5,
    rating: 1580,
    winRate: "65%",
    tournaments: 10,
    level: "ADVANCED",
    bio: "Развивающийся игрок, активно участвует в тренировках и турнирах.",
    plays: "Правша, универсал",
    achievements: ["Участник City Open 2024"],
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
  },
];
