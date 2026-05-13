import { useState } from "react";
import Icon from "@/components/ui/icon";

const countries = ["Россия", "Беларусь", "Китай", "Япония", "Индия"];
const cities = ["Москва", "Санкт-Петербург", "Казань", "Нижний Новгород"];

const services = [
  "Фото и видеосъёмка",
  "Портфолио",
  "Набор волонтёров",
  "Реклама кафе и ресторанов",
  "Реклама магазинов",
  "Создаём сайты",
  "Логотипы",
  "Работаем с нейросетями",
  "Сотрудничаем с блогерами",
  "Мерч через блогеров",
  "Пошив чехлов и фартуков",
  "Реклама",
  "Собираем фото/видеостудии",
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeCountry, setActiveCountry] = useState("Россия");
  const [activeCity, setActiveCity] = useState("Москва");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/1ccdfe20-28eb-44d6-b26c-9d117645d032/bucket/ad6ae27b-ec8f-48a1-94d5-2a783858217c.png"
              alt="Events Guide"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-golos font-medium">
            <a href="#events" className="hover:text-rose-200 transition-colors">Найти мероприятие</a>
            <a href="#news" className="hover:text-rose-200 transition-colors">Новости</a>
          </nav>

          {/* Countries */}
          <div className="hidden md:flex items-center gap-1">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCountry(c)}
                className={`px-2 py-1 rounded text-xs font-golos font-medium transition-all ${
                  activeCountry === c
                    ? "bg-white text-teal-700"
                    : "hover:bg-white/20 text-white/90"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              <Icon name="Search" size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Search bar dropdown */}
        {searchOpen && (
          <div className="border-t border-teal-400/30 bg-teal-700/50 backdrop-blur-sm animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-300" />
                <input
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Поиск мероприятий, мест, событий..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-teal-200 text-sm font-golos focus:outline-none focus:border-white/40 focus:bg-white/15"
                />
                {searchValue && (
                  <button onClick={() => setSearchValue("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Icon name="X" size={14} className="text-teal-300" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar — cities + services */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 flex-wrap">
          {/* Services toggle */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-golos font-semibold transition-all ${
              servicesOpen
                ? "bg-rose-500 text-white"
                : "bg-rose-50 text-rose-600 hover:bg-rose-100"
            }`}
          >
            <Icon name="Briefcase" size={14} />
            Услуги
            <Icon name={servicesOpen ? "ChevronUp" : "ChevronDown"} size={14} />
          </button>

          <div className="h-4 w-px bg-gray-200 hidden sm:block" />

          {/* Cities */}
          <div className="flex items-center gap-1 flex-wrap">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-3 py-1 rounded-lg text-xs font-golos font-medium transition-all ${
                  activeCity === city
                    ? "bg-teal-500 text-white"
                    : "text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Services panel */}
        {servicesOpen && (
          <div className="border-t border-rose-100 bg-rose-50/60 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  key={s}
                  className="px-3 py-1.5 bg-white border border-rose-200 text-rose-600 rounded-full text-xs font-golos font-medium hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}