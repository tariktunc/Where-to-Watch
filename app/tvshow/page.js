import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import Lists from "@/Components/Items/Lists";

export default function Home() {
  return (
    <div className="flex justify-center">
      <WhereToWatch />
      <Lists status={"tv"} lists={"popular"} />
    </div>
  );
}
