import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useState } from "react";
import EachCraft from "./EachCraft";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const loadedItems = useLoaderData();
    const [crafts, setCrafts] = useState(loadedItems);
    const slicedCrafts = crafts.slice(0, 6);
    console.log(slicedCrafts);

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div>
            <Banner></Banner>

            {/* REACT typewriter */}
            <div className='App mb-[20px]'>
                <h1 className="text-3xl md:text-5xl text-center" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span className="font-medium">Kraftelle communicates</span>{' '}
                    <span style={{ color: '#3E54A3', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Color', 'Peace', 'Iridescence', 'Brush of happiness!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>



            {/* arts and crafts */}
            <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:mx-[30px] mx-[7px] mt-[30px]">
                {
                    slicedCrafts.map((aCraft) => <EachCraft key={aCraft._id} craft={aCraft}></EachCraft>)
                }
            </div>


            {/* extra section 1 |  Reviews */}
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container md:px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold mx-2">Discover What Others Are Saying About Kraftelle's Artistry</h2>
                            <p className="dark:text-gray-600 text-[19px] mx-2 text-justify">Get inspired by the heartfelt accounts of our customers as they share their experiences with Kraftelle's captivating paintings. Explore the depth and beauty of our artwork through their eyes and uncover why Kraftelle is their top choice for adding a touch of creativity to their spaces.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-xl dark:bg-gray-50">
                                        <p>I recently purchased a painting from Kraftelle, and I must say, it's truly a masterpiece! The attention to detail and the vibrant colors used in the artwork are mesmerizing. Every brushstroke tells a story, making it a captivating addition to my home decor.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Paul Hinderson</p>
                                                <p className="text-sm dark:text-gray-600">House Owner</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-xl dark:bg-gray-50">
                                        <p>I stumbled upon Kraftelle's paintings online and was immediately drawn to their unique style. After browsing through their collection, I decided to purchase one for my office, and I'm so glad I did! Not only does the painting serve as a conversation starter, but it also brings a sense of joy and inspiration to my workspace. Thank you, Kraftelle, for creating such beautiful and thought-provoking artwork!</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CEO of Scott Papers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-xl dark:bg-gray-50">
                                        <p>I recently redecorated my living room and was searching for the perfect piece of art to tie the whole look together. That's when I discovered Kraftelle's paintings, and I instantly fell in love! The painting I purchased not only complements my decor perfectly but also adds a pop of color and personality to the room. The level of detail in the artwork is incredible, and it never fails to catch the eye of anyone who enters my home. I appreciate the passion and creativity that goes into each painting, and I'll definitely be returning to Kraftelle for future art purchases.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Mukesh Ambani</p>
                                                <p className="text-sm dark:text-gray-600">Architect, Luxury Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-xl dark:bg-gray-50">
                                        <p>As an avid art collector, I'm always on the lookout for unique pieces that speak to me on a personal level. When I came across Kraftelle's paintings, I was immediately struck by the depth and emotion conveyed in each piece. I recently acquired one of their paintings for my collection, and it has quickly become one of my favorite pieces. The use of color and texture creates a sense of movement and energy that draws you into the artwork. Kraftelle's paintings have a timeless quality that ensures they will be cherished for years to come. I'm already planning my next purchase!</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">John brown</p>
                                                <p className="text-sm dark:text-gray-600">Interior Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



     

        </div>
    );
};

export default Home;