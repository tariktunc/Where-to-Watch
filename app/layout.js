import "@/app/globals.css";
import { Rubik } from "next/font/google";
import ReduxProvider from "@/utils/ReduxProvider";

const fontName = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://where-to-watch-blakfy.netlify.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Where to Watch — Discover Movies & TV Shows",
    template: "%s | Where to Watch",
  },
  description:
    "Discover millions of movies and TV shows. Find where to stream, rent, or buy. Browse trending content, explore awards, and read reviews.",
  keywords: [
    "movies",
    "tv shows",
    "streaming",
    "where to watch",
    "netflix",
    "reviews",
    "awards",
    "TMDB",
  ],
  authors: [{ name: "Where to Watch" }],
  creator: "Where to Watch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Where to Watch",
    title: "Where to Watch — Discover Movies & TV Shows",
    description:
      "Discover millions of movies and TV shows. Find where to stream, rent, or buy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Where to Watch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Watch — Discover Movies & TV Shows",
    description:
      "Discover millions of movies and TV shows. Find where to stream, rent, or buy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontName.className} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link
          rel="preconnect"
          href="https://image.tmdb.org"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
