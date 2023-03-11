import Head from 'next/head';
import {QuestionAnswer} from '../components/faq/question-answer';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Our Story'}</title>
            <meta content="Tom and Tara's love story" name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center'>
            <h1 className='font-fino font-bold text-center my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Our Story'}</h1>

            <div className='w-5/6 font-quiche pb-6'>
                <p className='text-lg font-bold mb-6'>{'This one time… at band camp…'}</p>
                <p className='mb-4'>{'In the summer of 2015, Tara was starting her first band camp with the Marching Illini while Tom was starting his last. The two instantly connected. They began to hang out, go for coffee, play Chess (Tom’s idea of a fun first date), and just get to know each other outside of band. After a game in which Illinois beat Middle Tennessee on a last second field goal (a game which a normal Big Ten team should have easily won by 20+ points), Tom asked the most wonderful question, “So like, you’re my girlfriend, right?”'}</p>
                <p className='mb-4'>{'After Tom graduated in May, the couple spent four and a half years in a long-distance relationship around the Midwest. Tom moved to Madison, Wisconsin, and then to Chicago while Tara finished her studies at the University of Illinois. She graduated in 2018 and took a job in Tom’s hometown of Bloomington, Illinois (even though he wasn’t there). A transfer in 2019 took her back home to Iowa. For years they would drive to see each other every few weeks and both of them kept stubbornly thinking the other would relocate. After the pandemic hit, Tom thought about what was more important in life and decided it was time to leave his favorite city if it meant he could be with the woman he loved.'}</p>
                <p>{'After thousands of miles driven, hours of podcasts consumed, and many square feet of Jet’s Pizza eaten, we can officially say that Tom and Tara are tying the knot. We can’t wait to celebrate with you.'}</p>
            </div>
        </div>
    </>
);

export default Faq;
