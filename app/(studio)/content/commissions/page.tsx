"use client";

import { useContent, CommissionCategory, CommissionOption } from "@/components/content/ContentContext";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import CommissionHeader from "@/components/content/CommissionHeader";
import ImageUpload from "@/components/ui/ImageUpload";

export default function CommissionsPage() {
  const { content, addCommissionCategory, updateCommissionCategory, deleteCommissionCategory, addCommissionOption, updateCommissionOption, deleteCommissionOption } = useContent();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  
  const [editingCategory, setEditingCategory] = useState<CommissionCategory | null>(null);
  const [editingOption, setEditingOption] = useState<{ categoryId: string, option: CommissionOption } | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null); // For adding option to a category

  const [categoryForm, setCategoryForm] = useState({ title: "", description: "" });
  const [optionForm, setOptionForm] = useState({ name: "", description: "", price: 0, images: [] as string[] });

  const resetCategoryForm = () => setCategoryForm({ title: "", description: "" });
  const resetOptionForm = () => setOptionForm({ name: "", description: "", price: 0, images: [] });

  const handleOpenCategoryModal = (category?: CommissionCategory) => {
    if (category) {
      setEditingCategory(category);
      setCategoryForm({ title: category.title, description: category.description });
    } else {
      setEditingCategory(null);
      resetCategoryForm();
    }
    setIsCategoryModalOpen(true);
  };

  const handleOpenOptionModal = (categoryId: string, option?: CommissionOption) => {
    setSelectedCategoryId(categoryId);
    if (option) {
      setEditingOption({ categoryId, option });
      setOptionForm({ 
        name: option.name, 
        description: option.description, 
        price: option.price, 
        images: option.images || [] 
      });
    } else {
      setEditingOption(null);
      resetOptionForm();
    }
    setIsOptionModalOpen(true);
  };

  const handleSaveCategory = () => {
    if (editingCategory) {
      updateCommissionCategory(editingCategory.id, categoryForm);
    } else {
      addCommissionCategory({ ...categoryForm, options: [] });
    }
    setIsCategoryModalOpen(false);
  };

  const handleSaveOption = () => {
    if (!selectedCategoryId) return;

    if (editingOption) {
      updateCommissionOption(selectedCategoryId, editingOption.option.id, optionForm);
    } else {
      addCommissionOption(selectedCategoryId, optionForm);
    }
    setIsOptionModalOpen(false);
  };

  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
  const [deleteCategoryTarget, setDeleteCategoryTarget] = useState<string | null>(null);

  const [isDeleteOptionModalOpen, setIsDeleteOptionModalOpen] = useState(false);
  const [deleteOptionTarget, setDeleteOptionTarget] = useState<{ catId: string, optId: string } | null>(null);

  const handleDeleteCategory = (id: string) => {
    setDeleteCategoryTarget(id);
    setIsDeleteCategoryModalOpen(true);
  };

  const confirmDeleteCategory = () => {
    if (deleteCategoryTarget) {
      deleteCommissionCategory(deleteCategoryTarget);
      setIsDeleteCategoryModalOpen(false);
      setDeleteCategoryTarget(null);
    }
  };

  const handleDeleteOption = (categoryId: string, optionId: string) => {
    setDeleteOptionTarget({ catId: categoryId, optId: optionId });
    setIsDeleteOptionModalOpen(true);
  };

  const confirmDeleteOption = () => {
    if (deleteOptionTarget) {
      deleteCommissionOption(deleteOptionTarget.catId, deleteOptionTarget.optId);
      setIsDeleteOptionModalOpen(false);
      setDeleteOptionTarget(null);
    }
  };

  return (
    <>
    <CommissionHeader onAddCategory={() => handleOpenCategoryModal()} />
    <div className="w-full min-h-full space-y-8 p-4 md:px-8 md:pb-8 md:pt-1 pb-32">
      {/* Categories List */}
      <div className="space-y-8">
        {content.commissionCategories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Category Header */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-icons-round text-primary text-base">folder</span>
                  {category.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{category.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => handleOpenCategoryModal(category)}>
                  <span className="material-icons-round text-lg mr-1">edit</span>
                  Edit Cat.
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDeleteCategory(category.id)} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <span className="material-icons-round text-lg mr-1">delete</span>
                  Delete
                </Button>
                 <Button size="sm" variant="secondary" onClick={() => handleOpenOptionModal(category.id)}>
                  <span className="material-icons-round text-lg mr-1">playlist_add</span>
                  Add Option
                </Button>
              </div>
            </div>

            {/* Options Grid */}
            <div className="p-6">
                {category.options.length === 0 ? (
                    <div className="text-center py-8 text-gray-400 dark:text-gray-500">
                        <span className="material-icons-round text-4xl mb-2 opacity-50">format_list_bulleted</span>
                        <p>No options yet. Add a service type to start.</p>
                    </div>
                ) : (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.options.map((option) => (
                        <div key={option.id} className="flex gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20 hover:bg-white dark:hover:bg-surface-dark transition-all">
                            <div className="shrink-0 w-20 h-20 rounded-md overflow-hidden relative bg-gray-200 dark:bg-gray-700">
                                <img src={option.images?.[0] || ""} alt={option.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 dark:text-white truncate" title={option.name}>{option.name}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{option.description}</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-primary font-bold text-sm">${option.price}</span>
                                    <div className="flex gap-1">
                                         <button onClick={() => handleOpenOptionModal(category.id, option)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 transition-colors">
                                            <span className="material-icons-round text-[18px]">edit</span>
                                        </button>
                                        <button onClick={() => handleDeleteOption(category.id, option.id)} className="p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                   </div>
                )}
            </div>
          </div>
        ))}
        
        {content.commissionCategories.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-surface-dark rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                <span className="material-icons-round text-6xl text-gray-200 dark:text-gray-700 mb-4">category</span>
                <h3 className="text-xl font-bold text-gray-400 dark:text-gray-500">No categories found</h3>
                <p className="text-gray-400 dark:text-gray-500 mt-2">Create a commission category to get started.</p>
            </div>
        )}
      </div>

      {/* Category Modal */}
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        title={editingCategory ? "Edit Category" : "New Category"}
        footer={
           <div className="flex justify-end gap-3 w-full">
            <Button variant="ghost" onClick={() => setIsCategoryModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveCategory}>Save Category</Button>
           </div>
        }
      >
        <div className="space-y-4 pt-2">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category Title</label>
                <input 
                    type="text" 
                    value={categoryForm.title}
                    onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})}
                    placeholder="e.g. Illustration, Live2D"
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea 
                    value={categoryForm.description}
                    onChange={(e) => setCategoryForm({...categoryForm, description: e.target.value})}
                    placeholder="Short description of this category..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                />
            </div>
        </div>
      </Modal>

       {/* Option Modal */}
      <Modal
        isOpen={isOptionModalOpen}
        onClose={() => setIsOptionModalOpen(false)}
        title={editingOption ? "Edit Option" : "New Option"}
        footer={
           <div className="flex justify-end gap-3 w-full">
            <Button variant="ghost" onClick={() => setIsOptionModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveOption}>Save Option</Button>
           </div>
        }
      >
        <div className="space-y-4 pt-2">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Option Name</label>
                <input 
                    type="text" 
                    value={optionForm.name}
                    onChange={(e) => setOptionForm({...optionForm, name: e.target.value})}
                    placeholder="e.g. Bust Up, Full Body"
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
            </div>
            <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
                <input 
                    type="number" 
                    value={optionForm.price}
                    onChange={(e) => setOptionForm({...optionForm, price: Number(e.target.value)})}
                    onWheel={(e) => e.currentTarget.blur()}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
            </div>
             <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Images</label>
                <ImageUpload 
                    value={optionForm.images}
                    onChange={(value) => setOptionForm({...optionForm, images: value as string[]})}
                    multiple
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea 
                    value={optionForm.description}
                    onChange={(e) => setOptionForm({...optionForm, description: e.target.value})}
                    placeholder="Details about this option..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                />
            </div>
        </div>
      </Modal>

    {/* Delete Category Modal */}
    <Modal
        isOpen={isDeleteCategoryModalOpen}
        onClose={() => setIsDeleteCategoryModalOpen(false)}
        title="Delete Category?"
        footer={
            <>
                <Button variant="ghost" onClick={() => setIsDeleteCategoryModalOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={confirmDeleteCategory}>Delete Category</Button>
            </>
        }
    >
        <div className="space-y-4 text-center py-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-round text-3xl text-red-600 dark:text-red-400">delete_forever</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
                Are you sure you want to delete this category? 
                <br />
                <span className="font-bold text-red-600 dark:text-red-400">Warning: This will also delete all {
                   deleteCategoryTarget && content.commissionCategories.find(c => c.id === deleteCategoryTarget)?.options.length || 0
                } commission options inside it.</span>
            </p>
        </div>
    </Modal>

    {/* Delete Option Modal */}
    <Modal
        isOpen={isDeleteOptionModalOpen}
        onClose={() => setIsDeleteOptionModalOpen(false)}
        title="Delete Option?"
        footer={
            <>
                <Button variant="ghost" onClick={() => setIsDeleteOptionModalOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={confirmDeleteOption}>Delete Option</Button>
            </>
        }
    >
        <div className="space-y-4 text-center py-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-round text-3xl text-red-600 dark:text-red-400">delete_forever</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
                Are you sure you want to delete this commission option? This action cannot be undone.
            </p>
        </div>
    </Modal>
    </div>
    </>
  );
}
