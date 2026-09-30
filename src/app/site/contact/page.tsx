import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const siteUrl = 'https://portfolioweb-phi-one.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Niraj Rai | Hire React Native & Mobile Application Developer',
  description:
    'Contact Niraj Rai for React Native development, iOS/Android mobile application projects, consulting, or full-time software engineering roles.',
  alternates: {
    canonical: '/site/contact',
  },
  openGraph: {
    title: 'Contact Niraj Rai | Hire React Native & Mobile Application Developer',
    description:
      'Get in touch with Niraj Rai - React Native & Mobile Application Developer for mobile development opportunities and consulting.',
    url: `${siteUrl}/site/contact`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Niraj Rai',
    description: 'Contact details and inquiry form for Niraj Rai - React Native Developer.',
    url: `${siteUrl}/site/contact`,
    mainEntity: {
      '@type': 'Person',
      name: 'Niraj Rai',
      jobTitle: 'React Native & Mobile Application Developer',
      email: 'nirajraibxr657@gmail.com',
      telephone: '+91 74819 55476',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mohali',
        addressRegion: 'Punjab',
        addressCountry: 'India',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}