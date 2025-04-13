/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves content from a subdirectory equal to the repository name
  // If your repository is named differently than the basePath, adjust accordingly
  basePath: '/kubi-portfolio',
  images: {
    unoptimized: true,
  },
  // This ensures that assets are referenced correctly
  assetPrefix: '/kubi-portfolio',
}

export default nextConfig
