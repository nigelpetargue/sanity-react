import { client } from '../lib/sanity';

export async function getPost() {
  const posts = await client.fetch(`*[_type == 'post'] {
    _id,
    title,
    slug,
    subheading,
    readingTime,
    body,
    publishedAt,
    mainImage,
    author -> {
      name,
      bio,
      image
    },
    categories[] -> {
      title
    }
  } | order(publishedAt desc)`);
  return posts;
}
