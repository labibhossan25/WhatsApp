export type Language = 'en' | 'bn';

const translations = {
  en: {
    nav: {
      features: 'Features',
      calling: 'Calling',
      messaging: 'Messaging',
      groups: 'Groups',
      security: 'Security',
      business: 'Business',
      privacy: 'Privacy',
      help: 'Help',
      download: 'Download',
      login: 'Log In',
    },
    hero: {
      title: 'Stay connected,\nwithout the complexity.',
      subtitle: 'Simple conversations, meaningful connections, and a faster way to stay close to the people who matter.',
      ctaDownload: 'Download',
      ctaWeb: 'Try on Web',
    },
    trust: {
      items: ['Private by design', 'Fast across devices', 'Built for everyday communication', 'Designed for everyone'],
    },
    messaging: {
      title: 'Conversations that feel natural.',
      subtitle: 'Send messages, share moments, and stay in touch with the people who matter most — all in one simple experience.',
    },
    calling: {
      title: 'Talk like you\'re in the same room.',
      subtitle: 'Crystal-clear voice and video calls that make distance feel smaller. Connect face-to-face, anytime.',
    },
    groups: {
      title: 'Bring everyone together.',
      subtitle: 'Create spaces for your friends, family, teams, and communities. Share ideas, plan events, and stay connected as a group.',
    },
    privacy: {
      title: 'Private by design.',
      subtitle: 'Your conversations belong to you. We build our platform with privacy as a core principle, not an afterthought.',
    },
    devices: {
      title: 'One experience.\nAcross your devices.',
      subtitle: 'Stay connected on your phone, tablet, laptop, or desktop. Your conversations follow you everywhere.',
    },
    footer: {
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact',
      helpCenter: 'Help Center',
      security: 'Security',
      solutions: 'Solutions',
      contactSales: 'Contact Sales',
      terms: 'Terms',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      accessibility: 'Accessibility',
      copyright: '© 2026 Voxly. All rights reserved.',
    },
    common: {
      learnMore: 'Learn more',
      getStarted: 'Get started',
      backHome: 'Back Home',
      exploreFeatures: 'Explore Features',
      search: 'Search',
      loading: 'Loading...',
      error: 'Something went wrong. Please try again.',
      noResults: 'No results found.',
      submit: 'Submit',
      sending: 'Sending...',
      sent: 'Message sent successfully!',
    },
    notFound: {
      title: 'Looks like this conversation went somewhere else.',
      subtitle: 'The page you\'re looking for doesn\'t exist or has been moved.',
    },
  },
  bn: {
    nav: {
      features: 'বৈশিষ্ট্য',
      calling: 'কলিং',
      messaging: 'মেসেজিং',
      groups: 'গ্রুপ',
      security: 'নিরাপত্তা',
      business: 'ব্যবসা',
      privacy: 'গোপনীয়তা',
      help: 'সাহায্য',
      download: 'ডাউনলোড',
      login: 'লগ ইন',
    },
    hero: {
      title: 'সংযুক্ত থাকুন,\nজটিলতা ছাড়াই।',
      subtitle: 'সহজ কথোপকথন, অর্থপূর্ণ সংযোগ, এবং যারা গুরুত্বপূর্ণ তাদের কাছাকাছি থাকার দ্রুততম উপায়।',
      ctaDownload: 'ডাউনলোড',
      ctaWeb: 'ওয়েবে চেষ্টা করুন',
    },
    trust: {
      items: ['গোপনীয়তা দ্বারা ডিজাইন', 'ডিভাইস জুড়ে দ্রুত', 'প্রতিদিনের যোগাযোগের জন্য তৈরি', 'সবার জন্য ডিজাইন'],
    },
    messaging: {
      title: 'স্বাভাবিক কথোপকথন।',
      subtitle: 'বার্তা পাঠান, মুহূর্ত ভাগ করুন, এবং যারা সবচেয়ে গুরুত্বপূর্ণ তাদের সাথে যোগাযোগ রাখুন।',
    },
    calling: {
      title: 'একই ঘরে কথা বলুন।',
      subtitle: 'স্ফটিক-পরিষ্কার ভয়েস এবং ভিডিও কল যা দূরত্বকে ছোট করে তোলে।',
    },
    groups: {
      title: 'সবাইকে একত্রিত করুন।',
      subtitle: 'আপনার বন্ধু, পরিবার, দল এবং সম্প্রদায়ের জন্য স্থান তৈরি করুন।',
    },
    privacy: {
      title: 'গোপনীয়তা নকশা দ্বারা।',
      subtitle: 'আপনার কথোপকথন আপনার। আমরা গোপনীয়তাকে মূল নীতি হিসেবে তৈরি করি।',
    },
    devices: {
      title: 'একটি অভিজ্ঞতা।\nআপনার সব ডিভাইসে।',
      subtitle: 'আপনার ফোন, ট্যাবলেট, ল্যাপটপ বা ডেস্কটপে সংযুক্ত থাকুন।',
    },
    footer: {
      product: 'পণ্য',
      company: 'কোম্পানি',
      resources: 'সম্পদ',
      about: 'সম্পর্কে',
      blog: 'ব্লগ',
      careers: 'ক্যারিয়ার',
      contact: 'যোগাযোগ',
      helpCenter: 'সাহায্য কেন্দ্র',
      security: 'নিরাপত্তা',
      solutions: 'সমাধান',
      contactSales: 'বিক্রয় যোগাযোগ',
      terms: 'শর্তাবলী',
      privacyPolicy: 'গোপনীয়তা নীতি',
      cookiePolicy: 'কুকি নীতি',
      accessibility: 'প্রবেশযোগ্যতা',
      copyright: '© ২০২৬ Voxly। সর্বস্বত্ব সংরক্ষিত।',
    },
    common: {
      learnMore: 'আরও জানুন',
      getStarted: 'শুরু করুন',
      backHome: 'হোমে ফিরুন',
      exploreFeatures: 'বৈশিষ্ট্য অন্বেষণ',
      search: 'অনুসন্ধান',
      loading: 'লোড হচ্ছে...',
      error: 'কিছু ভুল হয়েছে। আবার চেষ্টা করুন।',
      noResults: 'কোন ফলাফল পাওয়া যায়নি।',
      submit: 'জমা দিন',
      sending: 'পাঠানো হচ্ছে...',
      sent: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
    },
    notFound: {
      title: 'মনে হচ্ছে এই কথোপকথন অন্য কোথাও চলে গেছে।',
      subtitle: 'আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।',
    },
  },
};

export type TranslationKeys = typeof translations.en;

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang];
}

export function getAvailableLanguages(): { code: Language; name: string; nativeName: string }[] {
  return [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  ];
}
