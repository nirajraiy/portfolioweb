import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/constants/Navbar';
import Footer from '@/components/constants/Footer';
import PageTransition from '@/components/PageTransition';
import { CORE_KEYWORDS, PERSON, SITE_NAME, SITE_URL } from '@/lib/seo';
import { liveProjects } from '@/data/projects';
import './globals.css';

const description =
  'Niraj Rai is a React Native Developer in Mohali, India with 3+ years building iOS and Android apps in React Native, TypeScript, Kotlin and Swift — 14 production apps on the App Store and Google Play serving 20,000+ users. Open to full-time, remote and freelance roles.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Niraj Rai — React Native Developer | iOS & Android Mobile App Developer, India',
    template: '%s | Niraj Rai, React Native Developer',
  },
  description,
  applicationName: SITE_NAME,
  keywords: CORE_KEYWORDS,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  category: 'technology',
  verification: {
    google: 'CgFoQW3tmj4q4x5nMDfx4ahOkukqImyC5yV_UF-1-O8',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Niraj Rai — React Native Developer | iOS & Android Apps',
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'profile',
    firstName: 'Niraj',
    lastName: 'Rai',
    username: 'nirajraiy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niraj Rai — React Native Developer',
    description:
      'React Native developer shipping iOS & Android apps — 14 production apps, 20K+ users, 99.7% crash-free.',
    creator: '@nirajraiy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07080b',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: PERSON.name,
        alternateName: PERSON.alternateName,
        givenName: 'Niraj',
        familyName: 'Rai',
        jobTitle: PERSON.jobTitle,
        description,
        url: SITE_URL,
        image: `${SITE_URL}/nirajImage.png`,
        email: `mailto:${PERSON.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mohali',
          addressRegion: 'Punjab',
          addressCountry: 'IN',
        },
        nationality: { '@type': 'Country', name: 'India' },
        worksFor: { '@type': 'Organization', name: 'Stellen Infotech', address: 'Mohali, Punjab, India' },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Arya College of Engineering & Research Centre',
          address: 'Jaipur, Rajasthan, India',
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'React Native Developer',
          occupationLocation: { '@type': 'City', name: 'Mohali' },
          skills:
            'React Native, TypeScript, JavaScript, Kotlin, Swift, Redux Toolkit, Firebase, REST APIs, CI/CD, iOS, Android, Next.js',
        },
        knowsLanguage: ['English'],
        sameAs: [PERSON.github, PERSON.linkedin],
        knowsAbout: [
          'React Native',
          'Mobile Application Development',
          'iOS Development',
          'Android Development',
          'Android TV',
          'tvOS',
          'TypeScript',
          'Kotlin',
          'Swift',
          'Redux Toolkit',
          'Firebase',
          'Offline-first architecture',
          'Real-time apps with Pusher and WebSockets',
          'CI/CD with Fastlane and Bitrise',
          'App Store Connect',
          'Google Play Console',
          'Next.js',
          'React.js',
        ],
        owns: liveProjects.map((p) => ({
          '@type': 'MobileApplication',
          name: p.title,
          url: p.appLink?.ios ?? p.appLink?.android,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'en-IN',
        description,
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: 'Niraj Rai — React Native Developer Portfolio',
        mainEntity: { '@id': `${SITE_URL}/#person` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="app-body">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
