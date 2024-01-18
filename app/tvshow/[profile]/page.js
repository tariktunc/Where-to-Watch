import Lists from "@/Components/Items/Lists";
import Error from "@/Components/common/Error/Error";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";

export default function Page({ params }) {
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return <Lists status={"tv"} lists={"popular"} />;
      case "airing_today":
        return <Lists status={"tv"} lists={"airing_today"} />;
      case "on_the_air":
        return <Lists status={"tv"} lists={"on_the_air"} />;
      case "top_rated":
        return <Lists status={"tv"} lists={"top_rated"} />;
      default:
        // Check if the profile is a number between 1 and 2147483647
        const profileNumber = parseInt(params.profile);
        if (
          !isNaN(profileNumber) &&
          profileNumber >= 1 &&
          profileNumber <= 2147483647
        ) {
          return <MovieProfile status={"tv"} params={profileNumber} />;
        } else {
          return <Error page={params.profile} />;
        }
    }
  };

  return <>{renderContent()}</>;
}
