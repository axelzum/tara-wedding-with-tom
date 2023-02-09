import Head from 'next/head';

const Visit = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Visit'}</title>
            <meta content='Travel and accommodation for the wedding' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino my-5 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Hotels'}</h1>
        </div>
    </>
);

export default Visit;
