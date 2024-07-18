import React from "react";

class Benefit extends React.Component {
    render() {
        const benefitItem = [
            {
                imageSrc: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/B85C38/external-catering-party-flatart-icons-outline-flatarticons.png",
                title: "Catering",
                description: " You can bring Kopi Studio 9 to your office events or personal celebrations"
            },
            {
                imageSrc: "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/B85C38/external-coffee-pack-coffee-shop-kmg-design-detailed-outline-kmg-design.png",
                title: "Coffee Pack",
                description: "In 200g packaging, you can enjoy specialty Arabica Kopi Studio 9coffee at home."
            },
            {
                imageSrc: "https://img.icons8.com/ios-filled/50/B85C38/gift--v1.png",
                title: "Hampers",
                description: "Send a box containing coffee beans, his favorite drink and a coffee mug for your special someone."
            },
            {
                imageSrc: "https://img.icons8.com/ios/50/B85C38/t-shirt--v1.png",
                title: "Merchandise",
                description: "Various choices of merchandise to show your love (or madness) for the world of coffee"
            }
        ] 
        return (
            <section className="flex flex-col items-center justify-center">
                <h1 className="flex flex-col items-center text-center tracking-wide text-4xl font-bold text-[#2d2424] ">
                    TAKE US WITH YOU
                    <div className="bg-[#797160] w-[250px] h-[3px] flex items-center justify-center"></div>
                </h1>
                <div className="benefit-items mt-[40px] grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-[30px] p-5">
                    {benefitItem.map((item,index) => (
                    <div className="max-w-[220px] h-[300px] flex flex-col items-center justify-center mb-[20px] tracking-wide overflow-hidden p-[16px]" key={index}>
                    <img className="h-[100px]" src={item.imageSrc} alt={item.title}></img>
                    <div className="text-center tracking-wide text-[#2d2424]">
                        <h3 className="font-bold mt-[20px] text-2xl">{item.title}</h3>
                        <p className="text-sm">
                            {item.description}
                        </p>
                    </div>
                </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Benefit;