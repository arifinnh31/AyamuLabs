"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
  headless?: boolean;
}

export default function Modal({ isOpen, onClose, title, children, footer, maxWidth = "max-w-lg", headless = false }: ModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`bg-white dark:bg-surface-dark rounded-2xl shadow-xl w-full ${maxWidth} pointer-events-auto overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col max-h-[90vh]`}
            >
              {!headless && (
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white font-display">
                    {title}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <span className="material-icons-round text-gray-400">close</span>
                  </Button>
                </div>
              )}
              
              <div className={`flex-1 overflow-y-auto ${!headless ? "p-6" : ""}`}>
                {children}
              </div>

              {footer && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 shrink-0">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
