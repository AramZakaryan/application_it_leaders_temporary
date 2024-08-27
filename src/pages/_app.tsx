import "@/styles/globals.css";
import type {AppProps} from "next/app";
import "library_it_leaders_temporary/css"

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
