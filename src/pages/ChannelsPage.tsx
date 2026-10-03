import { Radio, Bell, Heart, MessageSquare } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function ChannelsPage() {
  return (
    <>
      <PageHero
        title="Stay informed with Channels"
        subtitle="Follow updates from communities, creators, and organizations. Get the information that matters to you, delivered directly."
        badge="Channels"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Broadcast to your audience</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Channels let you share updates, announcements, and content with an unlimited audience. Perfect for communities, creators, and organizations.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Radio, label: 'One-to-many broadcasting' },
                  { icon: Bell, label: 'Notification control for followers' },
                  { icon: Heart, label: 'Reaction support on posts' },
                  { icon: MessageSquare, label: 'Discussion threads where enabled' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl">
                    <item.icon className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-alt rounded-3xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center text-white font-bold">V</div>
                <div>
                  <h3 className="font-semibold text-text-primary">Voxly Updates</h3>
                  <p className="text-xs text-text-secondary">Official Channel • 12.4K followers</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-text-primary font-medium">🎉 New Feature: Custom Themes</p>
                  <p className="text-sm text-text-secondary mt-1">Make Voxly yours with custom color themes. Available now for all users.</p>
                  <div className="flex items-center gap-4 mt-3 text-text-muted text-xs">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> 234</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-text-primary font-medium">📱 Voxly is now available on Desktop</p>
                  <p className="text-sm text-text-secondary mt-1">Stay connected on your laptop and desktop with our new native apps.</p>
                  <div className="flex items-center gap-4 mt-3 text-text-muted text-xs">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> 567</span>
                    <span>1 day ago</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2.5 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-dark transition-colors">
                Follow Channel
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Frequently asked questions</h2>
          <FAQ items={[
            { q: 'What is a Channel?', a: 'A Channel is a one-to-many broadcast tool where admins share updates, and followers can read and react to posts.' },
            { q: 'Can anyone create a Channel?', a: 'Yes, any Voxly user can create a Channel and start sharing updates with their audience.' },
            { q: 'Is there a limit on followers?', a: 'Channels can have unlimited followers, making them suitable for communities and organizations of any size.' },
            { q: 'Can followers reply to Channel posts?', a: 'Channel admins can choose to enable or disable discussion threads on their posts.' },
          ]} />
        </div>
      </section>
      <CTA title="Start your Channel" subtitle="Share your voice with the world." />
    </>
  );
}
