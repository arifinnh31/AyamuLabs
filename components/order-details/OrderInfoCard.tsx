"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function OrderInfoCard() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4FzxgU8wMvUvcfAbFF69H4BPlVSZk04E72MMBTuOcznEZrPe0s8YJOG1e-Ba5uwo0sOxDgZaJCXmWk7yk1tabCZ6O2czsc_L8YUVIDUjuX_MyPCfcpv78NOviPPoj_GSgouN2bc8VT7YuTrwtWVooX4phJI_Lbmnpnk3ZSEf-HRT5cK29z-R-AK04cC3AwFf9Paio2MyaIWYfp0OzdL8Z5J3AmPV1PNv9zq8r3YrNEBBdt1XWTPVXVStn6tQth43d-NwNjzZ87g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC11LYBxWJpPVRXI2fr4bpKgEynFUyzBfGU4kohcTV768YWQ-0Sgw1CqKdKnZVv4fCknxoiUKZORBoxSXgtibMl2nq1AWt306BHujPoJDvcCrtI2N6kqUmj_Ei4StP_BOV5C8Lpony5eDGpIHIs5vuId66CIbd8DPNfDoQxm_ivvK2MFPnFD_LlLLTHFT49b3WIGODx7b9o0xXogxV8U6HARYDu9t-4iHlALREqFJaqBqiDoL_svgnlnf07IFKcRxdxwihhWVhIOw"
  ];

  return (
    <>
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
        <h2 className="text-lg font-bold font-display flex items-center gap-2">
          <span className="material-icons-round text-primary">
            receipt_long
          </span>
          Order Information
        </h2>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          Created: Oct 24, 2023
        </span>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Client Email
          </label>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 dark:text-white font-medium">
              client@example.com
            </span>
            <button className="text-gray-400 hover:text-primary cursor-pointer">
              <span className="material-icons-round text-sm">content_copy</span>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Deadline
          </label>
          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 font-medium bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded w-fit">
            <span className="material-icons-round text-sm">timer</span>
            <span>Nov 01, 2023 (3 Days left)</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Service Type
          </label>
          <span className="text-gray-900 dark:text-white">
            Full Body Illustration (Anime Style)
          </span>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Commercial Use
          </label>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
            <span className="material-icons-round text-xs">check_circle</span>{" "}
            YES
          </span>
        </div>
        <div>
           <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Payment Option
          </label>
          <span className="text-gray-900 dark:text-white font-medium">
             Full Payment
          </span>
        </div>
        <div>
           <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Payment Method
          </label>
          <div className="flex items-center gap-1.5">
             <span className="material-icons-round text-blue-600 dark:text-blue-400 text-sm">payments</span>
             <span className="text-gray-900 dark:text-white font-medium">PayPal</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Description
          </label>
          <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg text-sm leading-relaxed text-gray-700 dark:text-gray-300 border border-border-light dark:border-border-dark">
            <p>
              I would like a cute anime girl character wearing a yellow chicken
              onesie. She should have blonde hair and golden eyes. The vibe
              should be cheerful and warm. Please include some small chickens
              around her. I want her holding a microphone like an idol.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Reference Images
          </label>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((src, index) => (
                <div 
                    key={index}
                    className="relative group w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-border-light dark:border-border-dark cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                >
                    <Image
                        alt={`Reference ${index + 1}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        src={src}
                        width={96}
                        height={96}
                    />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-icons-round text-white">zoom_in</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Lightbox Overlay */}
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
          {selectedImage && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-10000 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
              >
                  <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                  >
                       <Image
                          src={selectedImage}
                          alt="Reference Full View"
                          fill
                          className="object-contain"
                      />
                      <button 
                          className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 backdrop-blur-md transition-colors"
                          onClick={() => setSelectedImage(null)}
                      >
                          <span className="material-icons-round text-3xl">close</span>
                      </button>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
