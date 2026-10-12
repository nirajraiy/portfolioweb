import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { PERSON, SITE_URL, breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact — Hire a React Native Developer',
  description:
    'Hire Niraj Rai, React Native developer in Mohali, India, for full-time, remote or freelance iOS and Android app development. Email, phone, LinkedIn and contact form.',
  keywords: [
    'hire React Native developer',
    'hire mobile app developer India',
    'freelance React Native developer',
    'React Native developer for hire',
    'contact Niraj Rai',
  ],
  alternates: {
    canonical: '/site/contact',
  },
  openGraph: {
    title: 'Contact Niraj Rai — Hire a React Native Developer',
    description:
      'Get in touch for React Native roles, freelance mobile app projects or consulting.',
    url: `${SITE_URL}/site/contact`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Niraj Rai',
    description: 'Contact details and inquiry form for Niraj Rai - React Native Developer.',
    url: `${SITE_URL}/site/contact`,
    mainEntity: {
      '@id': `${SITE_URL}/#person`,
      '@type': 'Person',
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      email: PERSON.email,
      telephone: PERSON.telephone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mohali',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Contact', path: '/site/contact' }])),
        }}
      />
      <ContactClient />
    </>
  );
}
