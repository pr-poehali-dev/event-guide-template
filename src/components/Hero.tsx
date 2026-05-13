import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/1ccdfe20-28eb-44d6-b26c-9d117645d032/files/07c87bf9-1560-40a2-b0db-2b028b3af013.jpg";

const quickFilters = ["Бесплатно", "Сегодня", "Выходные", "Онлайн", "Дети", "Рядом со мной"];

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative overflow-hidden min-h-[480px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Events Guide" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-rose-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-golos font-semibold mb-5 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Путеводитель по мероприятиям
          </div>

          {/* Title */}
          <h1
            className="font-montserrat font-black text-white leading-tight mb-4 animate-fade-in"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', animationDelay: '0.1s' }}
          >
            Events<span className="text-rose-400">Guide</span>
            <br />
            <span className="text-teal-200 text-[0.6em] font-bold">
              Откройте мир удивительных событий
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/80 font-golos text-base mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Команда Events Guide — ваш гид по самым интересным и ярким событиям!
            Снимаем крутые фото и видео-отчёты, чтобы вы могли почувствовать
            себя в центре событий.
          </p>

          {/* Search bar */}
          <div
            className="relative animate-fade-in mb-5"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 pl-4 pr-2">
                <Icon name="MapPin" size={18} className="text-teal-500 shrink-0" />
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Найти мероприятие, место или событие..."
                className="flex-1 py-4 pr-2 text-gray-800 placeholder:text-gray-400 font-golos text-sm focus:outline-none bg-transparent"
              />
              <button className="m-1.5 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-xl font-montserrat font-bold text-sm hover:from-rose-600 hover:to-rose-500 transition-all shadow-lg hover:shadow-rose-500/30 flex items-center gap-2">
                <Icon name="Search" size={15} />
                Найти
              </button>
            </div>
          </div>

          {/* Quick filters */}
          <div
            className="flex flex-wrap gap-2 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {quickFilters.map((f) => (
              <button
                key={f}
                className="px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full text-xs font-golos font-medium hover:bg-white/25 transition-all"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
