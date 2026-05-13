import Icon from "@/components/ui/icon";

const footerSections = [
  {
    title: "Контакты и услуги",
    links: [
      "Фото и видеосъёмка",
      "Набор волонтёров",
      "Реклама кафе и ресторанов",
      "Реклама магазинов",
      "Агентство",
      "Ведущие на мероприятиях",
      "Новости",
    ],
  },
  {
    title: "Сотрудничество",
    links: [
      "Размещение событий",
      "Требования к материалам",
      "Музеям и выставкам",
      "Ресторанам и кафе",
      "Помещения под мероприятия",
      "Перенос мероприятий",
    ],
  },
  {
    title: "Партнёрам",
    links: [
      "Реклама на сайте",
      "Коммерческое предложение",
      "Логотипы в векторе",
      "Медиа",
      "Добавление событий",
      "Добавление заведений",
    ],
  },
  {
    title: "Разделы сайта",
    links: [
      "Фестивали",
      "Выставки",
      "Концерты",
      "Кафе и рестораны",
      "Площадки под мероприятия",
      "Путешествия",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* B2B promo strip */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="Eye" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-bold mb-1">Максимальный охват</div>
              <div className="text-white/80 text-sm font-golos">Спецразмещение увеличивает просмотры вашего события в 2–4 раза</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="Users" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-bold mb-1">Целевая аудитория</div>
              <div className="text-white/80 text-sm font-golos">Люди с доходом, которые активно ищут куда сходить отдохнуть</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="TrendingUp" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-bold mb-1">Результат уже через неделю</div>
              <div className="text-white/80 text-sm font-golos">Клиенты замечают рост посещаемости заведений</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat font-bold text-white mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-golos text-gray-400 text-sm hover:text-teal-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <span className="text-white font-montserrat font-black text-sm">EG</span>
            </div>
            <div>
              <div className="font-montserrat font-black text-white">
                Events<span className="text-rose-400">Guide</span>
              </div>
              <div className="text-gray-500 text-xs font-golos">Путеводитель по мероприятиям</div>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {["Instagram", "Youtube", "Send", "Music"].map((icon) => (
              <button
                key={icon}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon name={icon} size={15} className="text-gray-400 hover:text-white" />
              </button>
            ))}
          </div>

          <div className="text-gray-500 text-xs font-golos">
            © 2024 Events Guide. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
