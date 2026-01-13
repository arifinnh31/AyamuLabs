import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { useContent, CommissionOption } from "../content/ContentContext";

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedOption?: CommissionOption | null;
  categoryTitle?: string;
  onOptionChange?: (option: CommissionOption | null, categoryTitle?: string) => void;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function OrderModal({ isOpen, onClose, selectedOption, categoryTitle, onOptionChange }: OrderModalProps) {
  const { content } = useContent();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Filter portfolio items that match the category of the selected option
  // Filter portfolio items
  // Note: content.portfolioItems uses category IDs (e.g. "Illustration")
  // content.commissionCategories has correct mapping.
  // Ideally we should pass categoryId, but if we only have title, we must find the ID.
  const relevantCategory = content.commissionCategories.find(c => c.title === categoryTitle);
  const relevantCategoryId = relevantCategory ? relevantCategory.id : null;

  const relevantPortfolioItems = relevantCategoryId 
    ? content.portfolioItems.filter(item => item.category === relevantCategoryId)
    : [];

  // Carousel images: Strict match with Studio uploads. Fallback to portfolio only if empty.
  const hasOptionImages = selectedOption?.images && selectedOption.images.length > 0;
  
  const carouselImages = selectedOption 
    ? (hasOptionImages ? selectedOption.images : relevantPortfolioItems.map(i => i.image)).slice(0, 10)
    : [];

  useEffect(() => {
    if (isOpen) {
      // Delay reset to avoid synchronous state update in effect warning
      const timer = setTimeout(() => {
        setCarouselIndex(0);
        setDirection(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectedOption]);

  const handleNextImage = () => {
      setDirection(1);
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
      setDirection(-1);
      setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      if (value === "Custom Design") {
          onOptionChange?.(null, undefined);
      } else {
          // Find the option and its category
          for (const cat of content.commissionCategories) {
              const opt = cat.options.find(o => o.name === value);
              if (opt) {
                  onOptionChange?.(opt, cat.title);
                  return;
              }
          }
      }
  };
    
  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        maxWidth="max-w-6xl"
        headless
    >
      <div className="flex flex-col md:flex-row h-full min-h-[600px] md:h-[85vh]">
        {/* Sidebar / Carousel */}
        {/* Ratio changed to 50:50 per user request (w-1/2) */}
        <div className="w-full md:w-1/2 bg-linear-to-br from-yellow-50 to-orange-50 dark:from-stone-800 dark:to-stone-900 flex flex-col relative overflow-hidden shrink-0 h-[300px] md:h-full">
            
            {selectedOption ? (
                // CAROUSEL VIEW
                <div className="relative h-full w-full flex flex-col">
                    <div className="relative flex-1 w-full overflow-hidden group">
                         <AnimatePresence initial={false} custom={direction}>
                             {carouselImages.length > 0 && (
                                 <motion.div
                                    key={carouselIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0 w-full h-full"
                                 >
                                     <Image
                                        src={carouselImages[carouselIndex]}
                                        alt={`Reference ${carouselIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={carouselIndex === 0}
                                    />
                                 </motion.div>
                             )}
                         </AnimatePresence>
                         
                         {/* Carousel Controls */}
                         {carouselImages.length > 1 && (
                             <>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                    className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <span className="material-icons-round text-2xl">chevron_left</span>
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                    className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <span className="material-icons-round text-2xl">chevron_right</span>
                                </button>
                                <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {carouselImages.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`h-2 rounded-full transition-all shadow-sm ${idx === carouselIndex ? "w-6 bg-white" : "w-2 bg-white/60"}`}
                                        />
                                    ))}
                                </div>
                             </>
                         )}
                    </div>
                </div>
            ) : (
                // DEFAULT MASCOT VIEW
                <div className="p-6 md:p-12 flex flex-col justify-center items-center text-center h-full relative">
                    <div className="absolute top-0 left-0 w-full h-48 bg-primary opacity-10 dark:opacity-5 rounded-b-[50%]"></div>
                    <div className="relative z-10">
                        <div className="w-32 h-32 mx-auto bg-white dark:bg-stone-700 rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-primary overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ"
                            alt="AyamuLabs Mascot"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Ayamu<span className="text-primary">Labs</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Creative Studio
                        </p>
                        <div className="relative z-10 mt-8 space-y-4 w-full max-w-xs mx-auto">
                            <div className="flex items-center justify-center space-x-3 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-stone-800/60 p-3 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-icons-round text-primary">brush</span>
                                <span>Custom Art Commissions</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-stone-800/60 p-3 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-icons-round text-primary">verified</span>
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Main Content / Form */}
        <div className="w-full md:w-1/2 relative bg-surface-light dark:bg-surface-dark flex flex-col h-full">
            {/* Header Sticky */}
            <div className="px-8 py-6 border-b border-gray-100 dark:border-stone-800 flex justify-between items-center bg-white/80 dark:bg-stone-900/80 backdrop-blur-md sticky top-0 z-20">
                <div>
                     <h1 className="font-display text-2xl font-bold text-gray-800 dark:text-white">
                        {selectedOption ? `Order ${selectedOption.name}` : "Commission Order"}
                    </h1>
                    {selectedOption && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                            Starting at <span className="text-primary font-bold">${selectedOption.price}</span>
                        </p>
                    )}
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-stone-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-stone-700 transition-colors"
                >
                    <span className="material-icons-round">close</span>
                </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <span className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300 mb-1">
                        <span className="material-icons-round text-sm">info</span>
                        Tell us about your vision
                    </span>
                    Fill in the details below to get your custom artwork started. We&apos;ll review your request and get back to you within 24 hours.
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
                            value={selectedOption ? selectedOption.name : "Custom Design"}
                            onChange={handleServiceTypeChange}
                        >
                            <option value="Custom Design">Custom Design</option>
                            <option disabled>──────────</option>
                            {content.commissionCategories.map(cat => (
                                <optgroup key={cat.id} label={cat.title}>
                                    {cat.options.map(opt => (
                                        <option key={opt.id} value={opt.name}>{opt.name}</option>
                                    ))}
                                </optgroup>
                            ))}
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
                    
                    {/* ... Rest of form elements (Use existing) ... */}
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
                    <div className="flex items-center justify-end space-x-4 pt-4 pb-4">
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
      </div>
    </Modal>
  );
}
