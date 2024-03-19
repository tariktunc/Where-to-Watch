import Link from "next/link";
export default function Home({ page }) {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <div
        role="main"
        className="min-w-full min-h-screen flex flex-col justify-center items-center "
      >
        <p>/{page}</p>
        <p>404 Page Not Found</p>
        <Link className="text-blue-500" href="/" tabIndex={0} passHref>
          Home
        </Link>
      </div>
    </div>
  );
}
