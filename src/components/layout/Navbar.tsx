import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight, Shield } from 'lucide-react';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { getDirectWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Matters', path: '/matters' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
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
          ? 'bg-ivory-50/95 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-ivory-300 dark:border-stone-800 py-3 shadow-soft-light dark:shadow-editorial'
          : 'bg-ivory-100/90 dark:bg-transparent border-b border-ivory-300/80 dark:border-stone-800/30 py-3.5 sm:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Advocate Monogram & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-2 border-brass-500/60 dark:border-brass-400/40 bg-burgundy-800 dark:bg-charcoal-850 flex items-center justify-center font-serif text-ivory-50 dark:text-brass-400 font-bold text-base sm:text-lg group-hover:border-burgundy-800 transition-colors shadow-sm">
              AP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base md:text-lg tracking-tight text-charcoal-800 dark:text-ivory-100 font-normal group-hover:text-burgundy-800 dark:group-hover:text-brass-300 transition-colors">
                ASHUTOSH PANDEY
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono tracking-[0.18em] text-burgundy-800/80 dark:text-brass-400 uppercase font-semibold">
                Advocate · High Court Allahabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.18em] transition-colors py-1 relative font-mono font-medium ${
                  isCurrent(link.path)
                    ? 'text-burgundy-800 dark:text-brass-300 font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-ivory-100'
                }`}
              >
                {link.name}
                {isCurrent(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy-800 dark:bg-brass-400" />
                )}
              </Link>
            ))}

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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle variant="compact" />

            <a
              href={`tel:${PRIMARY_ADVOCATE.phone}`}
              className="text-stone-700 dark:text-stone-300 hover:text-burgundy-800 dark:hover:text-brass-300 p-2 transition-colors"
              title="Call Chamber"
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

          {/* Mobile Menu Trigger + Mobile Quick CTA */}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-300 dark:border-stone-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-fade-in text-charcoal-800 dark:text-ivory-100">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest py-2.5 border-b border-ivory-200 dark:border-stone-900 transition-colors flex items-center justify-between font-mono font-medium ${
                  isCurrent(link.path)
                    ? 'text-burgundy-800 dark:text-brass-400 font-bold'
                    : 'text-stone-800 dark:text-stone-300'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            ))}

            <Link
              to="/admin"
              className="text-xs uppercase tracking-widest py-2.5 text-stone-700 dark:text-stone-400 flex items-center justify-between border-b border-ivory-200 dark:border-stone-900 font-mono font-semibold"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-burgundy-800 dark:text-brass-400" />
                Admin Portal Prototype
              </span>
              <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">DEMO</span>
            </Link>
          </div>

          {/* Theme switcher expanded inside mobile drawer */}
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
