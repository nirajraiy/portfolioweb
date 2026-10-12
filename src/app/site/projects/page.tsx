import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import { projects, liveProjects } from '@/data/projects';
import { getAppStoreData } from '@/lib/storeData';
import { SITE_URL, breadcrumbJsonLd } from '@/lib/seo';

export const revalidate = 86400;

const GOOGLE_CATEGORIES: Record<string, string> = {
  'Health & Fitness': 'HealthApplication',
  Medical: 'HealthApplication',
  Lifestyle: 'LifestyleApplication',
  Finance: 'FinanceApplication',
  'Food & Drink': 'LifestyleApplication',
  Productivity: 'BusinessApplication',
  Business: 'BusinessApplication',
};

function googleCategory(genre: string) {
  return GOOGLE_CATEGORIES[genre] ?? 'BusinessApplication';
}

export const metadata: Metadata = {
  title: 'React Native App Portfolio — iOS & Android Apps on App Store and Google Play',
  description:
    'Portfolio of production React Native, Kotlin and Swift apps built by Niraj Rai and live on the App Store and Google Play — Qwaiting, Spark Resto POS, Smart Reviews, AdPeople, AdLyfe and more, serving 20,000+ users.',
  keywords: [
    'React Native app portfolio',
    'React Native projects',
    'iOS app developer portfolio',
    'Android app developer portfolio',
    'mobile app case studies',
    'restaurant POS app developer',
    'queue management app developer',
    'healthcare app developer India',
    'hire React Native developer',
  ],
  alternates: {
    canonical: '/site/projects',
  },
  openGraph: {
    title: 'React Native App Portfolio | Niraj Rai',
    description:
      'Production iOS and Android apps shipped to the App Store and Google Play by Niraj Rai, React Native & Mobile Application Developer.',
    url: `${SITE_URL}/site/projects`,
  },
};

export default async function ProjectsPage() {
  const store = await getAppStoreData(projects);

  const appsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mobile Applications by Niraj Rai',
    description: 'Production iOS and Android mobile apps developed by Niraj Rai.',
    numberOfItems: liveProjects.length,
    itemListElement: liveProjects.map((p, i) => {
      const s = store[p.slug];
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'MobileApplication',
          name: p.title,
          description: p.tagline,
          url: `${SITE_URL}/site/projects#${p.slug}`,
          image: p.icon ? `${SITE_URL}${p.icon}` : undefined,
          screenshot: p.screenshots?.map((src) => `${SITE_URL}${src}`),
          operatingSystem: [p.appLink?.ios && 'iOS', p.appLink?.android && 'Android']
            .filter(Boolean)
            .join(', '),
          applicationCategory: googleCategory(s?.genre ?? p.category),
          softwareVersion: s?.version,
          datePublished: s?.releasedAt?.slice(0, 10),
          dateModified: s?.updatedAt?.slice(0, 10),
          installUrl: p.appLink?.ios ?? p.appLink?.android,
          sameAs: [p.appLink?.ios, p.appLink?.android].filter(Boolean),
          offers: s?.price === 'Free' ? { '@type': 'Offer', price: '0', priceCurrency: 'INR' } : undefined,
          aggregateRating:
            s && s.ratingCount > 0
              ? { '@type': 'AggregateRating', ratingValue: s.rating, ratingCount: s.ratingCount }
              : undefined,
          author: { '@id': `${SITE_URL}/#person` },
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Projects', path: '/site/projects' }])),
        }}
      />
      <ProjectsClient store={store} />
    </>
  );
}
