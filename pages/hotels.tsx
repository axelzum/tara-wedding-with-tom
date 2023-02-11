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
import theHotelAtKirkwood from '../public/images/hotels/the-hotel-at-kirkwood.jpg';

const Hotels = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Hotels'}</title>
            <meta content='Travel and accommodation for the wedding' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Hotel Accommodations'}</h1>

            <div className='font-quiche text-center w-5/6'>
                <p>{'A large event is being held in the Marion/Cedar Rapids area the same weekend as our wedding. Unfortunately, because of this we are unable to provide a block of rooms at a specific hotel.'}</p>
                <p className='font-bold my-4'>{'To ensure everyone has a pleasant stay in Cedar Rapids, we encourage you to reserve your room as soon as possible.'}</p>
                <p>{'To aid your planning, below is a list of recommended hotels in the area. Because guests will be staying in multiple hotels, shuttle service will not be provided to the venue. The venue has ample parking and cars may be left overnight. Uber and Lyft service is readily available.'}</p>
                <p className='italic font-bold mt-4'>{'*Linked discount rates may not be the best deal available, consider hotel loyalty program rates as well.'}</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 my-6'>
                <HotelCard
                    directionsLink='https://goo.gl/maps/4iR19ioe7evbX2ZC8'
                    discountRate='https://www.marriott.com/events/start.mi?id=1675811163619&key=GRP'
                    googleMapsLink='https://goo.gl/maps/KNjNqzjmrzCrxkA88'
                    hotelAddress='1900 Dodge Road NE Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Residence Inn'
                    hotelPhone='319-395-0111'
                    hotelPhoto={residenceInn}
                    hotelWebsite='https://www.marriott.com/en-us/hotels/cidri-residence-inn-cedar-rapids/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/xhYggmvaDy3gpdFK9'
                    discountRate='https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.marriott.com%2Fevents%2Fstart.mi%3Fid%3D1675803565383%26key%3DGRP&data=05%7C01%7C%7Ca2b9e68fd62a4d25762b08db094e3b4e%7Ce468147d05464aba972ffcb53b32830e%7C0%7C0%7C638114003824932328%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=I8BaQYwZPSrjvbe%2BoG9gHxn01Mnzv1k3yVb3%2Bj9Mrzo%3D&reserved=0'
                    googleMapsLink='https://goo.gl/maps/4BVTDbyeu5EKkekP7'
                    hotelAddress='2823 7th Avenue, Marion, IA 52302'
                    hotelDistanceToVenue='8 miles, 17 minutes'
                    hotelName='Townplace Suites'
                    hotelPhone='319-249-0990'
                    hotelPhoto={townplaceSuites}
                    hotelWebsite='https://www.marriott.com/en-us/hotels/cidtp-towneplace-suites-cedar-rapids-marion/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/2uF3jjJ9VJ17dsWW7'
                    extraInstructions='Call For Wedding Discount Rate'
                    googleMapsLink='https://goo.gl/maps/72V1xGVuRcoY7gvk8'
                    hotelAddress='4444 Czech Lane NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 8 minutes'
                    hotelName='Staybridge Suites'
                    hotelPhone='319-294-8700'
                    hotelPhoto={staybridgeSuites}
                    hotelWebsite='https://www.ihg.com/staybridge/hotels/us/en/cedar-rapids/cidst/hoteldetail?fromRedirect=true&qSrt=sBR&qDest=Cedar%20Rapids,%20IA,%20United%20States&qSlH=cidst&qRms=1&qAdlt=2&qChld=0&qCiD=24&qCiMy=052023&qCoD=25&qCoMy=052023&qAAR=6CBARC&qRtP=6CBARC&setPMCookies=true&qSHBrC=SB&qpMn=0&srb_u=1'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/1Z9o6fKQtJqMGhaM7'
                    discountRate='https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CIDPPHX&corporateCode=0002735364'
                    extraInstructions='2-Night Minimum Stay'
                    googleMapsLink='https://goo.gl/maps/BbmX9zPZ6ZqCtarK6'
                    hotelAddress='1130 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Hampton Inn & Suites Cedar Rapids – North'
                    hotelPhone='319-832-1130'
                    hotelPhoto={hamptonInn}
                    hotelWebsite='https://www.hilton.com/en/hotels/cidpphx-hampton-suites-cedar-rapids-north/?SEO_id=GMB-AMER-XS-CIDPPHX&y_source=1_MjA4MjAzNy03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/dshmBnLAuVrgUC6R8'
                    discountRate='https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CIDNOHW&corporateCode=0002735364'
                    extraInstructions='2-Night Minimum Stay'
                    googleMapsLink='https://goo.gl/maps/LfcbDetnX5AeGLgY6'
                    hotelAddress='1140 Park Pl NE, Cedar Rapids, IA 52402'
                    hotelDistanceToVenue='5 miles, 10 minutes'
                    hotelName='Homewood Suites Cedar Rapids – North'
                    hotelPhone='319-378-1140'
                    hotelPhoto={homewoodSuites}
                    hotelWebsite='https://www.hilton.com/en/hotels/cidnohw-homewood-suites-cedar-rapids-north/?SEO_id=GMB-AMER-HW-CIDNOHW&y_source=1_MjA4MjA1MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/RkZcmBoWbMayhykW7'
                    googleMapsLink='https://goo.gl/maps/cqtncFoYtZZMaEeT7'
                    hotelAddress='4640 N River Blvd NE, Cedar Rapids, IA 52411'
                    hotelDistanceToVenue='6 miles, 11 minutes'
                    hotelName='Hilton Garden Inn'
                    hotelPhone='319-378-7404'
                    hotelPhoto={hiltonGardenInn}
                    hotelWebsite='https://www.hilton.com/en/hotels/cidcrgi-hilton-garden-inn-cedar-rapids/?SEO_id=GMB-AMER-GI-CIDCRGI&y_source=1_MjA0MTUxNDEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/xSKNaoVWbGmTK3pr9'
                    googleMapsLink='https://goo.gl/maps/sTrupA6xbheFthNv9'
                    hotelAddress='3900 Westdale Parkway SW Cedar Rapids, IA 52404'
                    hotelDistanceToVenue='4 miles, 10 minutes'
                    hotelName='Tru by Hilton'
                    hotelPhone='319-238-7300'
                    hotelPhoto={truHotel}
                    hotelWebsite='https://www.hilton.com/en/hotels/cidruru-tru-cedar-rapids-westdale/?SEO_id=GMB-AMER-RU-CIDRURU&y_source=1_ODg5Mzg5My03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/NuGaZZmhJLZayXDR7'
                    googleMapsLink='https://goo.gl/maps/HcM45NN8WxJHjDN8A'
                    hotelAddress='645 America Drive SW  Cedar Rapids, IA 52404 '
                    hotelDistanceToVenue='7 miles, 10 minutes'
                    hotelName='AVID Hotel Cedar Rapids South'
                    hotelPhone='319-826-3283'
                    hotelPhoto={avidHotel}
                    hotelWebsite='https://www.ihg.com/avidhotels/hotels/us/en/cedar-rapids/cidav/hoteldetail?fromRedirect=true&qAms=null&qSrt=sBR&qDest=Cedar%20Rapids,%20IA,%20United%20States&qCiD=24&qCiMy=052023&qCoD=25&qCoMy=052023&setPMCookies=true&qExpndSrch=true&srb_u=1'
                />
                <HotelCard
                    directionsLink='https://goo.gl/maps/1v43sxUvGPX3RRtVA'
                    googleMapsLink='https://goo.gl/maps/yVSCpTToypEtbmaY9'
                    hotelAddress='7725 Kirkwood Blvd SW, Cedar Rapids, IA 52404'
                    hotelDistanceToVenue='6 miles, 11 minutes'
                    hotelName='The Hotel At Kirkwood Center'
                    hotelPhone='(319) 848-8700'
                    hotelPhoto={theHotelAtKirkwood}
                    hotelWebsite='https://www.thehotelatkirkwood.com'
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
