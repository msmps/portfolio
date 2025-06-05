import Link from "next/link";

export function Name() {
  return (
    <Link
      href="/"
      className="block text-neutral-600 dark:text-neutral-400 text-sm mb-6"
    >
      Matt Simpson
    </Link>
  );
}
