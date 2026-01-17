import GeneratorPanel from "@/components/aistudio/GeneratorPanel";
import ResultsGallery from "@/components/aistudio/ResultsGallery";
import AIStudioFooter from "@/components/aistudio/AIStudioFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Studio",
};

export default function AIStudioPage() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="grow w-full space-y-8 p-4 md:px-8 md:pb-8 md:pt-1">
        <div className="text-center sm:text-left">
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
            Create multiple style variations for your character assets. Utilize
            our tuned models to maintain the AyamuLabs aesthetic consistency.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GeneratorPanel />
          <ResultsGallery />
        </div>
      </div>
      <AIStudioFooter />
    </div>
  );
}
