import Error from "@/Components/common/Error/page";
import Lists from "@/Components/Items/Lists/Lists";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";
export const metadata = {
  title: "Movie",
  description: "Movie Description",
};
export default function Page({ params }) {
  metadata.title = `Movie - ${params.profile}`;
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return <Lists status={"movie"} lists={"popular"} />;
        break;
      case "now_playing":
        return <Lists status={"movie"} lists={"now_playing"} />;
        break;
      case "upcoming":
        return <Lists status={"movie"} lists={"upcoming"} />;
        break;
      case "top_rated":
        return <Lists status={"movie"} lists={"top_rated"} />;
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

  return <>{renderContent()}</>;
}
