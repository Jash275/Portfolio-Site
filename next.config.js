/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "jashjivani.dev" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/jash/JashResume.pdf", destination: "/resume/jash-jivani-resume.pdf", permanent: true },
      { source: "/jash/profile.webp", destination: "/images/profile.webp", permanent: true },
      { source: "/jash/degree.webp", destination: "/images/logos/djsce-degree.webp", permanent: true },
      { source: "/jash/12th.webp", destination: "/images/logos/svp-vidyalaya.webp", permanent: true },
      { source: "/jash/10th.webp", destination: "/images/logos/shantinagar-high-school.webp", permanent: true },
      { source: "/jash/color_papers_logo.webp", destination: "/images/logos/color-papers-india.webp", permanent: true },
      { source: "/jash/trinity_logo.webp", destination: "/images/logos/djsce-trinity.webp", permanent: true },
      { source: "/projects/:slug/:asset", destination: "/images/projects/:slug/:asset", permanent: true },
      { source: "/noise.png", destination: "/images/noise.png", permanent: true },
      { source: "/opengraph-image.png", destination: "/images/opengraph-image.png", permanent: true },
      { source: "/favicon.ico", destination: "/icons/favicon.ico", permanent: true },
      { source: "/apple-touch-icon.png", destination: "/icons/apple-touch-icon.png", permanent: true },
      { source: "/icon-192.png", destination: "/icons/icon-192.png", permanent: true },
      { source: "/icon-512.png", destination: "/icons/icon-512.png", permanent: true },
      { source: "/maskable-icon-512.png", destination: "/icons/maskable-icon-512.png", permanent: true },
      { source: "/icon.svg", destination: "/icons/icon.svg", permanent: true },
      { source: "/site.webmanifest", destination: "/icons/site.webmanifest", permanent: true },
      { source: "/nextjs.svg", destination: "/icons/nextjs.svg", permanent: true },
      { source: "/vercel.svg", destination: "/icons/vercel.svg", permanent: true },
    ];
  },
};

module.exports = nextConfig;
