import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Zap } from 'lucide-react';
import { PageHero, CTA } from './FeaturesPage';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Communication, reimagined"
        subtitle="We're building a communication platform that puts people first — simple, private, and designed for how we actually connect."
        badge="About"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We believe communication should be simple, reliable, and private. Voxly exists to help people stay connected with the ones who matter — without complexity, without compromise, and without the noise.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Human-Centered', desc: 'Every decision starts with the question: how does this help people communicate better?' },
                { icon: Globe, title: 'Global Reach', desc: 'Built for people everywhere, with support for multiple languages and regions.' },
                { icon: Users, title: 'Inclusive Design', desc: 'Accessible to everyone, regardless of ability, device, or technical expertise.' },
                { icon: Zap, title: 'Performance First', desc: 'Fast on any device, on any network. Communication shouldn\'t wait.' },
              ].map((item, i) => (
                <div key={i} className="bg-surface-alt rounded-2xl p-6 border border-border">
                  <item.icon className="w-8 h-8 text-brand mb-3" />
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Our Philosophy</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We started Voxly because we believed communication tools could be better. Not more complex, not more features — but more thoughtful. More focused on what actually matters: connecting people.
                </p>
                <p>
                  We design with restraint. We build for reliability. We respect your privacy as a fundamental right, not a feature to be toggled on. And we're committed to making Voxly better every day based on how people actually use it.
                </p>
              </div>
            </div>

            <div className="bg-brand-50 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-bold text-text-primary">Join our team</h2>
              <p className="mt-3 text-text-secondary">We're always looking for talented people who share our vision for better communication.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Experience Voxly" subtitle="See what thoughtful communication looks like." />
    </>
  );
}
