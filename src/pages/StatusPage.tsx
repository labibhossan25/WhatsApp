import { Camera, Clock, Eye } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function StatusPage() {
  return (
    <>
      <PageHero
        title="Share your moments"
        subtitle="Post photos, videos, and text updates that disappear after 24 hours. Let your contacts see what you're up to."
        badge="Status"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🌅', label: 'Sunrise', color: 'from-orange-200 to-pink-200' },
                  { emoji: '☕', label: 'Morning coffee', color: 'from-amber-100 to-yellow-200' },
                  { emoji: '🎵', label: 'New playlist', color: 'from-purple-200 to-indigo-200' },
                  { emoji: '🏃', label: 'Evening run', color: 'from-green-200 to-teal-200' },
                ].map((s, i) => (
                  <div key={i} className={`bg-gradient-to-br ${s.color} rounded-2xl aspect-[3/4] flex flex-col items-center justify-center p-4`}>
                    <span className="text-4xl mb-2">{s.emoji}</span>
                    <p className="text-xs font-medium text-text-primary/70 text-center">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Moments that come and go</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Status updates are a casual, ephemeral way to share what's happening in your life. They disappear after 24 hours, so there's no pressure.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Camera, label: 'Share photos and short videos' },
                  { icon: Clock, label: 'Updates disappear after 24 hours' },
                  { icon: Eye, label: 'Control who sees your status' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl">
                    <item.icon className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Frequently asked questions</h2>
          <FAQ items={[
            { q: 'How long do Status updates last?', a: 'Status updates are visible for 24 hours after posting, then they disappear automatically.' },
            { q: 'Who can see my Status?', a: 'By default, all your contacts can see your status. You can customize this in your privacy settings.' },
            { q: 'Can I add text to my Status?', a: 'Yes, you can create text-based status updates with different backgrounds and colors.' },
            { q: 'Can I see who viewed my Status?', a: 'Yes, you can see a list of contacts who have viewed your status update.' },
          ]} />
        </div>
      </section>
      <CTA title="Share your first Status" subtitle="Download Voxly and start sharing moments." />
    </>
  );
}
