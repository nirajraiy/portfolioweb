import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: 'Technical Skills | Niraj Rai - React Native & Mobile Application Developer',
  description:
    'Comprehensive tech stack & mobile skills of Niraj Rai: React Native, TypeScript, iOS (Swift), Android (Kotlin), Redux, Firebase, Offline-first, and CI/CD pipelines.',
  alternates: {
    canonical: '/site/skills',
  },
  openGraph: {
    title: 'Technical Skills | Niraj Rai - React Native & Mobile Application Developer',
    description:
      'Explore Niraj Rai expertise in React Native, iOS, Android, Clean Architecture, TurboModules, and mobile app performance optimization.',
    url: 'https://portfolioweb-phi-one.vercel.app/site/skills',
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}