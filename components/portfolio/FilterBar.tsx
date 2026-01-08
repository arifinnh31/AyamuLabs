type FilterBarProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

const categories = [
  "All Work",
  "Anime",
  "Character Design",
  "Backgrounds",
  "Live2D",
  "Concept Art",
];

export default function FilterBar({
  currentFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-2 rounded-full font-bold shadow-md transition-all ${
            currentFilter === category
              ? "bg-portfolio-primary text-white ring-2 ring-portfolio-primary ring-offset-2 ring-offset-portfolio-bg-light dark:ring-offset-portfolio-bg-dark"
              : "bg-surface-light dark:bg-surface-dark hover:bg-orange-50 dark:hover:bg-orange-900/20 text-portfolio-text-light dark:text-portfolio-text-dark border border-orange-100 dark:border-orange-900/50 font-medium"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
