import Navbar from "@/Components/common/Navbar/Navbar";
export const metadata = {
  title: "Movie",
  description: "Movie Description",
};
export default function Home({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
