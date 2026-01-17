"use client";

import Link from "next/link";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
    }, 1500);
  };

  if (isSent) {
      return (
        <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                <span className="material-icons-round text-3xl">mark_email_read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Check your email
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
                We&apos;ve sent password reset instructions to your email address.
            </p>
            <Link href="/login">
                <Button className="w-full justify-center">
                    Back to login
                </Button>
            </Link>
        </div>
      );
  }

  return (
    <>
      <div className="text-center mb-8">
        <Link href="/login" className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mb-6 transition-colors">
            <span className="material-icons-round text-sm">arrow_back</span>
            Back to login
        </Link>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Reset password
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Enter the email associated with your account and we&apos;ll send you a reset link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          icon="mail"
          required
        />

        <Button
            type="submit"
            className="w-full justify-center"
            disabled={isLoading}
        >
            {isLoading ? "Sending link..." : "Send Reset Link"}
        </Button>
      </form>
    </>
  );
}
