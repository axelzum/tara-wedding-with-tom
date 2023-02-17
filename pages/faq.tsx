import Head from 'next/head';
import {QuestionAnswer} from '../components/faq/question-answer';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'FAQ'}</title>
            <meta content='Frequently Asked Questions About The Wedding' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center pb-6'>
            <h1 className='font-fino font-bold text-center my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Frequently Asked Questions'}</h1>

            <div className='w-5/6'>
                <QuestionAnswer
                    answer='Because guests are staying in multiple hotels, there will not be a shuttle provided to the venue from the hotels. However, the venue has plenty of parking and allows cars to be left overnight. Uber and Lyft are also both options in Cedar Rapids.'
                    question='What are transportation and parking options at the venue?'
                />
                <QuestionAnswer
                    answer='Yes! Both the ceremony and reception will be at the HarMac in downtown Cedar Rapids!'
                    question='Are the ceremony and reception at the same place?'
                />
            </div>
        </div>
    </>
);

export default Faq;
