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
                    answer='Yes! Both the ceremony and reception will be at the HarMac in downtown Cedar Rapids!'
                    question='Are the ceremony and reception at the same place?'
                />
                <QuestionAnswer
                    answer='Because guests are staying in multiple hotels, there will not be a shuttle provided to the venue from the hotels. However, the venue has plenty of parking and allows cars to be left overnight. Uber and Lyft are also both options in Cedar Rapids.'
                    question='What are transportation and parking options at the venue?'
                />
                <QuestionAnswer
                    answer='We care more about you being there than what you are wearing. We’re going to dress up and we’re asking our wedding guests to do the same. Think semi-formal: cocktail dresses and jumpsuits, suits, sport coats, and ties.'
                    question='What should I wear to the wedding?'
                />
                <QuestionAnswer
                    answer='Your presence is present enough, but should you wish to bring a gift to our wedding, there will be a gift table for your convenience.'
                    question='Can I bring my gift to the wedding?'
                />
                <QuestionAnswer
                    answer='No, it’s not the paparazzi. Tom learned the hard way that Interstate I-380 going through Cedar Rapids has two sets of cameras monitoring your speed. There are also traffic light cameras in the area. We encourage you to follow posted speed limits and to drive safely.'
                    question='What’s with all the cameras in Cedar Rapids?'
                />
            </div>

            <Image
                alt='Picture of Tom and Tara'
                className='w-5/6 object-contain pb-6 md:hidden'
                priority
                src={faqPortrait}
            />
            <Image
                alt='Picture of Tom and Tara'
                className='hidden w-5/6 max-w-5xl object-contain pb-6 md:block'
                priority
                src={faqLandscape}
            />
        </div>
    </>
);

export default Faq;
