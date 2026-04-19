"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal">
          Something went wrong<span className="text-coral">.</span>
        </h1>
        <p className="text-muted text-lg mt-4 mb-8">
          We hit a snag. Give it another shot.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-paper text-sm font-medium rounded-full hover:bg-forest-deep transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
