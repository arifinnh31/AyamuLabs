export default function GeneratorPanel() {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-6 border border-yellow-100 dark:border-yellow-900/30">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-6">
          <button className="flex-1 py-2 px-4 rounded-md bg-white dark:bg-gray-700 shadow-sm text-sm font-bold text-primary dark:text-primary cursor-pointer">
            Text-to-Image
          </button>
          <button className="flex-1 py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-semibold text-gray-500 dark:text-gray-400 transition cursor-pointer">
            Image-to-Image
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
            <span className="material-icons-round text-base text-primary">
              auto_awesome
            </span>{" "}
            Positive Prompt
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary dark:text-white text-sm outline-none px-3 py-2"
            placeholder="e.g., anime girl in chicken costume, holding microphone, golden hair, cute, vibrant colors..."
            rows={4}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
            <span className="material-icons-round text-base text-red-400">
              block
            </span>{" "}
            Negative Prompt
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-red-400 focus:ring-red-400 dark:text-white text-sm outline-none px-3 py-2"
            placeholder="low quality, bad anatomy, blurry, extra limbs..."
            rows={2}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
            Reference Image (Optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition cursor-pointer bg-gray-50 dark:bg-gray-800 group">
            <div className="space-y-1 text-center">
              <span className="material-icons-round text-gray-400 group-hover:text-primary transition text-3xl">
                add_photo_alternate
              </span>
              <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                <span className="font-medium text-primary hover:text-primary-hover">
                  Upload a file
                </span>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              High Resolution Fix
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={true}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Restore Faces
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
          <span className="material-icons-round">bolt</span>
          Generate 4 Variations
        </button>
        <p className="text-xs text-center mt-3 text-gray-400 dark:text-gray-500">
          Cost: 4 Credits
        </p>
      </div>
    </div>
  );
}
