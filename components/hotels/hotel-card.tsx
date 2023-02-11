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
                    <span>
                        {`${props.hotelAddress} | `}
                        <a
                            className='text-tt-green font-bold hover:text-tt-gold'
                            href={props.googleMapsLink}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            {'Map'}
                        </a>
                    </span>
                </div>
                <div className='flex'>
                    <PhoneIcon className='h-5 mr-1 text-tt-green'/>
                    <a
                        className='text-tt-green font-bold hover:text-tt-gold'
                        href={`tel: ${props.hotelPhone}`}
                    >
                        {props.hotelPhone}
                    </a>
                </div>
                <div className='flex'>
                    <MapIcon className='h-5 mr-1 text-tt-green'/>
                    <span>
                        <a
                            className='text-tt-green font-bold hover:text-tt-gold'
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

            <div className='flex flex-col my-2'>
                {props.extraInstructions &&
                    <p className='italic text-center text-xs pb-2'>{props.extraInstructions}</p>}
                <div className='flex justify-evenly'>
                    <a
                        className='shadow bg-tt-green rounded py-1 px-2 text-white text-sm hover:bg-tt-gold'
                        href={props.hotelWebsite}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        {'Visit Website'}
                    </a>
                    {props.discountRate &&
                        <a
                            className='shadow bg-tt-green rounded py-1 px-2 text-white text-sm hover:bg-tt-gold'
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
