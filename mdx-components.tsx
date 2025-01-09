import { ComponentPropsWithoutRef } from "react";

const overrides = {
  h1: (props: any) => (
    <h1 className="font-medium text-black dark:text-white mb-0" {...props} />
  ),
  h2: (props: any) => (
    <h2
      className="font-medium text-black dark:text-white mt-8 mb-3"
      {...props}
    />
  ),
  a: ({ href, ...props }: ComponentPropsWithoutRef<"a">) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  },
};

declare global {
  type MDXComponents = typeof overrides;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...overrides,
  };
}
