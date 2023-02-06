import Head from 'next/head';
import Image from 'next/image';

import tomTaraPhoto from '../public/index/tom-tara-crop-hands.jpg';

const Home = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Tom & Tara'}</title>
            <meta content='Wedding of Tom Lawrence and Tara Zumwalt' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center md:w-full overflow-auto'>
            <h1 className='font-henriette my-5 lg:my-10 text-tt-green text-4xl md:text-5xl xl:text-6xl'>{'TOM & TARA'}</h1>
            <div className='flex flex-col lg:flex-row items-center border-tt-gold border-2 w-5/6'>
                <div className='lg:w-7/12 m-5'>
                    <Image
                        alt='Picture of Tom and Tara'
                        className='object-contain'
                        priority
                        src={tomTaraPhoto}
                    />
                </div>
                <div className='text-center text-tt-gold lg:w-5/12 m-5'>
                    <p className='text-sm sm:text-lg lg:text-xl'>{'We look forward to you joining us for our wedding'}</p>
                    <p className='text-md sm:text-xl lg:text-2xl font-henriette font-bold'>{'June 24, 2023'}</p>
                    <p className='text-sm sm:text-lg lg:text-lg'>{'in Cedar Rapids, Iowa'}</p>
                </div>
            </div>
            <div className='w-5/6 mt-5 text-center text-md sm:text-lg lg:text-xl text-tt-gold italic'>
                {'Check back, additional details will be added soon'}
            </div>
        </div>
    </>
);

export default Home;
