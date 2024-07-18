import React from "react";

class Socmed extends React.Component {
  render() {
    const socmedItem = [
      {
        title: "Instagram",
        icon: "https://img.icons8.com/material-outlined/80/2D2424/instagram-new--v1.png",
        idsocmed: "@Kopistudio20",
        link: "https://instagram.com",
      },
      {
        title: "Facebook",
        icon: "https://img.icons8.com/material-outlined/80/2D2424/facebook.png",
        idsocmed: "Kopi Studio 20",
        link: "",
      },
      {
        title: "X",
        icon: "https://img.icons8.com/material-outlined/80/2D2424/twitterx--v1.png",
        idsocmed: "@kopistudio20",
        link: "",
      },
      {
        title: "Email",
        icon: "https://img.icons8.com/material-outlined/80/2D2424/new-post.png",
        idsocmed: "kopistudio20@gmail.com",
        link: "",
      },
    ];
    return (
      <section className="flex flex-col items-center justify-center">
        <div className="w-full text-center bg-[#797160] py-[20px]">
          <p className="text-white">Get Up and Close Personal</p>
          <h1 className="flex flex-col items-center text-center tracking-wide text-4xl font-bold text-[#2d2424] ">
            CONTACT US
            <div className="bg-white w-[250px] h-[3px] flex items-center justify-center"></div>
          </h1>
        </div>
        <div className="grid mt-[40px] grid-cols-2 lg:grid-cols-4 justify-center">
          {socmedItem.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mb-[20px] tracking-wide cursor-pointer max-w-[280px] h-[250px] overflow-hidden p-[35px] border-r-3 border-[#797160]"
            >
              <img src={item.icon} alt={item.title} className="color-darkbrown"/>
              <h3 className="mt-[20px] text-2xl font-bold text-darkbrown">{item.title}</h3>
              <p className="text-sm text-chocobrown">
                <a href={item.link}>{item.idsocmed}</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Socmed;
