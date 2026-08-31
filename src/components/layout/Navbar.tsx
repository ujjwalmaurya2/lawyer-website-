import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  House,
  Briefcase,
  User,
  Users,
  Building,
  Landmark,
  MapPin,
  FolderOpen,
  BookOpen,
  Phone,
  ArrowUpRight,
  Shield,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutExpanded(false);
  }, [location.pathname]);

  // Click outside listener for About dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const aboutSubLinks = [
    { name: 'The Advocate', path: '/about', icon: User, desc: 'Profile & Philosophy' },
    { name: 'Associated Advocates', path: '/about#associates', icon: Users, desc: 'Chambers Team' },
    { name: 'Chamber 62', path: '/about#chamber', icon: Building, desc: 'New Building Complex' },
    { name: 'High Court', path: '/about#high-court', icon: Landmark, desc: 'Seat of Allahabad HC' },
    { name: 'Chamber Location', path: '/contact', icon: MapPin, desc: 'Directions & Sittings' },
  ];

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F2ECE1]/95 dark:bg-charcoal-950/95 backdrop-blur-md border-b border-brass-500/30 py-2.5 sm:py-3 shadow-md'
          : 'bg-[#F4EFE6] dark:bg-[#0B0D0E]/95 border-b border-brass-500/25 py-3 sm:py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Advocate Monogram & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group" aria-label="Advocate Ashutosh Pandey Homepage">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-2 border-brass-500/70 dark:border-brass-400/50 bg-burgundy-800 dark:bg-charcoal-850 flex items-center justify-center font-serif text-ivory-50 dark:text-brass-400 font-bold text-base sm:text-lg group-hover:border-burgundy-900 transition-colors shadow-sm">
              AP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base md:text-lg tracking-tight text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors">
                ASHUTOSH PANDEY
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono tracking-[0.18em] text-burgundy-800 dark:text-brass-400 uppercase font-bold">
                Advocate · High Court Allahabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* 01. Home with House Icon */}
            <Link
              to="/"
              className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1.5 font-mono font-medium relative ${
                isCurrent('/')
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
              }`}
            >
              <House className="w-3.5 h-3.5" />
              <span>Home</span>
              {isCurrent('/') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>

            {/* 02. Practice Areas */}
            <Link
              to="/practice-areas"
              className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1.5 font-mono font-medium relative ${
                isCurrent('/practice-areas')
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Practice</span>
              {isCurrent('/practice-areas') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>

            {/* 03. About with Premium Dropdown Mega-Menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1 font-mono font-medium relative cursor-pointer ${
                  isCurrent('/about')
                    ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <User className="w-3.5 h-3.5" />
                <span>About</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                {isCurrent('/about') && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
                )}
              </button>

              {/* Premium Mini Mega-Menu Dropdown Surface */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] rounded-xl bg-ivory-50 dark:bg-charcoal-900 border-2 border-brass-500/40 p-4 shadow-2xl animate-fade-in z-50 space-y-3">
                  <div className="flex items-center justify-between border-b border-ivory-300 dark:border-stone-800 pb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                      ABOUT THE CHAMBERS
                    </span>
                    <span className="text-[9px] font-mono text-stone-500 dark:text-stone-400">CHAMBER 62</span>
                  </div>

                  {/* Links Grid */}
                  <div className="space-y-1">
                    {aboutSubLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setAboutDropdownOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-burgundy-800 hover:text-ivory-50 dark:hover:bg-burgundy-900 text-stone-800 dark:text-stone-200 group transition-colors"
                        >
                          <div className="w-7 h-7 rounded-md bg-ivory-200 dark:bg-charcoal-800 border border-ivory-300 dark:border-stone-700 flex items-center justify-center text-burgundy-800 dark:text-brass-400 group-hover:bg-burgundy-950 group-hover:text-brass-300 shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-serif font-medium block leading-tight">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-stone-500 dark:text-stone-400 group-hover:text-ivory-200/90 font-mono">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Motto Footer */}
                  <div className="pt-2 border-t border-brass-500/30 flex items-center justify-between text-[11px] text-burgundy-800 dark:text-brass-300 font-serif italic">
                    <span>“न्याय ममः धर्म”</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500 dark:text-stone-400 font-normal">
                      Justice is My Duty
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 04. Matters */}
            <Link
              to="/matters"
              className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1.5 font-mono font-medium relative ${
                isCurrent('/matters')
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Matters</span>
              {isCurrent('/matters') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>

            {/* 05. Insights */}
            <Link
              to="/insights"
              className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1.5 font-mono font-medium relative ${
                isCurrent('/insights')
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Insights</span>
              {isCurrent('/insights') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>

            {/* 06. Contact */}
            <Link
              to="/contact"
              className={`text-xs uppercase tracking-[0.16em] transition-all py-1 px-1.5 flex items-center gap-1.5 font-mono font-medium relative ${
                isCurrent('/contact')
                  ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
              {isCurrent('/contact') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
              )}
            </Link>

            {/* Admin Portal Link */}
            <Link
              to="/admin"
              className="text-[11px] uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-burgundy-800 dark:hover:text-brass-400 transition-colors flex items-center gap-1 px-2.5 py-1 rounded border border-ivory-300 dark:border-stone-800 bg-white/70 dark:bg-charcoal-850/60 font-mono font-semibold"
              title="Chamber Super Admin Prototype"
            >
              <Shield className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
              <span>Admin</span>
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle variant="compact" />

            <a
              href={`tel:${PRIMARY_ADVOCATE.phone}`}
              className="text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-brass-300 p-2 transition-colors"
              title="Call Chamber"
              aria-label="Call Advocate Chamber"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Button
              variant="primary"
              size="sm"
              as="a"
              href="/consultation"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="font-semibold"
            >
              Consultation
            </Button>
          </div>

          {/* Mobile Actions: Theme + Quick Consult + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant="compact" />

            <Link
              to="/consultation"
              className="text-[10px] uppercase tracking-wider px-2.5 py-1.5 bg-burgundy-800 text-white font-bold rounded shadow-sm font-mono"
            >
              Consult
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-ivory-300 dark:border-stone-800 text-charcoal-800 dark:text-stone-300 hover:text-black dark:hover:text-ivory-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50 dark:bg-charcoal-950 border-b-2 border-brass-500/40 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-fade-in text-charcoal-800 dark:text-ivory-100">
          <div className="flex flex-col space-y-1">
            
            {/* 01 Home */}
            <Link
              to="/"
              className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                isCurrent('/') ? 'text-burgundy-800 dark:text-brass-400 font-bold' : 'text-stone-800 dark:text-stone-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <House className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Home
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </Link>

            {/* 02 Practice */}
            <Link
              to="/practice-areas"
              className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                isCurrent('/practice-areas') ? 'text-burgundy-800 dark:text-brass-400 font-bold' : 'text-stone-800 dark:text-stone-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Practice Areas
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </Link>

            {/* 03 About Expandable Accordion on Mobile */}
            <div className="border-b border-ivory-200 dark:border-stone-900 py-1">
              <button
                onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                className="w-full text-xs uppercase tracking-widest py-2 transition-colors flex items-center justify-between font-mono font-medium text-stone-800 dark:text-stone-300"
              >
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                  About Chambers
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutExpanded ? 'rotate-180 text-burgundy-800' : ''}`} />
              </button>

              {mobileAboutExpanded && (
                <div className="pl-6 pb-2 space-y-1.5 animate-fade-in">
                  {aboutSubLinks.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-burgundy-800 font-serif"
                      >
                        <SubIcon className="w-3.5 h-3.5 text-brass-600" />
                        <span>{sub.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 04 Matters */}
            <Link
              to="/matters"
              className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                isCurrent('/matters') ? 'text-burgundy-800 dark:text-brass-400 font-bold' : 'text-stone-800 dark:text-stone-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Selected Matters
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </Link>

            {/* 05 Insights */}
            <Link
              to="/insights"
              className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                isCurrent('/insights') ? 'text-burgundy-800 dark:text-brass-400 font-bold' : 'text-stone-800 dark:text-stone-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Legal Insights
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </Link>

            {/* 06 Contact */}
            <Link
              to="/contact"
              className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                isCurrent('/contact') ? 'text-burgundy-800 dark:text-brass-400 font-bold' : 'text-stone-800 dark:text-stone-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Chamber Coordinates
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </Link>

            {/* Admin Prototype */}
            <Link
              to="/admin"
              className="text-xs uppercase tracking-widest py-2.5 text-stone-700 dark:text-stone-400 flex items-center justify-between border-b border-ivory-200 dark:border-stone-900 font-mono font-semibold"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-burgundy-800 dark:text-brass-400" />
                Admin Portal Prototype
              </span>
              <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">DEMO</span>
            </Link>
          </div>

          <div className="pt-1">
            <ThemeToggle variant="expanded" />
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${PRIMARY_ADVOCATE.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-white dark:bg-charcoal-800 text-xs text-charcoal-800 dark:text-ivory-100 border border-ivory-300 dark:border-stone-700 font-medium uppercase tracking-wider shadow-sm font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
              Call Chamber
            </a>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-burgundy-800 text-white border border-burgundy-700 text-xs font-bold uppercase tracking-wider shadow-sm font-mono"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
