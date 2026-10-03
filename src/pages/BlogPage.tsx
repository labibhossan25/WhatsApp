import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock } from 'lucide-react';
import { PageHero } from './FeaturesPage';

const posts = [
  { slug: 'introducing-voxly-channels', title: 'Introducing Voxly Channels', excerpt: 'Share updates with your audience through our new broadcasting feature. Perfect for communities, creators, and organizations.', category: 'Product', date: '2026-01-15', readTime: '4 min' },
  { slug: 'privacy-first-communication', title: 'Why Privacy-First Communication Matters', excerpt: 'In a world of data collection, we believe your conversations should belong to you. Here\'s our approach to privacy.', category: 'Privacy', date: '2026-01-10', readTime: '6 min' },
  { slug: 'voxly-desktop-launch', title: 'Voxly Desktop is Here', excerpt: 'Stay connected on your laptop and desktop with our new native apps for Windows and macOS.', category: 'Product', date: '2026-01-05', readTime: '3 min' },
  { slug: 'group-calls-updated', title: 'Group Video Calls Now Support 32 People', excerpt: 'We\'ve expanded our video calling capacity. Now you can connect with up to 32 people in a single call.', category: 'Features', date: '2025-12-20', readTime: '3 min' },
  { slug: 'building-for-business', title: 'Building Voxly for Business', excerpt: 'How we\'re creating tools that help businesses connect with customers through meaningful conversations.', category: 'Business', date: '2025-12-15', readTime: '5 min' },
  { slug: 'accessibility-update', title: 'Accessibility Improvements in Voxly', excerpt: 'We\'ve made significant improvements to ensure Voxly works well for everyone, including screen reader support and keyboard navigation.', category: 'Engineering', date: '2025-12-10', readTime: '4 min' },
];

const categories = ['All', 'Product', 'Privacy', 'Features', 'Business', 'Engineering'];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <PageHero
        title="Voxly Blog"
        subtitle="News, updates, and insights from the Voxly team."
        badge="Blog"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                    category === cat ? 'bg-brand text-white' : 'bg-surface-alt text-text-secondary hover:bg-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="h-40 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📝</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-brand bg-brand-50 px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="text-xs text-text-muted flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-text-primary group-hover:text-brand transition-colors">{post.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="w-3 h-3" /> {post.readTime} read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
