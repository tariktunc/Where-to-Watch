// Buradaki errorPage calismamaktadir. MovieProfile icerisindeki API istekleri bu sayfaya alinacak, API isteklerinin status`u gozden gecirilecek ve sayfa ciktilari ona gore donecektir.
import MovieProfile from "@/Components/MovieProfile/MovieProfile";
import Error from "@/Pages/Error/page";

export default function Page({ params }) {
  switch (params.slug) {
    case "movie":
      return <MovieProfile params={params} status={"movie"} />;
      break;
    case "tv":
      return <MovieProfile params={params} status={"tv"} />;
      break;
    default:
      return <Error />;
      break;
  }
}
