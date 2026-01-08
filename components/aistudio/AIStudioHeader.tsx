import Link from "next/link";
import Image from "next/image";

export default function AIStudioHeader() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark shadow-sm border-b border-yellow-100 dark:border-yellow-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <Image
                alt="AyamuLabs Logo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEu9NN1c2yVhy6QZFV_duJnAig77K-qXpXtkz0ztrxdQHgjEmBmzC2QzH8U995DsiIXoBd2u563LjPsJmYbBcsq24rYskEeLmuqD1pywmFUhVxiWLdbhj80cOdwnULNQOCBMoyKN6K0-FErcENXuY4sltc8ZmbpvGVgaLULdz5UxEV0lO5pAgPEiK73B51ukjfJmeg9rUOpZFBRj9squRIkJ4uA-rABUCtEUiIJbH1mDeGwjLDJ4anwkyDS1QOY-YEs6Xe2xgE2A"
                width={40}
                height={40}
              />
            </div>
            <h1 className="font-display text-2xl text-gray-800 dark:text-gray-100 tracking-wide">
              Ayamu<span className="text-primary">Labs</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 font-semibold text-sm">
              <Link
                href="/dashboard"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              >
                Dashboard
              </Link>
              <Link href="/aistudio" className="text-primary dark:text-primary">
                AI Studio
              </Link>
              <Link
                href="/commission"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              >
                Commissions
              </Link>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              >
                Assets
              </a>
            </nav>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-500 dark:text-gray-400 cursor-pointer"
              // onClick is handled by next-themes usually
            >
              <span className="material-icons-round">brightness_4</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden border-2 border-primary">
              <Image
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSR_9ahwSy4xPEfAXyy3zNLonV7Jl5SseP16SFI5_UpOSER_hFCvzWaWJQwfxCmD6LEeqwk-g7nENCvsGqBt34g3SmgB9uSqRrQMNf_lp4MRqGet0pcOsk58Q87Clez5vG9qoXIZx2BTqnwkpJ9Am5O_gKoYGraKzJXK_BzMEz6xZQDZ9Hxy--y9acCGos0n1N7tDAmwhUPBymIy4IAME70bKdLSIKKTJAI10ii10AJKrRIDXfbxzFn9FZIek2dWTL2lqewWol2A"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
