import React from "react";
import "util/analytics";
import { ThemeProvider } from "util/theme";
import { SessionProvider } from "next-auth/react"
import Sidebar from "components/Sidebar";
import { useRouter } from "next/router";

function MyApp({ Component, session, ...pageProps }) {
    const router = useRouter();
    const showHeader = router.pathname === '/' || router.pathname === '/login' ? false : true;
    return (
        <ThemeProvider>
            <SessionProvider session={session}>
                {showHeader && <Sidebar />}
                <Component {...pageProps} />
            </SessionProvider>
        </ThemeProvider>
    );
}

export default MyApp;