import React from 'react';
import { cn } from '../../utils/formatters';

interface SectionHeaderProps {
  icon?: React.ReactNode;
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
  icon,
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
    terracotta: 'text-terracotta-700 dark:text-terracotta-400',
    brass: 'text-brass-700 dark:text-brass-400',
    navy: 'text-navy-800 dark:text-navy-300',
  };

  const lineColors = {
    burgundy: 'bg-burgundy-800 dark:bg-burgundy-400',
    terracotta: 'bg-terracotta-600 dark:bg-terracotta-400',
    brass: 'bg-brass-500 dark:bg-brass-400',
    navy: 'bg-navy-800 dark:bg-navy-400',
  };

  const iconBgColors = {
    burgundy: 'bg-burgundy-100 dark:bg-burgundy-950/70 text-burgundy-800 dark:text-burgundy-300 border-burgundy-300 dark:border-burgundy-800/60',
    terracotta: 'bg-terracotta-100 dark:bg-terracotta-950/70 text-terracotta-800 dark:text-terracotta-300 border-terracotta-300 dark:border-terracotta-800/60',
    brass: 'bg-brass-100 dark:bg-brass-950/70 text-brass-800 dark:text-brass-300 border-brass-300 dark:border-brass-800/60',
    navy: 'bg-navy-100 dark:bg-navy-950/70 text-navy-800 dark:text-navy-300 border-navy-300 dark:border-navy-800/60',
  };

  return (
    <div className={cn(
      'mb-10 md:mb-14',
      align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
      className
    )}>
      {/* Eyebrow with Optional Icon */}
      {eyebrow && (
        <div className={cn('flex items-center gap-2.5 mb-2.5', align === 'center' ? 'justify-center' : '')}>
          {icon ? (
            <div className={cn('w-6 h-6 rounded-md border flex items-center justify-center p-1 shrink-0', iconBgColors[eyebrowColor])}>
              {icon}
            </div>
          ) : (
            <div className={cn('w-5 h-[1.5px]', lineColors[eyebrowColor])} />
          )}
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
            darkSurface ? 'text-ivory-300/80' : 'text-stone-600 dark:text-stone-400'
          )}>
            {hindiTitle}
          </p>
        )}
      </div>

      {description && (
        <p className={cn(
          'mt-3.5 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed max-w-2xl text-balance',
          darkSurface ? 'text-ivory-200/90' : 'text-stone-600 dark:text-stone-400'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
