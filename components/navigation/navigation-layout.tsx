import Link from 'next/link';
import {useState} from 'react';

import {NavigationList} from './navigation-list';
import {TtLogo} from './tt-logo';


/* eslint-disable @typescript-eslint/restrict-template-expressions */

export const NavigationLayout = ({children}: {children: React.ReactElement}): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const closeDropdown = (): void => setOpen(false);

    return (
        <div className='flex h-screen flex-col md:flex-row'>
            {/* Top Nav */}
            <nav className='relative inline-block md:hidden'>
                <div className='flex flex-col items-center h-20 w-full bg-marble bg-cover'>
                    {/* Hamburger Button*/}
                    <div className='fixed top-5 right-5 mx-auto'>
                        <button
                            className='group flex justify-center items-center w-10 h-10'
                            onClick={(): void => setOpen(!open)}
                        >
                            <span
                                className={`block absolute h-0.5 w-6 bg-white group-hover:bg-tt-gold transition-transform duration-200 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
                            />
                            <span
                                className={`block absolute h-0.5 w-6 bg-white group-hover:bg-tt-gold transition-opacity duration-200 ease-in-out ${open && 'opacity-0'}`}
                            />
                            <span
                                className={`block absolute h-0.5 w-6 bg-white group-hover:bg-tt-gold transition-transform duration-200 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
                            />
                        </button>
                    </div>

                    <div className='flex items-center justify-center w-20 h-20 transition'>
                        <Link className='w-14' href='/' onClick={closeDropdown}>
                            <TtLogo/>
                        </Link>
                    </div>
                </div>
                <div className={`absolute w-5/6 left-0 right-0 mx-auto bg-marble bg-contain rounded-b-lg transition-transform origin-top duration-200 ${open ? 'scale-y-100' : 'scale-y-0'}`}>
                    <NavigationList linkClicked={closeDropdown}/>
                </div>
            </nav>

            {/* Side Nav */}
            <nav
                className='flex flex-col items-center h-full bg-marble bg-cover hidden md:flex w-1/3 lg:w-1/4 xl:w-1/5'
            >
                <Link className='mt-20 w-2/5' href='/'>
                    <TtLogo/>
                </Link>

                <hr className='my-5 w-5/6 h-0.5 bg-white'/>

                <div className='w-5/6'>
                    <NavigationList linkClicked={closeDropdown}/>
                </div>
            </nav>

            {/* Body */}
            <div className='w-full overflow-auto'>
                {children}
            </div>
        </div>
    );
};
