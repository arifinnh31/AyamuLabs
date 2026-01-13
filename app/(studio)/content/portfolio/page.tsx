"use client";

import { useContent, PortfolioItem } from "@/components/content/ContentContext";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

import PortfolioHeader from "@/components/content/PortfolioHeader";
import ImageUpload from "@/components/ui/ImageUpload";

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
};

export default function PortfolioManager() {
  const { content, addPortfolioItem, updatePortfolioItem, deletePortfolioItem } = useContent();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<PortfolioItem, "id">>({
    title: "",
    category: "",
    type: "",
    image: "",
    link: "#",
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ title: "", category: "", type: "", date: "", image: "", link: "#", featured: false });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: PortfolioItem) => {
    setEditingId(item.id);
    setFormData({
        title: item.title,
        category: item.category,
        type: item.type || "",
        date: item.date || "",
        image: item.image,
        link: item.link || "#",
        featured: item.featured || false,
    });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.image) {
        alert("Title and Image are required!");
        return;
    }

    if (editingId) {
        updatePortfolioItem(editingId, formData);
    } else {
        addPortfolioItem(formData);
    }
    
    setIsModalOpen(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDeleteClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeletingId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (deletingId) {
      deletePortfolioItem(deletingId);
      setIsDeleteModalOpen(false);
      setDeletingId(null);
    }
  };

  return (
    <>
      <PortfolioHeader onAddProject={handleOpenAdd} />
      
      <div className="w-full min-h-full space-y-8 p-4 md:px-8 md:pb-8 md:pt-1 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content.portfolioItems.map((item) => (
                <div 
                    key={item.id} 
                    onClick={() => handleOpenEdit(item)}
                    className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {/* Use standard img to handle diverse user-pasted URLs without config friction in Admin UI */}
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                         <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                             {/* Overlay Content for Admin Context */}
                        </div>
                        
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex gap-2">
                             <Button 
                                variant="secondary" 
                                size="icon" 
                                className="h-8 w-8 rounded-full shadow-md bg-white/90 hover:bg-white dark:bg-surface-dark/90 dark:hover:bg-surface-dark"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenEdit(item);
                                }}
                            >
                                <span className="material-icons-round text-sm">edit</span>
                            </Button>
                            <Button 
                                variant="danger" 
                                size="icon" 
                                className="h-8 w-8 rounded-full shadow-md"
                                onClick={(e) => handleDeleteClick(item.id, e)}
                            >
                                <span className="material-icons-round text-sm">delete</span>
                            </Button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                             <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${CATEGORY_COLORS[item.category] || "text-gray-500 bg-gray-100"}`}>
                                {item.category}
                            </span>
                            
                            {item.type && (
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    {item.type}
                                </span>
                            )}
                        </div>
                        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white line-clamp-1 flex items-center gap-1" title={item.title}>
                            {item.title}
                            {item.featured && (
                                <span className="material-icons-round text-yellow-500 text-base" title="Featured on Home Page">star</span>
                            )}
                        </h3>
                    </div>
                </div>
            ))}
            
            {/* Empty State / Add New Card - Styled to match grid but distinct */}
            <div 
                onClick={handleOpenAdd}
                className="group relative flex flex-col items-center justify-center min-h-[280px] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all cursor-pointer"
            >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-icons-round text-3xl">add</span>
                </div>
                <p className="font-display font-bold text-xl text-gray-900 dark:text-white">Add New Project</p>
                <p className="text-sm text-gray-500 mt-2">Showcase your latest work</p>
            </div>
        </div>

        {/* Add/Edit Modal */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title={editingId ? "Edit Project" : "Add New Project"}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Project Title</label>
                    <input 
                        type="text" 
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g. Neon City Illustrator"
                        className="w-full px-4 py-2 mt-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white" 
                    />
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Category</label>
                        <select 
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full px-4 py-2 mt-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white"
                        >
                            <option value="">Select Category</option>
                            <option value="Illustration">Illustration</option>
                            <option value="Live2D">Live2D Cubism</option>
                            <option value="Character Design">Character Design</option>
                            <option value="Chibi">Chibi</option>
                            <option value="Emotes">Emotes & Badges</option>
                            <option value="Logo">Logo & Typography</option>
                            <option value="Background">Background Art</option>
                            <option value="Concept Art">Concept Art</option>
                            <option value="YCH">YCH</option>
                        </select>
                    </div>
                </div>



                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <input 
                        type="checkbox" 
                        id="featured"
                        checked={formData.featured || false}
                        onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                        className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="featured" className="text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer select-none flex items-center gap-2">
                        <span className="material-icons-round text-yellow-500 text-lg">star</span>
                        Feature on Home Page
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Project Image</label>
                    <div className="mt-2">
                        <ImageUpload 
                            value={formData.image} 
                            onChange={(value) => setFormData({...formData, image: value as string})} 
                        />
                    </div>
                </div>

                <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 mt-6">
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button onClick={handleSave}>
                        {editingId ? "Save Changes" : "Create Project"}
                    </Button>
                </div>
            </div>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal 
          isOpen={isDeleteModalOpen} 
          onClose={() => setIsDeleteModalOpen(false)}
          title="Delete Project?"
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
              <Button variant="danger" onClick={confirmDelete}>Delete Project</Button>
            </>
          }
        >
          <div className="space-y-4 text-center py-4">
             <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="material-icons-round text-3xl text-red-600 dark:text-red-400">delete_forever</span>
             </div>
             <p className="text-gray-600 dark:text-gray-300">
               Are you sure you want to delete this project? This action cannot be undone.
             </p>
          </div>
        </Modal>
      </div>
    </>
  );
}
