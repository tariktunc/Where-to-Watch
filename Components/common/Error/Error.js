import Link from "next/link";
export default function Home({ page }) {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 dark:text-white">
      <div
        role="main"
        className="min-w-full min-h-screen flex flex-col justify-center items-center "
      >
        <p className="text-2xl">/{page}</p>
        <p className="text-3xl">
          I'm so sorry, we couldn't find the page you were looking for.
        </p>
        <Link className="text-blue-500 text-xl" href="/" tabIndex={0} passHref>
          Home
        </Link>
      </div>
    </div>
  );
}
