import Image, {StaticImageData} from 'next/image';
import {MapIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';

type hotelCardProps = {
    hotelName: string;
    hotelAddress: string;
    hotelPhone: string;
    hotelDistanceToVenue: string;
    hotelPhoto: string | StaticImageData;
    hotelWebsite: string;
    googleMapsLink: string;
    directionsLink: string;
    discountRate?: string;
    extraInstructions?: string;
};

export const HotelCard = (props: hotelCardProps): React.ReactElement => (
    <div className='flex w-full max-w-md flex-col rounded shadow-lg font-quiche'>
        <Image
            alt={props.hotelName}
            className='h-44 w-full rounded-t object-cover md:h-60'
            priority
            src={props.hotelPhoto}
        />
        <div className='p-3'>
            <div className='mb-1 items-center text-lg font-bold text-tt-green'>
                {props.hotelName}
            </div>

            <div className='flex flex-col gap-1 text-sm'>
                <div className='flex'>
                    <MapPinIcon className='mr-1 h-5 text-tt-green'/>
                    <span>
                        {`${props.hotelAddress} | `}
                        <a
                            className='font-bold text-tt-green hover:text-tt-gold'
                            href={props.googleMapsLink}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            {'Map'}
                        </a>
                    </span>
                </div>
                <div className='flex'>
                    <PhoneIcon className='mr-1 h-5 text-tt-green'/>
                    <a
                        className='font-bold text-tt-green hover:text-tt-gold'
                        href={`tel: ${props.hotelPhone}`}
                    >
                        {props.hotelPhone}
                    </a>
                </div>
                <div className='flex'>
                    <MapIcon className='mr-1 h-5 text-tt-green'/>
                    <span>
                        <a
                            className='font-bold text-tt-green hover:text-tt-gold'
                            href={props.directionsLink}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            {'Directions to venue:'}
                        </a>
                        {` ${props.hotelDistanceToVenue}`}
                    </span>
                </div>
            </div>

            <div className='my-2 flex flex-col'>
                {props.extraInstructions &&
                    <p className='pb-2 text-center text-xs italic'>{props.extraInstructions}</p>}
                <div className='flex justify-evenly'>
                    <a
                        className='rounded-full px-2 py-1 text-sm text-white shadow shadow-tt-green bg-tt-green hover:bg-tt-gold'
                        href={props.hotelWebsite}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        {'Visit Website'}
                    </a>
                    {props.discountRate &&
                        <a
                            className='rounded-full px-2 py-1 text-sm text-white shadow shadow-tt-green bg-tt-green hover:bg-tt-gold'
                            href={props.discountRate}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            {'Discount Rate*'}
                        </a>}
                </div>
            </div>
        </div>
    </div>
);
