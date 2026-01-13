"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-bold mb-6">
              <span className="material-icons-round text-sm mr-2">
                auto_awesome
              </span>
              Creative Studio
            </div>
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight mb-6 text-gray-900 dark:text-white">
              Hatching{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Creativity
              </span>{" "}
              Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              One brand, infinite styles.
              Bring your cutest dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-surface-dark text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 font-bold rounded-xl hover:border-primary dark:hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                <span className="material-icons-round mr-2">grid_view</span>
                View Portfolio
              </Link>
              <Link
                href="/commission"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:bg-yellow-500 transition-all transform hover:-translate-y-1"
              >
                <span className="material-icons-round mr-2">palette</span>
                Order Commission
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-linear-to-tr from-primary to-yellow-200 rounded-blob blob-shape transform rotate-6 opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-surface-dark p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                <div className="relative aspect-square w-full h-auto rounded-2xl overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ"
                    alt="Anime girl in chicken costume singing"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Float Card */}
                <div
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                    <span className="material-icons-round">check_circle</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">
                      Status
                    </p>
                    <p className="font-display font-bold text-gray-900 dark:text-white">
                      Open for Commission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
