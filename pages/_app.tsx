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
                <meta charSet='utf-8'/>
                <meta content='width=device-width, initial-scale=1' name='viewport'/>
                <meta content='true' name='HandheldFriendly'/>

                <title>{'Tom & Tara'}</title>
                <meta content='Tom & Tara' name='title'/>
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' name='description'/>
                <meta content='Axel Zumwalt' name='author'/>

                {/* Favicons */}
                <link href='/favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180'/>
                <link href='/favicons/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'/>
                <link href='/favicons/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'/>
                <link href='/favicons/site.webmanifest' rel='manifest'/>
                <link color='#000000' href='/favicons/safari-pinned-tab.svg' rel='mask-icon'/>
                <link href='/favicons/favicon.ico' rel='shortcut icon'/>
                <meta content='#ffffff' name='msapplication-TileColor'/>
                <meta content='/favicons/browserconfig.xml' name='msapplication-config'/>
                <meta content='#ffffff' name='theme-color'/>

                {/* Open Graph / Facebook */}
                <meta content='website' property='og:type'/>
                <meta content='https://tomtarawedding.com/' property='og:url'/>
                <meta content='Tom & Tara' property='og:title'/>
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' property='og:description'/>
                <meta content='/images/home/tom-tara-crop-hands.jpg' property='og:image'/>

                {/* Twitter */}
                <meta content='summary_large_image' property='twitter:card'/>
                <meta content='https://tomtarawedding.com/' property='twitter:url'/>
                <meta content='Tom & Tara' property='twitter:title'/>
                <meta content='Wedding of Tom Lawrence and Tara Zumwalt' property='twitter:description'/>
                <meta content='/images/home/tom-tara-crop-hands.jpg' property='twitter:image'/>
            </Head>
            <NavigationLayout>
                <Component {...pageProps} />
            </NavigationLayout>
        </>
    );
}
