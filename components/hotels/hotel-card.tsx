import Image, {StaticImageData} from 'next/image';
import {MapIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';

type hotelCardProps = {
    hotelName: string;
    hotelAddress: string;
    hotelPhone: string;
    hotelDistanceToVenue: string;
    hotelPhoto: string | StaticImageData;
};

export const HotelCard = (props: hotelCardProps): React.ReactElement => (
    <div className='flex flex-col font-quiche rounded shadow-lg w-full max-w-md'>
        <Image
            alt={props.hotelName}
            className='rounded-t h-44 md:h-60 w-full object-cover'
            priority
            src={props.hotelPhoto}
        />
        <div className='p-3'>
            <div className='items-center mb-1 text-lg font-bold text-tt-green'>
                {props.hotelName}
            </div>

            <div className='flex flex-col gap-1 text-sm'>
                <div className='flex'>
                    <MapPinIcon className='h-5 mr-1 text-tt-green'/>
                    <p>{props.hotelAddress}</p>
                </div>
                <div className='flex'>
                    <PhoneIcon className='h-5 mr-1 text-tt-green'/>
                    <p>{props.hotelPhone}</p>
                </div>
                <div className='flex'>
                    <MapIcon className='h-5 mr-1 text-tt-green'/>
                    <p>{`Distance to venue: ${props.hotelDistanceToVenue}`}</p>
                </div>
            </div>
        </div>
    </div>
);
