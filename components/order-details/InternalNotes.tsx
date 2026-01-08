export default function InternalNotes() {
  return (
    <div className="bg-amber-50 dark:bg-yellow-900/10 rounded-xl shadow-sm border border-amber-100 dark:border-yellow-900/30 p-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-500 mb-2 flex items-center gap-2">
        <span className="material-icons-round text-sm">lock</span>
        Internal Notes
      </h3>
      <p className="text-sm text-amber-900/80 dark:text-amber-100/80 mb-3">
        Client is a returning customer (VIP). Ensure the chicken textures match
        their previous mascot style.
      </p>
      <textarea
        className="w-full bg-white dark:bg-gray-800 border-amber-200 border dark:border-gray-700 rounded-md text-sm p-2 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 outline-none"
        placeholder="Add a private note for the team..."
        rows={2}
      ></textarea>
    </div>
  );
}
