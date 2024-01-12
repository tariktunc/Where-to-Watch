import HorizontallyItem from "@/Components/HorizontallyItem/HorizontallyItem";
import Navbar from "@/Components/common/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <DiscoverSection />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-col">
          <HorizontallyItem urlStatus={"day"} status={"movie"} />
          <HorizontallyItem urlStatus={"day"} status={"tv"} />
          <HorizontallyItem urlStatus={"week"} status={"movie"} />
          <HorizontallyItem urlStatus={"week"} status={"tv"} />
        </div>
      </div>
    </>
  );
}
