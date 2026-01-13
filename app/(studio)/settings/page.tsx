"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SettingsSection from "@/components/settings/SettingsSection";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6 p-4 md:px-8 md:pb-8 md:pt-1">
      
      {/* Profile Section */}
      <SettingsSection 
        title="Profile Information" 
        description="Update your photo and personal details here."
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 flex flex-col items-center gap-4">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-nLPIs_nn9hwIsHyagDk5Si8jfFeq2tU-3ADHZ6jPPzKB2ENVGcY0JXSWBlMhYuTu7fIU9cME6u4u_Bcj9NLjYDgd1jvpJ6w1Xd-CjBP2OO2FfQqf1d6b2nx7Ve5oXCAY_KfnOJNItTr6S3SMDhXrr0Q8sWNuyMB-veisGJSCNI-j-7C4jLTgM2xTHKvYZdNivPEFV8KExl6qd8V5tanzB-TrXvleaypRLE4NyEh0tdDEfTCJk7TrHxGNmVBo2lwK6gcwKw1Q"
                    alt="Profile Avatar"
                    width={100}
                    height={100}
                    className="rounded-full ring-4 ring-gray-50 dark:ring-gray-800 object-cover"
                />
                <Button variant="secondary" size="sm">Change Photo</Button>
            </div>
            <div className="space-y-4 flex-1 w-full max-w-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
        </div>
        <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
        </div>
      </SettingsSection>

      {/* Notifications Section */}
      <SettingsSection 
        title="Notifications" 
        description="Choose what you want to be notified about."
      >
        <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
                <div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white">Email Notifications</h3>
                    <p className="text-xs text-gray-500">Receive updates about your account via email.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                <div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white">Order Updates</h3>
                    <p className="text-xs text-gray-500">Get notified when an order status changes.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
            </div>
        </div>
      </SettingsSection>

      {/* Appearance Section */}
      <SettingsSection 
        title="Appearance" 
        description="Customize the look and feel of the dashboard."
      >
         <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme Preference</span>
            <ThemeToggle />
         </div>
      </SettingsSection>
    </div>
  );
}
