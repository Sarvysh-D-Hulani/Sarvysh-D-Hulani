import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Journey',
      href: getPermalink('/journey'),
    },
    {
      text: 'Explore',
      links: [
        { text: 'Knowledge Hub', href: getPermalink('/knowledge-hub') },
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Reading', href: getPermalink('/reading') },
      ],
    },
    {
      text: 'Writing',
      href: getBlogPermalink(),
    },
    {
      text: 'Resume',
      href: getPermalink('/resume'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'Journey', href: getPermalink('/journey') },
        { text: 'Knowledge Hub', href: getPermalink('/knowledge-hub') },
      ],
    },
    {
      title: 'Discover',
      links: [
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Writing', href: getBlogPermalink() },
        { text: 'Reading', href: getPermalink('/reading') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Resume', href: getPermalink('/resume') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com' },
    { ariaLabel: 'Substack', icon: 'tabler:brand-substack', href: '[add your Substack URL]' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Crafted with care by an ambitious student. &copy; ${new Date().getFullYear()} Digital HQ.
  `,
};
