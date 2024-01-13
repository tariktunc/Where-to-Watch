import Link from "next/link";

export default function Home({ page }) {
  return (
    <div className="flex flex-col dark:text-white text-2xl">
      <p>/{page}</p>
      <p>404 Page Not Found</p>
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
