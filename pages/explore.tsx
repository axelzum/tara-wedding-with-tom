import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {ExploreItem} from '../components/explore/explore-item';

import doImage from '../public/images/explore/DoImage.jpg';
import drinkImage from '../public/images/explore/DrinkImage.jpg';
import eatImage from '../public/images/explore/EatImage.jpg';
import crImage from '../public/images/explore/CRImage.jpg';

/* eslint-disable react/jsx-curly-brace-presence,react/jsx-no-literals,react/jsx-max-props-per-line,react/jsx-indent-props,react/jsx-closing-bracket-location,react/jsx-closing-tag-location */

const Explore = (): React.ReactElement => (
    <>
        <Head>
            <title>{'Explore Cedar Rapids'}</title>
            <meta content='Info and recommendations for your visit to Cedar Rapids' name='description'/>
        </Head>

        <div className='flex flex-col h-full items-center pb-6'>
            <h1 className='font-fino font-bold my-6 lg:my-10 text-4xl md:text-5xl xl:text-6xl'>{'Explore Cedar Rapids'}</h1>

            {/* Things To Do */}
            <Image
                alt='Things To Do'
                className='rounded-t lg:w-5/6 w-full object-cover'
                priority
                src={doImage}
            />
            <p className='font-fino text-center mt-6 text-3xl xl:text-4xl'>{'Things To Do'}</p>
            <div className='font-quiche w-5/6'>
                <ExploreItem
                    description='This museum houses more than 7,200 works of art spanning many eras-from Roman antiquity to the present. It features a large collection of art by Grant Wood and Marvin Cone'
                    link='https://www.crma.org/'
                    linkTitle='Museum Website'
                    title='Cedar Rapids Art Museum'
                />
                <ExploreItem
                    description='Visit the original home and studio of American artist Grant Wood. It is where he created many of his well-known pieces, including American Gothic. Free docent-led tours are available on Saturdays and Sundays from 12-4 p.m.'
                    link='https://www.crma.org/grant-wood'
                    linkTitle='Visitor Info'
                    title='Grant Wood Studio'
                />
                <ExploreItem
                    description='This neighborhood is a little taste of Europe in the middle of the midwest! It is a great area to walk around and check out the restaurants, bars, antique shops and specialty stores.'
                    link='https://www.czechvillagecedarrapids.com'
                    linkTitle='Visitor Info'
                    title='Czech Village'
                />
                <ExploreItem
                    description='This is the nation’s foremost institution for the collection, interpretation, and preservation of Czech and Slovak history and culture.'
                    link='https://https://ncsml.org'
                    linkTitle='Museum Website'
                    title='National Czech & Slovak Museum & Library'
                />
                <ExploreItem
                    description='Close to Czech Village, hike the trails to the top of this former landfill for great views of the city.'
                    link='https://www.solidwasteagency.org/mount-trashmore'
                    linkTitle='Visitor Info'
                    title='Mount Trashmore'
                />
                <div className='font-quiche my-6'>
                    <h2 className='text-lg font-bold'>{'New Bohemia District'}</h2>
                    <p>There are many restaurants and shops in this area including the <a
                        className='text-tt-green font-bold hover:text-tt-gold' href='https://www.newbocitymarket.org/'
                        rel='noopener noreferrer' target='_blank'>NewBo City Market</a>. Check out nearby <a
                        className='text-tt-green font-bold hover:text-tt-gold'
                        href='https://www.raygunsite.com/collections/cedar-rapids' rel='noopener noreferrer'
                        target='_blank'>RAYGUN</a> store for fun t-shirts and gifts that have a Cedar Rapids or
                        Midwestern theme.</p>
                </div>
                <ExploreItem
                    description='This is the town where Tara grew up. Uptown has many great shops and restaurants surrounding City Square Park.'
                    link='https://uptownmarion.com/'
                    linkTitle='Visitor Info'
                    title='Uptown Marion'
                />
                <ExploreItem
                    description='Take in some minor league baseball before or after our wedding. Friday at 6:35 pm or Sunday at 1:05 pm.'
                    link='https://www.milb.com/cedar-rapids/'
                    linkTitle='Schedule'
                    title='Cedar Rapids Kernals'
                />
                <ExploreItem
                    description='Cedar Rapids has a few great bike trails and bike lanes that go throughout the downtown area. Bring your bike for the weekend and pick a hotel near the trail!'
                    link='https://cms8.revize.com/revize/cedarrapids/Parks%20&%20Rec/Parks/2021MetroTrailsMapElectronicVersion.pdf'
                    linkTitle='Trail Info'
                    title='Bike Trails'
                />
                <ExploreItem
                    description='Explore downtown Cedar Rapids on a Veo electric scooter. Download the Veo App to rent.'
                    link='https://www.veoride.com/cedar-rapids/'
                    linkTitle='Veo Info'
                    title='Downtown Scooter Rental'
                />
            </div>

            {/* Get A Drink */}
            <Image
                alt='Get A Drink'
                className='rounded-t lg:w-5/6 w-full object-cover'
                priority
                src={drinkImage}
            />
            <p className='font-fino text-center mt-6 text-3xl xl:text-4xl'>{'Get A Drink'}</p>
            <p className='font-quiche text-center font-bold text-lg'>{'Tom and Tara\'s Favorite Bars and Pubs'}</p>
            <div className='font-quiche w-5/6'>
                <ExploreItem
                    description='Tara’s favorite pub to get a drink after work. 2 for 1 happy hour!'
                    link='https://brickspubcr.com'
                    title="Brick's Pub – Downtown CR"
                />
                <ExploreItem
                    description='Nice brewery that shares a building with Black Sheep Social Club.'
                    link='https://www.clockhousebrewing.com'
                    title='Clock House Brewing – Downtown CR'
                />
                <ExploreItem
                    description='Popular brewery in downtown Cedar Rapids.'
                    link='https://iowabrewing.beer'
                    title='Iowa Brewing Company – Downtown CR'
                />
                <ExploreItem
                    description='Great brewery in Czech Village. Have a drink on their patio after checking out all the shopping or after exploring the nearby trails.'
                    link='https://www.lionbridgebrewing.com'
                    title='Lion Bridge Brewing Co. – Czech Village'
                />
                <ExploreItem
                    description='Probably our very favorite restaurant in Cedar Rapids! Great food, great cocktails, and a great patio!'
                    link='https://www.lpstreetfood.com'
                    title='LP Street Food (Local Pour) – CR'
                />
                <ExploreItem
                    description='Award winning winery and distillery very close to Cedar Rapids. A wonderful tasting room and outdoor patio. Live music on Friday nights!'
                    link='https://crwine.com'
                    title='Cedar Ridge Winery & Distillery – Swisher'
                />
                <ExploreItem
                    description='Tom and Tara’s favorite pub in Marion. Great atmosphere and a nice patio in the alley out back. Often there is live music in the summer!'
                    link='https://uptownsnug.com'
                    title='Uptown Snug – Marion'
                />
            </div>

            {/* Grab A Bite */}
            <Image
                alt='Grab A Bite'
                className='rounded-t lg:w-5/6 w-full object-cover'
                priority
                src={eatImage}
            />
            <p className='font-fino text-center mt-6 text-3xl xl:text-4xl'>{'Grab A Bite'}</p>
            <p className='font-quiche text-center font-bold text-lg'>{'Tom and Tara\'s Favorite Restaurants'}</p>
            <div className='font-quiche w-5/6'>
                <ExploreItem
                    description='Our Favorite Downtown Coffee Shop (and great breakfast sandwiches!)'
                    link='https://www.dashcoffeeroasters.com/'
                    title='Dash Coffee Roasters – CR and Marion'
                />
                <ExploreItem
                    description='Probably our very favorite restaurant in Cedar Rapids! Great food, great cocktails, and a great patio!'
                    link='https://www.lpstreetfood.com'
                    title='LP Street Food (Local Pour) – CR'
                />
                <ExploreItem
                    description='A fun restaurant with amazing atmosphere in downtown.'
                    link='https://www.iamtheblacksheep.com/'
                    title='Black Sheep Social Club – Downtown CR'
                />
                <ExploreItem
                    link='https://www.crosbysiowa.com/'
                    title='Crosby’s – New Bohemia'
                />
                <ExploreItem
                    description='Tom would go here when he was missing Chicago Dogs after he moved to CR, was just a couple blocks from Tom and Tara’s first apartment together!'
                    link='https://theflyingwienie.com'
                    title='The Flying Wienie – CR'
                />
                <ExploreItem
                    description='Tara’s favorite pub to get a drink after work. 2 for 1 happy hour!'
                    link='https://brickspubcr.com'
                    title='Bricks Pub – Downtown CR'
                />
                <ExploreItem
                    description='Our favorite downtown pizza spot!'
                    link='https://www.needcr.com/'
                    title='Need Pizza – Downtown CR'
                />
                <ExploreItem
                    description='Fantastic burgers in a teeny tiny little building!'
                    link='https://www.maproomcr.com/'
                    title='The Map Room – Downtown CR'
                />
                <ExploreItem
                    description='Owned by the same owner’s as our favorite place, LP, Hip-Stir has a similar vibe and menu, just in Marion instead of downtown!'
                    link='https://www.facebook.com/thehipstir'
                    title='The Hip-Stir – Marion'
                />
                <ExploreItem
                    description='A great mix of all types of Asian cuisines, they do everything well. Tom loves to come here for Hot Pot.'
                    link='https://www.mixsushikitchen.com/'
                    title='MIX Sushi & Kitchen – Marion'
                />
                <ExploreItem
                    link='https://www.goldfinchtap.com'
                    title='GoldFinch Tap & Eatery – Marion'
                />
                <ExploreItem
                    description='Great breakfast and lunch diner in Marion.'
                    link='https://www.facebook.com/WestEndMarion/'
                    title='West End Diner – Marion'
                />
                <ExploreItem
                    description='Probably the most famous pizza spot in Marion, Iowa. Great pizza and don’t forget to get a Zookie! '
                    link='https://zoeyspizza.com'
                    title='Zoey’s Pizzeria – Marion'
                />
            </div>

            {/* About Cedar Rapids */}
            <Image
                alt='About Cedar Rapids'
                className='rounded-t lg:w-5/6 w-full object-cover'
                priority
                src={crImage}
            />
            <p className='font-fino text-center mt-6 text-3xl xl:text-4xl'>{'About Cedar Rapids'}</p>
            <div className='font-quiche w-5/6'>
                <ExploreItem
                    description='Cedar Rapids is home to many grain processing plants. If you are lucky, Quaker will be making Cap’n Crunch with Crunch Berries while you are visiting.'
                    title='What’s that smell?'
                />
                <ExploreItem
                    description='The sculpture in downtown Cedar Rapids represents the Tree of Five Seasons which is the city’s logo.'
                    title='No that’s not a giant toilet brush.'
                />
                <ExploreItem
                    description='On August 10, 2020, a big wind called a derecho came through Cedar Rapids and Marion, destroying 70% of the tree canopy. It had hurricane force winds up to 140 mph.'
                    title='Where are all the trees?'
                />
                <div className='font-quiche my-6'>
                    <h2 className='text-lg font-bold'>{'Hell Or High Water'}</h2>
                    <p>{'The city is continuing to recover from a massive flood that devastated much of the city on Friday June 13th, 2008. You still see construction along the river as the City continues to rebuild and install flood prevention walls and berms.'}</p>
                    <p className='mt-3'>{'The high-water mark is located at Mercy Hospital, on the corner of 8th Ave and 10th street. Normally you can\'t even see the river from here, but at this time the river was about waist deep.'}</p>
                </div>
            </div>
        </div>
    </>
);

export default Explore;
