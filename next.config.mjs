import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const repo = 'hytale-docs-zh-cn';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: {
    // Required by `output: 'export'`; also avoids next/image errors in dev.
    unoptimized: true,
  },
  basePath: `/${repo}`,
};

export default withMDX(config);
