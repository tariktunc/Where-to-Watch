import Lists from "@/Components/Items/Lists/Lists";
import Error from "@/Pages/Error/page";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";

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
        return <Error page={params.profile} />;
    }
  };

  return (
    <div className="flex justify-center">
      <WhereToWatch />
      {renderContent()}
    </div>
  );
}
