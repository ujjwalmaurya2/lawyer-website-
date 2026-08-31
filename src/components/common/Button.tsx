import React from 'react';
import { cn } from '../../utils/formatters';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'brass' | 'navy' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  as = 'button',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-balance select-none rounded';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 uppercase tracking-widest gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 uppercase tracking-wider gap-2',
    lg: 'text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 tracking-wider gap-2.5 font-medium',
  };

  const variantStyles = {
    // Primary: Deep Burgundy with gold-burgundy glow
    primary: 'bg-burgundy-800 text-ivory-50 hover:bg-burgundy-900 active:bg-burgundy-950 dark:bg-burgundy-700 dark:hover:bg-burgundy-600 dark:text-ivory-50 border border-burgundy-700/30 shadow-burgundy-glow hover:translate-y-[-1px]',
    
    // Secondary: Soft Stone Surface
    secondary: 'bg-ivory-200 text-charcoal-800 hover:bg-ivory-300 border border-ivory-300 dark:bg-charcoal-800 dark:text-ivory-100 dark:hover:bg-charcoal-750 dark:border-stone-700',
    
    // Brass: Editorial Antique Brass
    brass: 'bg-brass-500 text-charcoal-950 hover:bg-brass-400 active:bg-brass-600 dark:bg-brass-400 dark:text-charcoal-950 dark:hover:bg-brass-300 font-semibold shadow-gold-glow hover:translate-y-[-1px] border border-transparent',
    
    // Navy: Deep Institutional Navy
    navy: 'bg-navy-900 text-ivory-50 hover:bg-navy-950 active:bg-navy-950 dark:bg-navy-800 dark:hover:bg-navy-700 border border-navy-700/50 shadow-sm hover:translate-y-[-1px]',

    // Outline: Restrained 1px editorial border with subtle burgundy hover
    outline: 'bg-transparent text-charcoal-800 border-stone-300 hover:border-burgundy-800 hover:text-burgundy-800 hover:bg-burgundy-50/50 dark:text-ivory-100 dark:border-stone-700 dark:hover:border-brass-400 dark:hover:bg-charcoal-800/40 border',
    
    // Ghost: Clean minimal hover
    ghost: 'bg-transparent text-stone-600 hover:text-burgundy-800 hover:bg-burgundy-50/40 dark:text-stone-400 dark:hover:text-ivory-100 dark:hover:bg-charcoal-800/40 border border-transparent',
    
    // WhatsApp: Restrained emerald badge
    whatsapp: 'bg-[#155E44] text-white hover:bg-[#114C37] dark:bg-[#1E3A2F] dark:text-[#55E6A5] dark:hover:bg-[#234538] border border-[#155E44] dark:border-[#2B5746] shadow-sm font-medium',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
