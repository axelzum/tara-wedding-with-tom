import Head from 'next/head';
import {HotelCard} from '../components/hotels/hotel-card';

import residenceInn from '../public/images/hotels/residence-inn.jpg';
import townplaceSuites from '../public/images/hotels/townplace-suites.jpg';
import staybridgeSuites from '../public/images/hotels/staybridge-suites.jpg';
import hamptonInn from '../public/images/hotels/hampton-inn.jpg';
import homewoodSuites from '../public/images/hotels/homewood-suites.jpg';
import hiltonGardenInn from '../public/images/hotels/hilton-garden-inn.jpg';
import truHotel from '../public/images/hotels/tru-hotel.jpg';
import avidHotel from '../public/images/hotels/avid-hotel.jpg';

const Hotels = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Hotels'}</title>
            <meta content='Travel and accommodation for the wedding' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino my-5 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Hotel Accommodations'}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <HotelCard
                    hotelAddress='1900 Dodge Road NE Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Residence Inn by Marriot'
                    hotelPhone='319-395-0111'
                    hotelPhoto={residenceInn}
                />
                <HotelCard
                    hotelAddress='2823 7th Avenue, Marion, IA 52302'
                    hotelDistanceToVenue='8 miles, 17 minutes'
                    hotelName='Townplace Suites by Marriot'
                    hotelPhone='319-249-0990'
                    hotelPhoto={townplaceSuites}
                />
                <HotelCard
                    hotelAddress='4444 Czech Lane NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Staybridge Suites – An IHG Hotel'
                    hotelPhone='319-294-8700'
                    hotelPhoto={staybridgeSuites}
                />
                {/* TODO additional info (2 night min)*/}
                <HotelCard
                    hotelAddress='1130 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Hampton Inn & Suites by Hilton Cedar Rapids – North'
                    hotelPhone='319-832-1130'
                    hotelPhoto={hamptonInn}
                />
                <HotelCard
                    hotelAddress='1140 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Homewood Suites by Hilton Cedar Rapids – North'
                    hotelPhone='319-378-1140'
                    hotelPhoto={homewoodSuites}
                />
                <HotelCard
                    hotelAddress='4640 N River Blvd NE, Cedar Rapids, IA 52411'
                    hotelDistanceToVenue='6 miles, 11 minutes'
                    hotelName='Hilton Garden Inn'
                    hotelPhone='319-378-7404'
                    hotelPhoto={hiltonGardenInn}
                />
                <HotelCard
                    hotelAddress='3900 Westdale Parkway SW Cedar Rapids, IA 52404'
                    hotelDistanceToVenue='4 miles, 10 minutes'
                    hotelName='Tru by Hilton'
                    hotelPhone='319-238-7300'
                    hotelPhoto={truHotel}
                />
                <HotelCard
                    hotelAddress='645 America Drive SW  Cedar Rapids, IA 52404 '
                    hotelDistanceToVenue='7 miles, 10 minutes'
                    hotelName='AVID Hotel Cedar Rapids South – An IHG Hotel'
                    hotelPhone='319-826-3283'
                    hotelPhoto={avidHotel}
                />
            </div>
        </div>
    </>
);

export default Hotels;
