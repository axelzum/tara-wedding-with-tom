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
        const isWeddingNull = guest.attend_wedding === null;
        const isBrunchNull = rsvpData.rsvp?.is_brunch_invited ? guest.attend_brunch === null : false;
        const isRehersalNull = rsvpData.rsvp?.is_rehersal_invited ? guest.attend_rehersal === null : false;

        return isWeddingNull || isBrunchNull || isRehersalNull;
    }).length > 0;

    if (rsvpData.rsvp?.is_extra_invited) {
        const isExtraWeddingNull = rsvpData.rsvp.extra_wedding === null;
        const isExtraBrunchNull = rsvpData.rsvp.is_brunch_invited ? rsvpData.rsvp.extra_brunch === null : false;
        const isExtraRehersalNull = rsvpData.rsvp?.is_rehersal_invited ? rsvpData.rsvp.extra_rehersal === null : false;

        return rsvpData.rsvp.attend_guest === false ?
            areGuestsIncomplete :
            areGuestsIncomplete || isExtraWeddingNull || isExtraBrunchNull || isExtraRehersalNull || rsvpData.rsvp.extra_name === null || rsvpData.rsvp.extra_name === '';
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
    });

const postRSVP = async (rsvpData: RsvpDataType): Promise<Response> =>
    await fetch('/api/rsvp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(rsvpData)
    });

const Rsvp = (): React.ReactElement => {
    const [rsvpLoading, setRsvpLoading] = useState<boolean>(false);
    const [rsvpData, setRsvpData] = useState<RsvpDataType>();
    const [submitSuccess, setSubmitSuccess] = useState<boolean|undefined>();

    return (
        <>
            <Head>
                <title>{'RSVP'}</title>
                <meta content='RSVP to The Wedding' name='description'/>
            </Head>

            <div className='flex h-full flex-col items-center pb-6'>
                <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'RSVP'}</h1>

                <div className='flex w-5/6 flex-col items-center justify-center text-center font-quiche'>
                    <p>{'Please enter your full first and last name.'}</p>
                    <p>{'This RSVP will include your entire family or invited party.'}</p>
                    <p>{'If you have any issues or questions contact the bride or groom.'}</p>
                    <p className='font-bold'>{'Kindly respond by May 24th.'}</p>
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
                                setSubmitSuccess(undefined);
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
                        <input
                            className='my-2 w-full rounded-md border-gray-300 shadow-sm focus:border-tt-green focus:ring-tt-green focus:ring focus:ring-opacity-50'
                            name='name'
                            placeholder='Enter Full Name'
                            type='text'
                        />
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
                            {'Fetch RSVP'}
                        </button>
                    </form>
                </div>

                {rsvpData && <RsvpForm data={rsvpData} setData={setRsvpData}/>}

                {(rsvpData && !rsvpData.error) &&
                    <div className='flex items-center pb-6 w-[20rem]'>
                        <button
                            className={`rounded-full ${rsvpLoading ? 'w-2/5' : 'w-1/3'} m-auto px-1 py-2 text-white font-quiche shadow shadow-tt-green bg-tt-green hover:bg-tt-gold disabled:opacity-60 disabled:hover:bg-tt-green`}
                            disabled={isSubmitButtonDisabled(rsvpData)}
                            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
                            onClick={async (): Promise<void> => {
                                setRsvpLoading(true);
                                await postRSVP(rsvpData)
                                    .then((response) => response.json())
                                    .then((data) => {
                                        setRsvpData(undefined);
                                        if (data === 'Success') {
                                            setSubmitSuccess(true);
                                        } else {
                                            setSubmitSuccess(false);
                                        }
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
                {submitSuccess !== undefined && !submitSuccess &&
                    <div className='mt-20 flex w-5/6 flex-col items-center text-center font-quiche'>
                        <p className='font-bold'>{'Something went wrong with your request.'}</p>
                        <p>{'Please contact the bride or groom to submit your RSVP.'}</p>
                    </div>}
                {submitSuccess !== undefined && submitSuccess &&
                    <div className='mt-20 flex w-5/6 flex-col items-center text-center font-quiche'>
                        <p className='font-bold'>{'Thank you for your response!'}</p>
                        <p>{'We cannot wait to celebrate with you.'}</p>
                        <p>{'You can come back any time to view your selections or make an update.'}</p>
                    </div>}
            </div>
        </>
    );
};

export default Rsvp;
