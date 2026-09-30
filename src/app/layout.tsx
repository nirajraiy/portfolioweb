import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/constants/Navbar';
import Footer from '@/components/constants/Footer';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const siteUrl = 'https://portfolioweb-phi-one.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Niraj Rai | React Native & Mobile Application Developer',
    template: '%s | Niraj Rai - React Native Developer',
  },
  description:
    'Portfolio of Niraj Rai - React Native Developer & Mobile Application Developer with 3+ years of experience building enterprise-grade iOS, Android, and cross-platform apps serving 20,000+ active users.',
  keywords: [
    'Niraj Rai',
    'React Native Developer',
    'Mobile Application Developer',
    'React Native Engineer',
    'iOS Developer',
    'Android Developer',
    'Mobile App Architect',
    'TypeScript Developer',
    'Cross-Platform Mobile Developer',
    'Kotlin',
    'Swift',
    'Next.js Developer',
    'Frontend Engineer',
    'App Store Publishing',
    'Google Play Console',
    'React Native Portfolio',
  ],
  authors: [{ name: 'Niraj Rai', url: siteUrl }],
  creator: 'Niraj Rai',
  publisher: 'Niraj Rai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Niraj Rai | React Native & Mobile Application Developer',
    description:
      'Explore the portfolio of Niraj Rai - React Native Developer specializing in iOS, Android, and web mobile applications.',
    url: siteUrl,
    siteName: 'Niraj Rai - React Native & Mobile App Developer Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/nirajImage.png',
        width: 1200,
        height: 630,
        alt: 'Niraj Rai - React Native & Mobile Application Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niraj Rai | React Native & Mobile Application Developer',
    description:
      'React Native & Mobile Application Developer with 3+ years shipping 12+ production apps.',
    creator: '@nirajraiy',
    images: ['/nirajImage.png'],
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
  themeColor: '#ffa500',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Niraj Rai',
        jobTitle: 'React Native & Mobile Application Developer',
        description:
          'React Native Developer & Mobile Application Developer with 3+ years experience building flagship Android, iOS, and cross-platform apps serving 20,000+ active users.',
        url: siteUrl,
        image: `${siteUrl}/nirajImage.png`,
        sameAs: [
          'https://github.com/nirajraiy',
          'https://www.linkedin.com/in/nirajrai7/',
        ],
        knowsAbout: [
          'React Native',
          'Mobile Application Development',
          'iOS Development',
          'Android Development',
          'TypeScript',
          'Next.js',
          'Swift',
          'Kotlin',
          'Redux Toolkit',
          'Firebase',
          'REST APIs',
          'App Store Publishing',
          'Google Play Console',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Niraj Rai Portfolio',
        description:
          'Portfolio of Niraj Rai - React Native & Mobile Application Developer',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
