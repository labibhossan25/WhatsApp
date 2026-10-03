import { useState } from 'react';
import { Search, ChevronDown, MessageCircle, Phone, Users, Shield, Briefcase, HelpCircle, Settings, AlertTriangle } from 'lucide-react';
import { PageHero } from './FeaturesPage';

const categories = [
  { icon: HelpCircle, title: 'Getting Started', desc: 'New to Voxly? Start here.' },
  { icon: Settings, title: 'Account', desc: 'Manage your profile and settings.' },
  { icon: MessageCircle, title: 'Messaging', desc: 'Send messages, share media, and more.' },
  { icon: Phone, title: 'Calling', desc: 'Voice and video call help.' },
  { icon: Users, title: 'Groups', desc: 'Create and manage group conversations.' },
  { icon: Shield, title: 'Privacy', desc: 'Control your privacy settings.' },
  { icon: AlertTriangle, title: 'Security', desc: 'Protect your account.' },
  { icon: Briefcase, title: 'Business', desc: 'Voxly Business features.' },
  { icon: HelpCircle, title: 'Troubleshooting', desc: 'Fix common issues.' },
];

const faqs = [
  { q: 'How do I create a Voxly account?', a: 'Download Voxly from your app store or visit voxly.app/download. Enter your phone number, verify it with the code sent to you, and set up your profile.' },
  { q: 'How do I change my phone number?', a: 'Go to Settings → Account → Change Number. You\'ll need access to both your old and new phone numbers to complete the change.' },
  { q: 'How do I enable two-step verification?', a: 'Go to Settings → Account → Two-step verification. Choose your preferred method (SMS or authenticator app) and follow the setup instructions.' },
  { q: 'Can I use Voxly on multiple devices?', a: 'Yes, Voxly works on your phone, tablet, laptop, and desktop. Your conversations sync across all linked devices.' },
  { q: 'How do I report a problem?', a: 'Go to Settings → Help → Contact Us, or visit our Contact page. You can also report specific messages or contacts directly in the conversation.' },
  { q: 'How do I delete my account?', a: 'Go to Settings → Account → Delete Account. Please note that this action is permanent and will remove all your data.' },
  { q: 'How do I block someone?', a: 'Open the contact\'s profile, tap the menu (⋯), and select "Block". Blocked contacts cannot message or call you.' },
  { q: 'Why am I not receiving notifications?', a: 'Check your device notification settings and ensure Voxly has permission to send notifications. Also check in-app notification settings under Settings → Notifications.' },
];

export default function HelpPage() {
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Help Center"
        subtitle="Find answers to common questions, learn how to use Voxly, and get support."
        badge="Help"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search for help..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-border rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand shadow-sm"
              />
            </div>
          </div>

          {/* Categories */}
          {!search && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {categories.map((cat, i) => (
                <button key={i} className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl hover:shadow-md hover:border-brand/20 transition-all text-left">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cat.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary text-sm">{cat.title}</h3>
                    <p className="text-xs text-text-secondary">{cat.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-6">
              {search ? `Results for "${search}"` : 'Frequently Asked Questions'}
            </h2>
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-surface-alt rounded-2xl">
                <p className="text-text-secondary">No results found. Try a different search term.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-alt transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-medium text-text-primary text-sm pr-4">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-text-secondary leading-relaxed animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
