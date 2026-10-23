import type { CollectionEntry } from 'astro:content';

export type StoryEntry = CollectionEntry<'posts'> | CollectionEntry<'projects'>;

/** Format a date for display, pinned to UTC so builds are deterministic. */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Newest first. */
export function byNewestFirst(a: StoryEntry, b: StoryEntry): number {
  return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

/** Strip markdown/HTML down to plain text for card excerpts. */
function toPlainText(body: string): string {
  return body
    .replace(/<[^>]+>/g, ' ') // html tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/^#{1,6}\s+/gm, '') // headings
    .replace(/[*_~`>]+/g, '') // emphasis/quote markers
    .replace(/\s+/g, ' ')
    .trim();
}

/** Description if present, otherwise a plain-text excerpt from the body. */
export function excerpt(entry: StoryEntry, maxChars = 190): string {
  const source = entry.data.description ?? toPlainText(entry.body ?? '');
  if (source.length <= maxChars) return source;
  const cut = source.slice(0, maxChars);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 0))}…`;
}

/** Count entries per tag across both collections. */
export function countTags(
  posts: StoryEntry[],
  projects: StoryEntry[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const entry of [...posts, ...projects]) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return counts;
}
