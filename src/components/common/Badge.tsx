import React from 'react';
import { cn } from '../../utils/formatters';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'burgundy' | 'terracotta' | 'navy' | 'sage' | 'brass' | 'stone' | 'outline' | 'success' | 'urgent' | 'demo';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'stone',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-sans uppercase tracking-widest font-medium select-none rounded';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    burgundy: 'bg-burgundy-50 text-burgundy-800 border border-burgundy-200 dark:bg-burgundy-950/70 dark:text-burgundy-300 dark:border-burgundy-700/50',
    terracotta: 'bg-terracotta-50 text-terracotta-700 border border-terracotta-200 dark:bg-terracotta-950/70 dark:text-terracotta-300 dark:border-terracotta-700/50',
    navy: 'bg-navy-50 text-navy-800 border border-navy-200 dark:bg-navy-950/70 dark:text-navy-300 dark:border-navy-700/50',
    sage: 'bg-sage-50 text-sage-800 border border-sage-200 dark:bg-sage-950/70 dark:text-sage-300 dark:border-sage-700/50',
    brass: 'bg-brass-50 text-brass-700 border border-brass-200 dark:bg-brass-400/10 dark:text-brass-300 dark:border-brass-400/30',
    stone: 'bg-ivory-200 text-stone-700 border border-ivory-300 dark:bg-charcoal-800 dark:text-stone-300 dark:border-stone-700',
    outline: 'bg-transparent text-charcoal-800 border border-ivory-400 dark:text-ivory-300 dark:border-stone-700',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800/40',
    urgent: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/40',
    demo: 'bg-amber-100/80 text-amber-800 border border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-600/40 text-[9px] font-semibold tracking-widest font-mono',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};
