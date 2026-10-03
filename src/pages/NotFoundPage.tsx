import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-brand-50 rounded-full flex items-center justify-center">
            <span className="text-6xl">💬</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-xs font-bold">
            ?
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
          Looks like this conversation went somewhere else.
        </h1>
        <p className="mt-4 text-text-secondary">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            Back Home
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text-primary bg-white border border-border hover:border-brand/30 rounded-full transition-colors"
          >
            Explore Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
