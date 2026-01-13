"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

const contentPages = [
  {
    id: "portfolio",
    title: "Portfolio Gallery",
    description: "Manage your showcase projects, add new works, or remove old ones.",
    icon: "grid_view",
    href: "/content/portfolio",
  },
  {
    id: "commissions",
    title: "Commission Types",
    description: "Manage commission categories, options, services, and prices.",
    icon: "palette",
    href: "/content/commissions",
  },
];

export default function ContentDashboard() {
  return (
    <div className="space-y-6 p-4 md:px-8 md:pb-8 md:pt-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentPages.map((page) => (
          <div 
            key={page.id} 
            className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-icons-round text-2xl">{page.icon}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
              {page.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
              {page.description}
            </p>
            
            <Link href={page.href} className="w-full mt-auto">
              <Button variant="secondary" className="w-full justify-center">
                Edit Content
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
