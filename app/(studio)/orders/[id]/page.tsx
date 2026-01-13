import OrderDetailHeader from "@/components/order-details/OrderDetailHeader";
import OrderInfoCard from "@/components/order-details/OrderInfoCard";
import AssignedCreativesCard from "@/components/order-details/AssignedCreativesCard";
import ClientCommunication from "@/components/order-details/ClientCommunication";
import StageTimeline from "@/components/order-details/StageTimeline";
import ProjectFiles from "@/components/order-details/ProjectFiles";
import InternalNotes from "@/components/order-details/InternalNotes";

export default function OrderDetailsPage() {
  return (
    <>
      <OrderDetailHeader />
      <div className="w-full min-h-full space-y-8 p-4 md:px-8 md:pb-8 md:pt-1 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <OrderInfoCard />
            <AssignedCreativesCard />
            <ClientCommunication />
          </div>
          <div className="space-y-6">
            <StageTimeline />
            <ProjectFiles />
            <InternalNotes />
          </div>
        </div>
      </div>
    </>
  );
}
