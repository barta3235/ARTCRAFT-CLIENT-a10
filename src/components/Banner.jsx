import { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from 'aos'
import 'aos/dist/aos.css'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

    };


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div className='h-[700px]' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slides-text slider-one'>
                        <div className='font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-full'>
                            <p>Acrylic Portrait Canvas</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides-text slider-two'>
                        <div className='font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-full'>
                            <p>Forest based Landscape painting</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides-text slider-three'>
                        <div className='font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-full'>
                            <p>Superhero Cartoon Design</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides-text slider-four'>
                        <div className='font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-full'>
                            <p>Realistic Oil Portrait</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides-text slider-five'>
                        <div className='font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-full'>
                            <p>Architectural Charcoal Drawing</p>
                        </div>
                    </div>
                </SwiperSlide>


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;