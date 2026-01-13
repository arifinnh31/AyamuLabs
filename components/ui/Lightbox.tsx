"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
}

export default function Lightbox({ isOpen, onClose, imageSrc, title }: LightboxProps) {
  // Prevent body scroll when lightbox is open
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Controls */}
            <div className="absolute top-0 right-0 z-10 pointer-events-auto p-4">
                <Button variant="ghost" size="icon" onClick={onClose} className="bg-black/20 hover:bg-black/40 text-white rounded-full">
                    <span className="material-icons-round text-2xl">close</span>
                </Button>
            </div>

            {/* Image Container */}
            <div 
                className="relative w-full h-full pointer-events-auto flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
            >
                <Image
                    src={imageSrc}
                    alt={title || "Portfolio Image"}
                    fill
                    className="object-contain"
                    quality={100}
                />
            </div>
            
            {title && (
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-auto">
                    <p className="text-white/80 font-display font-bold text-xl drop-shadow-md">{title}</p>
                </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
