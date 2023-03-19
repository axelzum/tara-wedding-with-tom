import Link from 'next/link';
import {useRouter} from 'next/router';

export const NavigationList = ({linkClicked}: {linkClicked(): void}): React.ReactElement => {
    const router = useRouter();

    return (
        <ul className='flex flex-col p-4 text-center text-2xl font-fino md:p-0'>
            <li className='rounded-md px-2 py-1'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/' ? 'text-tt-gold' : 'text-white'}`}
                    href='/'
                    onClick={linkClicked}
                >
                    {'Home'}
                </Link>
            </li>
            <li className='rounded-md px-2 py-1'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/hotels' ? 'text-tt-gold' : 'text-white'}`}
                    href='/hotels'
                    onClick={linkClicked}
                >
                    {'Hotels'}
                </Link>
            </li>
            <li className='rounded-md px-2 py-1'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/explore' ? 'text-tt-gold' : 'text-white'}`}
                    href='/explore'
                    onClick={linkClicked}
                >
                    {'Explore CR'}
                </Link>
            </li>
            <li className='rounded-md px-2 py-1'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/faq' ? 'text-tt-gold' : 'text-white'}`}
                    href='/faq'
                    onClick={linkClicked}
                >
                    {'FAQ'}
                </Link>
            </li>
            <li className='rounded-md px-2 py-1'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/rsvp' ? 'text-tt-gold' : 'text-white'}`}
                    href='/rsvp'
                    onClick={linkClicked}
                >
                    {'RSVP'}
                </Link>
            </li>
        </ul>
    );
};
