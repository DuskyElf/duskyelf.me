// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://duskyelf.me',
  integrations: [mdx()],

  markdown: {
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
  },

  redirects: {
    '/blog': '/blogs',
  },
});
