import Navbar from "@/Components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
}
