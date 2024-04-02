import { client } from "../lib/sanity"

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
  } | order(publishedAt desc)`)

  return posts
}

export async function getPostBySlug(slug) {
  const post = await client.fetch(`*[slug.current === ${slug}] {
    title,
    body,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }`)

  return post
}
