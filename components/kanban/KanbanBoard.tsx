import { KanbanCardProps } from "./KanbanCard";
import KanbanColumn from "./KanbanColumn";

interface KanbanBoardProps {
  cards: KanbanCardProps[];
  onCardAction: (action: string, orderId: string) => void;
}

export default function KanbanBoard({ cards, onCardAction }: KanbanBoardProps) {
  
  const incomingCards = cards.filter(c => c.status === "incoming" || c.status === "accepted");
  const paidCards = cards.filter(c => c.status === "paid");
  const inProgressCards = cards.filter(c => c.status === "in_progress");
  const doneCards = cards.filter(c => c.status === "done");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:min-w-0 pb-8 overflow-x-auto">
      <KanbanColumn
        title="Incoming"
        count={incomingCards.length}
        colorClass="bg-blue-400"
        bgClass="bg-blue-100 dark:bg-blue-900/30"
        textClass="text-blue-600 dark:text-blue-300"
        cards={incomingCards}
        onCardAction={onCardAction}
      />
      <KanbanColumn
        title="Paid"
        count={paidCards.length}
        colorClass="bg-primary"
        bgClass="bg-yellow-100 dark:bg-yellow-900/30"
        textClass="text-yellow-700 dark:text-yellow-400"
        cards={paidCards}
        onCardAction={onCardAction}
      />
      <KanbanColumn
        title="In Progress"
        count={inProgressCards.length}
        colorClass="bg-indigo-500"
        bgClass="bg-indigo-100 dark:bg-indigo-900/30"
        textClass="text-indigo-600 dark:text-indigo-300"
        cards={inProgressCards}
        onCardAction={onCardAction}
      />
      <KanbanColumn
        title="Done"
        count={doneCards.length}
        colorClass="bg-green-500"
        bgClass="bg-green-100 dark:bg-green-900/30"
        textClass="text-green-600 dark:text-green-300"
        cards={doneCards}
        onCardAction={onCardAction}
      />
    </div>
  );
}
