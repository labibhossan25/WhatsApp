import { Link } from 'react-router-dom';
import { Store, MessageSquare, ShoppingCart, BarChart3, Users, ArrowRight } from 'lucide-react';
import { PageHero, CTA } from './FeaturesPage';

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="Conversations that move business forward"
        subtitle="Connect with customers, provide support, and grow your business through meaningful conversations on Voxly."
        badge="Business"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Everything your business needs</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Voxly Business gives you the tools to create a professional presence, manage customer conversations, and showcase your products or services.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Store, label: 'Business profile with catalog' },
                  { icon: MessageSquare, label: 'Quick replies and automated messages' },
                  { icon: ShoppingCart, label: 'Product and service showcase' },
                  { icon: BarChart3, label: 'Conversation statistics' },
                  { icon: Users, label: 'Team collaboration tools' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl">
                    <item.icon className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:gap-3 transition-all">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-surface-alt rounded-3xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white font-bold">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Fresh Bakery</h3>
                  <p className="text-xs text-text-secondary">Business Account • Verified</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[240px] shadow-sm">
                    <p className="text-sm text-text-primary">Hi! Do you have any gluten-free options?</p>
                    <p className="text-[10px] text-text-muted mt-1">Customer • 2:15 PM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand rounded-2xl rounded-tr-sm px-4 py-3 max-w-[240px]">
                    <p className="text-sm text-white">Yes! We have almond flour bread and rice-based pastries. Would you like to see our catalog?</p>
                    <p className="text-[10px] text-white/70 mt-1 flex items-center gap-1 justify-end">2:16 PM ✓✓</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white rounded-xl px-3 py-2 max-w-[200px] shadow-sm border border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🍞</span>
                      <div>
                        <p className="text-xs font-medium text-text-primary">Gluten-Free Bread</p>
                        <p className="text-xs text-brand font-semibold">$6.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-12">Trusted by businesses worldwide</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Restaurants & Food', desc: 'Take orders, share menus, and provide customer support directly through conversations.' },
              { title: 'Retail & E-commerce', desc: 'Showcase products, handle inquiries, and guide customers through purchases.' },
              { title: 'Services & Consulting', desc: 'Schedule appointments, share information, and maintain client relationships.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Grow your business with Voxly" subtitle="Start connecting with customers today." />
    </>
  );
}
