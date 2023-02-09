import {Analytics} from '@vercel/analytics/react';
import Head from 'next/head';
import Script from 'next/script';
import type {AppProps} from 'next/app';

import {NavigationLayout} from '../components/navigation/navigation-layout';

import '../styles/globals.css';

export default function App({Component, pageProps}: AppProps): React.ReactElement {
    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-FDQ4F9SQGS' strategy='afterInteractive'/>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-FDQ4F9SQGS', {
                            page_path: window.location.pathname,
                    });`
                }}
                id='google-analytics'
                strategy='afterInteractive'
            />
            <Analytics/>
            <Head>
                <meta charSet='utf-8' />
                <meta content='width=device-width, initial-scale=1' name='viewport'/>
                <meta content='true' name='HandheldFriendly'/>

                <meta content='Tom & Tara' name='title' />
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' name='description' />
                <meta content='Axel Zumwalt' name='author' />

                {/* Favicons */}
                <link href='/favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='120x120'/>
                <link href='/favicons/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'/>
                <link href='/favicons/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'/>
                <link href='/favicons/site.webmanifest' rel='manifest'/>
                <link color='#577d6a' href='/favicons/safari-pinned-tab.svg' rel='mask-icon'/>
                <link href='/favicons/favicon.ico' rel='shortcut icon'/>
                <meta content='#577d6a' name='msapplication-TileColor'/>
                <meta content='/favicons/browserconfig.xml' name='msapplication-config'/>
                <meta content='#577d6a' name='theme-color'/>

                {/* Open Graph / Facebook */}
                <meta content='website' property='og:type'/>
                <meta content='https://metatags.io/' property='og:url'/>
                <meta content='Tom & Tara' property='og:title'/>
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' property='og:description'/>
                <meta content='/T&T-black.png' property='og:image'/>

                {/* Twitter */}
                <meta content='summary_large_image' property='twitter:card'/>
                <meta content='https://metatags.io/' property='twitter:url'/>
                <meta content='Tom & Tara' property='twitter:title'/>
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' property='twitter:description'/>
                <meta content='/T&T-black.png' property='twitter:image'/>

                <link href='https://use.typekit.net/tlo2hmw.css' rel='stylesheet'/>
            </Head>
            <NavigationLayout>
                <Component {...pageProps} />
            </NavigationLayout>
        </>
    );
}
