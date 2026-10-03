import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Users, Shield, Monitor, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../App';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function HeroSection() {
  const { t } = useAppContext();
  const [showMessage, setShowMessage] = useState(false);
  const [showReaction, setShowReaction] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowMessage(true), 800);
    const t2 = setTimeout(() => setShowReaction(true), 2000);
    const t3 = setTimeout(() => setShowTyping(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all hover:shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5"
              >
                {t.hero.ctaDownload}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-text-primary bg-white border border-border hover:border-brand/30 hover:bg-brand-50 rounded-full transition-all"
              >
                {t.hero.ctaWeb}
              </Link>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-[280px] sm:w-[320px] animate-float">
              {/* Phone frame */}
              <div className="bg-text-primary rounded-[2.5rem] p-3 shadow-2xl shadow-text-primary/20">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-brand px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Alex</p>
                      <p className="text-white/70 text-xs">Online</p>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[300px] bg-surface-alt">
                    {/* Received message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[200px] shadow-sm">
                        <p className="text-sm text-text-primary">Hey! How are you doing? 👋</p>
                        <p className="text-[10px] text-text-muted mt-1">10:24</p>
                      </div>
                    </div>
                    {/* Sent message */}
                    <div className="flex justify-end">
                      <div className="bg-brand rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]">
                        <p className="text-sm text-white">I'm great! Just finished the project 🎉</p>
                        <p className="text-[10px] text-white/70 mt-1 flex items-center gap-1 justify-end">10:25 <CheckCircle2 className="w-3 h-3" /></p>
                      </div>
                    </div>
                    {/* Reaction */}
                    {showReaction && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="bg-white rounded-2xl px-4 py-2 shadow-sm relative">
                          <p className="text-sm text-text-primary">That's amazing! Let's celebrate 🥳</p>
                          <span className="absolute -bottom-2 -right-1 text-lg">❤️</span>
                          <p className="text-[10px] text-text-muted mt-1">10:26</p>
                        </div>
                      </div>
                    )}
                    {/* Typing indicator */}
                    {showTyping && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-typing-1"></span>
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-typing-2"></span>
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-typing-3"></span>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* New message */}
                    {showMessage && (
                      <div className="flex justify-end animate-fade-in-up">
                        <div className="bg-brand rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]">
                          <p className="text-sm text-white">Absolutely! Dinner tonight? 🍕</p>
                          <p className="text-[10px] text-white/70 mt-1 flex items-center gap-1 justify-end">10:27 <CheckCircle2 className="w-3 h-3" /></p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Input */}
                  <div className="p-3 border-t border-border flex items-center gap-2">
                    <div className="flex-1 bg-surface-alt rounded-full px-4 py-2">
                      <p className="text-xs text-text-muted">Message</p>
                    </div>
                    <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.trust.items.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 justify-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium text-text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MessagingSection() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              {t.messaging.title}
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t.messaging.subtitle}
            </p>
            <Link to="/features/messaging" className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:gap-3 transition-all">
              {t.common.learnMore} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-surface-alt rounded-3xl p-6 border border-border">
              <div className="space-y-3">
                {[
                  { name: 'Sarah', msg: 'See you tomorrow!', time: '2m', unread: 2, color: 'bg-purple-500' },
                  { name: 'Team Project', msg: 'Meeting at 3pm', time: '15m', unread: 5, color: 'bg-brand' },
                  { name: 'Mom', msg: '❤️', time: '1h', unread: 0, color: 'bg-pink-500' },
                  { name: 'David', msg: 'Thanks for the help!', time: '3h', unread: 0, color: 'bg-blue-500' },
                ].map((chat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-sm transition-shadow">
                    <div className={`w-10 h-10 ${chat.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                      {chat.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-text-primary">{chat.name}</span>
                        <span className="text-xs text-text-muted">{chat.time}</span>
                      </div>
                      <p className="text-sm text-text-secondary truncate">{chat.msg}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 bg-brand text-white text-xs rounded-full flex items-center justify-center font-medium">{chat.unread}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallingSection() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-2 lg:order-1 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="bg-text-primary rounded-3xl p-6 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Video call UI mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-text-primary"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="text-white font-medium">Alex</p>
                <p className="text-white/60 text-sm mt-1">05:23</p>
              </div>
              {/* Controls */}
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-10">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
                <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
                <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                </button>
              </div>
              {/* Self view */}
              <div className="absolute top-4 right-4 w-16 h-20 bg-brand/30 rounded-xl backdrop-blur-sm border border-white/20 z-10"></div>
            </div>
          </div>
          <div className={`order-1 lg:order-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              {t.calling.title}
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t.calling.subtitle}
            </p>
            <Link to="/features/calling" className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:gap-3 transition-all">
              {t.common.learnMore} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupsSection() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.groups.title}
          </h2>
          <p className={`mt-6 text-lg text-text-secondary leading-relaxed ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {t.groups.subtitle}
          </p>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {[
            { name: 'Weekend Plans', members: 8, emoji: '🎉', color: 'bg-purple-50 border-purple-100' },
            { name: 'Study Group', members: 12, emoji: '📚', color: 'bg-blue-50 border-blue-100' },
            { name: 'Family Chat', members: 15, emoji: '👨‍👩‍👧‍👦', color: 'bg-pink-50 border-pink-100' },
            { name: 'Project Team', members: 6, emoji: '💼', color: 'bg-brand-50 border-brand-100' },
            { name: 'Book Club', members: 20, emoji: '📖', color: 'bg-amber-50 border-amber-100' },
            { name: 'Fitness Crew', members: 10, emoji: '🏃', color: 'bg-green-50 border-green-100' },
          ].map((group, i) => (
            <div key={i} className={`${group.color} border rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{group.emoji}</span>
                <div>
                  <h3 className="font-semibold text-text-primary">{group.name}</h3>
                  <p className="text-sm text-text-secondary">{group.members} members</p>
                </div>
              </div>
              <div className="mt-4 flex -space-x-2">
                {Array.from({ length: Math.min(4, group.members) }).map((_, j) => (
                  <div key={j} className="w-7 h-7 bg-white border-2 border-white rounded-full flex items-center justify-center text-xs font-medium text-text-secondary">
                    {String.fromCharCode(65 + j)}
                  </div>
                ))}
                {group.members > 4 && (
                  <div className="w-7 h-7 bg-white border-2 border-white rounded-full flex items-center justify-center text-xs font-medium text-text-muted">
                    +{group.members - 4}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/features/groups" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            {t.common.learnMore} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-text-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
              <Lock className="w-4 h-4 text-brand-300" />
              <span className="text-sm text-brand-300 font-medium">Privacy First</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t.privacy.title}
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {t.privacy.subtitle}
            </p>
            <div className="mt-8 space-y-4">
              {['Your data stays yours', 'No advertising tracking', 'Transparent practices'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/privacy" className="inline-flex items-center gap-2 mt-8 text-brand-300 font-semibold hover:text-brand-200 hover:gap-3 transition-all">
              {t.common.learnMore} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-16 h-16 sm:w-20 sm:h-20 text-brand-400 mx-auto" />
                  <p className="mt-4 text-white/60 text-sm font-medium">Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevicesSection() {
  const { t } = useAppContext();
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight whitespace-pre-line ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {t.devices.title}
        </h2>
        <p className={`mt-6 text-lg text-text-secondary max-w-xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          {t.devices.subtitle}
        </p>
        <div className={`mt-16 flex items-end justify-center gap-4 sm:gap-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Desktop */}
          <div className="hidden sm:block w-48 lg:w-64 bg-surface-alt border border-border rounded-xl p-2 hover:-translate-y-2 transition-transform">
            <div className="bg-white rounded-lg aspect-[16/10] flex items-center justify-center">
              <Monitor className="w-8 h-8 text-text-muted" />
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Desktop</p>
          </div>
          {/* Laptop */}
          <div className="w-40 sm:w-52 lg:w-72 bg-surface-alt border border-border rounded-xl p-2 hover:-translate-y-2 transition-transform">
            <div className="bg-white rounded-lg aspect-[16/10] flex items-center justify-center">
              <Monitor className="w-6 h-6 text-text-muted" />
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Laptop</p>
          </div>
          {/* Phone */}
          <div className="w-20 sm:w-24 bg-surface-alt border border-border rounded-xl p-1.5 hover:-translate-y-2 transition-transform">
            <div className="bg-white rounded-lg aspect-[9/16] flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-text-muted" />
            </div>
            <p className="text-xs text-text-muted mt-1 text-center">Phone</p>
          </div>
          {/* Tablet */}
          <div className="hidden sm:block w-32 lg:w-40 bg-surface-alt border border-border rounded-xl p-2 hover:-translate-y-2 transition-transform">
            <div className="bg-white rounded-lg aspect-[3/4] flex items-center justify-center">
              <Monitor className="w-5 h-5 text-text-muted" />
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Tablet</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useAppContext();
  return (
    <section className="py-20 lg:py-28 bg-brand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Ready to connect?
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Join millions who use Voxly to stay close to the people who matter.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all hover:shadow-lg hover:shadow-brand/20"
          >
            {t.hero.ctaDownload}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <MessagingSection />
      <CallingSection />
      <GroupsSection />
      <PrivacySection />
      <DevicesSection />
      <CTASection />
    </>
  );
}
