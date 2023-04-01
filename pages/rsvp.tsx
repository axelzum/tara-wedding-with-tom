import Head from 'next/head';

const Faq = (): React.ReactElement => {
    const fetchRSVP = async (event: React.FormEvent<HTMLFormElement>): Promise<Response> => {
        event.preventDefault();
        const response = await fetch('/api/rsvp', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                name: event.target.name.value
            })
        });
        // console.log(response);
        return response;
    };

    return (
        <>
            <Head>
                <title>{'RSVP'}</title>
                <meta content='RSVP to The Wedding' name='description'/>
            </Head>

            <div className='flex h-full flex-col items-center pb-6'>
                <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'RSVP'}</h1>

                <div className='w-5/6 text-center font-quiche'>
                    <p>{'Please enter your full first and last name.'}</p>
                    <p>{'Form will include you and the rest of your party together.'}</p>
                </div>

                <form
                    className='flex flex-col items-center w-[20rem] font-quiche'
                    onSubmit={(event): void => {
                        void fetchRSVP(event).then(
                            (response) => {
                                console.log(response);
                            }
                        );
                    }}
                >
                    <input className='border-2 m-2 w-full' name='name' type='text'/>
                    <button
                        className='rounded-full w-1/3 px-1 py-2 text-sm text-white shadow shadow-tt-green bg-tt-green hover:bg-tt-gold'
                        type='submit'
                    >
                        {'Get RSVP'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Faq;
