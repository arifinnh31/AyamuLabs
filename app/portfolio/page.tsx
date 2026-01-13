"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FilterBar from "@/components/portfolio/FilterBar";
import GalleryGrid from "@/components/portfolio/GalleryGrid";
import { useContent } from "@/components/content/ContentContext";

export default function PortfolioPage() {
  const { content } = useContent();
  const [filter, setFilter] = useState("All Work");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems =
    filter === "All Work"
      ? content.portfolioItems
      : content.portfolioItems.filter(
          (item) => item.category === filter || item.type === filter
        );

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setVisibleCount(8); // Reset to first page when filter changes
  };

  const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 8);
  };

  const filterItems = [
    { label: "All Work", value: "All Work" },
    ...content.commissionCategories.map(cat => ({ label: cat.title, value: cat.id }))
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg-light dark:bg-portfolio-bg-dark text-portfolio-text-light dark:text-portfolio-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow container mx-auto px-4 py-8 md:py-12 mt-20">
        <PortfolioHero />
        <FilterBar 
            currentFilter={filter} 
            onFilterChange={handleFilterChange} 
            items={filterItems}
        />
        
        <GalleryGrid items={filteredItems.slice(0, visibleCount)} />
        
        {visibleCount < filteredItems.length && (
            <div className="mt-16 text-center">
            <button 
                onClick={handleLoadMore}
                className="px-8 py-3 bg-surface-light dark:bg-surface-dark border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 mx-auto"
            >
                <span className="material-icons-round">expand_more</span>
                Load More Artworks
            </button>
            </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
