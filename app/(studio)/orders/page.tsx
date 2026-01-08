import KanbanBoard from "@/components/kanban/KanbanBoard";

export default function OrdersPage() {
  return (
    <div className="p-4 md:p-8">
      <KanbanBoard />
      <div className="fixed bottom-6 right-6 md:hidden">
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors cursor-pointer">
          <span className="material-icons-round text-2xl">add</span>
        </button>
      </div>
    </div>
  );
}
