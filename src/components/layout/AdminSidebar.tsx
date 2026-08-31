import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  Users,
  Inbox,
  FileText,
  ExternalLink,
  Shield,
  Menu,
  X,
  Lock,
} from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { ThemeToggle } from '../common/ThemeToggle';
import { cn } from '../../utils/formatters';

export const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Cases / Matters', path: '/admin/cases', icon: Briefcase, color: 'text-burgundy-800 dark:text-burgundy-400' },
    { name: 'Calendar & Hearings', path: '/admin/calendar', icon: Calendar, color: 'text-navy-800 dark:text-navy-300' },
    { name: 'Consultation Leads', path: '/admin/leads', icon: Inbox, badge: '5 New', color: 'text-terracotta-700 dark:text-terracotta-400' },
    { name: 'Clients Directory', path: '/admin/clients', icon: Users, color: 'text-stone-700 dark:text-stone-300' },
    { name: 'Document Vault', path: '/admin/documents', icon: FileText, color: 'text-sage-700 dark:text-sage-400' },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between p-4 sm:p-6 bg-white dark:bg-[#08090A] border-r border-ivory-300 dark:border-stone-800 text-charcoal-800 dark:text-stone-300 transition-colors">
      <div className="space-y-5">
        
        {/* Header / Chamber Logo */}
        <div className="flex items-center justify-between pb-3.5 border-b border-ivory-300 dark:border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-burgundy-800 border-2 border-brass-500/60 flex items-center justify-center font-serif text-ivory-50 font-bold shadow-md">
              AP
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm font-semibold text-charcoal-800 dark:text-ivory-100 block">
                  {PRIMARY_ADVOCATE.name}
                </span>
                <span className="text-[9px] uppercase px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/40 rounded font-bold tracking-wider font-mono">
                  DEMO
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-burgundy-800 dark:text-brass-400 block font-mono font-bold">
                Executive Portal
              </span>
            </div>
          </div>
        </div>

        {/* Private Chamber Notice */}
        <div className="p-2.5 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 flex items-start gap-2 text-[11px] text-stone-600 dark:text-stone-400">
          <Lock className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400 shrink-0 mt-0.5" />
          <span>Restricted Chamber Interface for Advocate & Associates.</span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5 font-sans">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 px-3 block mb-2 font-mono font-bold">
            Practice Management
          </span>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path, item.exact);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-medium transition-all group font-mono',
                  active
                    ? 'bg-burgundy-800 text-ivory-50 font-bold shadow-md'
                    : 'text-stone-700 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-ivory-100 hover:bg-ivory-150 dark:hover:bg-charcoal-850'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'w-4 h-4 transition-colors',
                      active ? 'text-brass-300' : 'text-stone-500 dark:text-stone-400 group-hover:text-burgundy-800'
                    )}
                  />
                  <span>{item.name}</span>
                </div>

                {item.badge && (
                  <span className={cn(
                    'text-[9px] px-1.5 py-0.5 rounded font-bold',
                    active ? 'bg-burgundy-950 text-brass-300 border border-burgundy-700' : 'bg-terracotta-100 text-terracotta-800 dark:bg-terracotta-950/60 dark:text-terracotta-300'
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions: Return to Public Site, Theme Toggle & Status */}
      <div className="pt-4 border-t border-ivory-300 dark:border-stone-800 space-y-3">
        <ThemeToggle variant="expanded" />

        <Link
          to="/"
          className="flex items-center justify-between px-3 py-2 rounded-lg bg-ivory-150 dark:bg-charcoal-900 border border-ivory-300 dark:border-stone-800 text-xs text-charcoal-800 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-brass-300 transition-all font-medium font-mono"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
            View Public Site
          </span>
          <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-bold">Live</span>
        </Link>

        <div className="text-[10px] text-stone-500 dark:text-stone-400 px-3 flex items-center justify-between font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Chamber 62 Connected
          </span>
          <span className="text-[9px]">v2.6-editorial</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header Bar for Admin */}
      <div className="lg:hidden bg-white dark:bg-charcoal-950 border-b border-ivory-300 dark:border-stone-800 p-3.5 flex items-center justify-between sticky top-0 z-40 transition-colors shadow-sm">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
          <span className="font-serif text-sm font-semibold text-charcoal-800 dark:text-ivory-100">Chamber Admin</span>
          <span className="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded border border-amber-300 dark:border-amber-600/40 font-mono font-bold">
            DEMO
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle variant="compact" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 text-charcoal-800 dark:text-stone-300"
            aria-label="Toggle admin menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex">
          <div className="w-72 max-w-[85vw] h-full shadow-2xl relative">
            {navContent}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 h-screen sticky top-0 shrink-0">
        {navContent}
      </aside>
    </>
  );
};
