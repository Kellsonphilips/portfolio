'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
} 