import Head from 'next/head';
import Image from 'next/image';

import tomTaraPhoto from '../public/images/home/tom-tara-crop-hands.jpg';

const Home = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Tom & Tara'}</title>
            <meta content='Wedding of Tom Lawrence and Tara Zumwalt' name='description'/>
        </Head>

        <div className='flex h-full flex-col items-center'>
            <Image
                alt='Picture of Tom and Tara'
                className='object-contain md:hidden'
                priority
                src={tomTaraPhoto}
            />
            <div className='mt-5 text-center'>
                <p className='text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'TOM & TARA'}</p>
                <div className='text-3xl font-fino xl:text-4xl'>
                    <p>{'June 24, 2023'}</p>
                    <p className='font-ornaments'>{'T'}</p>
                    <p>{'Cedar Rapids, Iowa'}</p>
                </div>
            </div>
            <div className='my-5 flex w-2/3 flex-col items-center xl:w-1/2'>
                <Image
                    alt='Picture of Tom and Tara'
                    className='hidden object-contain md:block'
                    priority
                    src={tomTaraPhoto}
                />
            </div>

            <hr className='w-11/12'/>

            <div className='my-5 flex w-1/2 flex-col items-center pb-6'>
                <p className='text-center text-3xl font-fino xl:text-4xl'>{'Ceremony & Reception'}</p>
                <p className='text-center text-sm font-bold font-quiche md:text-md xl:text-lg'>{'HarMac Event Center'}</p>
                <p className='text-center text-sm font-quiche md:text-md xl:text-lg'>{'411 6th Ave SE'}</p>
                <p className='text-center text-sm font-quiche md:text-md xl:text-lg'>{'Cedar Rapids, Iowa'}</p>
                <a
                    className='font-bold font-quiche text-tt-green hover:text-tt-gold'
                    href='https://goo.gl/maps/59jygXq7WC8bMQ1f9'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    {'Map'}
                </a>
                <p className='text-center text-sm italic font-quiche md:text-md xl:text-lg'>{'Late Afternoon – Schedule Pending'}</p>
            </div>
        </div>
    </>
);

export default Home;
