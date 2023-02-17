import Link from 'next/link';
import {useRouter} from 'next/router';

export const NavigationList = ({linkClicked}: {linkClicked(): void}): React.ReactElement => {
    const router = useRouter();

    return (
        <ul className='flex flex-col p-4 md:p-0 font-fino text-center text-2xl'>
            <li className='py-1 px-2 rounded-md'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/' ? 'text-tt-gold' : 'text-white'}`}
                    href='/'
                    onClick={linkClicked}
                >
                    {'Home'}
                </Link>
            </li>
            <li className='py-1 px-2 rounded-md'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/hotels' ? 'text-tt-gold' : 'text-white'}`}
                    href='/hotels'
                    onClick={linkClicked}
                >
                    {'Hotels'}
                </Link>
            </li>
            <li className='py-1 px-2 rounded-md'>
                <Link
                    className={`block hover:text-tt-gold ${router.pathname === '/faq' ? 'text-tt-gold' : 'text-white'}`}
                    href='/faq'
                    onClick={linkClicked}
                >
                    {'FAQ'}
                </Link>
            </li>
        </ul>
    );
};
