import Link from 'next/link';
import {useRouter} from 'next/router';

export const NavigationList = (): React.ReactElement => {
    const router = useRouter();

    return (
        <ul className='flex flex-col p-4 md:p-0 font-fino text-center md:text-left text-2xl'>
            <li className='py-1 px-2 rounded hover:bg-tt-green hover:underline'>
                <Link
                    className={`block ${router.pathname === '/' ? 'text-tt-gold' : 'text-white'}`}
                    href='/'
                >
                    {'Home'}
                </Link>
            </li>
            <li className='py-1 px-2 rounded hover:bg-tt-green hover:underline'>
                <Link
                    className={`block ${router.pathname === '/visit' ? 'text-tt-gold' : 'text-white'}`}
                    href='/visit'
                >
                    {'Visit'}
                </Link>
            </li>
        </ul>
    );
};
