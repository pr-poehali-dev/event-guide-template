import { useState } from "react";
import Icon from "@/components/ui/icon";

const MONTHS = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
const DAYS_SHORT = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

const eventDays = [3, 7, 12, 15, 18, 21, 25, 28];

export default function MiniCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(today.getDate());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 w-64 shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prev} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
          <Icon name="ChevronLeft" size={14} className="text-gray-500" />
        </button>
        <span className="font-montserrat font-bold text-sm text-gray-800">
          {MONTHS[month]} {year}
        </span>
        <button onClick={next} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
          <Icon name="ChevronRight" size={14} className="text-gray-500" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS_SHORT.map((d) => (
          <div key={d} className="text-center text-[10px] font-golos font-semibold text-gray-400 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          const isSelected = day === selected;
          const hasEvent = eventDays.includes(day);
          return (
            <button
              key={day}
              onClick={() => setSelected(day)}
              className={`aspect-square flex flex-col items-center justify-center rounded-lg text-xs font-golos font-medium transition-all relative ${
                isSelected
                  ? "bg-teal-500 text-white shadow-md shadow-teal-500/30"
                  : isToday
                  ? "bg-rose-100 text-rose-600 font-bold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {day}
              {hasEvent && !isSelected && (
                <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-rose-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-golos text-gray-500">
          {selected ? `${selected} ${MONTHS[month]}` : "Выберите день"}
        </span>
        <button className="text-xs font-golos font-semibold text-teal-600 hover:text-teal-700">
          События →
        </button>
      </div>
    </div>
  );
}
