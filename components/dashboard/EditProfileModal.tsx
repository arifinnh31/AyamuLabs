"use client";

import { useState, useRef } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage?: string | null;
  onSaveImage?: (image: string) => void;
}

export default function EditProfileModal({ isOpen, onClose, currentImage, onSaveImage }: EditProfileModalProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTriggerUpload = () => {
      fileInputRef.current?.click();
  };

  const handleSave = () => {
      if (imagePreview && onSaveImage) {
          onSaveImage(imagePreview);
      }
      onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
            <div className="relative group cursor-pointer" onClick={handleTriggerUpload}>
                {(imagePreview || currentImage) ? (
                    <Image
                        src={imagePreview || currentImage || ""}
                        alt="Profile Avatar"
                        width={80}
                        height={80}
                        className="rounded-full ring-4 ring-gray-50 dark:ring-gray-800 object-cover w-20 h-20 transition-opacity group-hover:opacity-80"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full ring-4 ring-gray-50 dark:ring-gray-800 bg-primary/10 text-primary flex items-center justify-center font-bold text-4xl transition-opacity group-hover:opacity-80">
                        A
                    </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons-round text-white">camera_alt</span>
                </div>
            </div>
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
            />
            <p className="text-sm text-gray-500">Allowed *.jpeg, *.jpg, *.png, *.gif</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">First Name</label>
                <input type="text" defaultValue="Ayamu" className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name</label>
                <input type="text" defaultValue="Labs" className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white" />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" defaultValue="ayamu@ayamulabs.com" className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white" />
        </div>

        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Bio</label>
            <textarea rows={3} defaultValue="Digital Artist based in the cloud." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-gray-800 dark:text-white" />
        </div>
      </div>
    </Modal>
  );
}
