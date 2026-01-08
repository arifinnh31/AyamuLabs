import Image from "next/image";

export default function LivePreview() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-yellow-100 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-yellow-50 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons-round text-primary">visibility</span>
          Live Preview
        </h2>
        <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-bold uppercase">
          Watermarked
        </span>
      </div>
      <div className="relative bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center overflow-hidden group">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJYVGo63YZb64_lDbs2vwYqrxjRgC9GQ1QBptxJDNhbIkRYy7RtsL9lkmPubZ2wVwZPeoxZE3AGgVISss2lStCV2L_CS51NWqzV-r89298VGBBjjbTbC2wxf5Fanws9fnZBWTLW0Var_n07vYfRMUesLTI4-3gMY2_ySuUhwQ8ewrGvGkeUDD7-5gQeaEMsreTQlNFCE5DstzZmXjRmM3emu9f0kVrOODnG5KCYfztGC4RZT1V9Uuo6qFQUSLG0xlF_EQ-yUpPBg"
          alt="Work in progress artwork preview of a cute character"
          width={800}
          height={450}
          className="object-cover w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="transform -rotate-12 opacity-30 text-5xl sm:text-7xl font-extrabold text-white dark:text-gray-300 tracking-widest select-none">
            PREVIEW
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition text-sm font-semibold flex items-center gap-2 cursor-pointer">
            <span className="material-icons-round">open_in_full</span> View
            Full Size
          </button>
        </div>
      </div>
      <div className="p-4 bg-yellow-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 flex gap-2 items-start">
        <span className="material-icons-round text-primary text-base mt-0.5">
          info
        </span>
        <p>
          This is a low-resolution preview of the current progress. The final
          high-quality version will be delivered upon completion.
        </p>
      </div>
    </div>
  );
}
