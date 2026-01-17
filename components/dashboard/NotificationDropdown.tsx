"use client";

import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: "info" | "success" | "warning";
};

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New Order Received",
    message: "You have a new commission request from User123.",
    time: "2 min ago",
    isRead: false,
    type: "success",
  },

  {
    id: "3",
    title: "Deadline Approaching",
    message: "Order #ORD-2920 is due in 2 days.",
    time: "5 hours ago",
    isRead: true,
    type: "warning",
  },
];

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const handleNotificationClick = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="secondary"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons-round">notifications</span>
        {unreadCount > 0 && (
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20">
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllRead}
                className="text-xs text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <span className="material-icons-round text-4xl mb-2 opacity-50">
                  notifications_off
                </span>
                <p className="text-sm">No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id)}
                    className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-3 ${
                      !notification.isRead ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
                    }`}
                  >
                    <div className={`mt-1 shrink-0`}>
                      {notification.type === "success" && (
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5" />
                      )}
                      {notification.type === "info" && (
                         <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
                      )}
                      {notification.type === "warning" && (
                         <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-sm ${!notification.isRead ? 'font-semibold text-gray-900 dark:text-white' : 'font-medium text-gray-700 dark:text-gray-300'}`}>
                        {notification.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                        {notification.message}
                      </p>
                      <span className="text-[10px] text-gray-400 mt-1.5 block">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-800/10 text-center">
            <button className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors w-full py-1">
                View All History
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
