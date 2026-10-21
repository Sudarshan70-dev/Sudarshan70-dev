import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-6 py-16">
      <div className="section-card glow-border w-full max-w-2xl rounded-[2rem] p-10 text-center">
        <p className="section-label mx-auto mb-6">Lost In The Interface</p>
        <h1 className="section-title text-4xl font-semibold text-white sm:text-5xl">
          This page drifted out of the portfolio map.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          The case study or section you requested is not available right now. Head back to the main portfolio to keep exploring the product work.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
        >
          Return To Portfolio
        </Link>
      </div>
    </main>
  );
}
