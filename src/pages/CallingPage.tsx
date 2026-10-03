import { Phone, Video, Mic, MicOff, CameraOff, Volume2 } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function CallingPage() {
  return (
    <>
      <PageHero
        title="Talk like you're in the same room"
        subtitle="Crystal-clear voice and video calls that make distance feel smaller. Connect face-to-face, anytime, on any device."
        badge="Calling"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-text-primary rounded-3xl p-8 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-white text-lg font-medium">Sarah</p>
                  <p className="text-white/50 text-sm mt-1">Video Call • 12:34</p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-10">
                  <button className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"><Mic className="w-5 h-5" /></button>
                  <button className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"><Video className="w-5 h-5" /></button>
                  <button className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"><Volume2 className="w-5 h-5" /></button>
                  <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white"><Phone className="w-6 h-6 rotate-[135deg]" /></button>
                </div>
                <div className="absolute top-4 right-4 w-20 h-28 bg-brand/20 rounded-xl backdrop-blur-sm border border-white/10 z-10 flex items-center justify-center">
                  <span className="text-xs text-white/60">You</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">High-quality calls, anywhere</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Whether it's a quick voice call or a video chat with the whole family, Voxly delivers clear, reliable communication that just works.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { label: 'HD voice calls with noise reduction', icon: Mic },
                  { label: 'Video calls with up to 32 participants', icon: Video },
                  { label: 'Switch between voice and video seamlessly', icon: CameraOff },
                  { label: 'Screen sharing for collaboration', icon: Volume2 },
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
            { q: 'How many people can join a video call?', a: 'Video calls support up to 32 participants, making it easy to connect with groups, teams, or families.' },
            { q: 'Do calls work on mobile data?', a: 'Yes, Voxly calls work on both Wi-Fi and mobile data. The app adapts to your connection quality for the best experience.' },
            { q: 'Can I share my screen during a call?', a: 'Yes, screen sharing is available during video calls on supported devices, making it easy to collaborate or show something.' },
            { q: 'Are calls free?', a: 'Voxly calls use your internet connection, so there are no additional charges beyond your regular data or Wi-Fi costs.' },
          ]} />
        </div>
      </section>
      <CTA title="Make your first call" subtitle="Download Voxly and start calling anyone, anywhere." />
    </>
  );
}
