import type { Metadata } from 'next';
import Hero from '@/components/homePage/Hero';

export const metadata: Metadata = {
  title: 'Niraj Rai | React Native & Mobile Application Developer',
  description:
    'Niraj Rai is a React Native Developer & Mobile Application Developer with 3+ years of hands-on experience building enterprise-grade iOS, Android, and cross-platform apps.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Niraj Rai | React Native & Mobile Application Developer',
    description:
      'Portfolio of Niraj Rai - React Native & Mobile Application Developer with 3+ years experience building flagship apps serving 20,000+ active users.',
    url: 'https://portfolioweb-phi-one.vercel.app',
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
}
