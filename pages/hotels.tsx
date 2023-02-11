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
            <h1 className='font-fino my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Hotel Accommodations'}</h1>

            <div className='font-quiche text-center w-5/6'>
                <p>{'A large baseball league championship is being held in the Marion/Cedar Rapids area the same weekend as our wedding. Unfortunately, because of this we are unable to provide a block of rooms at a specific hotel.'}</p>
                <p className='font-bold my-4'>{'To ensure everyone has a pleasant stay in Cedar Rapids, we encourage you to reserve your room as soon as possible.'}</p>
                <p>{'To aid your planning, below is a list of recommended hotels in the area. Because guests will be staying in multiple hotels, shuttle service will not be provided to the venue. The venue has ample parking and cars may be left overnight. Uber and Lyft service is readily available.'}</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 my-6'>
                <HotelCard
                    hotelAddress='1900 Dodge Road NE Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Residence Inn'
                    hotelPhone='319-395-0111'
                    hotelPhoto={residenceInn}
                />
                <HotelCard
                    hotelAddress='2823 7th Avenue, Marion, IA 52302'
                    hotelDistanceToVenue='8 miles, 17 minutes'
                    hotelName='Townplace Suites'
                    hotelPhone='319-249-0990'
                    hotelPhoto={townplaceSuites}
                />
                <HotelCard
                    hotelAddress='4444 Czech Lane NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Staybridge Suites'
                    hotelPhone='319-294-8700'
                    hotelPhoto={staybridgeSuites}
                />
                {/* TODO additional info (2 night min)*/}
                <HotelCard
                    hotelAddress='1130 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Hampton Inn & Suites Cedar Rapids – North'
                    hotelPhone='319-832-1130'
                    hotelPhoto={hamptonInn}
                />
                <HotelCard
                    hotelAddress='1140 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Homewood Suites Cedar Rapids – North'
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
                    hotelName='AVID Hotel Cedar Rapids South'
                    hotelPhone='319-826-3283'
                    hotelPhoto={avidHotel}
                />
            </div>

            <div className='font-quiche text-center w-5/6 pb-6'>
                <p>{'Several hotels near 33rd Avenue SW are close to the venue, but this area is less desirable than other recommended hotels.'}</p>
                <p>{'Coralville/Iowa City is an easy 25-minute drive on I-380 if you would like other options for hotel rates and availability.'}</p>
            </div>
        </div>
    </>
);

export default Hotels;
