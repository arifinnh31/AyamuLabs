import Image from "next/image";

export default function ClientCommunication() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark flex flex-col h-[500px]">
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
        <h2 className="text-lg font-bold font-display flex items-center gap-2">
          <span className="material-icons-round text-primary">chat</span>
          Client Communication
        </h2>
        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full font-bold">
          Active
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">
            C
          </div>
          <div className="space-y-1 max-w-[80%]">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-gray-800 dark:text-gray-200 shadow-sm">
              Hi team! Just wondering if we can make the chicken costume a bit
              more fluffy?
            </div>
            <span className="text-[10px] text-gray-400 ml-2">10:42 AM</span>
          </div>
        </div>
        <div className="flex gap-3 flex-row-reverse">
          <Image
            alt="Me"
            className="w-8 h-8 rounded-full border border-gray-200 flex-shrink-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfwROaKwVEzYvCTckMUgybpQ0uDXOz3jToh9K3ULGwdAtvdg-QYiTsiE0XUH56b35aUQRHit7HOGUKcdSXXLwn-LSllhXjW4mMyYclnubBtQRawGPhCJ4gZskdqkcVqsFuTAvVvdemYdO6-IcCIF5zWe7LWv3AUCA5ZBvKHkCbEHMMFXC1YpIO4vG14Y75JAzoFdxyUDid13oobG-UHiR8xBvAj4_L76TeqFbSI00U4afHA7nvG_Y62tu9UsCu8iM-iMlImjY6qg"
            width={32}
            height={32}
          />
          <div className="space-y-1 max-w-[80%]">
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 px-4 py-2 rounded-2xl rounded-tr-none text-sm text-gray-900 dark:text-gray-100 shadow-sm">
              Absolutely! I&apos;ve noted that down. We&apos;re currently
              working on the sketch phase. I&apos;ll upload a preview shortly.
            </div>
            <span className="text-[10px] text-gray-400 mr-2 text-right block">
              10:45 AM
            </span>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-3 py-1 rounded-full">
            Status updated to &quot;In Progress&quot; by Admin • 11:00 AM
          </span>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">
            C
          </div>
          <div className="space-y-1 max-w-[80%]">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-gray-800 dark:text-gray-200 shadow-sm">
              Great, thanks! Looking forward to it.
            </div>
            <span className="text-[10px] text-gray-400 ml-2">11:05 AM</span>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-border-light dark:border-border-dark bg-gray-50 dark:bg-gray-800/30">
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-icons-round">attach_file</span>
          </button>
          <input
            className="flex-1 bg-white dark:bg-gray-700 border-border-light dark:border-border-dark rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white px-3 py-2 outline-none"
            placeholder="Type a message to the client..."
            type="text"
          />
          <button className="bg-primary hover:bg-primary-hover text-white p-2 rounded-lg shadow-sm transition-colors flex items-center justify-center cursor-pointer">
            <span className="material-icons-round">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
