import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  'introducing-voxly-channels': {
    title: 'Introducing Voxly Channels',
    category: 'Product',
    date: '2026-01-15',
    readTime: '4 min',
    content: `We're excited to announce Voxly Channels — a new way to broadcast updates to your audience.

Channels let you share news, announcements, and content with an unlimited number of followers. Whether you're a community leader, content creator, or organization, Channels give you a direct line to your audience.

## How Channels Work

Creating a Channel is simple. Give it a name, add a description, and start posting. Your followers will receive your updates and can react with emoji.

## Who Can Create Channels?

Anyone with a Voxly account can create a Channel. There's no limit on the number of followers a Channel can have.

## What's Next?

We're working on additional features for Channels, including scheduled posts, analytics, and richer media support. Stay tuned for updates.

Download the latest version of Voxly to start creating your Channel today.`,
  },
  'privacy-first-communication': {
    title: 'Why Privacy-First Communication Matters',
    category: 'Privacy',
    date: '2026-01-10',
    readTime: '6 min',
    content: `In an era where data is often treated as a commodity, we believe communication should be different. Your conversations are personal, and they should stay that way.

## Our Approach

At Voxly, privacy isn't a feature we added — it's a principle we built around. From day one, we've designed our platform to minimize data collection and maximize user control.

## What This Means for You

- We don't sell your data
- We don't use your messages for advertising
- You control who can see your information
- You can delete your account and data at any time

## Transparency

We publish regular transparency reports and are open about our practices. If you have questions about how we handle your data, visit our Privacy page or contact us directly.

Privacy isn't just good practice — it's the right thing to do.`,
  },
  'voxly-desktop-launch': {
    title: 'Voxly Desktop is Here',
    category: 'Product',
    date: '2026-01-05',
    readTime: '3 min',
    content: `Today we're launching native desktop apps for Windows and macOS. Stay connected on your laptop and desktop without keeping your phone nearby.

## What's Included

The desktop experience includes all the features you love: messaging, voice and video calls, groups, and more. Your conversations sync seamlessly across all your devices.

## System Requirements

- Windows: Windows 10 or later (64-bit)
- macOS: macOS 11 (Big Sur) or later

## Getting Started

Download Voxly Desktop from our Download page. Log in with your phone number, and you're ready to go.

We'd love to hear your feedback. Let us know what you think!`,
  },
  'group-calls-updated': {
    title: 'Group Video Calls Now Support 32 People',
    category: 'Features',
    date: '2025-12-20',
    readTime: '3 min',
    content: `We've expanded our video calling capacity. Group video calls now support up to 32 participants, making it easier to connect with larger teams, families, and communities.

## What's New

- Up to 32 participants in a single video call
- Improved audio quality with better noise handling
- New gallery view for larger groups
- Screen sharing for all participants

## How to Use

Simply start a video call and invite participants from your contacts or group. Everyone will be notified and can join with one tap.

This update is available now in the latest version of Voxly.`,
  },
  'building-for-business': {
    title: 'Building Voxly for Business',
    category: 'Business',
    date: '2025-12-15',
    readTime: '5 min',
    content: `Businesses deserve great communication tools too. That's why we've been building Voxly Business — a set of features designed to help businesses connect with customers.

## Business Profiles

Create a professional presence with a business profile that includes your hours, location, website, and product catalog.

## Customer Conversations

Manage customer inquiries efficiently with quick replies, labels, and conversation organization tools.

## What's Coming

We're working on additional business tools including team inboxes, automated responses, and integration capabilities. If you're interested in Voxly Business, contact our sales team.`,
  },
  'accessibility-update': {
    title: 'Accessibility Improvements in Voxly',
    category: 'Engineering',
    date: '2025-12-10',
    readTime: '4 min',
    content: `We believe communication tools should work for everyone. That's why we've made significant accessibility improvements across Voxly.

## What We've Improved

- Screen reader support for all major features
- Improved keyboard navigation throughout the app
- Better color contrast ratios meeting WCAG 2.2 AA standards
- Reduced motion options for users sensitive to animation
- Larger touch targets for mobile accessibility

## Our Commitment

Accessibility is an ongoing effort. We regularly test with assistive technologies and welcome feedback from users who rely on accessibility features.

If you encounter any accessibility issues, please let us know through our Help Center.`,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-text-primary">Article not found</h1>
          <p className="mt-4 text-text-secondary">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 mt-6 text-brand font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-brand bg-brand-50 px-2 py-0.5 rounded-full">{post.category}</span>
          <span className="text-sm text-text-muted flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
          <span className="text-sm text-text-muted flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">{post.title}</h1>
        <div className="mt-8 prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-text-primary mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').map(item => item.replace('- ', ''));
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="text-text-secondary leading-relaxed mb-4">{paragraph}</p>;
          })}
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> More articles
          </Link>
        </div>
      </div>
    </article>
  );
}
