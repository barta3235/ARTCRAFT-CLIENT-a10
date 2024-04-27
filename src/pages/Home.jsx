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
                <h1 className="text-6xl text-center" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
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



            



        </div>
    );
};

export default Home;