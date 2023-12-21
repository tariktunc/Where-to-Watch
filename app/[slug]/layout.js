import Navbar from "@/Components/common/Navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
