import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-neutral-900",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <main className="max-w-2xl px-6 lg:px-0 mt-16 lg:mt-32 grid grid-cols-[auto_1fr_auto] mx-auto mb-16 min-h-[calc(100vh-176px)] lg:min-h-[calc(100vh-240px)]">
          {children}
        </main>

        <footer className="border-t dark:border-t-neutral-400 h-12">
          <section className="max-w-2xl px-6 lg:px-0 mx-auto flex items-center justify-between h-full text-sm text-neutral-600 dark:text-neutral-400">
            <span>&copy; {new Date().getFullYear()} Matt Simpson</span>
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://github.com/msmps/portfolio/commit/${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`}
              >
                {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.slice(0, 7)}
              </a>
            ) : (
              <>e63f592</>
            )}
          </section>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
