import Link from "next/link";

export default function Home({ page }) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <p className="mr-2 text-xl font-bold">{page}</p>
        <p>404 Page Not Found</p>
      </div>
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
