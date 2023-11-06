import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "300", subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={rubik.className}>
            <body>{children}</body>
        </html>
    );
}
