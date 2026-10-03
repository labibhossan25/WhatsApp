import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Users, Radio, Clock, Shield, Lock, Briefcase, Monitor, ArrowRight } from 'lucide-react';
import { useAppContext } from '../App';

export function PageHero({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) {
  return (
    <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-brand-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand rounded-full text-sm font-medium mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} className="group bg-white border border-border rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-text-primary hover:bg-surface-alt transition-colors list-none">
            {item.q}
            <span className="ml-4 text-text-muted group-open:rotate-45 transition-transform text-xl">+</span>
          </summary>
          <div className="px-5 pb-5 text-text-secondary leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}

export function CTA({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="py-16 lg:py-20 bg-brand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{title}</h2>
        {subtitle && <p className="mt-4 text-text-secondary">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/download" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all">
            Download Voxly <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-text-primary bg-white border border-border hover:border-brand/30 rounded-full transition-all">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: MessageCircle, title: 'Messaging', desc: 'Send text, images, voice messages, and more with ease.', to: '/features/messaging', color: 'bg-blue-50 text-blue-600' },
  { icon: Phone, title: 'Calling', desc: 'Crystal-clear voice and video calls across devices.', to: '/features/calling', color: 'bg-green-50 text-green-600' },
  { icon: Users, title: 'Groups', desc: 'Create spaces for friends, family, teams, and communities.', to: '/features/groups', color: 'bg-purple-50 text-purple-600' },
  { icon: Radio, title: 'Channels', desc: 'Follow updates from communities, creators, and organizations.', to: '/features/channels', color: 'bg-amber-50 text-amber-600' },
  { icon: Clock, title: 'Status', desc: 'Share moments that disappear after 24 hours.', to: '/features/status', color: 'bg-pink-50 text-pink-600' },
  { icon: Shield, title: 'Security', desc: 'Built with security principles to protect your account.', to: '/features/security', color: 'bg-red-50 text-red-600' },
  { icon: Lock, title: 'Privacy', desc: 'Your conversations belong to you. Always.', to: '/privacy', color: 'bg-teal-50 text-teal-600' },
  { icon: Briefcase, title: 'Business', desc: 'Tools for businesses to connect with customers.', to: '/business', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Monitor, title: 'Multi-device', desc: 'Stay connected on phone, tablet, laptop, and desktop.', to: '/download', color: 'bg-gray-50 text-gray-600' },
];

export default function FeaturesPage() {
  const { t } = useAppContext();
  return (
    <>
      <PageHero
        title="Everything you need to communicate"
        subtitle="Voxly brings together messaging, calling, groups, and more in one simple, fast, and private platform."
        badge="Features"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Link
                key={i}
                to={f.to}
                className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-brand/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand transition-colors">{f.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{f.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Start connecting today" subtitle="Download Voxly and experience communication done right." />
    </>
  );
}
