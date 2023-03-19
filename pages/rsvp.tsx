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

const submitData = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: e.target.name.value
        })
    });
    // console.log(response.json());
};

const Faq = ({guests}: {guests: Guest[]}): React.ReactElement => (
    <>
        <Head>
            <title>{'RSVP'}</title>
            <meta content='RSVP to The Wedding' name='description'/>
        </Head>

        <div className='flex h-full flex-col items-center pb-6'>
            <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'RSVP'}</h1>
            {guests.map((guest) => <div key={guest.id}>{guest.name}</div>)}

            <form onSubmit={submitData}>
                <input className='border-2' name='name' type='text'/>
                <button type='submit'>{'Get RSVP'}</button>
            </form>
        </div>
    </>
);

export default Faq;
