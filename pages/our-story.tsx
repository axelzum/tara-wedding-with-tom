import Head from 'next/head';
import Image from 'next/image';

import photo1 from '../public/images/our-story/15134742_10209040638067900_78647879223841030_n.jpg';
import photo2 from '../public/images/our-story/IMG_3845.jpg';
// import photo3 from '../public/images/our-story/IMG_4294.jpg';
import photo4 from '../public/images/our-story/IMG_4767.jpeg';
import photo5 from '../public/images/our-story/IMG_5003.jpeg';
import photo6 from '../public/images/our-story/IMG_5141.jpeg';
import photo7 from '../public/images/our-story/IMG_5563.jpeg';
import photo8 from '../public/images/our-story/IMG_5630.jpeg';
import photo9 from '../public/images/our-story/IMG_5752.jpg';
import photo10 from '../public/images/our-story/IMG_5939.jpeg';
import photo11 from '../public/images/our-story/IMG_6480.jpg';
import photo12 from '../public/images/our-story/IMG_6909.jpeg';
import photo13 from '../public/images/our-story/IMG_7703.jpg';
import photo14 from '../public/images/our-story/IMG_7892.jpeg';
import photo15 from '../public/images/our-story/IMG_7951.jpeg';
import photo16 from '../public/images/our-story/IMG_8530.jpeg';
import photo17 from '../public/images/our-story/IMG_8616.jpeg';

const Faq = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Our Story'}</title>
            <meta content="Tom and Tara's love story" name='description'/>
        </Head>

        <div className='flex h-full flex-col items-center'>
            <h1 className='my-6 text-center text-4xl font-bold font-fino md:text-5xl lg:my-10 xl:text-6xl'>{'Our Story'}</h1>

            <div className='w-5/6 font-quiche'>
                <p className='mb-6 text-lg font-bold'>{'This one time… at band camp…'}</p>
                <p className='mb-4'>{'In the summer of 2015, Tara was starting her first band camp with the Marching Illini while Tom was starting his last. The two instantly connected. They began to hang out, go for coffee, play Chess (Tom’s idea of a fun first date), and just get to know each other outside of band. After a game in which Illinois beat Middle Tennessee on a last second field goal (a game which a normal Big Ten team should have easily won by 20+ points), Tom asked the most wonderful question, “So like, you’re my girlfriend, right?”'}</p>
                <p className='mb-4'>{'After Tom graduated in May, the couple spent four and a half years in a long-distance relationship around the Midwest. Tom moved to Madison, Wisconsin, and then to Chicago while Tara finished her studies at the University of Illinois. She graduated in 2018 and took a job in Tom’s hometown of Bloomington, Illinois (even though he wasn’t there). A transfer in 2019 took her back home to Iowa. For years they would drive to see each other every few weeks and both of them kept stubbornly thinking the other would relocate. After the pandemic hit, Tom thought about what was more important in life and decided it was time to leave his favorite city if it meant he could be with the woman he loved.'}</p>
                <p>{'After thousands of miles driven, hours of podcasts consumed, and many square feet of Jet’s Pizza eaten, we can officially say that Tom and Tara are tying the knot. We can’t wait to celebrate with you.'}</p>
            </div>

            <div className='mx-4 my-6 grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Image
                    alt='1'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo1}
                />
                <Image
                    alt='2'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo2}
                />
                {/* <Image*/}
                {/*    alt='3'*/}
                {/*    className='h-60 w-60 rounded-3xl object-cover sm:h-72 sm:w-72'*/}
                {/*    src={photo3}*/}
                {/* />*/}
                <Image
                    alt='4'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo4}
                />
                <Image
                    alt='5'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo5}
                />
                <Image
                    alt='6'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo6}
                />
                <Image
                    alt='7'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo7}
                />
                <Image
                    alt='8'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo8}
                />
                <Image
                    alt='9'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo9}
                />
                <Image
                    alt='10'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo10}
                />
                <Image
                    alt='11'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo11}
                />
                <Image
                    alt='12'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo12}
                />
                <Image
                    alt='13'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo13}
                />
                <Image
                    alt='14'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo14}
                />
                <Image
                    alt='15'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo15}
                />
                <Image
                    alt='16'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo16}
                />
                <Image
                    alt='17'
                    className='h-72 w-72 rounded-3xl object-cover'
                    src={photo17}
                />
            </div>
        </div>
    </>
);

export default Faq;
