import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="about bg-gradient-to-b from-lightbrown to-softbrown px-[70px] pb-[50px]">
                <h1 className="text-[#2d2424] flex flex-row items-center text-4xl font-bold mb-[20px]">
                    About Us
                    <div className="line h-[3px] w-[50px] ms-[25px] bg-[#ffff]"> </div>
                </h1>
                <div className="about-items flex lg:flex-row flex-col items-center justify-center gap-[40px] pt-3">
                    <aside>
                        <img src="src/img/coffeeshop-place.jpg" alt="coffeeshop place" className="rounded-full max-w-[300px]" />
                    </aside>
                    <article>
                        <p className="tracking-wide text-base text-[#ffff] text-justify">
                            Established in 2018, Kopi Studio 20 is a passionate coffee
                            startups aiming to brew the best specialty coffee for our
                            customer. As our name derived from the word forest, we aim to
                            grow fast, strong, tall and bring life to our surrounding. We
                            want our existence to increase coffee quality for our community.
                            <br />
                            <br />
                            Leveraging network and experience, we are using the latest tech
                            for our tools and bean blend. Directly from the selected farmer,
                            high-quality beans are processed and roasted to perfection by
                            ourselves then passed on to our skilled barista, excitedly
                            prepare the cup of happiness to be served to you especially.
                        </p>
                        <button className="px-[15px] py-[10px] mt-[10px] text-base bg-[#B85C38] rounded-xl text-[#ffff] font-bold cursor-pointer shadow-md">Read More</button>
                    </article>
                </div>
                <div className="about-location flex items-center justify-center mt-[30px] gap-[20px]">
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/external-google-maps-social-media-justicon-flat-justicon.png" className="w-[70px]"alt='external-google-maps-social-media-justicon-flat-justicon' />
                <div className="about-location-description tracking-wide">
                    <h3 className="text-[#2d2424] font-bold text-2xl">Location</h3>
                    <p className="text-[#ffff] text-base">Jl. Bendungan Sigura-gura No. 29 Dinoyo, Lowokwaru, Malang</p>
                </div>
                </div>
            </div>
        )
    }
}

export default About;