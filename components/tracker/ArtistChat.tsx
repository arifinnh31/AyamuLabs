import Image from "next/image";

export default function ArtistChat() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-yellow-100 dark:border-gray-700 flex flex-col h-[600px] lg:h-auto lg:min-h-[500px]">
      <div className="p-4 border-b border-yellow-50 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons-round text-primary">chat</span>
          Artist Chat
        </h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Online
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-800/20">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary overflow-hidden border-2 border-white dark:border-gray-600">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAovGMrpUSGLoBtuaZPFLdC8JocT1_eQzhBFYz9tymi7r_HFkoJRJribeV55UFXnIc4ljHi7OGRPExgWhSv5gh9GX8QuThDm0QYY2ilitV5ndD8gXMxFi7PCC97a1INfGNtz4NfTouhr8cAyJ1svnxlAV9zchzCJdn_80PHhIiiCSRaAvi8rbNEC9Xs1ME7xbBJR29o5lbPNEBqs3W9WXOQlycCVz2xQ0ZiHlaAQX6_x6Vsl_s0byM-r8l289aqOTSSk-7L9QQDyg"
              alt="Artist Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col max-w-[85%]">
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 ml-1">
              Artist • 10:30 AM
            </span>
            <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 dark:text-gray-200">
              Hello! I&apos;ve started the coloring phase. The base colors are
              applied. How does the tone look to you?
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-row-reverse">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden border-2 border-white dark:border-gray-600">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-rusNJ_V93Xik6y7n95_xrNmHkktqPYNAuVQScVArgUwNbpWhwLyJ1vIH3C1T1hTz8s4LSbmkV9r9660z0RjVbW8fqYpE7Sg1tet6EMbgoRPI_HKFSwyrgkf1LCZBPSSSyP4oFtzDKiN1DRWzk2e9owWJXHohT3NOggtwOJEs4BpWj__SbFcYNW0JSe-zNRjHTyJ7jXKfV2zpS52nNuKRdeme2lVPLltqZEKkKWukvnuwxtR2h6jz2KLVQaOs4MnlZJwUZM3yuQ"
              alt="User Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col max-w-[85%] items-end">
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 mr-1">
              You • 10:45 AM
            </span>
            <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
              Looks great! Could we make the yellow slightly warmer? Like a
              golden sunset vibe?
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary overflow-hidden border-2 border-white dark:border-gray-600">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzGAQ6vvRDALZmhH7eI4BN2rGNT0NIOKHk_tIvCIy-76-jlNL0ON98wMb18bZMnhO7abE_oLSdMvRH6yehoMVsfo7sWGKIi_2Oz9OhXx3ymXjMdwF1OoM0we2cXVtfhm6gfLOo49cWzF9Dda9c0vh2EamiSXqRvlN1b9PoA4pvQTKAI5ZFfCWHVY_A5h9A_a_W-MOC_2-VDdEgt6R8amnCWpa9zwmGW5TITmoBEYYOSDvi2KT1naoUyA61Fer59su1H7A6iwf_iA"
              alt="Artist Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col max-w-[85%]">
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 ml-1">
              Artist • 11:00 AM
            </span>
            <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 dark:text-gray-200">
              Absolutely! I&apos;ll adjust the saturation and send another update
              soon.
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-surface-light dark:bg-surface-dark border-t border-yellow-50 dark:border-gray-700 rounded-b-2xl">
        <form className="flex gap-2">
          <input
            className="flex-1 rounded-xl border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-primary focus:border-primary dark:text-white dark:placeholder-gray-400 px-4 py-2 outline-none"
            placeholder="Type a message..."
            type="text"
          />
          <button
            className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-xl transition-colors shadow-md flex items-center justify-center cursor-pointer"
            type="button"
          >
            <span className="material-icons-round">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
