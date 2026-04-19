import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-charcoal">
          404<span className="text-coral">.</span>
        </h1>
        <p className="text-muted text-lg mt-4 mb-8">
          This page doesn&rsquo;t exist — but we do.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-paper text-sm font-medium rounded-full hover:bg-forest-deep transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
