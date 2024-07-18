import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

class Menu extends React.Component {
    render() {
        const menuItem = [
            {
                imageSrc: "./src/img/dcream.jpg",
                title: "D'cream",
                description: "Drink with a combination of coffee and fresh milk to lift your mood."
            },
            {
                imageSrc: "./src/img/greentea.jpg",
                title: "Green tea",
                description: "Drink with a mixture of sweet green tea to refresh your day."
            },
            {
                imageSrc: "./src/img/thaitea.jpg",
                title: "Thai tea",
                description: "Drink with a mixture of sweet thai tea to refresh your day."
            },
            {
                imageSrc: "./src/img/blacktea.jpg",
                title: "Black tea",
                description: "Drink with a blend of robust black tea to invigorate your senses"
            },
            {
                imageSrc: "./src/img/jasminetea.jpg",
                title: "Jasmine Tea",
                description: "Unwind with the delicate aroma of jasmine tea to soothe your soul"
            },
        ]


        return (
            <section className="menu flex flex-col items-center justify-center pb-[50px] bg-gradient-to-b from-softbrown to-white">
                <h1 className="flex flex-col items-center text-center tracking-wide text-4xl font-bold text-[#2d2424] ">
                    OUR MENU
                    <div className="bg-white w-[220px] h-[3px] flex items-center justify-center"></div>
                </h1>
                <div className="menu-items-all mt-[40px] !max-w-[900px] lg:flex flex-row justify-center items-center gap-[30px] overflow-hidden">
                    <button className="swipe-left hidden lg:block">
                        <img src="src/img/chevron-left.png" alt="left" className="w-[70px]" />
                    </button>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="!max-w-[320px] sm:!max-w-[600px] md:!max-w-[800px] lg:!max-w-[900px]"
                    >
                        {menuItem.map((item, index) => (
                            <SwiperSlide key={index} className="!w-[250px]">
                                <div className="item-menu flex flex-col items-center justify-center !w-[250px] !h-[350px] bg-glass shadow-card p-4 rounded-3xl mb-[20px]">
                                    <div className="image max-h-[220px] overflow-hidden rounded-xl">
                                        <img src={item.imageSrc} alt={item.title} className="w-[200px] object-contain" />
                                    </div>
                                    <div className="description text-justify">
                                        <h3 className="mt-[15px] text-[#B85C38] tracking-wide text-xl font-bold">{item.title}</h3>
                                        <p className="text-[#2d2424] text-base tracking-wide font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="swipe-right hidden lg:block">
                        <img src="src/img/chevron-left.png" alt="right" className="w-[70px] transform rotate-180" />
                    </button>
                </div>
            </section>
        )
    }
}

export default Menu;