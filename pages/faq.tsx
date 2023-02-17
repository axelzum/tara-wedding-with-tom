import Head from 'next/head';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'FAQ'}</title>
            <meta content='Frequently Asked Questions About The Wedding' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino font-bold my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Frequently Asked Questions'}</h1>

            <div className='font-quiche text-center w-5/6'>
                <h2 className='text-lg font-bold'>{'What are transportation and parking options at the venue?'}</h2>
                <p className='text-left'>{'Because guests are staying in multiple hotels, there will not be a shuttle provided to the venue from the hotels. However, the venue has plenty of parking and allows cars to be left overnight. Uber and Lyft are also both options in Cedar Rapids.'}</p>
                <h2 className='text-lg font-bold mt-6'>{'Are the ceremony and reception at the same place?'}</h2>
                <p className='text-left'>{'Yes! Both the ceremony and reception will be at the HarMac in downtown Cedar Rapids!'}</p>
            </div>
        </div>
    </>
);

export default Faq;
