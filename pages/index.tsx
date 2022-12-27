import Head from 'next/head';
import Image from 'next/image';
import leafArt from '../public/home/leaf-art.png';
import peonyArt from '../public/home/peony-art.png';
import tomTaraPhoto from '../public/home/tom-tara-crop-hands.jpg';

export default function Home(): React.ReactElement {
    return (
        <div className='relative flex h-screen flex-col items-center'>
            <Head>
                <title>{'Tom & Tara'}</title>
                <meta content='Tom and Tara Wedding' name='description'/>
            </Head>

            <header className='w-full h-16 fixed top-0 bg-marble bg-cover z-10'/>

            <div className='absolute top-[4rem] w-10/12 h-[calc(100%-4rem)] flex flex-col items-center justify-center'>
                <div
                    className='relative flex flex-col items-center sm:h-5/6 max-h-5/6 border-tt-gold w-full border-2 md:border-4 xl:border-[6px]'
                >
                    <div className='absolute w-20 lg:w-40 rotate-[90deg] -top-14 right-0'>
                        <Image
                            alt='A painting of a leaf'
                            src={leafArt}
                        />
                    </div>
                    <div className='absolute w-20 lg:w-40 -bottom-4 -left-8 z-[1]'>
                        <Image
                            alt='A painting of a Peony flower'
                            src={peonyArt}
                        />
                    </div>
                    <h1 className='font-henriette text-3xl sm:text-4xl md:text-5xl lg:text-8xl mt-4 text-tt-green'>{'TOM & TARA'}</h1>
                    <div className='flex flex-col items-center justify-center w-full h-full sm:flex-row justify-around'>
                        <div className='relative w-5/6 h-60 sm:w-5/12 sm:h-full sm:m-auto'>
                            <Image
                                alt='Picture of Tom and Tara'
                                className='object-contain'
                                fill
                                priority
                                src={tomTaraPhoto}
                            />
                        </div>
                        <div className='w-5/12 text-center text-tt-gold my-3 sm:m-auto'>
                            <p className='text-sm sm:text-lg lg:text-4xl'>{'We look forward to you joining us for our wedding'}</p>
                            <p className='text-lg sm:text-xl lg:text-5xl'>{'June 24, 2023'}</p>
                            <p className='text-sm sm:text-lg lg:text-4xl'>{'in Cedar Rapids, Iowa'}</p>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full mt-5 text-center text-sm sm:text-lg lg:text-4xl text-tt-gold italic'
                >
                    {'Check back, additional details will be added soon'}
                </div>
            </div>
        </div>
    );
}
