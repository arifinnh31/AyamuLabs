export default function PortfolioHero() {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-block p-2 px-4 rounded-full bg-portfolio-secondary/50 dark:bg-orange-900/30 text-portfolio-primary font-bold text-sm mb-4 border border-portfolio-primary/20">
        ✨ One Brand, Multi-Creator, AI-Assisted
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
