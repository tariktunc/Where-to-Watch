import Navbar from "@/Components/common/Navbar/Navbar";
export const metadata = {
  title: "People",
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
