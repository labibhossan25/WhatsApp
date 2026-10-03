import { Lock, Eye, Shield, Settings, FileText, Mail } from 'lucide-react';
import { PageHero, FAQ, CTA } from './FeaturesPage';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Your privacy matters"
        subtitle="We believe your conversations belong to you. This page explains how we approach privacy and what controls you have over your information."
        badge="Privacy"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Our Privacy Principles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: 'Minimal Data Collection', desc: 'We collect only what is necessary to provide the service. We don\'t collect data for advertising purposes.' },
                  { icon: Eye, title: 'Transparency', desc: 'We are clear about what information we collect, how we use it, and what choices you have.' },
                  { icon: Shield, title: 'Security by Design', desc: 'Security measures are built into our platform from the ground up, not added as an afterthought.' },
                  { icon: Settings, title: 'User Control', desc: 'You have control over your data, your privacy settings, and who can contact you.' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-alt rounded-2xl p-6 border border-border">
                    <item.icon className="w-8 h-8 text-brand mb-3" />
                    <h3 className="font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
              <div className="bg-surface-alt rounded-2xl p-6 border border-border space-y-4">
                <div>
                  <h3 className="font-medium text-text-primary">Account Information</h3>
                  <p className="text-sm text-text-secondary mt-1">Your phone number and display name are required to create an account. You may optionally add a profile photo and bio.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="font-medium text-text-primary">Messages and Media</h3>
                  <p className="text-sm text-text-secondary mt-1">Messages are stored on our servers to enable delivery across devices. We process messages to provide the service but do not use them for advertising.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="font-medium text-text-primary">Device Information</h3>
                  <p className="text-sm text-text-secondary mt-1">We collect basic device information (model, OS version) for compatibility and to improve the app experience.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Your Controls</h2>
              <ul className="space-y-3">
                {[
                  'Control who can see your profile information',
                  'Manage who can add you to groups',
                  'Control who sees your Status updates',
                  'Delete your account and associated data',
                  'Export your data at any time',
                  'Manage active sessions across devices',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us About Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about our privacy practices or want to exercise your data rights, you can reach us at{' '}
                <a href="mailto:privacy@voxly.app" className="text-brand hover:underline">privacy@voxly.app</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Frequently asked questions</h2>
          <FAQ items={[
            { q: 'Does Voxly sell user data?', a: 'No. We do not sell your personal information or messages to third parties.' },
            { q: 'How can I delete my account?', a: 'You can delete your account from Settings → Account → Delete Account. This will remove your account and associated data.' },
            { q: 'Can I export my data?', a: 'Yes, you can request a copy of your data from Settings → Account → Export Data.' },
            { q: 'How do I control who contacts me?', a: 'You can manage privacy settings for profile visibility, group additions, and Status visibility in Settings → Privacy.' },
          ]} />
        </div>
      </section>
      <CTA title="Your privacy, your choice" subtitle="Download Voxly and take control of your communication." />
    </>
  );
}
