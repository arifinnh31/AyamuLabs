import Image from "next/image";
import { PortfolioItem } from "@/components/content/ContentContext";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

type GalleryGridProps = {
  items: PortfolioItem[];
};

const CATEGORY_COLORS: Record<string, string> = {
  "Illustration": "text-primary bg-primary/10",
  "Emotes": "text-secondary bg-secondary/10",
  "Live2D": "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30",
  "Character Design": "text-rose-600 bg-rose-100 dark:bg-rose-900/30",
  "Concept Art": "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
  "Background": "text-teal-600 bg-teal-100 dark:bg-teal-900/30",
  "Chibi": "text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30",
  "Logo": "text-slate-600 bg-slate-100 dark:bg-slate-700/50",
  "YCH": "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

  const handleImageClick = (item: PortfolioItem) => {
    setSelectedImage({ src: item.image, title: item.title });
    setLightboxOpen(true);
  };

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {items.map((item) => (
            <div
            key={item.id}
            onClick={() => handleImageClick(item)}
            className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-400/20 border border-orange-50 dark:border-orange-900/20 cursor-zoom-in"
            >
            {/* Changed aspect ratio to 4/3 to match featured cards */}
            <div className="relative aspect-4/3 overflow-hidden">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                <span
                    className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${CATEGORY_COLORS[item.category] || "text-gray-500 bg-gray-100"}`}
                >
                    {item.category}
                </span>
                
                {item.type && (
                        <span className="text-xs text-portfolio-text-light/60 dark:text-portfolio-text-dark/60 font-medium">
                            {item.type}
                        </span>
                    )}
                </div>
                <h3 className="font-display font-bold text-lg text-portfolio-text-light dark:text-white group-hover:text-portfolio-primary transition-colors">
                    {item.title}
                </h3>
            </div>
            </div>
        ))}
        </div>
        
        <Lightbox 
            isOpen={lightboxOpen} 
            onClose={() => setLightboxOpen(false)} 
            imageSrc={selectedImage?.src || ""} 
            title={selectedImage?.title}
        />
    </>
  );
}
