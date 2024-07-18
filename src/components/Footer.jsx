import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="flex flex-col bg-[#2d2424] pt-[30px] pb-p-[10px] tracking-wide">
                <div className="flex justify-around gap-[30px] p-[30px] flex-col lg:flex-row lg:items-center">
                    <div className="max-w-[400px]">
                        <h1 className="text-left text-3xl font-bold text-[#E0C097] ">
                            Kopi Studio 20
                            <div className="h-[8px] w-[250px] my-2.5 bg-white"></div>
                        </h1>
                        <span className="flex items-center gap-2.5">
                            <img src="src/img/icon-location.png" alt="location" className="w-[36px] h-[36px]" />
                            <p className="text-white text-sm pt-2.5">Jl. Bendungan Sigura-gura No.29 Dinoyo. Lowokwaru, Kota Malang</p>
                        </span>
                        <span className="flex items-center gap-2.5">
                            <img src="src/img/icon-location.png" alt="location" className="w-[36px] h-[36px]" />
                            <p className="text-white text-sm pt-2.5">kopistudio20@gmail.com</p>
                        </span>
                    </div>
                    <div className="socmed">
                        <h3 className="text-[#E0C097] text-2xl font-bold">Social Media</h3>
                        <ul className="list-style-none text-white text-sm cursor-pointer">
                            <li className="py-[5px]">Instagram</li>
                            <li className="py-[5px]">Facebook</li>
                            <li className="py-[5px]">Tiktok</li>
                            <li className="py-[5px]">Gmail</li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <h3 className="text-[#E0C097] text-2xl font-bold">Our Menu</h3>
                        <ul className="list-style-none text-white text-sm cursor-pointer flex px-[5px] gap-[50px]">
                            <div className="left list-style-none text-white text-sm">
                            <li className="py-[5px]">Black Tea</li>
                            <li className="py-[5px]">Green Tea</li>
                            <li className="py-[5px]">D'Cream</li>
                            </div>
                            <div className="right list-style-none text-white text-sm">
                            <li className="py-[5px]">Instagram</li>
                            <li className="py-[5px]">Facebook</li>
                            <li className="py-[5px]">Tiktok</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <h2 className="licensed mt-5 text-white text-base text-center">
                © 2023 Kopi Studio 9 Group. All rights reserved.      
                </h2>
            </footer>
        )
    }
}

export default Footer;