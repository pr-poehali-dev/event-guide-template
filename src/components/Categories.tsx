import { useState } from "react";
import Icon from "@/components/ui/icon";

type Category = {
  id: string;
  icon: string;
  label: string;
  color: string;
  sub?: string[];
};

const categories: Category[] = [
  { id: "festivals", icon: "🎪", label: "Фестивали", color: "from-rose-400 to-pink-500", sub: ["Косплей", "Кино и игры", "Городские", "Музыкальные K-POP", "Культурные", "Международные", "Спортивные", "Детские", "Fashion", "Авто", "Реконструкция"] },
  { id: "edu", icon: "🎓", label: "Образование", color: "from-violet-400 to-purple-500" },
  { id: "exhibitions", icon: "🖼", label: "Выставки", color: "from-amber-400 to-orange-500", sub: ["Творческие", "Художественные", "Технические", "Рекламные", "Научные", "Промышленные"] },
  { id: "concerts", icon: "🎵", label: "Концерты", color: "from-blue-400 to-indigo-500", sub: ["Классика", "Рок", "Поп", "Джаз"] },
  { id: "cinema", icon: "🎬", label: "Кинотеатры", color: "from-slate-400 to-gray-500" },
  { id: "sport", icon: "⚽", label: "Спорт", color: "from-green-400 to-emerald-500" },
  { id: "shows", icon: "🎭", label: "Шоу", color: "from-fuchsia-400 to-pink-500" },
  { id: "standup", icon: "🎤", label: "Стендап", color: "from-yellow-400 to-amber-500" },
  { id: "kids", icon: "🧸", label: "Детям", color: "from-pink-300 to-rose-400" },
  { id: "holidays", icon: "🎉", label: "Праздники", color: "from-red-400 to-rose-500" },
  { id: "museums", icon: "🏛", label: "Музеи", color: "from-stone-400 to-slate-500" },
  { id: "tourists", icon: "🗺", label: "Туристам", color: "from-sky-400 to-blue-500" },
  { id: "parks", icon: "🌿", label: "Парки", color: "from-lime-400 to-green-500" },
  { id: "cafes", icon: "☕", label: "Кафе", color: "from-orange-400 to-amber-500", sub: ["Тематические", "Антикафе", "Бары", "Рестораны", "Лофты", "Пиццерии", "Азиатская еда"] },
  { id: "forums", icon: "💬", label: "Форумы", color: "from-cyan-400 to-teal-500" },
  { id: "markets", icon: "🛍", label: "Маркеты", color: "from-rose-300 to-pink-400" },
  { id: "lofts", icon: "🏢", label: "Лофты", color: "from-zinc-400 to-gray-500" },
  { id: "clubs", icon: "🎮", label: "Компьютерные клубы", color: "from-indigo-400 to-violet-500" },
  { id: "retro", icon: "🕺", label: "Ретро клубы", color: "from-purple-400 to-fuchsia-500" },
  { id: "trips", icon: "✈️", label: "Путешествия", color: "from-teal-400 to-cyan-500" },
  { id: "walks", icon: "🚶", label: "Прогулки", color: "from-emerald-400 to-green-500" },
  { id: "spaces", icon: "🏠", label: "Пространства", color: "from-violet-300 to-purple-400" },
  { id: "visa", icon: "🪪", label: "К-визы", color: "from-sky-300 to-blue-400" },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");

  const activeCat = categories.find(c => c.id === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-montserrat font-black text-2xl text-gray-900">Категории событий</h2>
          <p className="font-golos text-gray-500 text-sm mt-1">Выберите интересующую вас категорию</p>
        </div>
        {/* Price filter */}
        <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
          {(["all", "free", "paid"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setPriceFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-golos font-semibold transition-all ${
                priceFilter === f ? "bg-white text-teal-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f === "all" ? "Все" : f === "free" ? "Бесплатно" : "Платные"}
            </button>
          ))}
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
              activeCategory === cat.id
                ? "border-teal-400 bg-teal-50 shadow-md"
                : "border-transparent bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-md"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <span className="font-golos text-xs text-center text-gray-700 leading-tight font-medium">
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Subcategories */}
      {activeCat?.sub && (
        <div className="animate-slide-down bg-gradient-to-r from-teal-50 to-rose-50 rounded-2xl p-5 border border-teal-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{activeCat.icon}</span>
            <span className="font-montserrat font-bold text-gray-800">{activeCat.label}</span>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {activeCat.sub.map((s) => (
              <button
                key={s}
                className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-xl text-sm font-golos font-medium hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all shadow-sm"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
