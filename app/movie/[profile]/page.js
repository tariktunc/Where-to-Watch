// Buradaki errorPage calismamaktadir. MovieProfile icerisindeki API istekleri bu sayfaya alinacak, API isteklerinin status`u
// gozden gecirilecek ve sayfa ciktilari ona gore donecektir.
import Error from "@/Pages/Error/page";
import Lists from "@/Components/Items/Lists/Lists";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";
export const metadata = {
  title: "Movie",
  description: "Movie Description",
};
export default function Page({ params }) {
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"movie"} lists={"popular"} />
          </div>
        );
        break;
      case "now_playing":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"movie"} lists={"now_playing"} />
          </div>
        );
        break;
      case "upcoming":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"movie"} lists={"upcoming"} />
          </div>
        );
        break;
      case "top_rated":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"movie"} lists={"top_rated"} />
          </div>
        );
        break;
      default:
        // Check if the profile is a number between 1 and 2147483647
        const profileNumber = parseInt(params.profile);
        if (
          !isNaN(profileNumber) &&
          profileNumber >= 1 &&
          profileNumber <= 2147483647
        ) {
          return <MovieProfile status={"movie"} params={profileNumber} />;
        } else {
          return <Error page={params.profile} />;
        }
    }
  };

  return (
    <>
      {renderContent()}
    </>
  );
}
