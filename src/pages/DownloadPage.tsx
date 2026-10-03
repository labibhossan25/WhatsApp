import { useState, useEffect } from 'react';
import { Smartphone, Monitor, Globe, Download, Apple, ChevronRight } from 'lucide-react';
import { PageHero } from './FeaturesPage';

function detectPlatform(): string {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  if (/android/.test(ua)) return 'android';
  if (/mac/.test(ua)) return 'macos';
  if (/win/.test(ua)) return 'windows';
  return 'unknown';
}

export default function DownloadPage() {
  const [platform, setPlatform] = useState('unknown');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const platforms = [
    {
      id: 'android',
      name: 'Android',
      icon: <Smartphone className="w-8 h-8" />,
      desc: 'Available on Google Play Store. Requires Android 5.0 or later.',
      primary: 'Google Play',
      primaryUrl: '#',
      secondary: 'Download APK',
      secondaryUrl: '#',
      color: 'bg-green-50 text-green-600 border-green-100',
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: <Apple className="w-8 h-8" />,
      desc: 'Available on the App Store. Requires iOS 14.0 or later.',
      primary: 'App Store',
      primaryUrl: '#',
      secondary: null,
      secondaryUrl: null,
      color: 'bg-gray-50 text-gray-600 border-gray-100',
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: <Monitor className="w-8 h-8" />,
      desc: 'Native desktop app for Windows 10 and later.',
      primary: 'Download for Windows',
      primaryUrl: '#',
      secondary: null,
      secondaryUrl: null,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: <Apple className="w-8 h-8" />,
      desc: 'Native desktop app for macOS 11 (Big Sur) and later.',
      primary: 'Download for Mac',
      primaryUrl: '#',
      secondary: null,
      secondaryUrl: null,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 'web',
      name: 'Web',
      icon: <Globe className="w-8 h-8" />,
      desc: 'Use Voxly directly in your browser. No installation required.',
      primary: 'Open Voxly Web',
      primaryUrl: '/login',
      secondary: null,
      secondaryUrl: null,
      color: 'bg-brand-50 text-brand border-brand-100',
    },
  ];

  const recommended = platforms.find(p => p.id === platform);

  return (
    <>
      <PageHero
        title="Download Voxly"
        subtitle="Available on all your favorite devices. Choose your platform below to get started."
        badge="Download"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {recommended && (
            <div className="mb-12 p-6 bg-brand-50 border border-brand-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-5 h-5 text-brand" />
                <span className="text-sm font-medium text-brand">Recommended for you</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Voxly for {recommended.name}</h3>
                  <p className="text-sm text-text-secondary">{recommended.desc}</p>
                </div>
                <a
                  href={recommended.primaryUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-colors whitespace-nowrap"
                >
                  {recommended.primary}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.id} className={`${p.color} border rounded-2xl p-6`}>
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary">{p.name}</h3>
                <p className="text-sm text-text-secondary mt-1 mb-6">{p.desc}</p>
                <div className="space-y-2">
                  <a
                    href={p.primaryUrl}
                    className="block w-full text-center py-2.5 text-sm font-medium bg-white hover:bg-surface-alt border border-border rounded-xl transition-colors text-text-primary"
                  >
                    {p.primary}
                  </a>
                  {p.secondary && (
                    <a
                      href={p.secondaryUrl}
                      className="block w-full text-center py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {p.secondary}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold text-text-primary mb-4">System Requirements</h2>
            <div className="max-w-2xl mx-auto text-sm text-text-secondary space-y-2">
              <p><strong>Android:</strong> Android 5.0 (Lollipop) or later</p>
              <p><strong>iOS:</strong> iOS 14.0 or later (iPhone and iPad)</p>
              <p><strong>Windows:</strong> Windows 10 or later (64-bit)</p>
              <p><strong>macOS:</strong> macOS 11 (Big Sur) or later</p>
              <p><strong>Web:</strong> Latest version of Chrome, Firefox, Safari, or Edge</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
