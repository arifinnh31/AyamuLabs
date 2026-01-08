export default function CTA() {
  return (
    <section className="py-20" id="commission">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 dark:bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/10 rounded-full"></div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white dark:text-gray-900 mb-6 relative z-10">
            Ready to start your project?
          </h2>
          <p className="text-gray-300 dark:text-gray-800 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join the coop! Get high-quality art for your brand, game, or stream
            today.
          </p>
          <button className="bg-primary dark:bg-surface-dark dark:text-white text-gray-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 dark:hover:bg-gray-800 transition-colors shadow-lg relative z-10">
            Start Commission
          </button>
        </div>
      </div>
    </section>
  );
}
