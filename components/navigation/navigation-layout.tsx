import Div100vh from 'react-div-100vh';
import Link from 'next/link';
import {useState} from 'react';

import {NavigationList} from './navigation-list';
import {TtLogo} from './tt-logo';

/* eslint-disable @typescript-eslint/restrict-template-expressions */

export const NavigationLayout = ({children}: {children: React.ReactElement}): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const closeDropdown = (): void => setOpen(false);

    return (
        <Div100vh>
            <div className='flex h-full flex-col md:flex-row'>
                {/* Top Nav */}
                <nav className='relative inline-block md:hidden'>
                    <div className='flex h-20 w-full flex-col items-center bg-cover bg-marble'>
                        {/* Hamburger Button*/}
                        <div className='fixed top-5 right-5 mx-auto'>
                            <button
                                className='flex h-10 w-10 items-center justify-center group'
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

                        <div className='flex h-20 w-20 items-center justify-center transition'>
                            <Link className='w-14' href='/' onClick={closeDropdown}>
                                <TtLogo/>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`z-[1000] absolute w-5/6 left-0 right-0 mx-auto bg-marble bg-contain rounded-b-lg transition-transform origin-top duration-200 ${open ? 'scale-y-100' : 'scale-y-0'}`}
                    >
                        <NavigationList linkClicked={closeDropdown}/>
                    </div>
                </nav>

                {/* Side Nav */}
                <nav
                    className='flex hidden h-full w-1/3 flex-col items-center bg-cover bg-marble md:flex lg:w-1/4 xl:w-1/5'
                >
                    <Link className='mt-20 w-2/5' href='/'>
                        <TtLogo/>
                    </Link>

                    <hr className='my-5 w-5/6 bg-white h-0.5'/>

                    <div className='w-5/6'>
                        <NavigationList linkClicked={closeDropdown}/>
                    </div>
                </nav>

                {/* Body */}
                <div className='w-full overflow-auto'>
                    {children}
                </div>
            </div>
        </Div100vh>
    );
};
