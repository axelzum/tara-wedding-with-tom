import '../styles/globals.css';
import type {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps): React.ReactElement {
    return (
        <>
            <link href='https://use.typekit.net/tlo2hmw.css' rel='stylesheet' />
            <Component {...pageProps} />
        </>
    );
}
