import Footer from "components/footer";
import Header from "components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    description: "",
    icons: {
        apple: "",
        icon: [],
        shortcut: ""
    },
    keywords: [],
    themeColor: "",
    title: "",
    viewport: {
        initialScale: 1,
        width: "device-width"
    }
};

/**
 * A wrapper to build every page.
 * @returns A page wrapper.
 */
export default function Layout({ children }: { children: React.ReactNode; }): JSX.Element {
    return (
        <html lang="en">
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
