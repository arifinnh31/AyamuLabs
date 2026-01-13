"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CommissionOption {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export interface CommissionCategory {
  id: string; // Matches PortfolioItem.category
  title: string;
  description: string;
  options: CommissionOption[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: string;
  image: string;
  link?: string;
  date?: string;
  featured?: boolean;
}

interface ContentState {
  portfolioItems: PortfolioItem[];
  commissionCategories: CommissionCategory[];
  commissionFeePercentage: number;
}

interface ContentContextType {
  content: ContentState;
  addPortfolioItem: (item: Omit<PortfolioItem, "id">) => void;
  updatePortfolioItem: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolioItem: (id: string) => void;
  addCommissionCategory: (category: Omit<CommissionCategory, "id">) => void;
  updateCommissionCategory: (id: string, category: Partial<CommissionCategory>) => void;
  deleteCommissionCategory: (id: string) => void;
  addCommissionOption: (categoryId: string, option: Omit<CommissionOption, "id">) => void;
  updateCommissionOption: (categoryId: string, optionId: string, option: Partial<CommissionOption>) => void;
  deleteCommissionOption: (categoryId: string, optionId: string) => void;
}

const defaultContent: ContentState = {
  commissionFeePercentage: 0.05,
  commissionCategories: [
    {
      id: "Illustration",
      title: "Illustration",
      description: "High-quality anime character illustrations.",
      options: [
        {
          id: "headshot",
          name: "Headshot / Icon",
          description: "Shoulders up. Perfect for social media profiles.",
          price: 35,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBDo2M5ZuYwM8wLvgekT5ijJyrKMKNwANn7aWjr0dAPFHgyDctMCGsVdzdk5BPoNceAEZyTbfyLQUyUY5GSuSDXd-bzbta2ivS7JVH1OOA3GrAd4wLvRrNGkFNfTPyrqUBaWfNFHdjICyIbAVVTH-jJGizeLRg4ZLPTeXMkmF2bwohUxlf6Vtdu_4ZNtLJ1LkkRV0TZLQEj312S3ZS2xBsm9LbjW6Eg9DV4vaiq9pgOQlxN-do526kD4qyBesXsI9vBJz3GyHibZw"],
        },
        {
          id: "bust",
          name: "Bust Up",
          description: "Chest up. Focus on expression and upper outfit.",
          price: 55,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDTMcHcuTTVbX_mnRbe0Hmg_u120qvmm_ydZcVftyFkHu8dJXqevBh2xfTHK_Nd-PZtppDsSoA-TNeMqZ7-IpOdMtQsG-nGGgpeDkI-VlCfH27wZHUcARI3ozC5uSrfoXGJMw0OnIdypfmP04AZHcPHf5Z5L9TeTt-CPVYUfjIhrYMCXAqu4GUdT1JpU348XEk_szOa4hJtF_fHdC4BH9T4GY3ROBQFLODdkMaUd7JZusIkP-2VSz9LvcGtLGbkUcCEjeyKuqn3aQ"],
        },
        {
          id: "half",
          name: "Half Body",
          description: "Waist up. Allows for dynamic poses.",
          price: 80,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBls6P_QbJqFy4j5edpUYWzB0wiIE8LNAn3xJfkfeXxhjbcAv5PFecZkANwQqWD1bZgKybIY4z2jcynaoCN4WrZsPdLOoVOZe5WQdX47VdG1O1wPqILsiW9rSjfI_4cnhZ2GSLr-Umj-qPHFGywoYfafLr4SsHeRJk4b9hPNY0qGAE6-JtOpk-0i9rdg8_i8NlYwkIaC9aiXQfITkZADcp_cQaV3wGcu2lYxjlOTqEWEmu1RTIRHTTb0jynXf-M6NGG2SLyL1rH4w"],
        },
        {
          id: "knee",
          name: "Knee Up",
          description: "Knees up. Good balance of detail and pose.",
          price: 100,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuC751n43XE72HTavmyIFUgd_ZnPFhMmuHvgRlRKZLfqB83ypVNkmWQ6qd8bk0Ti9S3-pLcBAhs5z9zRqm56G63-Otm3CB4J0rvto4L7AdN7VvmpGg5oHRtPdKOXe0jr4-Bkd7AL_PE6F8C3nnr01drOmTOKXqt8F6TO_fAXYtn1h5yPu1VmnHtdZF3QWrhLkJHu8-7deGpLjqyIASbfwL23gLPdjtJrqjAt4qOZNO3nXjjvHNgyAsSKkP7E9EdypZ3QKeQ_MWhdOA"],
        },
        {
          id: "full",
          name: "Full Body",
          description: "Complete character design from head to toe.",
          price: 120,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuC751n43XE72HTavmyIFUgd_ZnPFhMmuHvgRlRKZLfqB83ypVNkmWQ6qd8bk0Ti9S3-pLcBAhs5z9zRqm56G63-Otm3CB4J0rvto4L7AdN7VvmpGg5oHRtPdKOXe0jr4-Bkd7AL_PE6F8C3nnr01drOmTOKXqt8F6TO_fAXYtn1h5yPu1VmnHtdZF3QWrhLkJHu8-7deGpLjqyIASbfwL23gLPdjtJrqjAt4qOZNO3nXjjvHNgyAsSKkP7E9EdypZ3QKeQ_MWhdOA"],
        },
        {
          id: "commercial",
          name: "Commercial Illustration",
          description: "For merchandise or key visuals.",
          price: 200,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDybiof6zM6NLN7UIfQl049te5crPUNLzJ-PuaWbvpWmbkoBT0JrCGSafBt_PWcr5NuGLMVr2kb1y5xnTX4nApRUHfF6JkuS3QzQzwVzZg9sSHgHxFzgmY0R3yU8iuSQJy-IYyFAg_5qZgyMWlbHdPylu1aqHoXota23FODPck5BEWaWwELWJJxCFabOp6Mp_Cb6CezT9y2aDvF-nwDx2l6m9hWrAvtFI-_rAf-TtVM2JCz-hMSxo8HYaAa8Jzj-EX2BQEpY-Tmzw"],
        },
      ],
    },
    {
      id: "Live2D",
      title: "Live2D Cubism",
      description: "Model art ready for rigging (separated layers).",
      options: [
        {
          id: "live2d_bust",
          name: "Bust Up Model",
          description: "Ready-to-rig bust up model.",
          price: 300,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA81XJsKWqiWlt-VAMFFogwbdFDDg6U1xdWd4c0ydj4o8PeS2C3OoSj7NvA2Byt1nznvXD_inAV3TldLLJ2RFbGwjpAh5E7JaCCrGQpff2VvREf4-GaZjYPIdasMFyEYjc6AbCTUw0JqJzVkWNnueVyhul-kHEBkiTAKzNvQY2IG-TuxgfmHh4S-5bEYF-iABCM10j18wpMRedI-VpDp8-f8KGZn4vaodJX1TQJ8vfiD1MhPz4udpTmcMD-Y38xADHGJNTNkUx-_A"],
        },
        {
          id: "live2d_half",
          name: "Half Body Model",
          description: "Ready-to-rig half body model.",
          price: 450,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA81XJsKWqiWlt-VAMFFogwbdFDDg6U1xdWd4c0ydj4o8PeS2C3OoSj7NvA2Byt1nznvXD_inAV3TldLLJ2RFbGwjpAh5E7JaCCrGQpff2VvREf4-GaZjYPIdasMFyEYjc6AbCTUw0JqJzVkWNnueVyhul-kHEBkiTAKzNvQY2IG-TuxgfmHh4S-5bEYF-iABCM10j18wpMRedI-VpDp8-f8KGZn4vaodJX1TQJ8vfiD1MhPz4udpTmcMD-Y38xADHGJNTNkUx-_A"],
        },
        {
          id: "live2d_full",
          name: "Full Body Model",
          description: "Ready-to-rig full body model.",
          price: 800,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA81XJsKWqiWlt-VAMFFogwbdFDDg6U1xdWd4c0ydj4o8PeS2C3OoSj7NvA2Byt1nznvXD_inAV3TldLLJ2RFbGwjpAh5E7JaCCrGQpff2VvREf4-GaZjYPIdasMFyEYjc6AbCTUw0JqJzVkWNnueVyhul-kHEBkiTAKzNvQY2IG-TuxgfmHh4S-5bEYF-iABCM10j18wpMRedI-VpDp8-f8KGZn4vaodJX1TQJ8vfiD1MhPz4udpTmcMD-Y38xADHGJNTNkUx-_A"],
        },
        {
          id: "live2d_sheet",
          name: "Character / Expression Sheet",
          description: "Add-on expressions for your model.",
          price: 100,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA81XJsKWqiWlt-VAMFFogwbdFDDg6U1xdWd4c0ydj4o8PeS2C3OoSj7NvA2Byt1nznvXD_inAV3TldLLJ2RFbGwjpAh5E7JaCCrGQpff2VvREf4-GaZjYPIdasMFyEYjc6AbCTUw0JqJzVkWNnueVyhul-kHEBkiTAKzNvQY2IG-TuxgfmHh4S-5bEYF-iABCM10j18wpMRedI-VpDp8-f8KGZn4vaodJX1TQJ8vfiD1MhPz4udpTmcMD-Y38xADHGJNTNkUx-_A"],
        },
      ],
    },
    {
      id: "Character Design",
      title: "Character Design",
      description: "Focus on creating new characters from scratch.",
      options: [
        {
          id: "char_sheet",
          name: "Character Sheet",
          description: "Front, Side, Back view.",
          price: 150,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
        {
          id: "outfit_design",
          name: "Outfit Design",
          description: "New costume design for existing characters.",
          price: 80,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
        {
          id: "vtuber_pkg",
          name: "VTuber Design Package",
          description: "Design + Sheet.",
          price: 500,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
      ],
    },
    {
      id: "Chibi",
      title: "Chibi",
      description: "Cute and small character styles.",
      options: [
        {
          id: "chibi_icon",
          name: "Chibi Icon",
          description: "Cute headshot.",
          price: 25,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
        {
          id: "chibi_full",
          name: "Chibi Full Body",
          description: "Full body cute chibi.",
          price: 45,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
        {
          id: "chibi_sheet",
          name: "Chibi Sheet",
          description: "Multiple poses.",
          price: 100,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
      ],
    },
    {
      id: "Emotes",
      title: "Emotes & Badges",
      description: "Expressive assets for Twitch/Discord.",
      options: [
        {
          id: "emote_static",
          name: "Static Emotes",
          description: "Single static emote.",
          price: 25,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA"],
        },
        {
          id: "emote_anim",
          name: "Animated Emotes",
          description: "GIF/APNG format.",
          price: 40,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA"],
        },
        {
          id: "emote_bundle",
          name: "Emote Bundle",
          description: "Pack of 3.",
          price: 70,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA"],
        },
        {
          id: "sub_badge",
          name: "Sub / Loyalty Badges",
          description: "Tiny badges for chat.",
          price: 20,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA"],
        },
      ],
    },
    {
      id: "Logo",
      title: "Logo & Typography",
      description: "Brand identity for VTubers and Streamers.",
      options: [
        {
          id: "logo_name",
          name: "VTuber Name Logo",
          description: "Logotype design.",
          price: 80,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
        {
          id: "logo_event",
          name: "Stream / Event Logo",
          description: "Schedule or event specific.",
          price: 60,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
        {
          id: "logo_icon",
          name: "Minimalist Icon",
          description: "Simple symbol logo.",
          price: 40,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA"],
        },
      ],
    },
    {
      id: "Background",
      title: "Background Art",
      description: "Scenery and landscapes.",
      options: [
        {
          id: "bg_simple",
          name: "Simple / Abstract",
          description: "Clean simple backgrounds.",
          price: 40,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD7wPFVOWrpeMoxrh6E6_iBwEAv6RdI-7DV1ll6aJ6C5kEP5qv-l3ALWqrfHCoUjHbuUuEYfMUgOfzF7jpIS44kCnvm2krKy-DFZTuPUzOLd8d0rdwfMQKEDeS-2C4-OGNFasneD9JlK8GNUljFpa6gf1Zh0RAhZw-YWFWFIEW0Li0K1E2W2pOhZfKrjtRZ4uBlUzoMYOxCWSeJGTXNbvNkaaAYgstiidLUTMjzHM1DG5vH9Qc5I0pFEkNerYzLM8fvcTFciqEgRw"],
        },
        {
          id: "bg_scenery",
          name: "Scenery / Landscape",
          description: "Detailed natural scenery.",
          price: 100,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD7wPFVOWrpeMoxrh6E6_iBwEAv6RdI-7DV1ll6aJ6C5kEP5qv-l3ALWqrfHCoUjHbuUuEYfMUgOfzF7jpIS44kCnvm2krKy-DFZTuPUzOLd8d0rdwfMQKEDeS-2C4-OGNFasneD9JlK8GNUljFpa6gf1Zh0RAhZw-YWFWFIEW0Li0K1E2W2pOhZfKrjtRZ4uBlUzoMYOxCWSeJGTXNbvNkaaAYgstiidLUTMjzHM1DG5vH9Qc5I0pFEkNerYzLM8fvcTFciqEgRw"],
        },
        {
          id: "bg_interior",
          name: "Interior / Room",
          description: "Streaming room or indoor setting.",
          price: 120,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD7wPFVOWrpeMoxrh6E6_iBwEAv6RdI-7DV1ll6aJ6C5kEP5qv-l3ALWqrfHCoUjHbuUuEYfMUgOfzF7jpIS44kCnvm2krKy-DFZTuPUzOLd8d0rdwfMQKEDeS-2C4-OGNFasneD9JlK8GNUljFpa6gf1Zh0RAhZw-YWFWFIEW0Li0K1E2W2pOhZfKrjtRZ4uBlUzoMYOxCWSeJGTXNbvNkaaAYgstiidLUTMjzHM1DG5vH9Qc5I0pFEkNerYzLM8fvcTFciqEgRw"],
        },
        {
          id: "bg_vn",
          name: "Visual Novel Background",
          description: "High detail for games.",
          price: 150,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD7wPFVOWrpeMoxrh6E6_iBwEAv6RdI-7DV1ll6aJ6C5kEP5qv-l3ALWqrfHCoUjHbuUuEYfMUgOfzF7jpIS44kCnvm2krKy-DFZTuPUzOLd8d0rdwfMQKEDeS-2C4-OGNFasneD9JlK8GNUljFpa6gf1Zh0RAhZw-YWFWFIEW0Li0K1E2W2pOhZfKrjtRZ4uBlUzoMYOxCWSeJGTXNbvNkaaAYgstiidLUTMjzHM1DG5vH9Qc5I0pFEkNerYzLM8fvcTFciqEgRw"],
        },
      ],
    },
    {
      id: "Concept Art",
      title: "Concept Art",
      description: "Visual ideas for games and projects.",
      options: [
        {
          id: "concept_prop",
          name: "Prop & Weapon",
          description: "Items and weapons design.",
          price: 50,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAQvPLFAZMJGadLMD1Cv8Vccw9eA2ELn9qy3TLDlIG4i4ypLuiECfCEl7uUrbk4KsMjgfuU2nc8c37ZClTUnrMVWsAkIGeN2GS0UoQtnCpk-MqxcfFAsa4lt6MNhTiBFCOnu8RSzw0n4GkjqAzIj08wJFVgr_8rdDPCTScVgHfxxOHhQmfTwSZx_WJ8K42VUrr-yAHJVJ3roDboRj1uAigwb7h2rGEzbSIMfQE0KJZPnMMXuP7YuwNG4KOabM6Nuv62dluV4v4Cxw"],
        },
        {
          id: "concept_creature",
          name: "Creature / Monster",
          description: "Creature design.",
          price: 90,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAQvPLFAZMJGadLMD1Cv8Vccw9eA2ELn9qy3TLDlIG4i4ypLuiECfCEl7uUrbk4KsMjgfuU2nc8c37ZClTUnrMVWsAkIGeN2GS0UoQtnCpk-MqxcfFAsa4lt6MNhTiBFCOnu8RSzw0n4GkjqAzIj08wJFVgr_8rdDPCTScVgHfxxOHhQmfTwSZx_WJ8K42VUrr-yAHJVJ3roDboRj1uAigwb7h2rGEzbSIMfQE0KJZPnMMXuP7YuwNG4KOabM6Nuv62dluV4v4Cxw"],
        },
        {
          id: "concept_env",
          name: "Environment Concept",
          description: "World scene sketch.",
          price: 110,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAQvPLFAZMJGadLMD1Cv8Vccw9eA2ELn9qy3TLDlIG4i4ypLuiECfCEl7uUrbk4KsMjgfuU2nc8c37ZClTUnrMVWsAkIGeN2GS0UoQtnCpk-MqxcfFAsa4lt6MNhTiBFCOnu8RSzw0n4GkjqAzIj08wJFVgr_8rdDPCTScVgHfxxOHhQmfTwSZx_WJ8K42VUrr-yAHJVJ3roDboRj1uAigwb7h2rGEzbSIMfQE0KJZPnMMXuP7YuwNG4KOabM6Nuv62dluV4v4Cxw"],
        },
      ],
    },
    {
      id: "YCH",
      title: "YCH",
      description: "Template based commissions.",
      options: [
        {
          id: "ych_solo",
          name: "Solo YCH",
          description: "Single pose template.",
          price: 40,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
        {
          id: "ych_couple",
          name: "Couple YCH",
          description: "Two poses template.",
          price: 70,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
        {
          id: "ych_seasonal",
          name: "Seasonal YCH",
          description: "Themed templates (Halloween, Christmas, etc).",
          price: 60,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
        {
          id: "ych_chibi",
          name: "Chibi YCH",
          description: "Cute small templates.",
          price: 30,
          images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw"],
        },
      ],
    },
  ],
  portfolioItems: [
    {
      id: "1",
      title: "Morning Egg Hug",
      category: "Illustration",
      type: "Headshot / Icon",
      date: "2 days ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcKKSm8lFpnqrvA-O05WalfGoQb77np0HQPkno417dIxnxfr7n3R5rdQihqWRH-_wrV_6b3AiC7yik-z6JcdP-E4WOc3IO1fBWENw4NedOOYoBmZrF6Vd9hWqUtASaW29xwQmQNVKELiMk4SY1mYX3z6PlpWr-beqT8HoKXefKJgJ4AY7nb2KEr8Pg_fv2UHzFXZ3ACdSHOtEKhSuxFbEJnjM31eZ2e1EvuaYqyvMzVreFrYc9hy63A8RDs8_FZLmOmbJkjHVOXQ",
      featured: true,
    },
    {
      id: "2",
      title: "Gamer Chick Emote Set",
      category: "Emotes",
      type: "Emote Bundle",
      date: "1 week ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA",
      featured: true,
    },
    {
      id: "3",
      title: "Warrior Hen VTuber",
      category: "Live2D",
      type: "Full Body Model",
      date: "Just now",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbMdks8ttFQM3-3zlrPtNKfp1yGYiFK6pC2V8yLdPyKtsPDjP2565-k4vlbkizSKpPn0QWD61U_u-tq3CtrYqHdnPh8Nj8IFObyO4Tl5k5GWNcknOH3ykaQWVOQZZoEJCl1305mzRJyO_k1jYYCcUuCXTYu2Da-gMfRabUy1HtyoV2ZUi4xMMoj_Jx-_-s3eLdV4qSreHZn5mtBDQqL2ZW2HvaYYgpz9mzCaIYhiVqhVQAFmYlRLOveylQIPlOEZomnUF03CnMdw",
      featured: true,
    },
    // Restored Original Static Items
    {
      id: "4",
      title: "Ayamu Idol Mode",
      category: "Character Design",
      type: "VTuber Design Package",
      date: "2 weeks ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl84RlnLSwsMaQ3xxinF-EL33KBEXOI6_1gGRkLHnvtM3DIt1JqZ8uH4_aIMqcMZhgHqGENiDaXjdGaB57YKXSI-mxGsLNPcPJInIC8M6jFBw-YYYbED7ebv2Xsxdm8ZRofoq-UdRqmZDAXZhtRd3zBAHGdlNo4YiSE1B6meJK2onBu-rZiKnIBTxvNFoKWM1wDGlOYCJ53p7ymQdOwIE0zlu3rnjK-tXAO18XE_BWXSRO_VshGbN8aDrLn09ffHYFDRw0jmiEYA",
    },
    {
      id: "5",
      title: "Cozy Hugs",
      category: "Illustration",
      type: "Half Body",
      date: "3 weeks ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY_Q-CCVKm3RaOjvUHuW2QrruqyQXWOl_yEqu69-VrFlhs5huT6Mkt-dLEHvMAj742OnFm6irf2xrbjZbaEMDK3g0EOB93gQknJvMwQnVu52zath7aBeehhErKSAeRaP2g0ZXelh6MdxNBhQhMXdrFjYkh7qcg59Uy2eTQ_srreq38hDXb0hkqxfsztxKIn50D2jCpw6gxSfNrs_1p4nao5I6OuxwM1JQOsbs-XaC_ULXT1GtQL5wZ-e3KcQ3_Ii3mb474xMt-dg",
    },
    {
      id: "6",
      title: "Sunny Fields",
      category: "Background",
      type: "Scenery / Landscape",
      date: "1 month ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWjXKDENh3HdMp5IWlfPog5ZX0N8ZnZqnrsKdOLGCb7rRBmH2egbzlca2utAGfbSys2TPSHyxVN58jS5wytnGr5aBAVifYcC3bnuLJAWJWMef5ajCOGHnZ0W4MpIW52jvEqaqyoDnk5bLfEio-OlXd2mdbD1PhCPaXTlaHTLFey3ckibiAGaGOEEYRwZMQmax2wX70evRHv3Cvh6STMgorG6X28I5te1biYiABmF7Um-lP3PKG5mW60CBwJlRPWuMi10MzdrlgtQ",
    },
    {
      id: "7",
      title: "Chibi Party",
      category: "Chibi",
      type: "Chibi Group",
      date: "1 month ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lVX0qdFEuN6BLTg1uaT0SIHyCjHWegx5Vj-NpOL9tnprvHqg6y6WnFpwJvHtjZryBdsOL2dTZ6iA7Mo6B2L1MMqo9bOoGxv9gqw_9xPFXOVb_5Cu84-hRANWO6My2mE8Gk4xG5QfsIS67BNLcBbM4ls2VcnEMbh8E_0Ze6rKaXTB4GbqAPOSNSRFfxeQ7WbUS53wGBGDlNIRHCaQLyEEljkpitU8ss8srYHx0UzsagR5LmaQ01XPDlJGe8EzLgY2coXerSvHxw",
    },
    {
      id: "8",
      title: "Neon Nights",
      category: "Concept Art",
      type: "Environment Concept",
      date: "2 months ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQvPLFAZMJGadLMD1Cv8Vccw9eA2ELn9qy3TLDlIG4i4ypLuiECfCEl7uUrbk4KsMjgfuU2nc8c37ZClTUnrMVWsAkIGeN2GS0UoQtnCpk-MqxcfFAsa4lt6MNhTiBFCOnu8RSzw0n4GkjqAzIj08wJFVgr_8rdDPCTScVgHfxxOHhQmfTwSZx_WJ8K42VUrr-yAHJVJ3roDboRj1uAigwb7h2rGEzbSIMfQE0KJZPnMMXuP7YuwNG4KOabM6Nuv62dluV4v4Cxw",
    },
    {
      id: "9",
      title: "Golden Warrior",
      category: "Character Design",
      type: "Outfit Design",
      date: "2 months ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDybiof6zM6NLN7UIfQl049te5crPUNLzJ-PuaWbvpWmbkoBT0JrCGSafBt_PWcr5NuGLMVr2kb1y5xnTX4nApRUHfF6JkuS3QzQzwVzZg9sSHgHxFzgmY0R3yU8iuSQJy-IYyFAg_5qZgyMWlbHdPylu1aqHoXota23FODPck5BEWaWwELWJJxCFabOp6Mp_Cb6CezT9y2aDvF-nwDx2l6m9hWrAvtFI-_rAf-TtVM2JCz-hMSxo8HYaAa8Jzj-EX2BQEpY-Tmzw",
    },
    {
      id: "10",
      title: "Gamer Setup",
      category: "Background",
      type: "Interior / Room",
      date: "3 months ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3E8kD9uUsQEotorbZLOtA2D9vRaSTkcwrRi9TRX2yMJ1A9wnZnOgvIXo_1pt7OxsQ5keg5K9Lgbt3wiqUwj1VYivI0DBo_zvpl5cIRInceITlb9InLKKw2BYCAcsOFolRMHWxl56bsz7AM-n-0pF2Xz_ae1GbnateJXrkfR6XjLHL76GSgppay_ByjuxwjIyCTekasTTGCvaF51zeAm6EC4yjSMWBPcgFGYJy7QFAGg7QHyQSLkQ70gaAg6zVNGxwhj99fnCDw",
    },
    {
      id: "11",
      title: "Floral Elegance",
      category: "Illustration",
      type: "Headshot / Icon",
      date: "3 months ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG-QO_80lk_Sr3310fYRAjDS8TMB47rYYxvGM5FlsrDmD2yYM0wBmkzHGdg9WrmeKOV-v1nUR7KXiTGWfsRmJzis83gEPsqPacAYPmh1qNYdqsHI5vm9FE5xTQFffKM8WoUG33UahvQsbiQUlmp6zAFjJ7GaMre1-b-EhrrrobGEo3JmNzrsszD9RrvDqRm0QjDTB_1YaifvR69KMpQdraXzCVVlm8qIrAdSaKIl0wATWR6VWjs0aBqvi9rDNKAcW9iuwoUtMlUA",
    },
  ],
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentState>(defaultContent);

  const addPortfolioItem = (newItem: Omit<PortfolioItem, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setContent((prev) => ({
      ...prev,
      portfolioItems: [...prev.portfolioItems, { ...newItem, id, date: newItem.date || "Just now" }],
    }));
  };

  const updatePortfolioItem = (id: string, updatedItem: Partial<PortfolioItem>) => {
    setContent((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const deletePortfolioItem = (id: string) => {
    setContent((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.filter((item) => item.id !== id),
    }));
  };

  const addCommissionCategory = (newCategory: Omit<CommissionCategory, "id">) => {
    const id = newCategory.title.replace(/\s+/g, ""); // Simple ID generation from title
    setContent((prev) => ({
      ...prev,
      commissionCategories: [...prev.commissionCategories, { ...newCategory, id, options: [] }],
    }));
  };

  const updateCommissionCategory = (id: string, updatedCategory: Partial<CommissionCategory>) => {
    setContent((prev) => ({
      ...prev,
      commissionCategories: prev.commissionCategories.map((cat) =>
        cat.id === id ? { ...cat, ...updatedCategory } : cat
      ),
    }));
  };

  const deleteCommissionCategory = (id: string) => {
    setContent((prev) => ({
      ...prev,
      commissionCategories: prev.commissionCategories.filter((cat) => cat.id !== id),
    }));
  };

  const addCommissionOption = (categoryId: string, newOption: Omit<CommissionOption, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setContent((prev) => ({
      ...prev,
      commissionCategories: prev.commissionCategories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, options: [...cat.options, { ...newOption, id }] }
          : cat
      ),
    }));
  };

  const updateCommissionOption = (categoryId: string, optionId: string, updatedOption: Partial<CommissionOption>) => {
    setContent((prev) => ({
      ...prev,
      commissionCategories: prev.commissionCategories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              options: cat.options.map((opt) =>
                opt.id === optionId ? { ...opt, ...updatedOption } : opt
              ),
            }
          : cat
      ),
    }));
  };

  const deleteCommissionOption = (categoryId: string, optionId: string) => {
    setContent((prev) => ({
      ...prev,
      commissionCategories: prev.commissionCategories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, options: cat.options.filter((opt) => opt.id !== optionId) }
          : cat
      ),
    }));
  };

  return (
    <ContentContext.Provider value={{
        content,
        addPortfolioItem,
        updatePortfolioItem,
        deletePortfolioItem,
        addCommissionCategory,
        updateCommissionCategory,
        deleteCommissionCategory,
        addCommissionOption,
        updateCommissionOption,
        deleteCommissionOption
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
