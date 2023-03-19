import React from 'react';

export const QuestionAnswer = ({question, answer}: {question: string; answer: string}): React.ReactElement => (
    <div className='mb-6 font-quiche'>
        <h2 className='text-lg font-bold'>{question}</h2>
        <p>{answer}</p>
    </div>
);
