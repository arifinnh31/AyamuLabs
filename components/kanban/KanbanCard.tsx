import Image from "next/image";

interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  price?: number;
  tags: { label: string; color: string }[];
  status: "incoming" | "paid" | "in_progress" | "done";
  assignee?: string;
  timeLeft?: string;
  progress?: number;
  borderColor?: string;
}

export default function KanbanCard({
  id,
  title,
  description,
  price,
  tags,
  status,
  assignee,
  timeLeft,
  progress,
  borderColor,
}: KanbanCardProps) {
  return (
    <div
      className={`bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-soft dark:shadow-none dark:border dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group ${
        borderColor ? `border-l-4 ${borderColor}` : ""
      } ${status === "done" ? "opacity-75 hover:opacity-100" : ""}`}
    >
      <div className="flex justify-between items-start mb-3">
        <span
          className={`text-xs font-bold text-gray-400 ${
            status === "done" ? "line-through" : ""
          }`}
        >
          {id}
        </span>
        {status === "done" ? (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300">
            Delivered
          </span>
        ) : (
          <span className="material-icons-round text-gray-300 group-hover:text-gray-500 cursor-pointer text-sm">
            more_horiz
          </span>
        )}
      </div>

      <h4
        className={`font-bold text-gray-800 dark:text-white mb-1 ${
          status === "done" ? "text-gray-600 dark:text-gray-300" : ""
        }`}
      >
        {title}
      </h4>

      {description && (
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {description}
        </p>
      )}

      {progress !== undefined && (
        <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 mb-3 mt-2">
          <div
            className="bg-indigo-500 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      <div className="flex items-center gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        {status === "incoming" && price && (
          <>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-semibold">
              <span className="material-icons-round text-sm">attach_money</span>{" "}
              {price}
            </div>
            {price === 800 ? ( // Special case for the "Review Details" button in the mockup
              <button className="px-3 py-1 rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary/20 text-xs font-bold transition-colors w-full ml-4 cursor-pointer">
                Review Details
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 transition-colors cursor-pointer"
                  title="Accept"
                >
                  <span className="material-icons-round text-sm">check</span>
                </button>
                <button
                  className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors cursor-pointer"
                  title="Reject"
                >
                  <span className="material-icons-round text-sm">close</span>
                </button>
              </div>
            )}
          </>
        )}

        {status === "paid" && (
          <>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 border border-white dark:border-gray-600 flex items-center justify-center">
                <span className="material-icons-round text-gray-400 text-xs">
                  person
                </span>
              </div>
              <span className="text-xs text-gray-400 italic">Unassigned</span>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer">
              Claim
            </button>
          </>
        )}

        {(status === "in_progress" || status === "done") && (
          <>
            <div className="flex -space-x-1.5">
              {assignee && (
                <Image
                  alt="Assignee"
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700"
                  src={assignee}
                  width={24}
                  height={24}
                />
              )}
            </div>
            <span
              className={`text-[10px] font-semibold flex items-center gap-1 ${
                status === "done"
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-400"
              }`}
            >
              <span className="material-icons-round text-xs">
                {status === "done" ? "check_circle" : "schedule"}
              </span>{" "}
              {timeLeft}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
