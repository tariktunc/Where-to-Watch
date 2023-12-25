// Buradaki errorPage calismamaktadir. MovieProfile icerisindeki API istekleri bu sayfaya alinacak, API isteklerinin status`u
// gozden gecirilecek ve sayfa ciktilari ona gore donecektir.
import MovieProfile from "@/Components/MovieProfile/MovieProfile";
import Error from "@/Pages/Error/page";

export default function Page({ params }) {
  switch (params.profile) {
    case "popular":
      return <p>popular page</p>;
      break;
    case "airing_today":
      return <p>Airin today</p>;
      break;
    case "on_the_air":
      return <p>On the air</p>;
      break;
    case "top_rated":
      return <p>Top Rated</p>;
      break;
    default:
      return <Error page={params.profile} />;
      break;
  }
}
