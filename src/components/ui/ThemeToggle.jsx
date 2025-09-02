"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="border border-zinc-800 rounded-full p-1.5 flex flex-row gap-2">
        <button className="cursor-pointer rounded-full p-1 text-zinc-400">
          <Sun className="size-4" />
        </button>
        <button className="cursor-pointer rounded-full p-1 text-zinc-400">
          <Monitor className="size-4" />
        </button>
        <button className="cursor-pointer rounded-full p-1 text-zinc-400">
          <Moon className="size-4" />
        </button>
      </div>
    );
  }

  const selected = theme;
  const applied = resolvedTheme;
  const options = [
    { value: "light", icon: Sun },
    { value: "system", icon: Monitor },
    { value: "dark", icon: Moon },
  ];

  return (
    <div
      className="border border-zinc-300 dark:border-zinc-800 rounded-full p-1.5 flex flex-row gap-2"
      role="radiogroup"
    >
      {options.map(({ value, icon: Icon }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(value)}
            className={`cursor-pointer rounded-full p-1 transition-colors ${
              isActive
                ? "bg-zinc-300 text-black dark:bg-zinc-800 dark:text-white"
                : "text-black/60 hover:text-black/40  dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
