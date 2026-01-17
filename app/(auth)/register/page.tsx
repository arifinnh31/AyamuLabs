"use client";

import Link from "next/link";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create an account
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Start your creative journey with Ayamu Labs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="Jane Doe"
          icon="person"
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          icon="mail"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          icon="lock"
          required
        />
        
        <div className="pt-2">
          <Button
              type="submit"
              className="w-full justify-center"
              disabled={isLoading}
          >
              {isLoading ? "Creating account..." : "Sign up"}
          </Button>
        </div>
      </form>
      
      <p className="mt-6 text-center text-xs text-gray-400">
        By signing up, you agree to our{" "}
        <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-200">Terms of Service</a> and{" "}
        <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-200">Privacy Policy</a>.
      </p>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-primary hover:text-amber-500 transition-colors"
        >
          Sign in
        </Link>
      </div>
    </>
  );
}
