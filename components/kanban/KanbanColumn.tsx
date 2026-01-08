import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
  title: string;
  count: number;
  colorClass: string;
  bgClass: string;
  textClass: string;
  cards: any[];
}

export default function KanbanColumn({
  title,
  count,
  colorClass,
  bgClass,
  textClass,
  cards,
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col h-full min-w-[300px] md:min-w-0">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${colorClass}`}></span> {title}
        </h3>
        <span
          className={`${bgClass} ${textClass} text-xs font-bold px-2 py-1 rounded-md`}
        >
          {count}
        </span>
      </div>
      <div className="flex-1 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-2 space-y-3">
        {cards.map((card, index) => (
          <KanbanCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
