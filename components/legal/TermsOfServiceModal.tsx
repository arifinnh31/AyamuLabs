"use client";

import Modal from "../ui/Modal";

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Terms of Service"
    >
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>Last updated: January 2026</p>
        <p>
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using the AyamuLabs website and services.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h4>
        <p>
          By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not use our services.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">2. Commission Services</h4>
        <p>
          Commissions are subject to availability and acceptance by our artists. Specific terms regarding payment, revisions, and usage rights will be agreed upon before the start of any project.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">3. Intellectual Property</h4>
        <p>
          Unless otherwise agreed, AyamuLabs retains the right to display commissioned works in our portfolio and social media for promotional purposes.
        </p>

        <h4 className="font-bold text-gray-900 dark:text-white">4. Changes to Terms</h4>
        <p>
          We reserve the right to modify or replace these Terms at any time. We will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
        </p>
      </div>
    </Modal>
  );
}
