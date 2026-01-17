

export default function FinalDeliverables() {
  return (
    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-green-200 dark:border-green-900/30">
      <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="material-icons-round text-lg">verified</span>
        Final Deliverables
      </h3>
      
      <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
        <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                    <span className="material-icons-round text-2xl">archive</span>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Final_Bundle_v1.zip</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">245 MB • High Resolution Source Files</p>
                </div>
            </div>
            
             <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold shadow-green-200 dark:shadow-none shadow-lg transition-all flex items-center gap-2">
                <span className="material-icons-round">download</span>
                Download
            </button>
        </div>
      </div>
    </div>
  );
}
