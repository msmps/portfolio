import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://msmp.me"),
  title: {
    default: "Matt Simpson",
    template: "%s | Matt Simpson",
  },
  description: "Developer, tech enthusiast, and creator.",
  openGraph: {
    title: "Matt Simpson",
    description: "Developer, tech enthusiast, and creator.",
    url: "https://msmp.me",
    siteName: "Matt Simpson",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  twitter: {
    title: "Matt Simpson",
    card: "summary_large_image",
  },
  verification: {
    google: "APic1vOmr1FaqkHieIJWn8cww0Iydw5jALkRt0LZp3o",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={[
          "text-neutral-700 bg-white dark:text-neutral-300 dark:bg-neutral-900",
          geistSans.variable,
          newsreader.variable,
        ].join(" ")}
      >
        <body className="antialiased">
          <div className="min-h-screen flex flex-col p-6 md:pt-16">
            <main className="max-w-2xl mx-auto w-full space-y-6">
              {children}
            </main>
          </div>

          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
