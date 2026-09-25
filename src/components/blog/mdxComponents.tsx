import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

type Components = MDXRemoteProps["components"];

/* Prose-element overrides for MDX blog posts, in the I'm Frustrated dot Org
   system (globals.css tokens: sage on warm off-white, clay accent, rule
   hairlines, font-disp headings). Modeled on plan-my-party's blog mdxComponents. */
export const mdxComponents: Components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-disp font-semibold text-sage text-2xl md:text-[1.9rem] leading-snug tracking-[-0.03em] mt-12 mb-4 scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-disp font-semibold text-sage text-xl leading-snug tracking-[-0.02em] mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4 className="font-semibold text-ink text-lg mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-ink text-[17px] leading-[1.75] my-5" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 my-5 space-y-2 text-ink text-[17px] leading-[1.7]" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 my-5 space-y-2 text-ink text-[17px] leading-[1.7]" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1 marker:text-clay" {...props} />,
  a: ({ href = "#", ...props }: ComponentPropsWithoutRef<"a">) => {
    const external = /^https?:\/\//.test(href);
    const cls =
      "text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300";
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props} />
    ) : (
      <Link href={href} className={cls} {...props} />
    );
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-sage" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="my-6 border-l-2 border-clay pl-5 font-accent italic text-lg text-sage-2" {...props} />
  ),
  hr: () => <hr className="my-10 border-rule" />,
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-2xl border border-rule bg-card">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => <thead className="bg-bg-2" {...props} />,
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="px-4 py-2.5 text-left font-mono text-[0.66rem] uppercase tracking-[0.2em] text-sage-2 border-b border-rule"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-2.5 text-ink border-b border-rule align-top" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-sage" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre className="my-6 overflow-x-auto rounded-2xl bg-bg-2 p-4 text-[14px] text-ink" {...props} />
  ),
};
