"use client";

import { useState } from "react";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import Modal from "@/components/ui/Modal"; // Import Modal
import Button from "@/components/ui/Button";
import { KanbanCardProps } from "@/components/kanban/KanbanCard";

// Portfolio Category Colors
const CATEGORY_COLORS: Record<string, string> = {
  "Illustration": "text-primary bg-primary/10",
  "Emotes": "text-secondary bg-secondary/10",
  "Live2D": "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30",
  "Character Design": "text-rose-600 bg-rose-100 dark:bg-rose-900/30",
  "Concept Art": "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
  "Background": "text-teal-600 bg-teal-100 dark:bg-teal-900/30",
  "Chibi": "text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30",
  "Logo": "text-slate-600 bg-slate-100 dark:bg-slate-700/50",
  "YCH": "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
  "Design": "text-rose-600 bg-rose-100 dark:bg-rose-900/30", // Fallback/alias
  "Env Art": "text-teal-600 bg-teal-100 dark:bg-teal-900/30", // Fallback/alias
  "AI Model": "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30", // Custom for AI
};

// Mock Initial Data
const INITIAL_CARDS: KanbanCardProps[] = [
  {
    id: "#AYM-2941",
    title: "Chibi Character Design",
    price: 150,
    category: { label: "Illustration", color: CATEGORY_COLORS["Illustration"] },
    description: "Cute chibi character for streaming assets. Needs transparent background.",
    status: "incoming",
  },
  {
    id: "#AYM-2942",
    title: "VTuber Model Rigging",
    price: 800,
    borderColor: "border-l-blue-400",
    category: { label: "Live2D", color: CATEGORY_COLORS["Live2D"] },
    description: "Full body rigging for a new VTuber debut. Includes physics.",
    status: "incoming",
  },
  {
    id: "#AYM-2945",
    title: "Background Art - SciFi",
    price: 200,
    category: { label: "Env Art", color: CATEGORY_COLORS["Background"] },
    description: "Cyberpunk city street background for a visual novel scene.",
    status: "incoming",
  },
  {
    id: "#AYM-2938",
    title: "Custom Discord Emotes",
    description: "Pack of 5 emotes. Chicken themed but moody. High contrast.",
    category: { label: "Emotes", color: CATEGORY_COLORS["Emotes"] },
    status: "paid",
    paymentType: "full",
  },
  {
    id: "#AYM-2935",
    title: "Fanart - Genshin Impact",
    description: "Full body illustration of Raiden Shogun in a casual outfit.",
    category: { label: "Illustration", color: CATEGORY_COLORS["Illustration"] },
    status: "paid",
    paymentType: "deposit",
  },
  {
    id: "#AYM-2920",
    title: "LoRA Training - Style A",
    description: "Training a LoRA model on a specific anime art style. 50 images dataset.",
    category: { label: "AI Model", color: CATEGORY_COLORS["AI Model"] },
    status: "in_progress",
    assignee: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-vyC7fVf9MZl2nxiCXn3bZ03cbL9P3ACc3r14j0Vi0xiOQKDXQrYfMarLE_4f48WEJMmp73fkQrF9qBQId5Dwxu6Z58_zDhucBwQxStaTgqm_6fPkseS83LhuLQ7WLg0jy6poMK3qhM5tQjyeTXDxW3_fxtsg0E0pl4Et03zYaVNn8PcRHfIciQQUdGrFp-m8fR7AD2_oz4vp-RsnaVhL7S1ElTq0H1O3sY9rgcwsykXSZEMV7GdSWZkET3kBtPWXMjgU2GQjDA",
    timeLeft: "2d left",
  },
  {
    id: "#AYM-2925",
    title: "Sketch Commission",
    description: "Rough sketch of an original character concept. Fantasy armor.",
    category: { label: "Illustration", color: CATEGORY_COLORS["Illustration"] },
    status: "in_progress",
    assignee: "https://lh3.googleusercontent.com/aida-public/AB6AXuD20WQ_v_glUmW87RvDvcqRtWiUobwV9aVGEeHepBoDgfxFyLTiK7gGQqZbV9Cf9KdMrZGIMclXesE5-1o-KskrXwWKkxC_Y8-5nFVkeoGH5_IOigTKY8PK20jqDaQYgpi5HeozznOU-P_WiMM0xf4f5pwU2UgGM6I3OQbQIgb-r8S1cwf8qNmUxfHtSTM4z02-IgCcVOjL38Nq2bZMIRdT4GM5aIczGTwscCiys0nr1POJsopcrbnOVO8-XWVY3YKo2YAohaYtJA",
    timeLeft: "4d left",
  },
  {
    id: "#AYM-2910",
    title: "Character Sheet - OC",
    description: "Three-view character sheet (front, side, back) for a D&D character.",
    category: { label: "Character Design", color: CATEGORY_COLORS["Character Design"] },
    status: "done",
    assignee: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKDW7z9-idnhzx8mNSg4z5uXR2NLO4VWYw0rxgs0xaZ4Q7K8ccE_rAnMpNwiaQ4skxEZ9r9P1-UPq2HvieT-vYhRt_7u4OVVX4PGwMFHTQ9Oa-aEG8dO3JUpd8_9VWnKtTD9x0eSuezXjcTANa9bP1agjly6D93xasJChOSkwwOOt_17rOZrREbVD8eznI13Ag5MlQcwwkKXczxvDiA14UXkv7npDqdrVpdw9mup6jnU2Ufty1L84KYzfwbR_2vxVHHkN5PXcdIQ",
    timeLeft: "2d ago",
  },
  {
    id: "#AYM-2905",
    title: "Twitch Overlay Pack",
    description: "Stream overlay package including scenes, alerts, and panels.",
    category: { label: "Design", color: CATEGORY_COLORS["Character Design"] }, // Using Character Design color for general design
    status: "done",
    assignee: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvj0WPzqcWxro_hkJtmt0BZNuVQrGBrwl-cw4tjnhU3kqAB5VIma68N56OZ44fv8pImHX47ifq21KE-cgusl_b4PK3UK4piJ0qsD6_Hvv-X-cUywOv5nnxDotnPHTuSLZ3RrF7SXxa2zgSwWzaDQXdsLspbwqwE8dXu8o5aKTJ_iZvOpxT2hgWsh5v79O_AaDwZYfx_Iy8em9-nHu2XJw7hKHDOqGOiD5MdajjmFaNLZ_--6i7Iwbu7z3ns3_5LrXBbsku2JRmsQ",
    timeLeft: "1w ago",
  },
];

