import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackerHeader from "@/components/tracker/TrackerHeader";
import ProgressBar from "@/components/tracker/ProgressBar";
import LivePreview from "@/components/tracker/LivePreview";
import ArtistChat from "@/components/tracker/ArtistChat";
import CommissionDetails from "@/components/tracker/CommissionDetails";
import FinalDeliverables from "@/components/tracker/FinalDeliverables";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking Details",
};

export default function TrackerDetailPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 w-full">
        <TrackerHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProgressBar />
            <LivePreview />
            <FinalDeliverables />
          </div>
          <div className="space-y-8">
            <ArtistChat />
            <CommissionDetails />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
