import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import Toolbox from "@/components/about/Toolbox";
import CTA from "@/components/CTA"; // Reuse CTA from home

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow mt-20">
        <AboutHero />
        <AboutStory />
        <Toolbox />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
