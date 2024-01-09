import Lists from "@/Components/Items/Lists/Lists";
import Error from "@/Components/common/Error/page";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";

export default function Page({ params }) {
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"tv"} lists={"popular"} />
          </div>
        );
      case "airing_today":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"tv"} lists={"airing_today"} />
          </div>
        );
      case "on_the_air":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"tv"} lists={"on_the_air"} />
          </div>
        );
      case "top_rated":
        return (
          <div className="flex justify-center">
            <WhereToWatch />
            <Lists status={"tv"} lists={"top_rated"} />
          </div>
        );
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
