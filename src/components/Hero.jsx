import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero flex flex-col lg:flex-row justify-around items-center px-[25px] py-[70px] gap-[75px] lg:gap-[150px] bg-gradient-to-b from-darkbrown to-lightbrown">
        <div className="flex flex-col items-center justify-center lg:items-start gap-y-[10px]">
          <h1 className="text-[45px] text-[#ffff] tracking-wide font-bold text-center lg:text-left">
            For a delicious <br />
            and refreshing <br />
            coffee experience, <br />
            every day.
          </h1>
          <button className="max-w-[150px] bg-[#B85C38] text-[#ffff] px-4 py-2 text-lg font-bold rounded-xl mt-4 cursor-pointer shadow-md">
            Order Now</button>
        </div>
        <div className="hero-image max-w-[500px]">
          <img src="src/img/coffee-main.png" />
        </div>
      </section>
    );
  }
}

export default Hero;
