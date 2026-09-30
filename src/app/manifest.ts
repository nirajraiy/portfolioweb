import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Niraj Rai | React Native & Mobile Application Developer',
    short_name: 'Niraj Rai',
    description:
      'Portfolio of Niraj Rai - React Native & Mobile Application Developer with 3+ years experience building iOS, Android, and cross-platform mobile apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d1a',
    theme_color: '#ffa500',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
