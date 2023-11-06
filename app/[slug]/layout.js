import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            {/* <Footer /> */}
        </>
    );
}
