import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

const siteUrl = 'https://portfolioweb-phi-one.vercel.app';

export const metadata: Metadata = {
  title: 'React Native & Mobile App Projects | Niraj Rai Portfolio',
  description:
    'Featured React Native, iOS, and Android applications built by Niraj Rai. Includes Smart Review, Qwaiting, Salonist, Spark Resto, and AddPeople serving 20,000+ users.',
  alternates: {
    canonical: '/site/projects',
  },
  openGraph: {
    title: 'React Native & Mobile App Projects | Niraj Rai Portfolio',
    description:
      'Explore 12+ production mobile applications shippped on App Store and Google Play by Niraj Rai - React Native & Mobile Application Developer.',
    url: `${siteUrl}/site/projects`,
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Mobile Applications by Niraj Rai',
    description: 'Collection of production iOS and Android mobile apps developed by Niraj Rai.',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        position: 1,
        name: 'Smart Review & NPS App',
        operatingSystem: 'ANDROID, IOS',
        applicationCategory: 'BusinessApplication',
        description: 'React Native customer feedback and NPS collection mobile application.',
        author: {
          '@type': 'Person',
          name: 'Niraj Rai',
        },
      },
      {
        '@type': 'SoftwareApplication',
        position: 2,
        name: 'Qwaiting Queue Management Suite',
        operatingSystem: 'ANDROID, IOS',
        applicationCategory: 'BusinessApplication',
        description: 'Real-time queue tracking and staff management app suite serving 20,000+ active users.',
        author: {
          '@type': 'Person',
          name: 'Niraj Rai',
        },
      },
      {
        '@type': 'SoftwareApplication',
        position: 3,
        name: 'Spark Resto - Restaurant Management POS',
        operatingSystem: 'ANDROID, IOS',
        applicationCategory: 'BusinessApplication',
        description: 'Offline-first React Native POS app for restaurant management and order taking.',
        author: {
          '@type': 'Person',
          name: 'Niraj Rai',
        },
      },
      {
        '@type': 'SoftwareApplication',
        position: 4,
        name: 'Salonist Check-In App',
        operatingSystem: 'ANDROID, IOS',
        applicationCategory: 'BusinessApplication',
        description: 'In-salon mobile app for client check-ins and appointment management.',
        author: {
          '@type': 'Person',
          name: 'Niraj Rai',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}