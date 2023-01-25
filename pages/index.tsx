import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import leafArt from '../public/home/leaf-art.png';
// import peonyArt from '../public/home/peony-art.png';
// import tomTaraPhoto from '../public/home/tom-tara-crop-hands.jpg';
import monogram from '../public/home/T&T-white.png';
import {useState} from 'react';

export default function Home(): React.ReactElement {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='flex h-screen flex-col md:flex-row'>
            <Head>
                <title>{'Tom & Tara'}</title>
                <meta content='Tom and Tara Wedding' name='description'/>
            </Head>

            {/* Top Nav */}
            <nav className='flex justify-center h-20 w-full bg-marble bg-cover md:hidden'>
                <Link className='flex items-center h-full' href='/'>
                    <Image
                        alt='T&T Monogram Logo'
                        className='object-contain h-[90%]'
                        src={monogram}
                    />
                </Link>

                <div className='fixed top-5 right-5 mx-auto sm:max-w-xl'>
                    <button className='flex justify-center items-center w-10 h-10' onClick={(): void => setOpen(!open)}>
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}/>
                        {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open && 'opacity-0'}`}/>
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}/>
                    </button>
                </div>
            </nav>

            {/* Side Nav */}
            <nav className='justify-center hidden h-full w-1/3 bg-marble bg-cover md:flex lg:w-1/4 xl:w-1/5'>
                <Link className='fixed top-28' href='/'>
                    <Image
                        alt='T&T Monogram Logo'
                        src={monogram}
                    />
                </Link>
            </nav>

            <div className='flex h-full content-center justify-center md:w-full'>
                {/* <div className='border-tt-gold border-2 m-auto text-center'>*/}
                <h1 className='m-auto font-henriette text-4xl text-tt-green md:text-5xl xl:text-6xl'>{'TOM & TARA'}</h1>
                {/* </div>*/}
            </div>
        </div>

    //     <div className='absolute top-[4rem] w-10/12 h-[calc(100%-4rem)] flex flex-col items-center justify-center'>
    //         <div
    //             className='relative flex flex-col items-center sm:h-5/6 max-h-5/6 border-tt-gold w-full border-2 md:border-4 xl:border-[6px]'
    //         >
    //             <div className='absolute w-20 lg:w-40 rotate-[90deg] -top-14 right-0'>
    //                 <Image
    //                     alt='A painting of a leaf'
    //                     src={leafArt}
    //                 />
    //             </div>
    //             <div className='absolute w-20 lg:w-40 -bottom-4 -left-8 z-[1]'>
    //                 <Image
    //                     alt='A painting of a Peony flower'
    //                     src={peonyArt}
    //                 />
    //             </div>
    //             <h1 className='font-henriette text-3xl sm:text-4xl md:text-5xl lg:text-8xl mt-4 text-tt-green'>{'TOM & TARA'}</h1>
    //             <div className='flex flex-col items-center justify-center w-full h-full sm:flex-row justify-around'>
    //                 <div className='relative w-5/6 h-60 sm:w-5/12 sm:h-full sm:m-auto'>
    //                     <Image
    //                         alt='Picture of Tom and Tara'
    //                         className='object-contain'
    //                         fill
    //                         priority
    //                         src={tomTaraPhoto}
    //                     />
    //                 </div>
    //                 <div className='w-5/12 text-center text-tt-gold my-3 sm:m-auto'>
    //                     <p className='text-sm sm:text-lg lg:text-4xl'>{'We look forward to you joining us for our wedding'}</p>
    //                     <p className='text-lg sm:text-xl lg:text-5xl'>{'June 24, 2023'}</p>
    //                     <p className='text-sm sm:text-lg lg:text-4xl'>{'in Cedar Rapids, Iowa'}</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div
    //             className='w-full mt-5 text-center text-sm sm:text-lg lg:text-4xl text-tt-gold italic'
    //         >
    //             {'Check back, additional details will be added soon'}
    //         </div>
    //     </div>
    // </div>
    );
}
