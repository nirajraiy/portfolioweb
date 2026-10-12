import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Niraj Rai — React Native Developer',
    short_name: 'Niraj Rai',
    description:
      'Portfolio of Niraj Rai, React Native developer building iOS and Android apps with React Native, TypeScript, Kotlin and Swift.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07080b',
    theme_color: '#07080b',
    categories: ['portfolio', 'developer', 'technology'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
