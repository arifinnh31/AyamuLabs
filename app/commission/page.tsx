"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommissionHero from "@/components/commission/CommissionHero";
import QuickOrder from "@/components/commission/QuickOrder";
import CommissionTypes from "@/components/commission/CommissionTypes";
import OrderModal from "@/components/commission/OrderModal";

export default function CommissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow mt-20">
        <CommissionHero onOpenModal={() => setIsModalOpen(true)} />
        <QuickOrder />
        <CommissionTypes onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
