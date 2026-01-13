"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
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
          <Button onClick={onClose}>
            Save Changes
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-nLPIs_nn9hwIsHyagDk5Si8jfFeq2tU-3ADHZ6jPPzKB2ENVGcY0JXSWBlMhYuTu7fIU9cME6u4u_Bcj9NLjYDgd1jvpJ6w1Xd-CjBP2OO2FfQqf1d6b2nx7Ve5oXCAY_KfnOJNItTr6S3SMDhXrr0Q8sWNuyMB-veisGJSCNI-j-7C4jLTgM2xTHKvYZdNivPEFV8KExl6qd8V5tanzB-TrXvleaypRLE4NyEh0tdDEfTCJk7TrHxGNmVBo2lwK6gcwKw1Q"
                    alt="Profile Avatar"
                    width={80}
                    height={80}
                    className="rounded-full ring-4 ring-gray-50 dark:ring-gray-800 object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full shadow-md hover:bg-primary-dark transition-colors">
                    <span className="material-icons-round text-sm">edit</span>
                </button>
            </div>
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
