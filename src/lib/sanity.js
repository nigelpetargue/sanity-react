import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'trwvamvp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-12-02',
});
