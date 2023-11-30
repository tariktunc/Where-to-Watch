import Link from "next/link";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";

export default function Page({ params }) {
  switch (params.slug) {
    case "movie":
      return <MovieProfile params={params} status={"movie"} />;
      break;
    case "tv":
      return <MovieProfile params={params} status={"tv"} />;
      break;
    case "popular":
      return <MovieProfile params={params} status={"popular"} />;
      break;
    default:
      return <ErrorPage />;
      break;
  }
}

function ErrorPage() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
      404 This page could not be found.
      <hr></hr>
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
