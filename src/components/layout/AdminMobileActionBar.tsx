import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  CalendarDays,
  Inbox,
} from 'lucide-react';
import { cn } from '../../utils/formatters';

export const AdminMobileActionBar: React.FC = () => {
  const location = useLocation();

  const isCurrent = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: 'Matters',
      path: '/admin/cases',
      icon: Briefcase,
      exact: false,
    },
    {
      name: 'Calendar',
      path: '/admin/calendar',
      icon: CalendarDays,
      exact: false,
    },
    {
      name: 'Leads',
      path: '/admin/leads',
      icon: Inbox,
      exact: false,
      badge: '5',
    },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 dark:bg-[#0B0D0E]/98 backdrop-blur-md border-t border-ivory-300 dark:border-stone-800 shadow-2xl px-2 py-1.5 pb-[calc(env(safe-area-inset-bottom)+0.375rem)] transition-colors"
      aria-label="Admin Mobile Navigation"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isCurrent(item.path, item.exact);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all relative min-h-[46px]',
                active
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-500 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-ivory-100'
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    'w-5 h-5 transition-transform duration-200',
                    active ? 'scale-110 text-burgundy-800 dark:text-brass-300' : 'text-stone-500 dark:text-stone-400'
                  )}
                />

                {item.badge && (
                  <span className="absolute -top-1.5 -right-2.5 px-1 min-w-[14px] h-3.5 rounded-full bg-burgundy-800 dark:bg-brass-500 text-white dark:text-charcoal-900 text-[8.5px] font-bold font-mono flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="text-[10px] font-mono tracking-wider mt-1 leading-tight">
                {item.name}
              </span>

              {/* Active Indicator Dot */}
              {active && (
                <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
