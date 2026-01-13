import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <div className="rounded-2xl bg-linear-to-r from-primary to-orange-400 p-6 md:p-10 mb-8 text-white relative overflow-hidden shadow-lg">
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Ayamu! 🐣</h2>
        <p className="opacity-90 text-lg">
          We have 4 new commission requests.
        </p>
        <Link
          href="/orders"
          className="mt-6 bg-white text-orange-500 px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Check New Orders</span>
          <span className="material-icons-round text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white opacity-20 rounded-full blur-2xl"></div>
    </div>
  );
}
