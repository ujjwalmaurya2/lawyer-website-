import React from 'react';
import { cn } from '../../utils/formatters';

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowColor?: 'burgundy' | 'terracotta' | 'brass' | 'navy';
  title: string;
  hindiTitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  darkSurface?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowColor = 'burgundy',
  title,
  hindiTitle,
  description,
  align = 'left',
  className = '',
  darkSurface = false,
}) => {
  const eyebrowColors = {
    burgundy: 'text-burgundy-800 dark:text-burgundy-400',
    terracotta: 'text-terracotta-600 dark:text-terracotta-400',
    brass: 'text-brass-600 dark:text-brass-400',
    navy: 'text-navy-800 dark:text-navy-300',
  };

  const lineColors = {
    burgundy: 'bg-burgundy-800 dark:bg-burgundy-400',
    terracotta: 'bg-terracotta-600 dark:bg-terracotta-400',
    brass: 'bg-brass-500 dark:bg-brass-400',
    navy: 'bg-navy-800 dark:bg-navy-400',
  };

  return (
    <div className={cn(
      'mb-10 md:mb-14',
      align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
      className
    )}>
      {eyebrow && (
        <div className={cn('flex items-center gap-3 mb-2.5', align === 'center' ? 'justify-center' : '')}>
          <div className={cn('w-5 h-[1.5px]', lineColors[eyebrowColor])} />
          <span className={cn('text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold font-mono', eyebrowColors[eyebrowColor])}>
            {eyebrow}
          </span>
        </div>
      )}
      
      <div className="space-y-1">
        <h2 className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-balance leading-[1.15]',
          darkSurface ? 'text-ivory-50' : 'text-charcoal-800 dark:text-ivory-100'
        )}>
          {title}
        </h2>
        {hindiTitle && (
          <p className={cn(
            'text-sm sm:text-base font-serif italic',
            darkSurface ? 'text-ivory-300/80' : 'text-stone-muted dark:text-stone-400'
          )}>
            {hindiTitle}
          </p>
        )}
      </div>

      {description && (
        <p className={cn(
          'mt-3.5 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed max-w-2xl text-balance',
          darkSurface ? 'text-ivory-200/90' : 'text-stone-muted dark:text-stone-400'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
