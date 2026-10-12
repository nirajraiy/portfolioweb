import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';
import { SITE_URL, breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Skills — React Native, TypeScript, Kotlin, Swift & Mobile CI/CD',
  description:
    'Technical skills of Niraj Rai: React Native, TypeScript, Kotlin, Swift, Redux Toolkit, Firebase, SQLite offline-first apps, Pusher real-time, Fastlane, Bitrise, Jest, Detox, Next.js and App Store / Google Play releases.',
  keywords: [
    'React Native skills',
    'React Native TypeScript developer',
    'Redux Toolkit developer',
    'Kotlin native module developer',
    'Swift native module developer',
    'Fastlane Bitrise CI/CD',
    'offline-first React Native',
    'React Native performance optimization',
  ],
  alternates: {
    canonical: '/site/skills',
  },
  openGraph: {
    title: 'Skills — Niraj Rai, React Native Developer',
    description:
      'React Native, iOS, Android, Clean Architecture, TurboModules, CI/CD and mobile performance optimization.',
    url: `${SITE_URL}/site/skills`,
  },
};

export default function SkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Skills', path: '/site/skills' }])),
        }}
      />
      <SkillsClient />
    </>
  );
}
