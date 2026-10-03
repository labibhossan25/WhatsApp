import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [form, setForm] = useState({ phone: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  function validate() {
    const e: Record<string, string> = {};
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.password.trim()) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('error');
    }, 1500);
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 9c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-3l-3 3v-3H8c-2.2 0-4-1.8-4-4V9z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Welcome back</h1>
          <p className="mt-2 text-text-secondary">Log in to your Voxly account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors ${errors.phone ? 'border-error' : 'border-border'}`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-1.5">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`w-full px-4 py-3 pr-11 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors ${errors.password ? 'border-error' : 'border-border'}`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-error">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border text-brand focus:ring-brand" />
              <span className="text-sm text-text-secondary">Remember me</span>
            </label>
            <button type="button" className="text-sm text-brand hover:underline font-medium">
              Forgot password?
            </button>
          </div>

          {status === 'error' && (
            <div className="p-3 bg-error/5 border border-error/20 rounded-xl">
              <p className="text-sm text-error">Invalid credentials. Please check your phone number and password.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Logging in...
              </span>
            ) : 'Log In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Don't have an account?{' '}
          <Link to="/download" className="text-brand font-medium hover:underline">Download Voxly</Link>
        </p>

        <div className="mt-8 p-4 bg-surface-alt rounded-xl border border-border">
          <p className="text-xs text-text-muted text-center">
            This is a demonstration login page. Authentication is not connected to a backend service. In a production environment, this would integrate with a secure authentication provider.
          </p>
        </div>
      </div>
    </section>
  );
}
