"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuickOrder from "@/components/commission/QuickOrder";
import CommissionTypes from "@/components/commission/CommissionTypes";
import OrderModal from "@/components/commission/OrderModal";
import { CommissionOption } from "@/components/content/ContentContext";

export default function CommissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CommissionOption | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string | undefined>(undefined);

  const handleOpenModal = (option?: CommissionOption, catTitle?: string) => {
      setSelectedOption(option || null);
      setCategoryTitle(catTitle);
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      // Optional: Delay clearing state to avoid content jump during close animation
      setTimeout(() => {
          setSelectedOption(null);
          setCategoryTitle(undefined);
      }, 300);
  };

  const handleOptionChange = (option: CommissionOption | null, catTitle?: string) => {
    setSelectedOption(option);
    setCategoryTitle(catTitle);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow mt-20">
        <QuickOrder />
        <CommissionTypes onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedOption={selectedOption}
        categoryTitle={categoryTitle}
        onOptionChange={handleOptionChange}
      />
    </div>
  );
}
