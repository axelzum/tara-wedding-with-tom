import Head from 'next/head';
import Script from 'next/script';


const Registry = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Gift Registry'}</title>
            <meta content="Tom and Tara's Wedding Gift Registry" name='description'/>
        </Head>

        <div className='flex h-full flex-col items-center'>
            <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'Gift Registry'}</h1>

            <div className='w-full pb-6'>
                <a
                    className='zola-registry-embed'
                    data-registry-key='tomtara624'
                    href='https://www.zola.com/registry/tomtara624'
                >
                    {'OurZola Wedding Registry'}
                </a>
                {/* eslint-disable-next-line @next/next/inline-script-id */}
                <Script>
                    {'!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");'}
                </Script>
            </div>
        </div>
    </>
);

export default Registry;
