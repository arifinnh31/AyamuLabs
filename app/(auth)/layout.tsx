import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-background-dark">
      {/* Left Side - Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-yellow-50 dark:bg-surface-dark relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pattern-grid-lg" />
        
        {/* Abstract Shapes Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 text-center max-w-lg">
          <div className="mb-8 flex justify-center">
             <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 transform rotate-3">
                <span className="material-icons-round text-4xl text-white">draw</span>
             </div>
          </div>
          <h1 className="font-display text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Ayamu<span className="text-primary">Labs</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Your all-in-one studio management platform.
            Streamline commissions, manage your portfolio, and track your creative journey.
          </p>
        </div>
      </div>

      {/* Header Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md">
            <span className="material-icons-round text-lg">arrow_back</span>
            Back to Home
          </Link>

          <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-full p-1 shadow-sm">
             <ThemeToggle />
          </div>
      </div>

      {/* Right Side - Form Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-8 duration-500 pt-12">
          {children}
        </div>
      </div>
    </div>
  );
}
