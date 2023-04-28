import React from 'react';
import {RsvpDataType} from '../../pages/rsvp';

/* eslint-disable @typescript-eslint/no-unnecessary-condition,@typescript-eslint/ban-ts-comment,no-magic-numbers,@typescript-eslint/no-unsafe-assignment */

type RsvpFormProps = {
    data: RsvpDataType;
    setData: React.Dispatch<React.SetStateAction<RsvpDataType | undefined>>;
};

export const RsvpForm = ({data, setData}: RsvpFormProps): React.ReactElement => {
    if (data.error) {
        return (
            <div className='mt-20 flex w-5/6 flex-col items-center text-center font-quiche'>
                <p className='font-bold'>{data.error}</p>
                <p>{'Please make sure to enter your full first and last name.'}</p>
                <p>{'If you are known by a nickname, try the name your invitation was addressed too.'}</p>
                <p>{'If you believe you are seeing this message in error, please contact the bride or groom.'}</p>
            </div>
        );
    } else if (data.guests && data.rsvp) {
        return (
            <div className='flex w-5/6 flex-col items-center font-quiche'>
                <div className='w-1/2 text-center min-w-[20rem]'>
                    {data.rsvp.completed &&
                        <div>
                            <p className='mt-5'>{'You have already completed your RSVP.'}</p>
                            <p>{'You can edit your responses and click submit to update.'}</p>
                        </div>}
                    {data.guests.map((guest, index) => (
                        <div className='my-10' key={guest.id}>
                            <p className='text-2xl font-bold underline'>{guest.name}</p>
                            {data.rsvp?.is_rehersal_invited &&
                                <>
                                    <div className='my-5'>
                                        <p className='font-bold'>{'Rehearsal (Dinner Afterward)'}</p>
                                        <p className='italic'>{'Friday, June 23, 5:00pm'}</p>
                                        <p className='italic'>{'The HarMac, Cedar Rapids'}</p>
                                    </div>
                                    <div className='flex flex-row justify-center gap-5 text-center'>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                /* @ts-ignore */
                                                checked={data.guests[index].attend_rehersal === null ? false : data.guests[index].attend_rehersal}
                                                className='hidden peer'
                                                id={`${guest.id.toString().concat('rehersal')}-1`}
                                                name={guest.id.toString().concat('rehersal')}
                                                onChange={(): void => {
                                                    const newGuests = [...data.guests!];
                                                    newGuests[index].attend_rehersal = true;
                                                    setData({
                                                        ...data,
                                                        guests: newGuests
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor={`${guest.id.toString().concat('rehersal')}-1`}
                                            >
                                                {'Accept'}
                                            </label>
                                        </div>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                checked={data.guests![index].attend_rehersal !== null && !data.guests![index].attend_rehersal}
                                                className='hidden peer'
                                                id={`${guest.id.toString().concat('rehersal')}-2`}
                                                name={guest.id.toString().concat('rehersal')}
                                                onChange={(): void => {
                                                    const newGuests = [...data.guests!];
                                                    newGuests[index].attend_rehersal = false;
                                                    setData({
                                                        ...data,
                                                        guests: newGuests
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor={`${guest.id.toString().concat('rehersal')}-2`}
                                            >
                                                {'Decline'}
                                            </label>
                                        </div>
                                    </div>
                                </>}
                            <div className='my-5'>
                                <p className='font-bold'>{'Ceremony & Reception'}</p>
                                <p className='italic'>{'Saturday, June 24, 4:30pm'}</p>
                                <p className='italic'>{'The HarMac, Cedar Rapids'}</p>
                            </div>
                            <div className='flex flex-row justify-center gap-5 text-center'>
                                <div
                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                >
                                    <input
                                        /* @ts-ignore */
                                        checked={data.guests[index].attend_wedding === null ? false : data.guests[index].attend_wedding}
                                        className='hidden peer'
                                        id={`${guest.id.toString().concat('wedding')}-1`}
                                        name={guest.id.toString().concat('wedding')}
                                        onChange={(): void => {
                                            const newGuests = [...data.guests!];
                                            newGuests[index].attend_wedding = true;
                                            setData({
                                                ...data,
                                                guests: newGuests
                                            });
                                        }}
                                        type='radio'
                                        value=''
                                    />
                                    <label
                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                        htmlFor={`${guest.id.toString().concat('wedding')}-1`}
                                    >
                                        {'Accept'}
                                    </label>
                                </div>
                                <div
                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                >
                                    <input
                                        checked={data.guests![index].attend_wedding !== null && !data.guests![index].attend_wedding}
                                        className='hidden peer'
                                        id={`${guest.id.toString().concat('wedding')}-2`}
                                        name={guest.id.toString().concat('wedding')}
                                        onChange={(): void => {
                                            const newGuests = [...data.guests!];
                                            newGuests[index].attend_wedding = false;
                                            setData({
                                                ...data,
                                                guests: newGuests
                                            });
                                        }}
                                        type='radio'
                                        value=''
                                    />
                                    <label
                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                        htmlFor={`${guest.id.toString().concat('wedding')}-2`}
                                    >
                                        {'Decline'}
                                    </label>
                                </div>
                            </div>
                            {data.rsvp?.is_brunch_invited &&
                                <>
                                    <div className='my-5'>
                                        <p className='font-bold'>{'Sunday Brunch'}</p>
                                        <p className='italic'>{'Sunday, June 25, 9am-12pm'}</p>
                                        <p className='italic'>{'1500 8th Street, Marion'}</p>
                                    </div>
                                    <div className='flex flex-row justify-center gap-5 text-center'>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                /* @ts-ignore */
                                                checked={data.guests[index].attend_brunch === null ? false : data.guests[index].attend_brunch}
                                                className='hidden peer'
                                                id={`${guest.id.toString().concat('brunch')}-1`}
                                                name={guest.id.toString().concat('brunch')}
                                                onChange={(): void => {
                                                    const newGuests = [...data.guests!];
                                                    newGuests[index].attend_brunch = true;
                                                    setData({
                                                        ...data,
                                                        guests: newGuests
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor={`${guest.id.toString().concat('brunch')}-1`}
                                            >
                                                {'Accept'}
                                            </label>
                                        </div>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                checked={data.guests![index].attend_brunch !== null && !data.guests![index].attend_brunch}
                                                className='hidden peer'
                                                id={`${guest.id.toString().concat('brunch')}-2`}
                                                name={guest.id.toString().concat('brunch')}
                                                onChange={(): void => {
                                                    const newGuests = [...data.guests!];
                                                    newGuests[index].attend_brunch = false;
                                                    setData({
                                                        ...data,
                                                        guests: newGuests
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor={`${guest.id.toString().concat('brunch')}-2`}
                                            >
                                                {'Decline'}
                                            </label>
                                        </div>
                                    </div>
                                </>}
                            <p className='mt-5 text-left font-bold'>{'Dietary Restrictions:'}</p>
                            <textarea
                                className='w-full rounded-md border-gray-300 shadow-sm focus:border-tt-green focus:ring-tt-green focus:ring focus:ring-opacity-50'
                                onChange={(event): void => {
                                    const newGuests = [...data.guests!];
                                    newGuests[index].dietary_restriction = event.target.value.length > 0 ? event.target.value : null;
                                    setData({
                                        ...data,
                                        guests: newGuests
                                    });
                                }}
                                rows={2}
                                value={data.guests![index].dietary_restriction || undefined}
                            />
                        </div>
                    ))}
                    {data.rsvp.is_extra_invited &&
                        <>
                            <p className='mb-2 text-lg font-bold'>{'Are you bringing a guest?'}</p>
                            <div className='mb-5 flex flex-row justify-center gap-5 text-center'>
                                <div
                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                >
                                    <input
                                        /* @ts-ignore */ /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                        checked={data.rsvp.attend_guest}
                                        className='hidden peer'
                                        id='extra-1'
                                        name='extra'
                                        onChange={(): void => {
                                            setData({
                                                ...data,
                                                rsvp: {
                                                    ...data.rsvp!,
                                                    attend_guest: true
                                                }
                                            });
                                        }}
                                        type='radio'
                                        value=''
                                    />
                                    <label
                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                        htmlFor='extra-1'
                                    >
                                        {'Yes'}
                                    </label>
                                </div>
                                <div
                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                >
                                    <input
                                        checked={data.rsvp?.attend_guest !== null && !data.rsvp.attend_guest}
                                        className='hidden peer'
                                        id='extra-2'
                                        name='extra'
                                        onChange={(): void => {
                                            setData({
                                                ...data,
                                                rsvp: {
                                                    ...data.rsvp!,
                                                    attend_guest: false,
                                                    extra_wedding: null,
                                                    extra_name: null,
                                                    extra_brunch: null,
                                                    extra_dietary: null,
                                                    extra_rehersal: null
                                                }
                                            });
                                        }}
                                        type='radio'
                                        value=''
                                    />
                                    <label
                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                        htmlFor='extra-2'
                                    >
                                        {'No'}
                                    </label>
                                </div>
                            </div>
                            {data.rsvp.attend_guest &&
                                <div className='my-10'>
                                    <input
                                        className='my-2 w-full rounded-md border-gray-300 text-2xl font-bold underline shadow-sm focus:border-tt-green focus:ring-tt-green focus:ring focus:ring-opacity-50'
                                        onChange={(event): void => {
                                            setData({
                                                ...data,
                                                rsvp: {
                                                    ...data.rsvp!,
                                                    extra_name: event.target.value
                                                }
                                            });
                                        }}
                                        placeholder="Enter Your Guest's Name Here"
                                        type='text'
                                        value={data.rsvp.extra_name || undefined}
                                    />
                                    {data.rsvp.is_rehersal_invited &&
                                        <>
                                            <div className='my-5'>
                                                <p className='font-bold'>{'Rehearsal (Dinner Afterward)'}</p>
                                                <p className='italic'>{'Friday, June 23, 5:00pm'}</p>
                                                <p className='italic'>{'The HarMac, Cedar Rapids'}</p>
                                            </div>
                                            <div className='flex flex-row justify-center gap-5 text-center'>
                                                <div
                                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                                >
                                                    <input
                                                        /* @ts-ignore */ /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                                        checked={data.rsvp.extra_rehersal}
                                                        className='hidden peer'
                                                        id='extrarehersal-1'
                                                        name='extrarehersal'
                                                        onChange={(): void => {
                                                            setData({
                                                                ...data,
                                                                rsvp: {
                                                                    ...data.rsvp!,
                                                                    extra_rehersal: true
                                                                }
                                                            });
                                                        }}
                                                        type='radio'
                                                        value=''
                                                    />
                                                    <label
                                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                        htmlFor='extrarehersal-1'
                                                    >
                                                        {'Accept'}
                                                    </label>
                                                </div>
                                                <div
                                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                                >
                                                    <input
                                                        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                                        checked={data.rsvp.extra_rehersal !== null && !data.rsvp.extra_rehersal}
                                                        className='hidden peer'
                                                        id='extrarehersal-2'
                                                        name='extrarehersal'
                                                        onChange={(): void => {
                                                            setData({
                                                                ...data,
                                                                rsvp: {
                                                                    ...data.rsvp!,
                                                                    extra_rehersal: false
                                                                }
                                                            });
                                                        }}
                                                        type='radio'
                                                        value=''
                                                    />
                                                    <label
                                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                        htmlFor='extrarehersal-2'
                                                    >
                                                        {'Decline'}
                                                    </label>
                                                </div>
                                            </div>
                                        </>}
                                    <div className='my-5'>
                                        <p className='font-bold'>{'Ceremony & Reception'}</p>
                                        <p className='italic'>{'Saturday, June 24, 4:30pm'}</p>
                                        <p className='italic'>{'The HarMac, Cedar Rapids'}</p>
                                    </div>
                                    <div className='flex flex-row justify-center gap-5 text-center'>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                /* @ts-ignore */ /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                                checked={data.rsvp.extra_wedding}
                                                className='hidden peer'
                                                id='extrawedding-1'
                                                name='extrawedding'
                                                onChange={(): void => {
                                                    setData({
                                                        ...data,
                                                        rsvp: {
                                                            ...data.rsvp!,
                                                            extra_wedding: true
                                                        }
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor='extrawedding-1'
                                            >
                                                {'Accept'}
                                            </label>
                                        </div>
                                        <div
                                            className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                        >
                                            <input
                                                checked={data.rsvp.extra_wedding !== null && !data.rsvp.extra_wedding}
                                                className='hidden peer'
                                                id='extrawedding-2'
                                                name='extrawedding'
                                                onChange={(): void => {
                                                    setData({
                                                        ...data,
                                                        rsvp: {
                                                            ...data.rsvp!,
                                                            extra_wedding: false
                                                        }
                                                    });
                                                }}
                                                type='radio'
                                                value=''
                                            />
                                            <label
                                                className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                htmlFor='extrawedding-2'
                                            >
                                                {'Decline'}
                                            </label>
                                        </div>
                                    </div>
                                    {data.rsvp.is_brunch_invited &&
                                        <>
                                            <div className='my-5'>
                                                <p className='font-bold'>{'Sunday Brunch'}</p>
                                                <p className='italic'>{'Sunday, June 25, 9am-12pm'}</p>
                                                <p className='italic'>{'1500 8th Street, Marion'}</p>
                                            </div>
                                            <div className='flex flex-row justify-center gap-5 text-center'>
                                                <div
                                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                                >
                                                    <input
                                                        /* @ts-ignore */ /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                                        checked={data.rsvp.extra_brunch}
                                                        className='hidden peer'
                                                        id='extrabrunch-1'
                                                        name='extrabrunch'
                                                        onChange={(): void => {
                                                            setData({
                                                                ...data,
                                                                rsvp: {
                                                                    ...data.rsvp!,
                                                                    extra_brunch: true
                                                                }
                                                            });
                                                        }}
                                                        type='radio'
                                                        value=''
                                                    />
                                                    <label
                                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                        htmlFor='extrabrunch-1'
                                                    >
                                                        {'Accept'}
                                                    </label>
                                                </div>
                                                <div
                                                    className='flex h-10 w-36 rounded-md border border-gray-300 leading-10 shadow-sm hover:border-tt-green hover:ring-tt-green hover:ring hover:ring-opacity-50'
                                                >
                                                    <input
                                                        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                                        checked={data.rsvp.extra_brunch !== null && !data.rsvp.extra_brunch}
                                                        className='hidden peer'
                                                        id='extrabrunch-2'
                                                        name='extrabrunch'
                                                        onChange={(): void => {
                                                            setData({
                                                                ...data,
                                                                rsvp: {
                                                                    ...data.rsvp!,
                                                                    extra_brunch: false
                                                                }
                                                            });
                                                        }}
                                                        type='radio'
                                                        value=''
                                                    />
                                                    <label
                                                        className='h-full w-full cursor-pointer rounded-md peer-checked:bg-tt-green'
                                                        htmlFor='extrabrunch-2'
                                                    >
                                                        {'Decline'}
                                                    </label>
                                                </div>
                                            </div>
                                        </>}
                                    <p className='mt-5 text-left font-bold'>{'Dietary Restrictions:'}</p>
                                    <textarea
                                        className='w-full rounded-md border-gray-300 shadow-sm focus:border-tt-green focus:ring-tt-green focus:ring focus:ring-opacity-50'
                                        onChange={(event): void => {
                                            setData({
                                                ...data,
                                                rsvp: {
                                                    ...data.rsvp!,
                                                    extra_dietary: event.target.value.length > 0 ? event.target.value : null
                                                }
                                            });
                                        }}
                                        rows={2}
                                        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
                                        value={data.rsvp.extra_dietary || undefined}
                                    />
                                </div>}
                        </>}
                </div>
            </div>
        );
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
};
