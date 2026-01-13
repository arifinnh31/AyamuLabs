import Link from "next/link";

export default function QuickOrder() {
  return (
    <section className="py-16 bg-white/50 dark:bg-black/20" id="quick-order">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Quick Order via Trusted Platforms
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Prefer using a platform you already know? Find us here.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link
            href="https://vgen.co/AkaniYua"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 bg-pink-500 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <span className="material-icons-round text-3xl">brush</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    VGen
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Best for Vtuber Assets
                  </p>
                </div>
              </div>
              <span className="material-icons-round text-gray-300 group-hover:text-pink-500 transition transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </Link>
          <Link
            href="https://www.fiverr.com/akanichiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 bg-green-500 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                  <span className="material-icons-round text-3xl">
                    handshake
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Fiverr
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Secure Quick Orders
                  </p>
                </div>
              </div>
              <span className="material-icons-round text-gray-300 group-hover:text-green-500 transition transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
