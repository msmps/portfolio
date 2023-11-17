import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

const PostLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href } = props;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a rel="noopener noreferrer" target="_blank" {...props} />;
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-neutral dark:prose-invert prose-a:underline-offset-2 prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-900 prose-a:transition-colors prose-a:duration-200">
      <Component
        components={{
          a: PostLink,
        }}
      />
    </article>
  );
}
