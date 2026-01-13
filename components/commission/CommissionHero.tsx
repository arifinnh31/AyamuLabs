import Link from "next/link";
import Image from "next/image";

type CommissionHeroProps = {
  onOpenModal: () => void;
};

export default function CommissionHero({ onOpenModal }: CommissionHeroProps) {
  return (
    <header className="relative overflow-hidden pt-16 pb-24">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 blur-3xl blob-shape"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 blur-3xl blob-shape"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-bold mb-2">
              <span className="material-icons-round text-base mr-1">
                auto_awesome
              </span>
              Creative Studio
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
              Bring Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Ideas to Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
              High-quality anime art commissions tailored to your needs. From
              character illustrations to VTuber models, we create magic
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-secondary transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span className="material-icons-round">edit_note</span>
                Start Direct Order
              </button>
              <Link
                href="#quick-order"
                className="px-8 py-4 rounded-full bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 border-2 border-gray-100 dark:border-gray-700 font-bold text-lg hover:border-primary dark:hover:border-primary transition flex items-center justify-center gap-2"
              >
                Quick Order
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-yellow-200 dark:bg-yellow-900/40 rounded-full blur-2xl transform scale-90"></div>
              <div className="relative z-10 w-full h-full rounded-3xl shadow-2xl rotate-3 border-4 border-white dark:border-surface-dark overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ"
                  alt="Anime girl in chicken costume singing"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-4 z-20 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                  <span className="material-icons-round">check_circle</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Status
                  </p>
                  <p className="font-bold text-gray-800 dark:text-white">
                    Open for Commission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
