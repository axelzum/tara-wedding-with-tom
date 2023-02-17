import React from 'react';

type ExploreItemProps = {
    title: string;
    description?: string;
    linkTitle?: string;
    link?: string;
};

export const ExploreItem = (props: ExploreItemProps): React.ReactElement => (
    <div className='font-quiche my-6'>
        {props.link && !props.linkTitle ?
            <a
                className='text-tt-green text-lg font-bold hover:text-tt-gold'
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
                className='text-tt-green font-bold hover:text-tt-gold'
                href={props.link}
                rel='noopener noreferrer'
                target='_blank'
            >
                {props.linkTitle}
            </a>}
    </div>
);