import { useSidebar } from "@/components/dashboard/SidebarContext";
import SearchBar from "@/components/ui/SearchBar";

export default function OrdersPage() {
  const { profileImage } = useSidebar();
  const [orders, setOrders] = useState<KanbanCardProps[]>(INITIAL_CARDS);
  const [filterQuery, setFilterQuery] = useState("");
  
  // Confirmation Modal State
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    action: 'accept' | 'reject' | 'claim' | null;
    orderId: string | null;
  }>({
    isOpen: false,
    action: null,
    orderId: null,
  });

  const filteredOrders = orders.filter(order => 
    order.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
    order.id.toLowerCase().includes(filterQuery.toLowerCase()) ||
    order.category.label.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const handleAction = (action: string, orderId: string) => {
    if (['accept', 'reject', 'claim'].includes(action)) {
      setConfirmModal({
        isOpen: true,
        action: action as 'accept' | 'reject' | 'claim',
        orderId
      });
    } else {
        // Other actions handled normally
        console.log("Other action:", action);
    }
  };

  const confirmAction = () => {
    const { action, orderId } = confirmModal;
    if (!action || !orderId) return;

    if (action === "reject") {
        setOrders(orders.filter(o => o.id !== orderId));
    } else {
        const updatedOrders = orders.map(order => {
            if (order.id !== orderId) return order;

            if (action === "accept") return { ...order, status: "accepted" as const };
            if (action === "claim") return { 
                ...order, 
                status: "in_progress" as const, 
                assignee: "CURRENT_USER",
                timeLeft: "3d left"
            };
            
            return order;
        });
        setOrders(updatedOrders);
    }
    
    setConfirmModal({ isOpen: false, action: null, orderId: null });
  };

  const displayedOrders = filteredOrders.map(order => ({
    ...order,
    assignee: order.assignee === "CURRENT_USER" ? (profileImage || "") : order.assignee
  }));

  return (
    <div className="p-4 md:px-8 md:pb-8 md:pt-1">
      {/* Navbar Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage commissions and internal tasks.
          </p>
        </div>
        <div className="flex items-center gap-3">

          
          <SearchBar 
            placeholder="Filter orders..." 
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-40 focus-within:w-60 transition-all"
          />

          {/* New Order Button Removed */}
        </div>
      </div>

      <KanbanBoard cards={displayedOrders} onCardAction={handleAction} />

      {/* Confirmation Modal */}
       <Modal 
         isOpen={confirmModal.isOpen} 
         onClose={() => setConfirmModal({ ...confirmModal, isOpen: false })}
         title={
             confirmModal.action === "accept" ? "Accept Order" :
             confirmModal.action === "reject" ? "Reject Order" : 
             "Claim Order"
         }
         maxWidth="max-w-sm"
       >
         <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
                {confirmModal.action === "accept" && "Are you sure you want to accept this incoming order? The client will be notified to proceed with payment."}
                {confirmModal.action === "reject" && "Are you sure you want to reject this order? This action cannot be undone."}
                {confirmModal.action === "claim" && "Are you sure you want to claim this order? It will be assigned to you and moved to 'In Progress'."}
            </p>
            <div className="flex justify-end gap-2 pt-2">
                 <Button 
                    variant="ghost" 
                    onClick={() => setConfirmModal({ ...confirmModal, isOpen: false })}
                >
                    Cancel
                 </Button>
                 <Button 
                    variant={confirmModal.action === "reject" ? "danger" : "primary"}
                    onClick={confirmAction}
                 >
                    Confirm
                 </Button>
            </div>
         </div>
       </Modal>
    </div>
  );
}
