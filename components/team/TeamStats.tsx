export default function TeamStats() {
  const stats = [
    { label: "Total Members", value: "12", icon: "group", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { label: "Active Now", value: "8", icon: "fiber_manual_record", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
    { label: "Artists", value: "5", icon: "palette", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    { label: "Pending Invites", value: "2", icon: "mail", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</h3>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}>
            <span className="material-icons-round text-xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
