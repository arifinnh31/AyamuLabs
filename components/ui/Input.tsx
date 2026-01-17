import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string; // Material Icon name
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-lg">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={`w-full ${
              icon ? "pl-10" : "pl-4"
            } pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border focus:ring-2 focus:outline-none transition-all text-sm
            ${
              error
                ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900/30"
                : "border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            dark:text-white dark:placeholder-gray-500
            ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-500 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
