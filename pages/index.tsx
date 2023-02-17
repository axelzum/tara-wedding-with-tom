import Head from 'next/head';
import Image from 'next/image';

import tomTaraPhoto from '../public/images/home/tom-tara-crop-hands.jpg';

const Home = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Tom & Tara'}</title>
            <meta content='Wedding of Tom Lawrence and Tara Zumwalt' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <Image
                alt='Picture of Tom and Tara'
                className='object-contain md:hidden'
                priority
                src={tomTaraPhoto}
            />
            <div className='mt-5 text-center'>
                <p className='font-fino font-bold lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'TOM & TARA'}</p>
                <div className='font-fino text-3xl xl:text-4xl'>
                    <p>{'June 24, 2023'}</p>
                    <p className='font-ornaments'>{'T'}</p>
                    <p>{'Cedar Rapids, Iowa'}</p>
                </div>
            </div>
            <div className='flex flex-col my-5 items-center w-2/3 xl:w-1/2'>
                <Image
                    alt='Picture of Tom and Tara'
                    className='object-contain hidden md:block'
                    priority
                    src={tomTaraPhoto}
                />
            </div>

            <hr className='w-11/12'/>

            <div className='flex flex-col my-5 items-center w-1/2 pb-6'>
                <p className='font-fino text-center text-3xl xl:text-4xl'>{'Ceremony & Reception'}</p>
                <p className='font-quiche text-center font-bold text-sm md:text-md xl:text-lg'>{'HarMac Event Center'}</p>
                <p className='font-quiche text-center text-sm md:text-md xl:text-lg'>{'411 6th Ave SE'}</p>
                <p className='font-quiche text-center text-sm md:text-md xl:text-lg'>{'Cedar Rapids, Iowa'}</p>
                <a
                    className='font-quiche text-tt-green font-bold hover:text-tt-gold'
                    href='https://goo.gl/maps/59jygXq7WC8bMQ1f9'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    {'Map'}
                </a>
                <p className='font-quiche text-center italic text-sm md:text-md xl:text-lg'>{'Late Afternoon – Schedule Pending'}</p>
            </div>
        </div>
    </>
);

export default Home;
