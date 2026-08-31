import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { AdminSidebar } from './components/layout/AdminSidebar';
import { BrandReveal } from './components/common/BrandReveal';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { PracticeAreasPage } from './pages/public/PracticeAreasPage';
import { PracticeAreaDetailPage } from './pages/public/PracticeAreaDetailPage';
import { MattersPage } from './pages/public/MattersPage';
import { InsightsPage } from './pages/public/InsightsPage';
import { InsightDetailPage } from './pages/public/InsightDetailPage';
import { ConsultationPage } from './pages/public/ConsultationPage';
import { ContactPage } from './pages/public/ContactPage';
import { NotFoundPage } from './pages/public/NotFoundPage';

// Admin Portal Pages
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminCasesPage } from './pages/admin/AdminCasesPage';
import { AdminCaseDetailPage } from './pages/admin/AdminCaseDetailPage';
import { AdminCalendarPage } from './pages/admin/AdminCalendarPage';
import { AdminLeadsPage } from './pages/admin/AdminLeadsPage';
import { AdminClientsPage } from './pages/admin/AdminClientsPage';
import { AdminDocumentsPage } from './pages/admin/AdminDocumentsPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for Public Client-Facing Website
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 dark:bg-[#0B0D0E] dark:text-ivory-100 flex flex-col font-sans transition-colors duration-200 selection:bg-brass-500/20 selection:text-brass-800 dark:selection:text-brass-300">
      <BrandReveal />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

// Layout for Super Admin Chamber Prototype
const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 dark:bg-[#08090A] dark:text-stone-300 flex flex-col lg:flex-row font-sans transition-colors duration-200 selection:bg-brass-500/20 selection:text-brass-800 dark:selection:text-brass-300">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Legal Practice Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />
            <Route path="/matters" element={<MattersPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Chamber Super Admin Prototype Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="cases" element={<AdminCasesPage />} />
            <Route path="cases/:id" element={<AdminCaseDetailPage />} />
            <Route path="calendar" element={<AdminCalendarPage />} />
            <Route path="leads" element={<AdminLeadsPage />} />
            <Route path="clients" element={<AdminClientsPage />} />
            <Route path="documents" element={<AdminDocumentsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
