"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

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

  if (!isBrowser || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-surface-light dark:bg-surface-dark shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-yellow-100 dark:border-stone-700 max-h-[90vh]">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-linear-to-br from-yellow-50 to-orange-50 dark:from-stone-800 dark:to-stone-900 p-6 md:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-primary opacity-20 dark:opacity-10 rounded-b-[50%]"></div>
          <div className="relative z-10 mt-4">
            <div className="w-24 h-24 mx-auto bg-white dark:bg-stone-700 rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-primary overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDjNtuM2vHRcrk7q3B3YFk2vX4GtqI4tDD58tJwe8xeaJpVBzAotVLn7vyh0zz8JYwW-VvDQZriOZ_WNrWBWP0TMvbDXvjHDSV9D_34vW_NMMhynbZQvqGeJ4bOyK57XZ0nLu18c1twM3azos9F6QI7JIjKHkn5yMmqaQxxAa-mpQmchX0ClDgYEq7V5dDkIk4H76YDcmLfViscmZKDxKOGn_NfpPPeGTqThZsaGKBvj9T64YrI8D-2JnWJcDHq52d24GMTUr-w"
                alt="AyamuLabs Mascot"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-800 dark:text-gray-100">
              AyamuLabs
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
              One Brand, Multi-Creator, <br />
              AI-Assisted
            </p>
          </div>
          <div className="relative z-10 mt-8 space-y-4 w-full">
            <div className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-stone-800/60 p-3 rounded-lg backdrop-blur-sm">
              <span className="material-icons-round text-primary">brush</span>
              <span>Custom Art Commissions</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-stone-800/60 p-3 rounded-lg backdrop-blur-sm">
              <span className="material-icons-round text-primary">
                auto_awesome
              </span>
              <span>AI-Assisted Workflow</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-stone-800/60 p-3 rounded-lg backdrop-blur-sm">
              <span className="material-icons-round text-primary">
                verified
              </span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
          <div className="mt-8 relative w-32 h-32 mx-auto hidden md:block">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6nRZoO7luXHuBpPR9vpyBf6bdguSneMIfeDLsN3ngONzNussLSEyqIUcEhQduYz4Oypl0USvXKRQ_B9_8CqlZnlNcRy5SgD4Gdf9c30LfK5BwbC9bc_ZLwD_RHRz9VbVhobEiZLMXBUqCW-k_dKKbYTA5kFNxI0AdW0G5fqIj9HhnCK7S-AP9WkrzfnZZAe7IlfuOM_BTJgPEPFi0sGVN3WbCUkHdYySnxivDknbl-tq6JF8rXtUfvHwyCgf_AnAuCEAK08qXUA"
              alt="Cute Chicken Illustration"
              width={128}
              height={128}
              className="object-contain drop-shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-6 md:p-10 relative overflow-y-auto custom-scrollbar bg-surface-light dark:bg-surface-dark">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-display text-3xl font-bold text-gray-800 dark:text-white">
              Commission Order
            </h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <span className="material-icons-round text-2xl">close</span>
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
            Tell us about your vision! Fill in the details below to get your
            custom artwork started.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="service-type"
                >
                  Service Type
                </label>
                <div className="relative">
                  <select
                    className="block w-full rounded-xl border-gray-200 dark:border-stone-600 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-gray-200 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow cursor-pointer appearance-none outline-none"
                    id="service-type"
                  >
                    <option>Character Illustration</option>
                    <option>Live2D Model Art</option>
                    <option>Chibi Sticker Set</option>
                    <option>Background Art</option>
                    <option>Custom Design</option>
                  </select>
                  <span className="material-icons-round absolute right-3 top-3 text-gray-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="email"
                >
                  Contact Email
                </label>
                <input
                  className="block w-full rounded-xl border-gray-200 dark:border-stone-600 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-gray-200 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow outline-none"
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Reference Images
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-stone-600 rounded-xl p-8 text-center hover:bg-yellow-50 dark:hover:bg-stone-800/50 hover:border-primary transition-colors cursor-pointer group">
                <span className="material-icons-round text-4xl text-gray-400 group-hover:text-primary mb-2 transition-colors">
                  cloud_upload
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  Drag & drop images here, or{" "}
                  <span className="text-primary font-bold">browse</span>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Supports JPG, PNG (Max 10MB)
                </p>
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="description"
              >
                Detailed Description
              </label>
              <textarea
                className="block w-full rounded-xl border-gray-200 dark:border-stone-600 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-gray-200 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow resize-none outline-none"
                id="description"
                placeholder="Describe pose, expression, mood, clothing, and any specific details..."
                rows={4}
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                  Commercial Use?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      defaultChecked
                      className="text-primary focus:ring-primary border-gray-300 dark:border-stone-600 bg-gray-50 dark:bg-stone-800"
                      name="commercial"
                      type="radio"
                      value="no"
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                      Personal Only
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      className="text-primary focus:ring-primary border-gray-300 dark:border-stone-600 bg-gray-50 dark:bg-stone-800"
                      name="commercial"
                      type="radio"
                      value="yes"
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                      Yes (+50%)
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="deadline"
                >
                  Preferred Deadline
                  </label>
                <input
                  className="block w-full rounded-xl border-gray-200 dark:border-stone-600 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-gray-200 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow outline-none"
                  id="deadline"
                  type="date"
                />
              </div>
            </div>
            <hr className="border-gray-100 dark:border-stone-700 my-6" />
            <div className="flex items-start space-x-3">
              <div className="flex items-center h-5">
                <input
                  className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary dark:bg-stone-800 dark:border-stone-600"
                  id="terms"
                  type="checkbox"
                />
              </div>
              <div className="text-sm">
                <label
                  className="font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="terms"
                >
                  I agree to the{" "}
                  <a className="text-primary hover:underline" href="#">
                    Terms of Service
                  </a>{" "}
                  and Privacy Policy.
                </label>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                  Orders are subject to artist availability.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                className="px-6 py-3 rounded-xl text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white dark:text-stone-900 font-bold shadow-lg shadow-yellow-200 dark:shadow-none hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
                type="submit"
              >
                <span>Submit Order</span>
                <span className="material-icons-round text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
