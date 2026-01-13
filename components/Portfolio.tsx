"use client";

import Image from "next/image";
import Link from "next/link";
import { useContent, PortfolioItem } from "./content/ContentContext";
import { useState } from "react";
import Lightbox from "./ui/Lightbox";

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

export default function Portfolio() {
  const { content } = useContent();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

  const handleImageClick = (item: PortfolioItem) => {
    setSelectedImage({ src: item.image, title: item.title });
    setLightboxOpen(true);
  };

  return (
    <section
      className="py-20 bg-white dark:bg-surface-dark rounded-t-3xl shadow-inner relative transition-colors duration-300"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Clucks</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our gallery of freshly hatched artworks, crafted with love
            and a sprinkle of magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.portfolioItems
            .filter((item) => item.featured)
            .map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item)}
              className="group relative bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-400/20 border border-transparent hover:border-orange-50 dark:hover:border-orange-900/20 cursor-zoom-in"
            >
              <div className="relative overflow-hidden aspect-4/3">
                <Image
                  src={item.image}
                  alt={`Character Art: ${item.title}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${CATEGORY_COLORS[item.category] || "text-gray-500 bg-gray-100"}`}
                  >
                    {item.category}
                  </span>
                  
                  {item.type && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.type}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary font-bold hover:text-yellow-600 transition-colors"
          >
            <span>View Full Gallery</span>
            <span className="material-icons-round">arrow_forward</span>
          </Link>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        imageSrc={selectedImage?.src || ""} 
        title={selectedImage?.title}
      />
    </section>
  );
}
