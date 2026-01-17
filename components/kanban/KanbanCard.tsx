"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  price?: number;
  category: { label: string; color: string };
  status: "incoming" | "accepted" | "paid" | "in_progress" | "done";
  assignee?: string;
  timeLeft?: string;
  borderColor?: string;
  paymentType?: "full" | "deposit";
}

interface KanbanCardComponentProps extends KanbanCardProps {
  onAction?: (action: string, orderId: string) => void;
}

export default function KanbanCard({
  id,
  title,
  price,
  category,
  status,
  assignee,
  timeLeft,
  borderColor,
  onAction,
  paymentType
}: KanbanCardComponentProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/orders/AYM-3492");
  };

  const handleAction = (e: React.MouseEvent, action: string) => {
    e.stopPropagation();
    onAction?.(action, id);
  };

  return (
    <div
      onClick={handleCardClick}
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
        {status === "done" && (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300">
            Delivered
          </span>
        )}
        {status === "paid" && paymentType && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                paymentType === "full" 
                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
            }`}>
              {paymentType === "full" ? "Full Payment" : "Deposit"}
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

      <div className="flex items-center gap-2 mb-3">
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${category.color}`}
        >
          {category.label}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 h-9">
        {status === "incoming" && price !== undefined && (
          <>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-semibold">
              <span className="material-icons-round text-sm">attach_money</span>{" "}
              {price}
            </div>

            <div className="flex gap-2">
              <button
                onClick={(e) => handleAction(e, "accept")}
                className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 transition-colors cursor-pointer"
                title="Accept"
              >
                <span className="material-icons-round text-sm">check</span>
              </button>
              <button
                onClick={(e) => handleAction(e, "reject")}
                className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors cursor-pointer"
                title="Reject"
              >
                <span className="material-icons-round text-sm">close</span>
              </button>
            </div>
          </>
        )}

        {status === "accepted" && (
            <>
                {price !== undefined ? (
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-semibold">
                        <span className="material-icons-round text-sm">attach_money</span>{" "}
                        {price}
                    </div>
                ) : <div></div>}
                
                <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide">
                    Accepted
                </div>
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
            <button
              onClick={(e) => handleAction(e, "claim")}
              className="px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Claim
            </button>
          </>
        )}

        {(status === "in_progress" || status === "done") && (
          <>
            <div className="flex -space-x-1.5">
            <div className="flex -space-x-1.5">
              {assignee !== undefined && (
                 assignee ? (
                    <Image
                      alt="Assignee"
                      className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700 object-cover"
                      src={assignee}
                      width={24}
                      height={24}
                    />
                 ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700 bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">
                        A
                    </div>
                 )
              )}
            </div>
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
              {timeLeft || "Unknown"}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
