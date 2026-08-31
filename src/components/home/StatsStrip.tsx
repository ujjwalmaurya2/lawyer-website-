import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar, MessageSquare, Clock, ShieldAlert } from 'lucide-react';
import { Badge } from '../common/Badge';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  hindiLabel: string;
  description: string;
  color: 'burgundy' | 'navy' | 'terracotta' | 'brass';
}

export const StatsStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      id: 'active-matters',
      icon: <Briefcase className="w-4 h-4" />,
      value: 24,
      label: 'Active High Court Matters',
      hindiLabel: 'सक्रिय विधिक प्रकरण',
      description: 'Writ petitions, appeals & bail applications under active prosecution.',
      color: 'burgundy',
    },
    {
      id: 'upcoming-hearings',
      icon: <Calendar className="w-4 h-4" />,
      value: 8,
      suffix: '',
      label: 'Scheduled Bench Hearings',
      hindiLabel: 'आगामी पीठ सुनवाई',
      description: 'Listed matters before various Division and Single Benches this cycle.',
      color: 'navy',
    },
    {
      id: 'consultation-requests',
      icon: <MessageSquare className="w-4 h-4" />,
      value: 17,
      label: 'Consultation Inquiries',
      hindiLabel: 'परामर्श अनुरोध',
      description: 'Intake briefs and WhatsApp assessments processed this month.',
      color: 'terracotta',
    },
    {
      id: 'matters-progress',
      icon: <Clock className="w-4 h-4" />,
      value: 12,
      label: 'Registry Proceedings',
      hindiLabel: 'निस्तारण प्रक्रियाधीन',
      description: 'Counter-affidavits, rejoinders, and compliance pleadings drafted.',
      color: 'brass',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 bg-ivory-150/80 dark:bg-charcoal-900 border-b border-ivory-300 dark:border-stone-800 transition-colors relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Ribbon with DEMO DATA Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-ivory-300 dark:border-stone-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
              PRACTICE VELOCITY & CHAMBER PULSE
            </span>
            <Badge variant="demo">DEMO DATA</Badge>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 font-mono">
            <ShieldAlert className="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400" />
            <span>Illustrative metrics for digital practice preview</span>
          </div>
        </div>

        {/* 4-Item Scannable Editorial Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="p-4 sm:p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-800 space-y-2.5 relative group hover:border-brass-400/60 transition-all shadow-soft-light dark:shadow-none"
            >
              {/* Top Row: Icon + Indicator */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center p-1.5 border transition-colors ${
                    stat.color === 'burgundy'
                      ? 'bg-burgundy-100 dark:bg-burgundy-950/80 text-burgundy-800 dark:text-burgundy-300 border-burgundy-300 dark:border-burgundy-800/60 group-hover:border-burgundy-800'
                      : stat.color === 'navy'
                      ? 'bg-navy-100 dark:bg-navy-950/80 text-navy-800 dark:text-navy-300 border-navy-300 dark:border-navy-800/60 group-hover:border-navy-700'
                      : stat.color === 'terracotta'
                      ? 'bg-terracotta-100 dark:bg-terracotta-950/80 text-terracotta-800 dark:text-terracotta-300 border-terracotta-300 dark:border-terracotta-800/60 group-hover:border-terracotta-700'
                      : 'bg-brass-100 dark:bg-brass-950/80 text-brass-800 dark:text-brass-300 border-brass-300 dark:border-brass-800/60 group-hover:border-brass-500'
                  }`}
                >
                  {stat.icon}
                </div>

                <span className="font-mono text-[11px] font-bold text-stone-400 dark:text-stone-500">
                  0{idx + 1}
                </span>
              </div>

              {/* Number Count */}
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-800 dark:text-ivory-100 tracking-tight">
                  <AnimatedCounter value={stat.value} isVisible={isVisible} />
                  {stat.suffix}
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-800 dark:text-ivory-100 font-mono">
                  {stat.label}
                </h4>
                <p className="text-[10px] font-serif italic text-stone-500 dark:text-stone-400">
                  {stat.hindiLabel}
                </p>
              </div>

              {/* Description */}
              <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans font-light leading-relaxed pt-2 border-t border-ivory-200 dark:border-stone-800">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Count-up Animated Component
const AnimatedCounter: React.FC<{ value: number; isVisible: boolean }> = ({ value, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 800;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <>{count < 10 && count > 0 ? `0${count}` : count === 0 && isVisible ? `0${value}` : count}</>;
};
