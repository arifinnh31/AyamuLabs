import Image from "next/image";

type Artwork = {
  title: string;
  category: string;
  type: string; // Used for filtering
  tagColor: string;
  image: string;
};

type GalleryGridProps = {
  items: Artwork[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-400/20 border border-orange-50 dark:border-orange-900/20"
        >
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <button className="self-end mb-auto p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white transition-colors">
                <span className="material-icons-round text-lg">
                  favorite_border
                </span>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-display font-bold text-lg text-portfolio-text-light dark:text-white group-hover:text-portfolio-primary transition-colors">
                {item.title}
              </h3>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-md ${item.tagColor}`}
              >
                {item.type}
              </span>
            </div>
            <p className="text-sm text-portfolio-text-light/60 dark:text-portfolio-text-dark/60">
              {item.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
