import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHero } from './FeaturesPage';

const categories = ['General', 'Support', 'Business', 'Security', 'Partnership', 'Press'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', category: 'General', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', category: 'General', message: '' });
    }, 1500);
  }

  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Have a question, feedback, or partnership inquiry? We'd love to hear from you."
        badge="Contact"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Message sent!</h2>
              <p className="mt-3 text-text-secondary">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 text-sm font-medium text-brand border border-brand rounded-full hover:bg-brand-50 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Name *</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors ${errors.name ? 'border-error' : 'border-border'}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors ${errors.email ? 'border-error' : 'border-border'}`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-text-primary mb-1.5">Category</label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors bg-white"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors ${errors.subject ? 'border-error' : 'border-border'}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none ${errors.message ? 'border-error' : 'border-border'}`}
                  placeholder="Tell us more..."
                />
                {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-error/5 border border-error/20 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-error flex-shrink-0" />
                  <p className="text-sm text-error">Something went wrong. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
