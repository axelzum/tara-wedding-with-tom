import Head from 'next/head';
import React, {useState} from 'react';
import {RsvpForm} from '../components/rsvp/rsvp-form';
import {Guest, RSVP} from '@prisma/client';

/* eslint-disable @typescript-eslint/no-unnecessary-condition,no-magic-numbers */

export type RsvpDataType = {
    error?: string;
    rsvp?: RSVP;
    guests?: Guest[];
};

const isSubmitButtonDisabled = (rsvpData: RsvpDataType): boolean => {
    const areGuestsIncomplete = rsvpData.guests!.filter((guest) => {
        if (rsvpData.rsvp?.is_brunch_invited) {
            return guest.attend_wedding === null || guest.attend_brunch === null;
        }
        return guest.attend_wedding === null;
    }).length > 0;

    if (rsvpData.rsvp?.is_extra_invited) {
        const isExtraIncomplete = rsvpData.rsvp.extra_wedding === null || rsvpData.rsvp.extra_name === null;
        if (rsvpData.rsvp.attend_guest === null) {
            return true;
        } else if (rsvpData.rsvp.attend_guest){
            return rsvpData.rsvp.is_brunch_invited ?
                areGuestsIncomplete || isExtraIncomplete || rsvpData.rsvp.extra_brunch === null :
                areGuestsIncomplete || isExtraIncomplete;
        }
    }
    return areGuestsIncomplete;
};

const fetchRSVP = async (event: React.FormEvent<HTMLFormElement>): Promise<Response> =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
    await fetch(`/api/rsvp/?name=${event.target.name.value}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        // body: JSON.stringify({
        //     name: event.target.name.value
        // })
    });

const postRSVP = async (rsvpData: RsvpDataType): Promise<Response> => {
    const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(rsvpData)
    });
    console.log('response1', response);
    return response;
};

const Faq = (): React.ReactElement => {
    const [rsvpLoading, setRsvpLoading] = useState<boolean>(false);
    const [rsvpData, setRsvpData] = useState<RsvpDataType>();

    return (
        <>
            <Head>
                <title>{'RSVP'}</title>
                <meta content='RSVP to The Wedding' name='description'/>
            </Head>

            <div className='flex h-full flex-col items-center pb-6'>
                <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'RSVP'}</h1>

                <div className='flex flex-col items-center w-5/6 text-center font-quiche'>
                    <p>{'Please enter your full first and last name.'}</p>
                    <p>{'This RSVP includes your entire group.'}</p>
                    <form
                        className='w-[20rem] font-quiche'
                        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
                        onSubmit={async (event): Promise<void> => {
                            event.preventDefault();
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line
                            if (event.target.name.value.length > 0) {
                                setRsvpLoading(true);
                                await fetchRSVP(event)
                                    .then((response) => response.json())
                                    .then((data) => {
                                        setRsvpData(data as RsvpDataType);
                                    });
                                setRsvpLoading(false);
                            } else {
                                setRsvpData(undefined);
                            }
                        }}
                    >
                        <input className='m-2 w-full rounded-md border-gray-300 shadow-sm focus:border-tt-green focus:ring focus:ring-tt-green focus:ring-opacity-50' name='name' type='text'/>
                        <button
                            className={`rounded-full ${rsvpLoading ? 'w-2/5' : 'w-1/3'} px-1 py-2 text-sm text-white shadow shadow-tt-green bg-tt-green hover:bg-tt-gold`}
                            type='submit'
                        >
                            <svg
                                aria-hidden='true'
                                className={`${rsvpLoading ? 'inline' : 'hidden'} w-4 h-4 mr-3 text-white animate-spin`}
                                fill='none'
                                role='status'
                                viewBox='0 0 100 101'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                    fill='#E5E7EB'
                                />
                                <path
                                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                    fill='currentColor'
                                />
                            </svg>
                            {'Get RSVP'}
                        </button>
                    </form>
                </div>

                {rsvpData && <RsvpForm data={rsvpData} setData={setRsvpData}/>}

                {(rsvpData && !rsvpData.error) &&
                    <div className='flex items-center w-[20rem] pb-6'>
                        <button
                            className={`rounded-full ${rsvpLoading ? 'w-2/5' : 'w-1/3'} m-auto px-1 py-2 text-white shadow shadow-tt-green bg-tt-green hover:bg-tt-gold disabled:opacity-60 disabled:hover:bg-tt-green`}
                            disabled={isSubmitButtonDisabled(rsvpData)}
                            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
                            onClick={async (): Promise<void> => {
                                setRsvpLoading(true);
                                await postRSVP(rsvpData).then((response) => {
                                    console.log('response2', response);
                                });
                                setRsvpLoading(false);
                            }}
                        >
                            <svg
                                aria-hidden='true'
                                className={`${rsvpLoading ? 'inline' : 'hidden'} w-4 h-4 mr-3 text-white animate-spin`}
                                fill='none'
                                role='status'
                                viewBox='0 0 100 101'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                    fill='#E5E7EB'
                                />
                                <path
                                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                    fill='currentColor'
                                />
                            </svg>
                            {'Submit'}
                        </button>
                    </div>}
            </div>
        </>
    );
};

export default Faq;
