import Head from 'next/head';
import prisma from '../lib/prisma';
import {GetStaticProps} from 'next';
import {Guest} from '@prisma/client';

export const getStaticProps: GetStaticProps = async () => {
    const guests = await prisma.guest.findMany();

    return {
        props: {guests}
    };
};

const Faq = ({guests}: {guests: Guest[]}): React.ReactElement => {
    console.log(guests);

    return (
        <>
            <Head>
                <title>{'RSVP'}</title>
                <meta content='RSVP to The Wedding' name='description'/>
            </Head>

            <div className='flex h-full flex-col items-center pb-6'>
                <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'RSVP'}</h1>
                {guests.map((guest) => <div key={guest.id}>{guest.name}</div>)}
            </div>
        </>
    );
};

export default Faq;
