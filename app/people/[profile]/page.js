// Buradaki errorPage calismamaktadir. MovieProfile icerisindeki API istekleri bu sayfaya alinacak, API isteklerinin status`u
// gozden gecirilecek ve sayfa ciktilari ona gore donecektir.
import Error from "@/Pages/Error/page";
import Lists from "@/Components/Items/Lists/Lists";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
export const metadata = {
  title: "People",
  description: "Movie Description",
};
export default function Page({ params }) {
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return <Lists status={"person"} lists={"popular"} />;
        break;
      default:
        return <Error page={params.profile} />;
        break;
    }
  };

  return (
    <div className="flex justify-center">
      <WhereToWatch />
      {renderContent()}
    </div>
  );
}
