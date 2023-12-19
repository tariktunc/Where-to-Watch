import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      404 Page Not Found
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
