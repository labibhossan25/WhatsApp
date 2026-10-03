import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useAppContext } from '../App';
import { getAvailableLanguages, type Language } from '../i18n';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, language, setLanguage } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/features', label: t.nav.features },
    { to: '/features/calling', label: t.nav.calling },
    { to: '/features/messaging', label: t.nav.messaging },
    { to: '/features/groups', label: t.nav.groups },
    { to: '/features/security', label: t.nav.security },
    { to: '/business', label: t.nav.business },
  ];

  const mobileLinks = [
    ...navLinks,
    { to: '/privacy', label: t.nav.privacy },
    { to: '/help', label: t.nav.help },
    { to: '/download', label: t.nav.download },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16 lg:h-18'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="Voxly Home">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-3l-3 3v-3H8c-2.2 0-4-1.8-4-4V9z" fill="white"/>
                  <circle cx="10" cy="11" r="1.2" fill="#0d9488"/>
                  <circle cx="14" cy="11" r="1.2" fill="#0d9488"/>
                  <circle cx="12" cy="11" r="1.2" fill="#0d9488"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-text-primary">Voxly</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'text-brand bg-brand-50'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-alt'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-alt transition-colors"
                  aria-label="Change language"
                  aria-expanded={isLangOpen}
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase text-xs font-medium">{language}</span>
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-lg py-1 min-w-[140px] animate-fade-in">
                    {getAvailableLanguages().map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === lang.code ? 'text-brand bg-brand-50 font-medium' : 'text-text-primary hover:bg-surface-alt'
                        }`}
                      >
                        {lang.nativeName}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/login"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {t.nav.login}
              </Link>
              <Link
                to="/download"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-dark rounded-full transition-colors"
              >
                {t.nav.download}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-alt transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-alt transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    location.pathname === link.to
                      ? 'text-brand bg-brand-50'
                      : 'text-text-primary hover:bg-surface-alt'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border space-y-2">
              <div className="flex gap-2 mb-3">
                {getAvailableLanguages().map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                      language === lang.code ? 'text-white bg-brand' : 'text-text-secondary bg-surface-alt hover:bg-border'
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
              <Link to="/login" className="block w-full text-center py-3 text-base font-medium text-text-primary border border-border rounded-xl hover:bg-surface-alt transition-colors">
                {t.nav.login}
              </Link>
              <Link to="/download" className="block w-full text-center py-3 text-base font-medium text-white bg-brand hover:bg-brand-dark rounded-xl transition-colors">
                {t.nav.download}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  const { t, language, setLanguage } = useAppContext();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const columns = [
    {
      title: t.footer.product,
      links: [
        { to: '/features', label: t.nav.features },
        { to: '/features/messaging', label: t.nav.messaging },
        { to: '/features/calling', label: t.nav.calling },
        { to: '/features/groups', label: t.nav.groups },
        { to: '/features/channels', label: 'Channels' },
        { to: '/features/status', label: 'Status' },
        { to: '/features/security', label: t.footer.security },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { to: '/about', label: t.footer.about },
        { to: '/blog', label: t.footer.blog },
        { to: '/about', label: t.footer.careers },
        { to: '/contact', label: t.footer.contact },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { to: '/help', label: t.footer.helpCenter },
        { to: '/download', label: t.nav.download },
        { to: '/privacy', label: t.footer.privacyPolicy },
        { to: '/features/security', label: t.footer.security },
      ],
    },
    {
      title: t.nav.business,
      links: [
        { to: '/business', label: t.nav.business },
        { to: '/business', label: t.footer.solutions },
        { to: '/contact', label: t.footer.contactSales },
      ],
    },
  ];

  return (
    <footer className="bg-text-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 9c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-3l-3 3v-3H8c-2.2 0-4-1.8-4-4V9z" fill="white"/>
              </svg>
            </div>
            <span className="text-sm text-white/60">{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-white/60 hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
            <Link to="/privacy" className="text-xs text-white/60 hover:text-white transition-colors">{t.footer.terms}</Link>
            <Link to="/privacy" className="text-xs text-white/60 hover:text-white transition-colors">{t.footer.cookiePolicy}</Link>
            <Link to="/help" className="text-xs text-white/60 hover:text-white transition-colors">{t.footer.accessibility}</Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-white/60 hover:text-white border border-white/20 rounded-lg transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'English' : 'বাংলা'}
            </button>
            {isLangOpen && (
              <div className="absolute right-0 bottom-full mb-2 bg-text-primary border border-white/20 rounded-lg py-1 min-w-[120px] animate-fade-in">
                {getAvailableLanguages().map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                      language === lang.code ? 'text-brand font-medium' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
