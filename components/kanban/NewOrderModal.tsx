"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

interface NewOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (order: { title: string; price: number; tags: string[]; description: string; status: "incoming" }) => void;
}

export default function NewOrderModal({ isOpen, onClose, onSubmit }: NewOrderModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Illustration");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onSubmit({
      title,
      price: Number(price) || 0,
      tags: [category], // Passing as single tag array for compatibility if needed, but the handler will adapt
      description,
      status: "incoming",
    });

    // Reset
    setTitle("");
    setPrice("");
    setCategory("Illustration");
    setDescription("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Order">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
            Order Title
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 text-sm focus:ring-2 focus:ring-primary outline-none text-gray-800 dark:text-white"
            placeholder="e.g. Character Illustration"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 text-sm focus:ring-2 focus:ring-primary outline-none text-gray-800 dark:text-white"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
             <select
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 text-sm focus:ring-2 focus:ring-primary outline-none text-gray-800 dark:text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Illustration">Illustration</option>
              <option value="Live2D">Live2D</option>
              <option value="Design">Design</option>
              <option value="Emotes">Emotes</option>
              <option value="AI Model">AI Model</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
           <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 text-sm focus:ring-2 focus:ring-primary outline-none text-gray-800 dark:text-white resize-none"
            rows={3}
            placeholder="Brief details about the order..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="secondary" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit">
            Create Order
          </Button>
        </div>
      </form>
    </Modal>
  );
}
