import { client } from '../lib/sanity';

export async function getPost() {
  const posts = await client.fetch(`*[_type == "post"]`);
  return posts;
}
