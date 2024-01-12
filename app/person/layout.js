import Navbar from "@/Components/common/Navbar/Navbar";
export default function Home({children}){
  return (
    <>
      <Navbar />
      <p>Person Layout Page</p>
      {children}
    </>
  );
};
