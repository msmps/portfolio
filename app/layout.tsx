import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { unstable_ViewTransition as ViewTransitions } from "react";
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
          <div className="min-h-screen flex flex-col p-6 pt-16 md:pt-32">
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
