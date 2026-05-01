import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex min-h-screen items-center justify-center bg-slate-50 p-6 font-sans text-slate-900"
        suppressHydrationWarning
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            404
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-base text-slate-600">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Go back home
          </Link>
        </div>
      </body>
    </html>
  );
}
