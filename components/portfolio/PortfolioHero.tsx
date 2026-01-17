export default function PortfolioHero() {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-bold mb-4">
        <span className="material-icons-round text-sm mr-2">
          auto_awesome
        </span>
        Creative Studio
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-portfolio-text-light dark:text-white">
        Our Creative <span className="text-portfolio-primary">Gallery</span>
      </h1>
      <p className="text-lg md:text-xl text-portfolio-text-light/70 dark:text-portfolio-text-dark/70 max-w-2xl mx-auto">
        Explore a world of cute characters, vibrant backgrounds, and stunning
        Live2D models crafted by our AyamuLabs collective.
      </p>
    </div>
  );
}
