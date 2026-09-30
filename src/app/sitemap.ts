import { MetadataRoute } from 'next';

const siteUrl = 'https://portfolioweb-phi-one.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/site/about',
    '/site/skills',
    '/site/projects',
    '/site/experience',
    '/site/contact',
  ];

  return routes.map((route) => {
    let priority = 0.8;
    if (route === '') priority = 1.0;
    if (route === '/site/projects' || route === '/site/about') priority = 0.9;

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority,
    };
  });
}
