import Navbar from "@/Components/common/Navbar/Navbar";
export const metadata = {
  title: "Tv Show",
  description: "Movie Description",
};
export default function Home({ children, params }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
