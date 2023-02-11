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
            <div className='mt-5'>
                <p className='font-fino font-bold lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'TOM & TARA'}</p>
                <div className='font-fino text-center text-2xl md:text-3xl xl:text-4xl'>
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
                <p className='font-fino text-center text-2xl md:text-3xl xl:text-4xl'>{'Ceremony & Reception'}</p>
                <p className='font-quiche text-center text-sm md:text-md xl:text-lg'>{'HarMac Event Center, Downtown Cedar Rapids'}</p>
                <p className='font-quiche text-center text-sm md:text-md xl:text-lg'>{'Late Afternoon – Schedule Pending'}</p>
                <iframe
                    className='w-full h-[250px] md:h-[300px] lg:h-[400px]'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.80122729655!2d-91.66361284886887!3d41.97576737911249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e4f75658da978f%3A0x611e858f80808957!2sThe%20Harmac!5e1!3m2!1sen!2sus!4v1676152152275!5m2!1sen!2sus'
                />
            </div>
        </div>
    </>
);

export default Home;
