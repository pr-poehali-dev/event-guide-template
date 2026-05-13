import Icon from "@/components/ui/icon";

const PHOTO_IMG = "https://cdn.poehali.dev/projects/1ccdfe20-28eb-44d6-b26c-9d117645d032/files/bd204688-7571-4260-b270-404083a4e4af.jpg";

const serviceBlocks = [
  {
    icon: "Camera",
    title: "Фото и видеосъёмка",
    desc: "Профессиональные отчёты с мероприятий. Портфолио работ на сайте.",
    color: "bg-rose-50 text-rose-600 border-rose-200",
    accent: "from-rose-400 to-pink-500",
  },
  {
    icon: "Users",
    title: "Набор волонтёров",
    desc: "Помогаем организаторам находить активных помощников для событий.",
    color: "bg-teal-50 text-teal-600 border-teal-200",
    accent: "from-teal-400 to-cyan-500",
  },
  {
    icon: "UtensilsCrossed",
    title: "Реклама кафе и ресторанов",
    desc: "Продвигаем заведения через события и социальные сети.",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: "ShoppingBag",
    title: "Реклама магазинов",
    desc: "Привлекаем покупателей через тематические мероприятия и блогеров.",
    color: "bg-violet-50 text-violet-600 border-violet-200",
    accent: "from-violet-400 to-purple-500",
  },
  {
    icon: "Globe",
    title: "Создаём сайты и логотипы",
    desc: "Разработка сайтов, фирменного стиля, логотипов под ключ.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    icon: "Sparkles",
    title: "Нейросети и блогеры",
    desc: "Работаем с ИИ, продвигаем мерч через блогеров.",
    color: "bg-pink-50 text-pink-600 border-pink-200",
    accent: "from-pink-400 to-rose-500",
  },
];

export default function Services() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-teal-600 text-sm font-golos font-semibold mb-2">
            <Icon name="Zap" size={14} />
            Наши услуги
          </div>
          <h2 className="font-montserrat font-black text-3xl text-gray-900 mb-3">
            Всё для вашего мероприятия
          </h2>
          <p className="font-golos text-gray-500 max-w-xl mx-auto leading-relaxed">
            Команда Events Guide — не просто путеводитель. Мы помогаем организаторам,
            заведениям и брендам найти свою аудиторию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {serviceBlocks.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                <Icon name={s.icon} size={22} className="text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="font-golos text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-teal-600 text-sm font-golos font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Узнать подробнее <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Big promo banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-teal-500 text-white p-8 lg:p-12">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img src={PHOTO_IMG} alt="Реклама" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-teal-600" />
          </div>
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-golos font-semibold mb-4">
              <Icon name="TrendingUp" size={12} />
              Реклама на сайте
            </div>
            <h3 className="font-montserrat font-black text-2xl lg:text-3xl mb-3">
              Ваше событие увидят тысячи
            </h3>
            <p className="font-golos text-white/80 text-sm leading-relaxed mb-6">
              Мы тщательно отбираем публикации. Аудитория — люди с доходом, которые ищут
              куда сходить отдохнуть. Спецразмещение на главной увеличивает просмотры в 2–4 раза.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-montserrat font-bold text-sm transition-all shadow-lg">
                Разместить событие
              </button>
              <button className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-xl font-golos font-semibold text-sm transition-all">
                Коммерческое предложение
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}