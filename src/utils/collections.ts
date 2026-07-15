import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export interface Project {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  gallery?: string[];
  tags?: string[];
  technologies?: string[];
  status?: string;
  github?: string;
  demo?: string;
  problem?: string;
  whyBuilt?: string;
  process?: string;
  challenges?: string;
  learnings?: string;
  futureImprovements?: string;
  startDate?: Date;
  endDate?: Date;
  featured?: boolean;
  order?: number;
  draft?: boolean;
  attachedFile?: string;
  Content?: any;
}

export async function fetchProjects(): Promise<Project[]> {
  const projects = await getCollection('project');
  const normalized = projects
    .filter((p) => !p.data.draft)
    .map((p) => ({
      id: p.id,
      slug: p.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...p.data,
    }))
    .sort((a, b) => (a.order || 100) - (b.order || 100));
  return normalized as Project[];
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchProjects();
  return projects.filter((p) => p.featured);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await fetchProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export interface JourneyEntry {
  id: string;
  slug: string;
  title: string;
  date: Date;
  type?: string;
  image?: string;
  description?: string;
  reflection?: string;
  achievement?: boolean;
  failure?: boolean;
  lesson?: string;
  order?: number;
  draft?: boolean;
  Content?: any;
}

export async function fetchJourney(): Promise<JourneyEntry[]> {
  const entries = await getCollection('journey');
  return entries
    .filter((e) => !e.data.draft)
    .map((e) => ({
      id: e.id,
      slug: e.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...e.data,
    }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf()) as JourneyEntry[];
}

export interface GalleryImage {
  id: string;
  slug: string;
  title: string;
  image: string;
  caption?: string;
  album?: string;
  category?: string;
  date?: Date;
  order?: number;
  draft?: boolean;
}

export async function fetchGallery(): Promise<GalleryImage[]> {
  const items = await getCollection('gallery');
  return items
    .filter((g) => !g.data.draft)
    .map((g) => ({
      id: g.id,
      slug: g.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...g.data,
    }))
    .sort((a, b) => (a.order || 100) - (b.order || 100)) as GalleryImage[];
}

export interface KnowledgeEntry {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  image?: string;
  publishDate?: Date;
  difficulty?: string;
  draft?: boolean;
  Content?: any;
}

export async function fetchKnowledge(): Promise<KnowledgeEntry[]> {
  const items = await getCollection('knowledge');
  return items
    .filter((k) => !k.data.draft)
    .map((k) => ({
      id: k.id,
      slug: k.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...k.data,
    }))
    .sort((a, b) => (b.publishDate?.valueOf() || 0) - (a.publishDate?.valueOf() || 0)) as KnowledgeEntry[];
}

export interface ResourceEntry {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  difficulty?: string;
  recommendation?: string;
  personalNotes?: string;
  link?: string;
  image?: string;
  order?: number;
  draft?: boolean;
}

export async function fetchResources(): Promise<ResourceEntry[]> {
  const items = await getCollection('resource');
  return items
    .filter((r) => !r.data.draft)
    .map((r) => ({
      id: r.id,
      slug: r.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...r.data,
    }))
    .sort((a, b) => (a.order || 100) - (b.order || 100)) as ResourceEntry[];
}

export interface ReadingEntry {
  id: string;
  slug: string;
  title: string;
  author?: string;
  status?: string;
  rating?: number;
  coverImage?: string;
  startDate?: Date;
  finishDate?: Date;
  notes?: string;
  quotes?: string[];
  category?: string;
  order?: number;
  draft?: boolean;
}

export async function fetchReading(): Promise<ReadingEntry[]> {
  const items = await getCollection('reading');
  return items
    .filter((r) => !r.data.draft)
    .map((r) => ({
      id: r.id,
      slug: r.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...r.data,
    }))
    .sort((a, b) => (a.order || 100) - (b.order || 100)) as ReadingEntry[];
}

export interface NewsletterIssue {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishDate: Date;
  issue?: number;
  draft?: boolean;
  Content?: any;
}

export async function fetchNewsletters(): Promise<NewsletterIssue[]> {
  const items = await getCollection('newsletter');
  return items
    .filter((n) => !n.data.draft)
    .map((n) => ({
      id: n.id,
      slug: n.id.replace(/\.md$/, '').replace(/\.mdx$/, ''),
      ...n.data,
    }))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()) as NewsletterIssue[];
}

export async function fetchPageContent(pageId: string) {
  const pages = await getCollection('page');
  const page = pages.find((p) => p.id.replace(/\.yml$/, '').replace(/\.yaml$/, '') === pageId);
  return page?.data || null;
}
