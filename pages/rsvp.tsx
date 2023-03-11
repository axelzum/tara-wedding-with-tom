import Head from 'next/head';
import {useState} from 'react';
import {PrismaClient} from '@prisma/client';

const Faq = (): React.ReactElement => {
    const [data, setData] = useState<any>('data');

    const getData = async (e: React.SyntheticEvent): Promise<void> => {
        const prisma = new PrismaClient();
        const guests = await prisma.guest.findMany();
        console.log(guests);
        // setData();
    };

    return (
        <>
            <Head>
                <title>{'RSVP'}</title>
                <meta content='RSVP to The Wedding' name='description'/>
            </Head>

            <div className='flex flex-col h-full items-center pb-6'>
                <h1 className='font-fino font-bold text-center my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'RSVP'}</h1>

                <form onSubmit={getData}>
                    <input type='submit' value='get data'/>
                </form>
                <div>{data}</div>
            </div>
        </>
    );
};

export default Faq;
