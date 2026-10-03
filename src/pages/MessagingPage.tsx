import { MessageCircle, Image, Mic, Smile, Paperclip, Send, CheckCircle2 } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function MessagingPage() {
  return (
    <>
      <PageHero
        title="Conversations that feel natural"
        subtitle="Send messages, share moments, and stay in touch — all in one simple, fast experience designed around how people actually communicate."
        badge="Messaging"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Express yourself fully</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Text messages, photos, videos, voice notes, documents, and more. Share anything with anyone, and see it delivered instantly.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: MessageCircle, label: 'Rich text messages with formatting' },
                  { icon: Image, label: 'High-quality photos and videos' },
                  { icon: Mic, label: 'Voice messages for when typing isn\'t enough' },
                  { icon: Smile, label: 'Emoji reactions to express how you feel' },
                  { icon: Paperclip, label: 'Share documents and files easily' },
                  { icon: Send, label: 'Instant delivery with read receipts' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl">
                    <item.icon className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-alt rounded-3xl p-6 border border-border">
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[240px] shadow-sm">
                    <p className="text-sm text-text-primary">Check out this photo from the trip! 📸</p>
                    <div className="mt-2 w-full h-32 bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏔️</span>
                    </div>
                    <p className="text-[10px] text-text-muted mt-1">9:41 AM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand rounded-2xl rounded-tr-sm px-4 py-3 max-w-[200px]">
                    <p className="text-sm text-white">Wow, that's beautiful! 😍</p>
                    <p className="text-[10px] text-white/70 mt-1 flex items-center gap-1 justify-end">9:42 AM <CheckCircle2 className="w-3 h-3" /></p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[200px] shadow-sm">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-brand" />
                      <div className="flex-1 h-6 bg-brand-50 rounded-full flex items-center px-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 12 }).map((_, j) => (
                            <div key={j} className="w-0.5 bg-brand rounded-full" style={{ height: `${Math.random() * 16 + 4}px` }}></div>
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted">0:12</span>
                    </div>
                    <p className="text-[10px] text-text-muted mt-1">9:43 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Frequently asked questions</h2>
          <FAQ items={[
            { q: 'What types of messages can I send?', a: 'You can send text messages, photos, videos, voice messages, documents, contacts, locations, and more. Messages support rich formatting and emoji reactions.' },
            { q: 'Can I edit or delete messages?', a: 'Yes, you can edit sent messages within a certain time window, and delete messages for everyone in the conversation.' },
            { q: 'Are messages delivered instantly?', a: 'Messages are delivered as quickly as your network allows. Voxly shows delivery status so you know when your message has been sent, delivered, and read.' },
            { q: 'Can I send messages to multiple people?', a: 'Yes, you can create group conversations or broadcast lists to communicate with multiple people at once.' },
          ]} />
        </div>
      </section>
      <CTA title="Start messaging with Voxly" subtitle="Download now and experience messaging done right." />
    </>
  );
}
