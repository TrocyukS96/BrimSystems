export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export const content = {
  ru: {
    nav: ['Проекты', 'Экспертиза', 'Подход', 'О студии'], navCta: 'Начать проект', language: 'Язык',
    homeAria: 'BrimSystems, на главную', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', navAria: 'Основная навигация',
    eyebrow: 'НЕЗАВИСИМАЯ ЦИФРОВАЯ СТУДИЯ',
    heroA: 'Для брендов,', heroB: 'которые', heroC: 'идут дальше.',
    heroDesc: 'Сайты, интернет-магазины, веб-приложения, CRM-интеграции и автоматизация бизнеса для компаний, которые готовы идти дальше.',
    heroCta: 'Давайте сделаем', heroSecondary: 'Смотреть работы', scroll: 'ЛИСТАЙТЕ НИЖЕ',
    heroMetaA: 'САЙТЫ', heroMetaB: 'МАГАЗИНЫ / АВТОМАТИЗАЦИЯ',
    strip: ['Дизайн со смыслом', 'Готово к продажам', 'Сделано, чтобы работать'],
    workLabel: '01 / ИЗБРАННЫЕ РАБОТЫ', workTitle: 'Доказательство', workAccent: 'в проектах.', workDesc: 'Сайты, магазины и сервисы для бизнеса. Избранные проекты нашей команды — от автомобильного ритейла и онлайн-записи до игровых платформ.',
    caseTypes: ['Аксессуары для пикапов и интернет-магазин', 'Автосервис и оборудование', 'Диски, ритейл и цифровой шоурум', 'Онлайн-запись для частных мастеров', 'Междугородние перевозки, сайт и CRM', 'Игровая платформа Warcraft III'],
    caseDescriptions: [
      'Сайт аксессуаров для пикапов: визуальная подача продуктов, подробные страницы, каталог и цельная визуальная система.',
      'Сайт оборудования и услуг с заметной навигацией по продуктам, технической информацией, описанием сервиса и понятным путём к заявке.',
      'Обновлённый цифровой шоурум: подбор дисков, галереи автомобилей, просмотр брендов и выразительная визуальная идентичность.',
      'Клиенты записываются сами по ссылке: выбирают услугу и свободное время, а заявка приходит в Telegram. Мастер подтверждает, переносит и добавляет визиты в кабинете — с графиком, планом дня и напоминаниями.',
      'Цифровая система для транспортного бизнеса: сайт на Next.js, где подбирают направление, смотрят стоимость и отправляют заявку, и CRM на React для сотрудников. Yandex GPT и ИИ-чат-бот помогают общаться с частными и корпоративными клиентами.',
      'Веб-платформа для сообщества Warcraft III и классической DotA: главная с игровым контентом, рейтинги с MMR и винрейтом, персональные профили со статистикой, разделы карт, новостей и статей, авторизация и мультиязычный интерфейс.'
    ],
    viewProject: 'Открыть сайт', caseNote: 'В галереях — реальные скриншоты избранных проектов. Листайте, чтобы увидеть больше страниц.',
    heroAlts: ['Сайт аксессуаров 147PACIFIC', 'Сайт оборудования HECOSVC', 'Сайт Progressive Auto Sports'],
    collageAria: 'Скриншоты трёх сайтов из избранных проектов', collageLabel: 'РЕАЛЬНЫЕ РАБОТЫ / САЙТЫ',
    galleryLabel: 'скриншоты', screenshotAlt: 'скриншот сайта', showImage: 'Показать изображение', prevImage: 'Предыдущее изображение', nextImage: 'Следующее изображение',
    expertiseLabel: '02 / ЧЕМ МЫ ЗАНИМАЕМСЯ', expertiseTitle: 'Каждый пиксель', expertiseAccent: 'со смыслом.', expertiseDesc: 'От первого разговора до запуска мы делаем сложное простым.',
    services: [
      {n: '01', title: 'Сайты и интернет-магазины', desc: 'Сайты, интернет-магазины, веб-приложения, каталоги и посадочные страницы — под ваших клиентов и ваши цели.', tags: ['Дизайн на заказ', 'E-commerce', 'Адаптивная вёрстка']},
      {n: '02', title: 'Редизайн и обновление', desc: 'Превращаем устаревший сайт в более точный, быстрый и понятный опыт. Направление определяем до начала разработки.', tags: ['UX / UI', 'Обновление сайта', 'Скорость']},
      {n: '03', title: 'Магазины, CRM и автоматизация', desc: 'Гибкая коммерческая архитектура, CRM-интеграции, автоматизация процессов, подключение оплаты и контент, которым легко управлять. Инструменты подбираем под задачу.', tags: ['Saleor', 'Payload CMS', 'Интеграции']},
      {n: '04', title: 'SEO, тексты и визуал', desc: 'Техническая база для поиска, полезные тексты, аналитика и аккуратные изображения, которые помогают найти компанию и доверять ей.', tags: ['Техническое SEO', 'Готовность к ИИ-поиску', 'Изображения']}
    ],
    audienceLabel: 'ПОД ВАШУ ЗАДАЧУ', audienceTitle: 'Системы', audienceAccent: 'под работу.', audienceDesc: 'Сайты, интернет-магазины, веб-приложения, CRM-интеграции и автоматизация бизнеса — под конкретную компанию.',
    audiences: ['Сайты', 'Интернет-магазины', 'Веб-приложения', 'CRM-интеграции', 'Автоматизация', 'Редизайн'],
    processLabel: '03 / ПРОЦЕСС', processTitle: 'Без огромных брифов.', processAccent: 'Без догадок.',
    process: [
      {n: '01', title: 'Обсуждаем', desc: 'Короткий разговор о бизнесе, клиентах и о том, что нужно изменить.'},
      {n: '02', title: 'Находим направление', desc: 'Фиксируем объём, структуру и дизайн, на который можно опереться.'},
      {n: '03', title: 'Собираем ясно', desc: 'Дизайн и разработка идут вместе, с понятной обратной связью.'},
      {n: '04', title: 'Запускаем и развиваем', desc: 'Публикуем адаптивный сайт, готовый к поиску, и помогаем спланировать следующий шаг.'}
    ],
    aboutLabel: 'НЕБОЛЬШАЯ КОМАНДА. БОЛЬШОЕ ВНИМАНИЕ К ДЕТАЛЯМ.', aboutTitle: 'Меньше театра.', aboutAccent: 'Больше дела.', aboutDesc: 'BrimSystems — независимая цифровая студия: прямое сотрудничество, внимательный дизайн и надёжная разработка. Вы говорите с теми, кто делает работу.',
    faqLabel: 'ПОЛЕЗНО ЗНАТЬ', faqTitle: 'Вопросы и ответы.', faqs: [
      {q: 'Нужно ли техническое задание?', a: 'Нет. Начинаем с разговора, затем вместе определяем объём, структуру и результат до разработки.'},
      {q: 'Можете обновить мой текущий сайт?', a: 'Да. Можем обновить визуальное направление, улучшить удобство и модернизировать реализацию. Сначала смотрим существующий сайт.'},
      {q: 'Вы работаете только с одной отраслью?', a: 'Нет. Мы делаем сайты, интернет-магазины, веб-приложения, CRM-интеграции и автоматизацию бизнеса. В работах выше — автомобильные проекты, сервис онлайн-записи и игровая платформа, и мы берёмся за другие компании, если подход подходит.'},
      {q: 'На какой платформе будет магазин?', a: 'Для подходящих задач часто рекомендуем гибкие решения вроде Saleor для e-commerce и Payload для управления контентом. Стек выбираем по требованиям и бюджету.'},
      {q: 'Вы гарантируете позиции в Google или в ответах ИИ?', a: 'Ответственно гарантировать позиции нельзя. Мы закладываем техническое SEO, структурированные данные и понятный полезный контент, чтобы сайт было проще найти.'}
    ],
    contactLabel: '04 / ДАВАЙТЕ ОБСУДИМ', contactTitle: 'Есть проект', contactAccent: 'на примете?', contactDesc: 'Расскажите, что вы запускаете. Поможем определить следующий шаг — техническое задание не нужно.', contactButton: 'Написать о проекте', contactSubject: 'Новый запрос — BrimSystems', contactBody: 'Здравствуйте, BrimSystems!\n\nКомпания:\nСайт (если есть):\nЧто нужно:\nСроки:\n\nСпасибо!',
    contactMotionAria: 'Анимация пути от идеи к сайту', deviceChrome: 'BRIMSYSTEMS / СТУДИЯ', deviceIdea: 'ВАША ИДЕЯ', deviceHeadline: 'Сделаем сильный проект.', deviceCta: 'Запустить проект', chipDesign: 'СВОЙ ДИЗАЙН', chipCommerce: 'МАГАЗИН',
    footerKicker: 'НЕЗАВИСИМАЯ ЦИФРОВАЯ СТУДИЯ', footerText: 'Цифровые решения для бизнеса, который идёт дальше.', footerExplore: 'РАЗДЕЛЫ', footerHello: 'СВЯЗАТЬСЯ', footerNote: 'Независимая цифровая студия', backToTop: 'Наверх', rights: 'Все права защищены.',
    knowsAbout: ['Сайты', 'Интернет-магазины', 'Веб-приложения', 'CRM-интеграции', 'Автоматизация бизнеса', 'Редизайн сайтов', 'Техническое SEO', 'Saleor', 'Payload CMS'],
    seoTitle: 'BrimSystems | Сайты, интернет-магазины и автоматизация', seoDescription: 'Сайты, интернет-магазины, веб-приложения, редизайн, CRM-интеграции, автоматизация бизнеса и техническое SEO. BrimSystems.', seoImageAlt: 'BrimSystems — цифровая студия'
  },
  en: {
    nav: ['Work', 'Expertise', 'Approach', 'About'], navCta: 'Start a project', language: 'Language',
    homeAria: 'BrimSystems home', menuOpen: 'Open menu', menuClose: 'Close menu', navAria: 'Primary navigation',
    eyebrow: 'INDEPENDENT DIGITAL STUDIO',
    heroA: 'Built for the', heroB: 'brands that', heroC: 'move.',
    heroDesc: 'Websites, online stores, web applications, CRM integrations and business automation for companies ready to go further.',
    heroCta: 'Let\u2019s build yours', heroSecondary: 'Explore our work', scroll: 'SCROLL TO EXPLORE',
    heroMetaA: 'WEBSITES', heroMetaB: 'STORES / AUTOMATION',
    strip: ['Design-led', 'Commerce-ready', 'Built to perform'],
    workLabel: '01 / SELECTED WORK', workTitle: 'Proof is in the', workAccent: 'projects.', workDesc: 'Websites, stores, and services for businesses. Selected projects from our team — from automotive retail and online booking to gaming platforms.',
    caseTypes: ['Truck accessories & e-commerce', 'Automotive service & equipment', 'Wheels, retail & digital showroom', 'Online booking for independent specialists', 'Intercity transfers, website and CRM', 'Warcraft III community platform'],
    caseDescriptions: [
      'A product-focused website for truck accessories, with immersive product storytelling, detailed accessory pages, a shopping catalog, and a cohesive visual system.',
      'An automotive equipment and service website with prominent product navigation, technical information, service content, and clear paths to customer inquiries.',
      'A refreshed digital showroom combining custom wheel shopping, vehicle galleries, brand browsing, and an expressive automotive identity.',
      'Clients book themselves from a link: they choose a service and an open time, and the request arrives in Telegram. The specialist confirms, reschedules, and adds visits in the dashboard — with a schedule, a day plan, and reminders.',
      'A digital system for a transport business: a Next.js site where customers choose a route, see the fare and send a request, plus a React CRM for the team. Yandex GPT and an AI chatbot support conversations with private and corporate clients.',
      'A web platform for the Warcraft III and classic DotA community: a home page with game content, rankings with MMR and win rate, personal profiles with stats, sections for maps, news and articles, sign-in, and a multilingual interface.'
    ],
    viewProject: 'Visit website', caseNote: 'Gallery images are real screenshots supplied from our selected projects. Explore each gallery to see more pages.',
    heroAlts: ['147PACIFIC automotive accessories website', 'HECOSVC automotive equipment website', 'Progressive Auto Sports website'],
    collageAria: 'Screenshots of three websites from selected projects', collageLabel: 'REAL WORK / REAL WEBSITES',
    galleryLabel: 'screenshots', screenshotAlt: 'website screenshot', showImage: 'Show image', prevImage: 'Previous image', nextImage: 'Next image',
    expertiseLabel: '02 / WHAT WE DO', expertiseTitle: 'Every pixel has', expertiseAccent: 'a purpose.', expertiseDesc: 'From first conversation to launch, we make the complicated feel simple.',
    services: [
      {n: '01', title: 'Websites & online stores', desc: 'Custom websites, online stores, web applications, product catalogs and landing pages — designed around your customers and your goals.', tags: ['Custom design', 'E-commerce', 'Responsive builds']},
      {n: '02', title: 'Redesign & modernization', desc: 'Turn an outdated website into a sharper, faster and more intuitive experience. We help define the direction before development begins.', tags: ['UX / UI', 'Site refresh', 'Performance']},
      {n: '03', title: 'Commerce, CRM & automation', desc: 'Flexible commerce architecture, CRM integrations, business automation, checkout connections and content that is easy to manage. We choose the right tools for the job.', tags: ['Saleor', 'Payload CMS', 'Integrations']},
      {n: '04', title: 'SEO, content & visuals', desc: 'Search-ready foundations, useful copy, analytics and refined imagery that help customers discover and trust your business.', tags: ['Technical SEO', 'AI search readiness', 'Product imagery']}
    ],
    audienceLabel: 'SHAPED AROUND THE WORK', audienceTitle: 'Built around', audienceAccent: 'the work.', audienceDesc: 'Websites, online stores, web applications, CRM integrations and business automation — shaped around the business in front of us.',
    audiences: ['Websites', 'Online stores', 'Web applications', 'CRM integrations', 'Business automation', 'Redesigns'],
    processLabel: '03 / THE PROCESS', processTitle: 'No 40-page brief.', processAccent: 'No guesswork.',
    process: [
      {n: '01', title: 'Talk it through', desc: 'A short conversation about your business, customers and what needs to change.'},
      {n: '02', title: 'Find the direction', desc: 'We define scope, structure and a design direction you can actually react to.'},
      {n: '03', title: 'Build with clarity', desc: 'Design and development move together, with transparent feedback along the way.'},
      {n: '04', title: 'Launch & evolve', desc: 'We ship a responsive, search-ready website and help you plan what comes next.'}
    ],
    aboutLabel: 'A SMALL TEAM. BIG ATTENTION TO DETAIL.', aboutTitle: 'Less agency theater.', aboutAccent: 'More doing.', aboutDesc: 'BrimSystems is an independent digital studio built around direct collaboration, thoughtful design and dependable development. You talk to the people doing the work.',
    faqLabel: 'GOOD TO KNOW', faqTitle: 'Questions, answered.', faqs: [
      {q: 'Do I need a technical specification?', a: 'No. We start with a conversation, then help define the scope, structure and deliverables before development.'},
      {q: 'Can you redesign my existing website?', a: 'Yes. We can refresh the visual direction, improve usability and modernize the implementation. We review the existing site first.'},
      {q: 'Do you only work in one industry?', a: 'No. We build websites, online stores, web applications, CRM integrations and business automation. The work above includes automotive projects, an online booking product, and a gaming platform, and we also take on other businesses where the approach is a good fit.'},
      {q: 'Which platform will my store use?', a: 'We often recommend flexible solutions such as Saleor for suitable e-commerce projects and Payload for content management. We select the stack based on requirements and budget.'},
      {q: 'Do you guarantee Google or AI search rankings?', a: 'No one can responsibly guarantee rankings. We implement technical SEO, structured data and clear, helpful content to support discoverability.'}
    ],
    contactLabel: '04 / LET\u2019S TALK', contactTitle: 'Have a project', contactAccent: 'in mind?', contactDesc: 'Tell us what you\u2019re building. We\u2019ll help figure out the right next step — no technical brief required.', contactButton: 'Email us about your project', contactSubject: 'New project inquiry — BrimSystems', contactBody: 'Hi BrimSystems,\n\nMy company:\nWebsite (if any):\nWhat I need:\nTimeline:\n\nThanks!',
    contactMotionAria: 'From your idea to a website, animated workflow', deviceChrome: 'BRIMSYSTEMS / STUDIO', deviceIdea: 'YOUR IDEA', deviceHeadline: 'Let\u2019s build something great.', deviceCta: 'Launch project', chipDesign: 'CUSTOM DESIGN', chipCommerce: 'E-COMMERCE',
    footerKicker: 'INDEPENDENT DIGITAL STUDIO', footerText: 'Digital experiences for businesses that move.', footerExplore: 'EXPLORE', footerHello: 'SAY HELLO', footerNote: 'Independent digital studio', backToTop: 'Back to top', rights: 'All rights reserved.',
    knowsAbout: ['Websites', 'Online stores', 'Web applications', 'CRM integrations', 'Business automation', 'Website redesign', 'Technical SEO', 'Saleor', 'Payload CMS'],
    seoTitle: 'BrimSystems | Websites, Online Stores & Business Automation', seoDescription: 'Websites, online stores, web applications, redesigns, CRM integrations, business automation and technical SEO. Built with care by BrimSystems.', seoImageAlt: 'BrimSystems — digital studio'
  }
} as const;

export function getContent(locale: Locale) { return content[locale]; }
