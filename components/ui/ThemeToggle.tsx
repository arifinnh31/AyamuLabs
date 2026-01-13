"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="icon" size="icon" aria-label="Toggle Theme">
        <span className="material-icons-round text-2xl">dark_mode</span>
      </Button>
    );
  }

  return (
    <Button
      variant="icon"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className={theme === "dark" ? "text-yellow-400" : "text-gray-500"}
    >
      <span className="material-icons-round text-2xl">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </Button>
  );
}
