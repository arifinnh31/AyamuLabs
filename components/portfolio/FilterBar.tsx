type FilterItem = {
  label: string;
  value: string;
};

type FilterBarProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  items: FilterItem[];
};

export default function FilterBar({
  currentFilter,
  onFilterChange,
  items,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onFilterChange(item.value)}
          className={`px-5 py-2 rounded-full font-bold shadow-md transition-all ${
            currentFilter === item.value
              ? "bg-portfolio-primary text-white ring-2 ring-portfolio-primary ring-offset-2 ring-offset-portfolio-bg-light dark:ring-offset-portfolio-bg-dark"
              : "bg-surface-light dark:bg-surface-dark hover:bg-orange-50 dark:hover:bg-orange-900/20 text-portfolio-text-light dark:text-portfolio-text-dark border border-orange-100 dark:border-orange-900/50 font-medium"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
