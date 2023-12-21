import Movies from "@/Pages/Movies/page";
import Tv from "@/Pages/Tv/page";
import Popular from "@/Pages/Popular/page";
import Search from "@/Pages/Search/page";
import Error from "@/Pages/Error/page";

export const metadata = {
  title: "...",
  description: "...",
};

export default function Page({ params }) {
  switch (params.slug) {
    case "movie":
      return <Movies />;
    case "tv":
      return <Tv />;
    case "popular":
      return <Popular />;
    case "search":
      return <Search />;
    default:
      return <Error />;
  }
}
