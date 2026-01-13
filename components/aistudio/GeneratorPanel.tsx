"use client";

import { useState } from "react";
import ImageUpload from "../ui/ImageUpload";

export default function GeneratorPanel() {
  const [activeTab, setActiveTab] = useState<"text-to-image" | "image-to-image">("text-to-image");
  const [referenceImage, setReferenceImage] = useState("");
  const [denoisingStrength, setDenoisingStrength] = useState(0.75);

  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-6 border border-yellow-100 dark:border-yellow-900/30">
        
        {/* Tab Switcher */}
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-6">
          <button 
            onClick={() => setActiveTab("text-to-image")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition cursor-pointer ${
              activeTab === "text-to-image"
                ? "bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-primary"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Text-to-Image
          </button>
          <button 
            onClick={() => setActiveTab("image-to-image")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition cursor-pointer ${
              activeTab === "image-to-image"
                ? "bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-primary"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Image-to-Image
          </button>
        </div>

        {/* Image to Image Specific Controls */}
        {activeTab === "image-to-image" && (
          <div className="mb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                Source Image
              </label>
              <ImageUpload
                value={referenceImage}
                onChange={(val) => setReferenceImage(val as string)}
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">
                  Denoising Strength
                </label>
                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">
                  {denoisingStrength.toFixed(2)}
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={denoisingStrength}
                onChange={(e) => setDenoisingStrength(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
                <span>Creative (High)</span>
                <span>Original (Low)</span>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
            <span className="material-icons-round text-base text-primary">
              auto_awesome
            </span>{" "}
            Positive Prompt
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary dark:text-white text-sm outline-none px-3 py-2"
            placeholder="e.g., anime girl in chicken costume, holding microphone, golden hair, cute, vibrant colors..."
            rows={4}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
            <span className="material-icons-round text-base text-red-400">
              block
            </span>{" "}
            Negative Prompt
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-red-400 focus:ring-red-400 dark:text-white text-sm outline-none px-3 py-2"
            placeholder="low quality, bad anatomy, blurry, extra limbs..."
            rows={2}
          ></textarea>
        </div>

        {/* Reference Image Section (Only for Text-to-Image as generic ControlNet or similar usage, usually hidden or separate. 
            For now, keeping it hidden in Img2Img since we have main source image, or showing it only for Txt2Img if needed. 
            The previous design had "Reference Image" at the bottom. I will hide it for Img2Img to avoid confusion.) */}
        {activeTab === "text-to-image" && (
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
              Reference Image (Optional)
            </label>
            <ImageUpload 
               value=""
               onChange={() => {}} // Placeholder for now or connect state if needed
            />
          </div>
        )}

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              High Resolution Fix
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={true}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Restore Faces
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
          <span className="material-icons-round">bolt</span>
          Generate 4 Variations
        </button>
        <p className="text-xs text-center mt-3 text-gray-400 dark:text-gray-500">
          Cost: 4 Credits
        </p>
      </div>
    </div>
  );
}
