import type { Metadata } from 'next';
import ExperienceSection from '@/components/experience/ExperienceSection';

export const metadata: Metadata = {
  title: 'Professional Experience | Niraj Rai - React Native Developer',
  description:
    'Work history and career achievements of Niraj Rai - React Native & Mobile Application Developer. Technical leadership, app performance, and engineering experience.',
  alternates: {
    canonical: '/site/experience',
  },
  openGraph: {
    title: 'Professional Experience | Niraj Rai - React Native Developer',
    description:
      '3+ years of professional experience as React Native Developer & Mobile Engineer leading cross-platform app products.',
    url: 'https://portfolioweb-phi-one.vercel.app/site/experience',
  },
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection />
    </main>
  );
}