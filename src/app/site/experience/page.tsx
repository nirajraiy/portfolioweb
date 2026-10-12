import type { Metadata } from 'next';
import ExperienceSection from '@/components/experience/ExperienceSection';
import { SITE_URL, breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Experience — React Native Developer at Stellen Infotech',
  description:
    'Work experience of Niraj Rai: React Native Developer at Stellen Infotech (2024–present), previously Dev Technosys and HabileLabs. Shipped 14 apps, cut bundle size 50%, startup time 35%, 99.7% crash-free sessions.',
  keywords: [
    'React Native developer experience',
    'Stellen Infotech React Native',
    'React Native developer resume',
    'mobile developer work history',
  ],
  alternates: {
    canonical: '/site/experience',
  },
  openGraph: {
    title: 'Experience — Niraj Rai, React Native Developer',
    description:
      '3+ years of professional React Native experience leading cross-platform app products end to end.',
    url: `${SITE_URL}/site/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Experience', path: '/site/experience' }])),
        }}
      />
      <ExperienceSection />
    </>
  );
}
