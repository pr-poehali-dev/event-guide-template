import Icon from "@/components/ui/icon";

const PHOTO_IMG = "https://cdn.poehali.dev/projects/1ccdfe20-28eb-44d6-b26c-9d117645d032/files/bd204688-7571-4260-b270-404083a4e4af.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/1ccdfe20-28eb-44d6-b26c-9d117645d032/files/545aed3d-d2e7-4815-aae1-49459e95aa8c.jpg";

const events = [
  {
    id: 1,
    img: PHOTO_IMG,
    tag: "Концерт",
    tagColor: "bg-rose-500",
    title: "Летний музыкальный фестиваль",
    date: "18 мая",
    time: "18:00",
    place: "Парк Горького, Москва",
    price: "Бесплатно",
    priceColor: "text-emerald-600",
    icon: "Music",
  },
  {
    id: 2,
    img: GALLERY_IMG,
    tag: "Выставка",
    tagColor: "bg-violet-500",
    title: "Современное искусство: диалог поколений",
    date: "20 мая",
    time: "11:00",
    place: "Манеж, Санкт-Петербург",
    price: "от 500 ₽",
    priceColor: "text-rose-600",
    icon: "Palette",
  },
  {
    id: 3,
    img: PHOTO_IMG,
    tag: "Фестиваль",
    tagColor: "bg-teal-500",
    title: "Гастрономический маркет Street Food",
    date: "25 мая",
    time: "12:00",
    place: "Нижний Новгород",
    price: "Вход свободный",
    priceColor: "text-emerald-600",
    icon: "Utensils",
  },
  {
    id: 4,
    img: GALLERY_IMG,
    tag: "Детям",
    tagColor: "bg-pink-500",
    title: "Мастер-класс по рисованию для детей",
    date: "22 мая",
    time: "10:00",
    place: "Казань, Центр творчества",
    price: "от 300 ₽",
    priceColor: "text-rose-600",
    icon: "Star",
  },
];

export default function EventWidgets() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-500 text-sm font-golos font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              Актуальные события
            </div>
            <h2 className="font-montserrat font-black text-2xl text-gray-900">Ближайшие мероприятия</h2>
          </div>
          <button className="flex items-center gap-2 text-teal-600 font-golos font-semibold text-sm hover:text-teal-700 transition-colors">
            Смотреть все
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((ev, i) => (
            <div
              key={ev.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 ${ev.tagColor} text-white text-xs font-golos font-semibold px-2.5 py-1 rounded-full`}>
                  {ev.tag}
                </span>
                <span className={`absolute top-3 right-3 ${ev.price === "Бесплатно" || ev.price === "Вход свободный" ? "bg-emerald-500" : "bg-rose-500"} text-white text-xs font-golos font-bold px-2 py-1 rounded-full`}>
                  {ev.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-montserrat font-bold text-gray-900 text-sm leading-tight mb-3 line-clamp-2">
                  {ev.title}
                </h3>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-golos">
                    <Icon name="Calendar" size={12} className="text-teal-500 shrink-0" />
                    {ev.date} · {ev.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-golos">
                    <Icon name="MapPin" size={12} className="text-rose-400 shrink-0" />
                    <span className="truncate">{ev.place}</span>
                  </div>
                </div>

                <button className="mt-4 w-full py-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-xl text-xs font-golos font-semibold hover:from-teal-600 hover:to-teal-500 transition-all">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
