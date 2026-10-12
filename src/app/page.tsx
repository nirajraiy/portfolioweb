import type { Metadata } from 'next';
import Hero from '@/components/homePage/Hero';

export const metadata: Metadata = {
  title: {
    absolute: 'Niraj Rai — React Native Developer | iOS & Android Mobile App Developer, India',
  },
  description:
    'Hire Niraj Rai, a React Native developer in Mohali, India. 3+ years building iOS and Android apps with React Native, TypeScript, Kotlin and Swift — 14 production apps on the App Store and Google Play, 20,000+ users.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
}
