// import Footer from '@/components/constants/Footer';
// import './globals.css';
// import { ReactNode } from 'react';
// import Navbar from '@/components/constants/Navbar';
// // import Navbar from '@/components/constants/Navbar';

// export const metadata = {
//   title: 'Niraj | Portfolio',
//   description: 'Niraj Portfolio',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main>{children}</main>
//          <Footer />
//       </body>
//     </html>
//   );
// }
import { ReactNode } from 'react';
import Navbar from '@/components/constants/Navbar';
import Footer from '@/components/constants/Footer';
import PageTransition from '@/components/PageTransition';
import './globals.css';

export const metadata = {
  title: 'Niraj Rai | Senior React Native Developer',
  description: 'Portfolio of Niraj Rai - Senior React Native Developer with 2.5+ years experience building enterprise-grade mobile applications',
  keywords: 'React Native, TypeScript, Mobile Development, iOS, Android, JavaScript, Portfolio',
  authors: [{ name: 'Niraj Rai' }],
  creator: 'Niraj Rai',
  openGraph: {
    title: 'Niraj Rai | Senior React Native Developer',
    description: 'Portfolio showcasing React Native development expertise and mobile app projects',
    url: 'https://portfolioweb-phi-one.vercel.app',
    siteName: 'Niraj Rai Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niraj Rai | Senior React Native Developer',
    description: 'Portfolio showcasing React Native development expertise and mobile app projects',
    creator: '@nirajraiy',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffa500" />
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
