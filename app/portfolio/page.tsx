"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FilterBar from "@/components/portfolio/FilterBar";
import GalleryGrid from "@/components/portfolio/GalleryGrid";

const allArtworks = [
  {
    title: "Ayamu Idol Mode",
    category: "Character Design",
    type: "Live2D",
    tagColor: "bg-portfolio-secondary text-orange-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA",
  },
  {
    title: "Cozy Hugs",
    category: "Concept Art",
    type: "Sketch",
    tagColor: "bg-blue-100 text-blue-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY_Q-CCVKm3RaOjvUHuW2QrruqyQXWOl_yEqu69-VrFlhs5huT6Mkt-dLEHvMAj742OnFm6irf2xrbjZbaEMDK3g0EOB93gQknJvMwQnVu52zath7aBeehhErKSAeRaP2g0ZXelh6MdxNBhQhMXdrFjYkh7qcg59Uy2eTQ_srreq38hDXb0hkqxfsztxKIn50D2jCpw6gxSfNrs_1p4nao5I6OuxwM1JQOsbs-XaC_ULXT1GtQL5wZ-e3KcQ3_Ii3mb474xMt-dg",
  },
  {
    title: "Sunny Fields",
    category: "Background",
    type: "Scenery",
    tagColor: "bg-green-100 text-green-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWjXKDENh3HdMp5IWlfPog5ZX0N8ZnZqnrsKdOLGCb7rRBmH2egbzlca2utAGfbSys2TPSHyxVN58jS5wytnGr5aBAVifYcC3bnuLJAWJWMef5ajCOGHnZ0W4MpIW52jvEqaqyoDnk5bLfEio-OlXd2mdbD1PhCPaXTlaHTLFey3ckibiAGaGOEEYRwZMQmax2wX70evRHv3Cvh6STMgorG6X28I5te1biYiABmF7Um-lP3PKG5mW60CBwJlRPWuMi10MzdrlgtQ",
  },
  {
    title: "Chibi Party",
    category: "Illustration",
    type: "Chibi",
    tagColor: "bg-pink-100 text-pink-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw",
  },
  {
    title: "Neon Nights",
    category: "Concept Art",
    type: "Sci-Fi",
    tagColor: "bg-purple-100 text-purple-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQvPLFAZMJGadLMD1Cv8Vccw9eA2ELn9qy3TLDlIG4i4ypLuiECfCEl7uUrbk4KsMjgfuU2nc8c37ZClTUnrMVWsAkIGeN2GS0UoQtnCpk-MqxcfFAsa4lt6MNhTiBFCOnu8RSzw0n4GkjqAzIj08wJFVgr_8rdDPCTScVgHfxxOHhQmfTwSZx_WJ8K42VUrr-yAHJVJ3roDboRj1uAigwb7h2rGEzbSIMfQE0KJZPnMMXuP7YuwNG4KOabM6Nuv62dluV4v4Cxw",
  },
  {
    title: "Golden Warrior",
    category: "Character Design",
    type: "Fantasy",
    tagColor: "bg-red-100 text-red-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDybiof6zM6NLN7UIfQl049te5crPUNLzJ-PuaWbvpWmbkoBT0JrCGSafBt_PWcr5NuGLMVr2kb1y5xnTX4nApRUHfF6JkuS3QzQzwVzZg9sSHgHxFzgmY0R3yU8iuSQJy-IYyFAg_5qZgyMWlbHdPylu1aqHoXota23FODPck5BEWaWwELWJJxCFabOp6Mp_Cb6CezT9y2aDvF-nwDx2l6m9hWrAvtFI-_rAf-TtVM2JCz-hMSxo8HYaAa8Jzj-EX2BQEpY-Tmzw",
  },
  {
    title: "Gamer Setup",
    category: "Background",
    type: "Interior",
    tagColor: "bg-indigo-100 text-indigo-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3E8kD9uUsQEotorbZLOtA2D9vRaSTkcwrRi9TRX2yMJ1A9wnZnOgvIXo_1pt7OxsQ5keg5K9Lgbt3wiqUwj1VYivI0DBo_zvpl5cIRInceITlb9InLKKw2BYCAcsOFolRMHWxl56bsz7AM-n-0pF2Xz_ae1GbnateJXrkfR6XjLHL76GSgppay_ByjuxwjIyCTekasTTGCvaF51zeAm6EC4yjSMWBPcgFGYJy7QFAGg7QHyQSLkQ70gaAg6zVNGxwhj99fnCDw",
  },
  {
    title: "Floral Elegance",
    category: "Illustration",
    type: "Portrait",
    tagColor: "bg-teal-100 text-teal-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG-QO_80lk_Sr3310fYRAjDS8TMB47rYYxvGM5FlsrDmD2yYM0wBmkzHGdg9WrmeKOV-v1nUR7KXiTGWfsRmJzis83gEPsqPacAYPmh1qNYdqsHI5vm9FE5xTQFffKM8WoUG33UahvQsbiQUlmp6zAFjJ7GaMre1-b-EhrrrobGEo3JmNzrsszD9RrvDqRm0QjDTB_1YaifvR69KMpQdraXzCVVlm8qIrAdSaKIl0wATWR6VWjs0aBqvi9rDNKAcW9iuwoUtMlUA",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All Work");

  const filteredItems =
    filter === "All Work"
      ? allArtworks
      : allArtworks.filter(
          (item) => item.category === filter || item.type === filter
        );

  return (
    <div className="min-h-screen bg-portfolio-bg-light dark:bg-portfolio-bg-dark text-portfolio-text-light dark:text-portfolio-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow container mx-auto px-4 py-8 md:py-12 mt-20">
        <PortfolioHero />
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <GalleryGrid items={filteredItems} />
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-surface-light dark:bg-surface-dark border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 mx-auto">
            <span className="material-icons-round">expand_more</span>
            Load More Artworks
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
