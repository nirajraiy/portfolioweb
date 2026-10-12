import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { SITE_URL, breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About — React Native & Mobile App Developer in Mohali, India',
  description:
    'About Niraj Rai: React Native developer from India with 3+ years shipping 12 iOS and Android apps, sole owner of Qwaiting, Spark Resto and Smart Reviews. B.Tech Computer Science, open to relocation.',
  keywords: [
    'about Niraj Rai',
    'React Native developer biography',
    'mobile app developer Mohali',
    'React Native developer Chandigarh',
    'B.Tech computer science developer',
  ],
  alternates: {
    canonical: '/site/about',
  },
  openGraph: {
    title: 'About Niraj Rai — React Native Developer',
    description:
      '3+ years building production Android, iOS and web apps serving 20,000+ active users.',
    url: `${SITE_URL}/site/about`,
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: 'About', path: '/site/about' }])),
        }}
      />
      <AboutClient />
    </>
  );
}
