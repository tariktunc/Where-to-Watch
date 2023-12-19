import HorizontallyItem from "@/Components/Items/HorizontallyItem/HorizontallyItem";
import Navbar from "@/Components/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <DiscoverSection />
      <div className="flex flex-col items-center">
        <HorizontallyItem urlStatus={"day"} status={"movie"} />
        <HorizontallyItem urlStatus={"day"} status={"tv"} />
        <HorizontallyItem urlStatus={"week"} status={"movie"} />
        <HorizontallyItem urlStatus={"week"} status={"tv"} />
      </div>
    </>
  );
}
