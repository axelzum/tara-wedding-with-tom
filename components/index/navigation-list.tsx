import Link from 'next/link';
import {useRouter} from 'next/router';

export const NavigationList = (): React.ReactElement => {
    const router = useRouter();

    return (
        <Link
            className={`font-henriette text-lg ${router.pathname === '/' ? 'text-tt-gold' : 'text-white'}`}
            href='/'
        >
            {'Home'}
        </Link>
    );
};
