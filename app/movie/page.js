import Lists from "@/Components/Items/Lists/Lists";

export default function Home({ params }) {
  return (
    <>
      <Lists status={"movie"} lists={"popular"} />
    </>
  );
}
