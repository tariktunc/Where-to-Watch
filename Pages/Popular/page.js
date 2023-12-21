import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import Popular from "@/Components/Items/Popular/Popular";

export default function Home() {
  return (
    <div className="flex justify-center">
      <WhereToWatch />
      <Popular status={"movie"} />
    </div>
  );
}
