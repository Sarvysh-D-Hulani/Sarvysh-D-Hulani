import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/project' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    status: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    problem: z.string().optional(),
    whyBuilt: z.string().optional(),
    process: z.string().optional(),
    challenges: z.string().optional(),
    learnings: z.string().optional(),
    futureImprovements: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
    attachedFile: z.string().optional(),
    outcome: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const journeyCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/journey' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    reflection: z.string().optional(),
    achievement: z.boolean().optional(),
    failure: z.boolean().optional(),
    lesson: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const galleryCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/gallery' }),
  schema: z.object({
    title: z.string(),
    album: z.string().optional(),
    image: z.string(),
    caption: z.string().optional(),
    date: z.date().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const knowledgeCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/knowledge' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    publishDate: z.date().optional(),
    difficulty: z.string().optional(),
    draft: z.boolean().optional(),
    metadata: metadataDefinition(),
  }),
});

const resourceCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/resource' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    difficulty: z.string().optional(),
    recommendation: z.string().optional(),
    personalNotes: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const readingCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/reading' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    status: z.string().optional(),
    rating: z.number().optional(),
    coverImage: z.string().optional(),
    startDate: z.date().optional(),
    finishDate: z.date().optional(),
    notes: z.string().optional(),
    quotes: z.array(z.string()).optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const newsletterCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/newsletter' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.date(),
    issue: z.number().optional(),
    draft: z.boolean().optional(),
    metadata: metadataDefinition(),
  }),
});

const resumeCollection = defineCollection({
  loader: glob({ pattern: ['*.yml', '*.yaml'], base: 'src/data/resume' }),
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    education: z
      .array(
        z.object({
          school: z.string(),
          degree: z.string(),
          graduationYear: z.string().optional(),
          coursework: z.array(z.string()).optional(),
        })
      )
      .optional(),
    experience: z
      .array(
        z.object({
          role: z.string(),
          company: z.string(),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .optional(),
    skills: z
      .array(
        z.object({
          category: z.string(),
          items: z.array(z.string()),
        })
      )
      .optional(),
    lookingFor: z.string().optional(),
  }),
});

const pageContentCollection = defineCollection({
  loader: glob({ pattern: ['*.yml', '*.yaml'], base: 'src/data/page' }),
  schema: z.object({
    hero: z
      .object({
        name: z.string().optional(),
        tagline: z.string().optional(),
        identity: z.string().optional(),
        currentFocus: z.string().optional(),
        profileImage: z.string().optional(),
        floatingCards: z
          .array(
            z.object({
              label: z.string(),
              value: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional(),
        actions: z
          .array(
            z.object({
              text: z.string(),
              href: z.string(),
              variant: z.string().optional(),
              icon: z.string().optional(),
            })
          )
          .optional(),
      })
      .optional(),
    now: z
      .object({
        building: z.string().optional(),
        learning: z.string().optional(),
        reading: z.string().optional(),
        goal: z.string().optional(),
        semester: z.string().optional(),
        experiments: z.string().optional(),
        buildingLabel: z.string().optional(),
        learningLabel: z.string().optional(),
        readingLabel: z.string().optional(),
        goalLabel: z.string().optional(),
        semesterLabel: z.string().optional(),
        experimentsLabel: z.string().optional(),
      })
      .optional(),
    about: z
      .object({
        story: z.string().optional(),
        values: z.array(z.object({ title: z.string(), description: z.string() })).optional(),
        philosophy: z.string().optional(),
        interests: z.array(z.string()).optional(),
        goals: z.array(z.string()).optional(),
        learning: z.array(z.string()).optional(),
        beliefs: z.array(z.string()).optional(),
        faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
      })
      .optional(),
    contact: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        email: z.string().optional(),
        socials: z
          .array(
            z.object({
              label: z.string(),
              href: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional(),
      })
      .optional(),
    exploreDivider: z
      .object({
        label: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    sections: z
      .array(
        z.object({
          id: z.string(),
          title: z.string().optional(),
          subtitle: z.string().optional(),
          tagline: z.string().optional(),
          sectionNumber: z.string().optional(),
          viewAllText: z.string().optional(),
          viewAllHref: z.string().optional(),
          visible: z.boolean().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  post: postCollection,
  project: projectCollection,
  journey: journeyCollection,
  gallery: galleryCollection,
  knowledge: knowledgeCollection,
  resource: resourceCollection,
  reading: readingCollection,
  newsletter: newsletterCollection,
  resume: resumeCollection,
  page: pageContentCollection,
};
