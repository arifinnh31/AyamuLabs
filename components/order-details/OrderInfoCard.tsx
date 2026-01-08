import Image from "next/image";

export default function OrderInfoCard() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
        <h2 className="text-lg font-bold font-display flex items-center gap-2">
          <span className="material-icons-round text-primary">
            receipt_long
          </span>
          Order Information
        </h2>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          Created: Oct 24, 2023
        </span>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Client Email
          </label>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 dark:text-white font-medium">
              client@example.com
            </span>
            <button className="text-gray-400 hover:text-primary cursor-pointer">
              <span className="material-icons-round text-sm">content_copy</span>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Deadline
          </label>
          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 font-medium bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded w-fit">
            <span className="material-icons-round text-sm">timer</span>
            <span>Nov 01, 2023 (3 Days left)</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Service Type
          </label>
          <span className="text-gray-900 dark:text-white">
            Full Body Illustration (Anime Style)
          </span>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Commercial Use
          </label>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
            <span className="material-icons-round text-xs">check_circle</span>{" "}
            YES
          </span>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Description / Prompt
          </label>
          <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg text-sm leading-relaxed text-gray-700 dark:text-gray-300 border border-border-light dark:border-border-dark">
            <p>
              I would like a cute anime girl character wearing a yellow chicken
              onesie. She should have blonde hair and golden eyes. The vibe
              should be cheerful and warm. Please include some small chickens
              around her. I want her holding a microphone like an idol.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Reference Images
          </label>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <div className="relative group w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-border-light dark:border-border-dark cursor-pointer">
              <Image
                alt="Anime girl reference"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4FzxgU8wMvUvcfAbFF69H4BPlVSZk04E72MMBTuOcznEZrPe0s8YJOG1e-Ba5uwo0sOxDgZaJCXmWk7yk1tabCZ6O2czsc_L8YUVIDUjuX_MyPCfcpv78NOviPPoj_GSgouN2bc8VT7YuTrwtWVooX4phJI_Lbmnpnk3ZSEf-HRT5cK29z-R-AK04cC3AwFf9Paio2MyaIWYfp0OzdL8Z5J3AmPV1PNv9zq8r3YrNEBBdt1XWTPVXVStn6tQth43d-NwNjzZ87g"
                width={96}
                height={96}
              />
            </div>
            <div className="relative group w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-border-light dark:border-border-dark cursor-pointer">
              <Image
                alt="Chicken costume reference"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC11LYBxWJpPVRXI2fr4bpKgEynFUyzBfGU4kohcTV768YWQ-0Sgw1CqKdKnZVv4fCknxoiUKZORBoxSXgtibMl2nq1AWt306BHujPoJDvcCrtI2N6kqUmj_Ei4StP_BOV5C8Lpony5eDGpIHIs5vuId66CIbd8DPNfDoQxm_ivvK2MFPnFD_LlLLTHFT49b3WIGODx7b9o0xXogxV8U6HARYDu9t-4iHlALREqFJaqBqiDoL_svgnlnf07IFKcRxdxwihhWVhIOw"
                width={96}
                height={96}
              />
            </div>
            <div className="w-24 h-24 flex-shrink-0 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
              <span className="material-icons-round">add_photo_alternate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
