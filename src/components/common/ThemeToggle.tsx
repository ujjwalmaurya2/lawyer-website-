import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/formatters';

interface ThemeToggleProps {
  variant?: 'compact' | 'expanded';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'expanded') {
    return (
      <div
        className={cn(
          'flex items-center justify-between p-2.5 rounded-lg border transition-colors select-none',
          'bg-ivory-200 border-ivory-300 dark:bg-charcoal-850 dark:border-stone-800',
          className
        )}
      >
        <span className="text-xs uppercase tracking-wider font-mono font-medium text-stone-700 dark:text-stone-300">
          Appearance
        </span>

        <button
          onClick={toggleTheme}
          type="button"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-700 text-xs font-mono text-charcoal-900 dark:text-ivory-100 shadow-sm cursor-pointer"
        >
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5 text-brass-400" />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-brass-600" />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      className={cn(
        'relative inline-flex items-center justify-center w-9 h-9 rounded-md border transition-all duration-200 cursor-pointer',
        'bg-white/80 hover:bg-white text-charcoal-800 border-ivory-300 shadow-sm',
        'dark:bg-charcoal-850 dark:hover:bg-charcoal-800 dark:text-ivory-200 dark:border-stone-800',
        'hover:border-brass-500 dark:hover:border-brass-400/80',
        className
      )}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-brass-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-stone-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
