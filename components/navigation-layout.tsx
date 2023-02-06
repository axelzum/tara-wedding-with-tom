import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

import {NavigationList} from './navigation-list';

import monogram from '../public/index/T&T-white.png';

/* eslint-disable @typescript-eslint/restrict-template-expressions */

export const NavigationLayout = ({children}: {children: React.ReactElement}): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='flex h-screen flex-col md:flex-row'>
            {/* Top Nav */}
            <nav className='md:hidden'>
                <div
                    className={`flex flex-col w-full bg-marble bg-cover transition-height duration-500 ease-in-out ${open ? 'h-36' : 'h-20'}`}
                >
                    <div className='flex justify-center'>
                        <Link className='flex items-center h-20' href='/'>
                            <Image
                                alt='T&T Monogram Logo'
                                className='object-contain h-[90%]'
                                src={monogram}
                            />
                        </Link>

                        <div className='fixed top-5 right-5 mx-auto'>
                            <button
                                className='flex justify-center items-center w-10 h-10'
                                onClick={(): void => setOpen(!open)}
                            >
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open && 'opacity-0'}`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
                                />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`flex flex-col h-full items-center ${open ? 'transition delay-200 duration-100 ease-in-out opacity-100' : 'opacity-0'}`}
                    >
                        <div className='flex flex-col items-center my-2 w-full'>
                            <hr className='my-1 w-1/2'/>
                            <hr className='w-1/2'/>
                        </div>
                        <NavigationList/>
                    </div>
                </div>
            </nav>

            {/* Side Nav */}
            <nav
                className='flex flex-col items-center hidden h-full w-1/3 bg-marble bg-cover md:flex lg:w-1/4 xl:w-1/5'
            >
                <Link className='mt-20' href='/'>
                    <Image
                        alt='T&T Monogram Logo'
                        src={monogram}
                    />
                </Link>

                <div className='flex flex-col items-center my-5 w-full'>
                    <hr className='my-1 w-5/6'/>
                    <hr className='w-5/6'/>
                </div>

                <div>
                    <NavigationList/>
                </div>
            </nav>

            {/* Body */}
            {children}
        </div>
    );
};
