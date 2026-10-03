import { Users, Pin, Image, AtSign } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function GroupsPage() {
  return (
    <>
      <PageHero
        title="Bring everyone together"
        subtitle="Create spaces for your friends, family, teams, and communities. Share ideas, plan events, and stay connected as a group."
        badge="Groups"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Groups that feel like home</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Whether it's planning a weekend trip, coordinating a project, or keeping the family connected — Voxly groups make it easy to communicate together.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Users, label: 'Up to 1,024 members per group' },
                  { icon: Pin, label: 'Pin important messages for everyone' },
                  { icon: Image, label: 'Shared media gallery' },
                  { icon: AtSign, label: 'Mention specific members' },
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
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold">🎉</div>
                <div>
                  <h3 className="font-semibold text-text-primary">Weekend Plans</h3>
                  <p className="text-xs text-text-secondary">8 members • 3 online</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">S</div>
                  <div>
                    <p className="text-xs font-medium text-text-primary">Sarah</p>
                    <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 mt-1 shadow-sm">
                      <p className="text-sm text-text-primary">Who's free Saturday? 🏖️</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">M</div>
                  <div>
                    <p className="text-xs font-medium text-text-primary">Mike</p>
                    <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 mt-1 shadow-sm">
                      <p className="text-sm text-text-primary">I'm in! Beach day? 🌊</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">L</div>
                  <div>
                    <p className="text-xs font-medium text-text-primary">Lisa</p>
                    <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 mt-1 shadow-sm">
                      <p className="text-sm text-text-primary">Count me in! I'll bring snacks 🍕</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['bg-green-500', 'bg-yellow-500', 'bg-red-500'].map((c, i) => (
                    <div key={i} className={`w-6 h-6 ${c} rounded-full border-2 border-surface-alt flex items-center justify-center text-white text-[10px] font-bold`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-text-muted">3 members are typing...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Frequently asked questions</h2>
          <FAQ items={[
            { q: 'How many people can be in a group?', a: 'Voxly groups support up to 1,024 members, making them suitable for everything from small teams to large communities.' },
            { q: 'Can I create multiple groups?', a: 'Yes, you can create as many groups as you need for different purposes — work, family, friends, hobbies, and more.' },
            { q: 'Can I control who joins my group?', a: 'Group admins can approve new members, set group descriptions, and manage permissions to keep the group safe and relevant.' },
            { q: 'Can I share files in groups?', a: 'Yes, group members can share photos, videos, documents, and other files. All shared media is accessible in the group\'s media gallery.' },
          ]} />
        </div>
      </section>
      <CTA title="Create your first group" subtitle="Download Voxly and bring your people together." />
    </>
  );
}
