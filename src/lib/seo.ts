export const SITE_URL = 'https://portfolioweb-phi-one.vercel.app';

export const SITE_NAME = 'Niraj Rai — React Native Developer';

export const PERSON = {
  name: 'Niraj Rai',
  alternateName: ['Neeraj Rai', 'Niraj Rai Developer', 'nirajraiy'],
  jobTitle: 'React Native Developer',
  email: 'nirajraibxr657@gmail.com',
  telephone: '+91-7481955476',
  linkedin: 'https://www.linkedin.com/in/nirajrai7/',
  github: 'https://github.com/nirajraiy',
};

export const CORE_KEYWORDS = [
  'Niraj Rai',
  'Neeraj Rai',
  'Niraj Rai React Native',
  'Niraj Rai developer',
  'React Native developer',
  'React Native developer India',
  'React Native developer Mohali',
  'React Native developer Chandigarh',
  'React Native developer Punjab',
  'hire React Native developer',
  'freelance React Native developer',
  'remote React Native developer',
  'mobile app developer',
  'mobile application developer India',
  'mobile app developer Mohali',
  'mobile app developer Chandigarh',
  'iOS app developer',
  'Android app developer',
  'cross-platform app developer',
  'React Native engineer',
  'TypeScript developer',
  'Kotlin developer',
  'Swift developer',
  'Next.js developer',
  'frontend developer',
  'software engineer India',
  'App Store publishing',
  'Google Play publishing',
  'React Native portfolio',
];

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
