export default function ProjectFiles() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Project Files & Deliverables
        </h3>
      </div>
      
      <div className="space-y-6">
        {/* Preview Section */}
        <div>
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase">Live Preview (Watermarked)</h4>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
                <input type="file" className="hidden" id="preview-upload" />
                <label htmlFor="preview-upload" className="cursor-pointer block">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">visibility</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Upload New Preview</p>
                    <p className="text-xs text-gray-500 mt-1">Updates the client's live view</p>
                </label>
            </div>
        </div>

        {/* Final Result Section */}
        <div>
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase">Final Deliverables</h4>
            <div className="border-2 border-dashed border-green-200 dark:border-green-900/30 rounded-xl p-4 text-center hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors cursor-pointer group">
                <input type="file" className="hidden" id="final-upload" />
                <label htmlFor="final-upload" className="cursor-pointer block">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">verified</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Upload Final Result</p>
                    <p className="text-xs text-gray-500 mt-1">High-res, non-watermarked files</p>
                </label>
            </div>
            
            {/* Mocked "Uploaded" file for display */}
            <div className="mt-3 flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                        <span className="material-icons-round text-sm">archive</span>
                    </div>
                    <div>
                         <p className="text-sm font-medium text-gray-900 dark:text-white">Final_Bundle_v1.zip</p>
                         <p className="text-xs text-green-600 dark:text-green-400 font-bold">Ready for download</p>
                    </div>
                 </div>
                 <button className="text-gray-400 hover:text-red-500">
                    <span className="material-icons-round">delete</span>
                 </button>
            </div>
        </div>
      </div>
    </div>
  );
}
