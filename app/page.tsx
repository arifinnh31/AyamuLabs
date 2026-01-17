import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
