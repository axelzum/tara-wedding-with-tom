import React from 'react';

type ExploreItemProps = {
    title: string;
    description?: string;
    linkTitle?: string;
    link?: string;
};

export const ExploreItem = (props: ExploreItemProps): React.ReactElement => (
    <div className='my-6 font-quiche'>
        {props.link && !props.linkTitle ?
            <a
                className='text-lg font-bold text-tt-green hover:text-tt-gold'
                href={props.link}
                rel='noopener noreferrer'
                target='_blank'
            >
                {props.title}
            </a> :
            <h2 className='text-lg font-bold'>{props.title}</h2>}
        {props.description && <p>{props.description}</p>}
        {props.link && props.linkTitle &&
            <a
                className='font-bold text-tt-green hover:text-tt-gold'
                href={props.link}
                rel='noopener noreferrer'
                target='_blank'
            >
                {props.linkTitle}
            </a>}
    </div>
);
