import Head from 'next/head';

import {PartyMember} from '../components/wedding-party/party-member';

import axel1 from '../public/images/wedding-party/Axel1.jpeg';
import eve1 from '../public/images/wedding-party/Eve1.jpeg';
import katlyn2 from '../public/images/wedding-party/Katlyn2.jpg';
import monica1 from '../public/images/wedding-party/Monica1.jpeg';
import monica2 from '../public/images/wedding-party/Monica2.jpg';

import brandon1 from '../public/images/wedding-party/Brandon1.jpeg';
import brandon2 from '../public/images/wedding-party/Brandon2.jpeg';
import peter1 from '../public/images/wedding-party/Peter1.jpg';
import peter2 from '../public/images/wedding-party/Peter2.jpeg';
import dustin1 from '../public/images/wedding-party/Dustin1.jpg';
import dustin2 from '../public/images/wedding-party/Dustin2.jpg';
import wesley1 from '../public/images/wedding-party/Wesley1.jpg';
import wesley2 from '../public/images/wedding-party/Wesley2.jpeg';
import chance1 from '../public/images/wedding-party/Chance1.jpeg';
import chance2 from '../public/images/wedding-party/Chance2.jpg';
import austin1 from '../public/images/wedding-party/Austin1.jpeg';
import austin2 from '../public/images/wedding-party/Austin2.jpg';
import TJ1 from '../public/images/wedding-party/TJ1.jpg';
import TJ2 from '../public/images/wedding-party/TJ2.jpg';

import theGals from '../public/images/wedding-party/TheGals.jpeg';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Wedding Party'}</title>
            <meta content="Tom and Tara's Wedding Party" name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino font-bold text-center my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Wedding Party'}</h1>

            <div className='flex flex-col gap-28 items-center lg:flex-row w-5/6 lg:justify-evenly pb-6'>
                <div className='flex flex-col text-center'>
                    <h2 className='font-fino text-3xl md:text-4xl underline'>{'Bridesmaids'}</h2>
                    <PartyMember name='Axel Zumwalt' photo1={axel1} photo2={theGals}/>
                    <p className='font-quiche text-lg italic m-0'>{'Man of Honor'}</p>
                    <PartyMember name='Eve Zumwalt' photo1={eve1} photo2={theGals}/>
                    <PartyMember name='Harper Bean' photo1={theGals} photo2={theGals}/>
                    <PartyMember name='Breiana Brown' photo1={theGals} photo2={theGals}/>
                    <PartyMember name='Katlyn Hardecopf' photo1={theGals} photo2={katlyn2}/>
                    <PartyMember name='Taylor Millis' photo1={theGals} photo2={theGals}/>
                    <PartyMember name='Monica Munier' photo1={monica1} photo2={monica2}/>
                </div>
                <div className='flex flex-col text-center'>
                    <h2 className='font-fino text-3xl md:text-4xl underline'>{'Groomsmen'}</h2>
                    <PartyMember name='Brandon Phipps' photo1={brandon1} photo2={brandon2}/>
                    <p className='font-quiche text-lg italic'>{'Best Man'}</p>
                    <PartyMember name='Peter Dirks' photo1={peter1} photo2={peter2}/>
                    <PartyMember name='Dustin Fox' photo1={dustin1} photo2={dustin2}/>
                    <PartyMember name='Wesley Humphrey' photo1={wesley1} photo2={wesley2}/>
                    <PartyMember name='Chance Leathers' photo1={chance1} photo2={chance2}/>
                    <PartyMember name='Austin Rose' photo1={austin1} photo2={austin2}/>
                    <PartyMember name='TJ Watson' photo1={TJ1} photo2={TJ2}/>
                </div>
            </div>
        </div>
    </>
);

export default Faq;
