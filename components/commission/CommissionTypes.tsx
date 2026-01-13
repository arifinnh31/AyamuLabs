import Image from "next/image";
import { useContent } from "../content/ContentContext";

import { CommissionOption } from "../content/ContentContext";

type CommissionTypesProps = {
  onOpenModal: (option?: CommissionOption, categoryTitle?: string) => void;
};

export default function CommissionTypes({
  onOpenModal,
}: CommissionTypesProps) {
  const { content } = useContent();

  return (
    <section className="py-20" id="direct-order">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Direct From Studio
          </span>
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Choose Your Commission Type
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select a category below to see details and pricing. Direct orders
            allow for more customization and direct communication with our team.
          </p>
        </div>

        {content.commissionCategories.map((category) => (
          <div key={category.id} className="mb-20">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.options.map((option) => (
                    <div
                      key={option.id}
                      className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
                    >
                      <div className="h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={option.images?.[0] || ""}
                            alt={`${option.name} Commission`}
                            fill
                            className="object-cover transform group-hover:scale-110 transition duration-500"
                          />
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                          {option.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">
                          {option.description}
                        </p>
                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                          <div className="flex justify-between items-end mb-4">
                            <span className="text-xs text-gray-400 uppercase font-semibold">
                              Starting at
                            </span>
                            <span className="text-2xl font-bold text-primary">
                              ${option.price}
                            </span>
                          </div>
                          <button 
                            onClick={() => onOpenModal(option, category.title)}
                            className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                ))}
             </div>
          </div>
        ))}

        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-linear-to-r from-primary to-secondary rounded-full shadow-2xl">
            <button
              onClick={() => onOpenModal()}
              className="px-12 py-5 bg-white dark:bg-surface-dark rounded-full text-xl font-bold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-3"
            >
              <span>Ready to order?</span>
              <span className="text-primary">Place Custom Direct Order</span>
              <span className="material-icons-round text-primary">
                arrow_forward
              </span>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By placing an order, you agree to our Terms of Service.
            <br/>
            <span className="font-bold text-primary">Note:</span> A {content.commissionFeePercentage * 100}% service fee applies to all direct orders.
          </p>
        </div>
      </div>
    </section>
  );
}
