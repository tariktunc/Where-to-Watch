import Link from "next/link";

export default function ErrorPage({ page }) {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
      <main className="min-w-full min-h-screen flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-2xl text-primary dark:text-white/60">/{page}</p>
        <p className="text-3xl text-primary dark:text-white">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <Link
          className="text-accent text-xl font-semibold hover:underline"
          href="/"
          aria-label="Go back to homepage"
        >
          Go Home
        </Link>
      </main>
    </div>
  );
}
