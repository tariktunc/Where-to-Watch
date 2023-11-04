import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/footer";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>BURASI ARASTIRILACAK EKLENECEKTIR.</title>
            </Head>
            <Navbar />
            <div>{children}</div>
            {/* <Footer /> */}
        </>
    );
}
