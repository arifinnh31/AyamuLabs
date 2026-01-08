export default function ProjectFiles() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Project Files
        </h3>
        <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors cursor-pointer">
          <span className="material-icons-round text-lg">cloud_upload</span>
        </button>
      </div>
      <div className="space-y-3">
        <div className="group flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
            <span className="material-icons-round">image</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
              sketch_v1.png
            </h4>
            <p className="text-xs text-gray-500">2.4 MB • Uploaded 2h ago</p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-opacity cursor-pointer">
            <span className="material-icons-round text-lg">download</span>
          </button>
        </div>
        <div className="group flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
            <span className="material-icons-round">description</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
              requirements_doc.pdf
            </h4>
            <p className="text-xs text-gray-500">
              156 KB • Uploaded yesterday
            </p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-primary transition-opacity cursor-pointer">
            <span className="material-icons-round text-lg">download</span>
          </button>
        </div>
        <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark">
          <button className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons-round">add</span>
            Upload Watermarked Preview
          </button>
        </div>
      </div>
    </div>
  );
}
