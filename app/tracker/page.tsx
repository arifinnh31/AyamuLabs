import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackerHeader from "@/components/tracker/TrackerHeader";
import ProgressBar from "@/components/tracker/ProgressBar";
import LivePreview from "@/components/tracker/LivePreview";
import ArtistChat from "@/components/tracker/ArtistChat";
import CommissionDetails from "@/components/tracker/CommissionDetails";

export default function TrackerPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <TrackerHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProgressBar />
            <LivePreview />
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
