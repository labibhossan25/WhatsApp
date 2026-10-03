import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getTranslation, type Language, type TranslationKeys } from './i18n';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import MessagingPage from './pages/MessagingPage';
import CallingPage from './pages/CallingPage';
import GroupsPage from './pages/GroupsPage';
import ChannelsPage from './pages/ChannelsPage';
import StatusPage from './pages/StatusPage';
import SecurityPage from './pages/SecurityPage';
import PrivacyPage from './pages/PrivacyPage';
import BusinessPage from './pages/BusinessPage';
import DownloadPage from './pages/DownloadPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

export const AppContext = createContext<AppContextType>({
  language: 'en',
  setLanguage: () => {},
  t: getTranslation('en'),
});

export function useAppContext() {
  return useContext(AppContext);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/messaging" element={<MessagingPage />} />
          <Route path="/features/calling" element={<CallingPage />} />
          <Route path="/features/groups" element={<GroupsPage />} />
          <Route path="/features/channels" element={<ChannelsPage />} />
          <Route path="/features/status" element={<StatusPage />} />
          <Route path="/features/security" element={<SecurityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('voxly-lang');
    return (stored === 'bn' ? 'bn' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('voxly-lang', language);
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  }, [language]);

  const t = getTranslation(language);

  return (
    <AppContext.Provider value={{ language, setLanguage, t }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
