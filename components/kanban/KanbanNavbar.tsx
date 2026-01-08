import Link from "next/link";
import Image from "next/image";

export default function KanbanNavbar() {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-yellow-100 dark:border-gray-700 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl overflow-hidden border-2 border-white shadow-md">
            <Image
              alt="AyamuLabs Logo"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ISTmhgdBZ7yLCsr1gALsrf_871EsCJRezPOV9z960Wm47IZxsgSEA2m_lUzd8Jvkcauv9PjOzWKiIlozJ4NFslk-RNrLl1X0MPc0H7fU1sQkSOJZmXlAmLpDksHGhxtbIi-HG4IYZs-OSJCJyi6IwWglOn4_gbncjSOmYJdthg0g_2mKZwlCk1xp0J9M6GC59OthWLbnRCr5UGeOBgaABzkYAoKCH9uQgGi-K3Il4lswgYPGPO8Wr7NJKHs1pj4rtrfA1sx1SA"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">
              AyamuLabs
            </h1>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">
              Creator Dashboard
            </p>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <span className="material-icons-round text-gray-400">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 text-gray-700 dark:text-gray-200 placeholder-gray-400 outline-none"
            placeholder="Search orders..."
            type="text"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-yellow-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <span className="material-icons-round text-gray-500 dark:text-gray-400">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-sm">
            K
          </div>
          <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
            Kai (Admin)
          </span>
        </div>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
        >
          Exit
        </Link>
      </div>
    </nav>
  );
}
