// Buradaki errorPage calismamaktadir. MovieProfile icerisindeki API istekleri bu sayfaya alinacak, API isteklerinin status`u
// gozden gecirilecek ve sayfa ciktilari ona gore donecektir.
import Error from "@/Pages/Error/page";
export const metadata = {
  title: "Movie",
  description: "Movie Description",
};
export default function Page({ params }) {
  metadata.title = params.profile;
  switch (params.profile) {
    case "popular":
      return <p>popular page</p>;
      break;
    case "now_playing":
      return <p>Now Playing</p>;
      break;
    case "upcoming":
      return <p>Up coming</p>;
      break;
    case "top_rated":
      return <p>Top Rating</p>;
      break;
    default:
      return <Error page={params.profile} />;
      break;
  }
}
