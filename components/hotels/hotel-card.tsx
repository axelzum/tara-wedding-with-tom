import Image, {StaticImageData} from 'next/image';

type hotelCardProps = {
    hotelName: string;
    hotelAddress: string;
    hotelPhone: string;
    hotelDistanceToVenue: string;
    hotelPhoto: string | StaticImageData;
};

export const HotelCard = (props: hotelCardProps): React.ReactElement => (
    <div className='font-quiche w-50 p-4 rounded-md shadow-lg'>
        <h2 className='font-bold text-center text-xl'>{props.hotelName}</h2>
        <Image
            alt={props.hotelName}
            className='h-40 w-fit m-auto object-contain'
            priority
            src={props.hotelPhoto}
        />
        <div className='font-quiche'>
            <p>{props.hotelAddress}</p>
            <p>{props.hotelPhone}</p>
            <p>{`Distance to venue: ${props.hotelDistanceToVenue}`}</p>
        </div>
    </div>
);
