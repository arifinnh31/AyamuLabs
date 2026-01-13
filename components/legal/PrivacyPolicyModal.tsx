"use client";

import Modal from "../ui/Modal";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Policy"
    >
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>Last updated: January 2026</p>
        <p>
          At AyamuLabs, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">1. Information We Collect</h4>
        <p>
          We collect information you provide directly to us, such as when you fill out a commission form, subscribe to our newsletter, or communicate with us. This may include your name, email address, and project details.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h4>
        <p>
          We use your information to provide, maintain, and improve our services, communicate with you about your commissions, and send you updates about our studio.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">3. Information Sharing</h4>
        <p>
          We do not sell or share your personal information with third parties, except as necessary to provide our services (e.g., payment processing) or as required by law.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">4. Contact Us</h4>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our Discord or social media channels.
        </p>
      </div>
    </Modal>
  );
}
