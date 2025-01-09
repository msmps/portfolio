import type { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://msmp.me",
  },
};

export default function Home() {
  return (
    <>
      <h1 className="text-black dark:text-white font-bold animate-entry [--stagger:0]">
        Matt Simpson
      </h1>
      <p className="animate-entry [--stagger:1]">
        I&apos;m a software engineer, tech enthusiast, and creator. I currently
        work at <span className="font-semibold">Capital One</span> as a
        Principal Software Engineer — focusing on customer acquisitions.
      </p>

      <div className="animate-entry [--stagger:2] my-16">
        <h2 className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
          Writing
        </h2>

        <ul className="space-y-1 list-none">
          <li>
            <Link href="/p/hello-world">Hello, world</Link>
          </li>
        </ul>
      </div>

      <p className="animate-entry [--stagger:3]">
        Let&apos;s hang out{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/msmps_"
        >
          @msmps
        </a>{" "}
        or <a href="mailto:hello@msmp.me">hello@msmp.me</a>.
      </p>
    </>
  );
}
