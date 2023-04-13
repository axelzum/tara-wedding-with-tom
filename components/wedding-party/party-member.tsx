import Image, {StaticImageData} from 'next/image';
import {useState} from 'react';

type partyMemberProps = {
    name: string;
    photo1: StaticImageData;
    photo2?: StaticImageData;
};

export const PartyMember = (props: partyMemberProps): React.ReactElement => {
    const [over, setOver] = useState<boolean>(false);

    return (
        <div className='pt-8'>
            <Image
                alt={props.name}
                className='h-60 w-60 rounded-3xl object-cover sm:h-72 sm:w-72'
                onMouseOut={(): void => setOver(false)}
                onMouseOver={(): void => setOver(true)}
                placeholder='blur'
                src={over ? props.photo2 || props.photo1 : props.photo1}
            />
            <p className='pt-5 text-xl font-bold font-quiche'>{props.name}</p>
        </div>
    );
};
