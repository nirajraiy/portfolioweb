import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Niraj Rai | React Native & Mobile Application Developer',
  description:
    'Learn more about Niraj Rai - React Native Developer & Mobile Application Developer with 3+ years experience building 12+ production iOS and Android apps.',
  alternates: {
    canonical: '/site/about',
  },
  openGraph: {
    title: 'About Niraj Rai | React Native & Mobile Application Developer',
    description:
      '3+ years experience building flagship Android, iOS, and web mobile applications serving 20,000+ active users.',
    url: 'https://portfolioweb-phi-one.vercel.app/site/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}