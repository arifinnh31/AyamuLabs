"use client";

import { useState, useRef, ChangeEvent } from "react";
// import Image from "next/image"; // Unused
import Button from "@/components/ui/Button";

interface ImageUploadProps {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
}

export default function ImageUpload({ value, onChange, multiple = false }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = async (files: File[]) => {
    const validFiles = files.filter(file => file.type.startsWith("image/"));
    
    if (validFiles.length === 0) {
      alert("Please upload image files.");
      return;
    }

    if (!multiple && validFiles.length > 1) {
      // Just take the first one if multiple not allowed but multiple dropped
      // Process single file
      const result = await readFile(validFiles[0]);
      onChange(result);
    } else {
      // Process all concurrently
      const results = await Promise.all(validFiles.map(readFile));
      
      if (multiple) {
        // Safe append: get current values (which might be from props, but in this synchronous event handler logic we rely on props.value being relatively fresh or we assume optimistic updates. 
        // Note: 'value' prop might not have updated if a previous upload is pending, but here we are doing one batch. 
        // If users drag-drop twice rapidly, we might still have a race if parent relies on async state updates.
        // However, converting this to a single batch update fixes the loop overwriting issue.
        const currentValues = Array.isArray(value) ? value : (value ? [value] : []);
        onChange([...currentValues, ...results]);
      } else {
         // Should realistically be covered by the (!multiple) check above, but as fallback:
         onChange(results[0]);
      }
    }
  };

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            resolve(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    });
  };

  const handleRemove = (indexToRem: number) => {
    if (multiple && Array.isArray(value)) {
      const newValues = value.filter((_, idx) => idx !== indexToRem);
      onChange(newValues);
    } else {
      onChange("");
    }
  };

  // Helper to ensure we work with array for preview logic
  const images = Array.isArray(value) ? value : (value ? [value] : []);
  const hasImages = images.length > 0;
  
  // Design Decision:
  // If Empty -> Show Large Dropzone
  // If Multiple & Has Images -> Show Grid of (Images + Small Dropzone at end)
  // If Single & Has Images -> Show Single Large Preview with Replace/Remove options (No Dropzone visible unless removed)
  
  const renderLargeDropzone = () => (
    <div 
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all text-center group cursor-pointer w-full
        ${isDragging 
            ? "border-primary bg-primary/5" 
            : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-primary/50 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
    >
        <div className="flex flex-col items-center justify-center space-y-3">
            <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-2 transition-colors
                ${isDragging ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary group-hover:scale-110 duration-300"}
            `}>
                <span className="material-icons-round text-3xl">cloud_upload</span>
            </div>
            <div>
                <p className="font-bold text-lg text-gray-700 dark:text-gray-200">
                    Click to upload {multiple ? "images" : "image"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    or drag and drop SVG, PNG, JPG or GIF
                </p>
            </div>
        </div>
    </div>
  );

  const renderSmallDropzone = () => (
     <div 
        className={`relative border-2 border-dashed rounded-xl aspect-square flex flex-col items-center justify-center transition-all cursor-pointer group
        ${isDragging 
            ? "border-primary bg-primary/5" 
            : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-primary/50 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        title="Add more images"
    >
        <span className="material-icons-round text-3xl text-gray-400 group-hover:text-primary transition-colors">add_photo_alternate</span>
        <span className="text-xs text-gray-400 font-medium mt-1">Add</span>
    </div>
  );

  return (
    <div className="w-full">
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*"
        multiple={multiple}
      />

       {/* Scenario 1: Multiple Mode with Existing Images -> Gallery View with Inline Add Button */}
       {multiple && hasImages && (
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group bg-gray-100 dark:bg-gray-800">
                        <img 
                            src={img} 
                            alt={`Uploaded ${idx}`} 
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleRemove(idx); }}
                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                                title="Remove Image"
                            >
                                <span className="material-icons-round text-lg">delete</span>
                            </button>
                        </div>
                         {/* Badge for Order */}
                         <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            #{idx + 1}
                         </div>
                    </div>
                ))}
                {/* Append Small Dropzone at the end */}
                {renderSmallDropzone()}
           </div>
       )}

       {/* Scenario 2: Single Mode with Existing Image -> Single Preview */}
       {!multiple && hasImages && (
           <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group">
                <img 
                src={images[0]} 
                alt="Uploaded preview" 
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                     <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
                        Change
                    </Button>
                    <Button variant="danger" onClick={() => handleRemove(0)}>
                        Remove
                    </Button>
                </div>
            </div>
       )}

       {/* Scenario 3: Empty State (Any Mode) -> Large Dropzone */}
       {!hasImages && renderLargeDropzone()}
    </div>
  );
}
