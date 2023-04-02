import Image, {StaticImageData} from 'next/image';
import {useState} from 'react';

type partyMemberProps = {
    name: string;
    photo1: StaticImageData;
    photo2: StaticImageData;
};

export const PartyMember = (props: partyMemberProps): React.ReactElement => {
    const [over, setOver] = useState<boolean>(false);

    return (
        <div className='pt-8'>
            <Image
                alt={props.name}
                className='w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-3xl'
                onMouseOut={(): void => setOver(false)}
                onMouseOver={(): void => setOver(true)}
                src={over ? props.photo2 : props.photo1}
            />
            <p className='font-quiche text-xl font-bold pt-5'>{props.name}</p>
        </div>
    );
};
