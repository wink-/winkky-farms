import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const [posts, projects] = await Promise.all([
    getCollection('posts', ({ data }) => !data.draft),
    getCollection('projects', ({ data }) => !data.draft),
  ]);

  const items = [
    ...posts.map((entry) => ({
      title: `${entry.data.title} — field note`,
      description: entry.data.description ?? '',
      link: `/stories/${entry.id}/`,
      pubDate: entry.data.pubDate,
    })),
    ...projects.map((entry) => ({
      title: `${entry.data.title} — project`,
      description: entry.data.description ?? '',
      link: `/projects/${entry.id}/`,
      pubDate: entry.data.pubDate,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Winkky Farms — stories, projects, and tools from a small working farm',
    description:
      'Seasonal stories from the fields, hands-on farm projects, and the tools we rely on — from three generations of the Winkky family.',
    site: context.site,
    items,
    customData: '<language>en-us</language>',
  });
}
