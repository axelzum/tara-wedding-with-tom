import Head from 'next/head';
import {QuestionAnswer} from '../components/faq/question-answer';
import Image from 'next/image';

import faqPortrait from '../public/images/faq/faq-portrait.jpg';
import faqLandscape from '../public/images/faq/faq-landscape.jpg';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'FAQ'}</title>
            <meta content='Frequently Asked Questions About The Wedding' name='description'/>
        </Head>

        <div className='flex h-full flex-col items-center pb-6'>
            <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'Frequently Asked Questions'}</h1>

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

            <Image
                alt='Picture of Tom and Tara'
                className='object-contain md:hidden w-5/6 pb-6'
                priority
                src={faqPortrait}
            />
            <Image
                alt='Picture of Tom and Tara'
                className='object-contain hidden md:block w-5/6 pb-6'
                priority
                src={faqLandscape}
            />
        </div>
    </>
);

export default Faq;
