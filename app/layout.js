import "./globals.css";
import { Rubik } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/Redux/store";

const rubik = Rubik({ weight: "300", subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={rubik.className}>
            <body>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
