"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="text-center px-6 max-w-md">
        <p className="font-mono text-amber text-sm tracking-[0.3em] mb-4">ERR</p>
        <h1 className="font-serif text-4xl md:text-6xl font-semibold text-ink tracking-[-0.02em]">
          Something went wrong<span className="text-amber">.</span>
        </h1>
        <p className="script text-2xl md:text-3xl mt-4 -rotate-1">give it another shot.</p>
        <p className="text-muted-warm text-lg mt-6 mb-9 leading-relaxed">
          We hit a snag. Not your fault.
        </p>
        <button onClick={reset} className="btn-forest">
          Try again
        </button>
      </div>
    </div>
  );
}
