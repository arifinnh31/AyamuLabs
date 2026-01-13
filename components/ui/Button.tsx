"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon" | "danger" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95";
    
    // Variants
    const variants = {
      primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:-translate-y-0.5",
      secondary: "bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm",
      ghost: "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10",
      icon: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",
      danger: "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    // Sizes
    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-5 py-2",
      lg: "text-base px-6 py-3",
      icon: "p-2",
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.md;

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
