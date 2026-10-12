import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { liveProjects } from '@/data/projects';

const LAST_UPDATED = '2026-10-11';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly'; images?: string[] }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly', images: ['/nirajImage.png'] },
    {
      path: '/site/projects',
      priority: 0.9,
      changeFrequency: 'weekly',
      images: liveProjects.flatMap((p) => [p.icon, ...(p.screenshots ?? [])]).filter((x): x is string => !!x),
    },
    { path: '/site/about', priority: 0.9, changeFrequency: 'monthly', images: ['/nirajImage.png'] },
    { path: '/site/experience', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/site/skills', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/site/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cv/NirajResume.html', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    images: p.images?.map((src) => `${SITE_URL}${src}`),
  }));
}
