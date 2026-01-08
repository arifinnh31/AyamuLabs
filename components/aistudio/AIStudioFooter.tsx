export default function AIStudioFooter() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2023 AyamuLabs Studio. Internal Use Only.
        </p>
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-primary transition">
            Documentation
          </a>
          <a href="#" className="hover:text-primary transition">
            Report Issue
          </a>
          <a href="#" className="hover:text-primary transition">
            Version 2.1.0
          </a>
        </div>
      </div>
    </footer>
  );
}
