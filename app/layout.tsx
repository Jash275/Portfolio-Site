import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { incognito } from "@/styles/fonts/font";
import { gitlabmono } from "@/styles/fonts/font";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const description = "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.";

export const metadata: Metadata = {
  title: "Jash Jivani | About",
  metadataBase: new URL("https://jashjivani.dev"),
  description,
  openGraph: {
    title: "Jash Jivani | About",
    url: "https://jashjivani.dev",
    siteName: "jashjivani.dev",
    locale: "en-US",
    type: "website",
    description,
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jash Jivani | About",
    description,
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://jashjivani.dev",
  },
  icons: { icon: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }, { url: "/icon.svg?v=2", type: "image/svg+xml" }, { url: "/icon-192.png?v=2", type: "image/png", sizes: "192x192" }, { url: "/icon-512.png?v=2", type: "image/png", sizes: "512x512" }, { url: "/maskable-icon-512.png?v=2", type: "image/png", sizes: "512x512" }], apple: "/apple-touch-icon.png?v=2" },
  manifest: "/site.webmanifest?v=2",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#18181b" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
            { "@context": "https://schema.org", "@type": "Person", name: "Jash Jivani", url: "https://jashjivani.dev", image: "https://jashjivani.dev/opengraph-image.png", sameAs: ["https://github.com/Jash275", "https://www.linkedin.com/in/jash-jivani-b7b3432b0/"] },
            { "@context": "https://schema.org", "@type": "WebSite", name: "Jash Jivani", url: "https://jashjivani.dev" }
          ]) }} />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
