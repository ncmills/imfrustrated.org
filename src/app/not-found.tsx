import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="text-center px-6 max-w-md">
        <p className="font-mono text-amber text-sm tracking-[0.3em] mb-4">404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-ink tracking-[-0.02em]">
          This page took a walk<span className="text-amber">.</span>
        </h1>
        <p className="script text-2xl md:text-3xl mt-4 -rotate-1">but we&rsquo;re still here.</p>
        <p className="text-muted-warm text-lg mt-6 mb-9 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist — but we do. Come home.
        </p>
        <Link href="/" className="btn-forest">
          Back to home
        </Link>
      </div>
    </div>
  );
}
