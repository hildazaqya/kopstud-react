import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar flex flex-col lg:flex-row bg-darkbrown justify-between p-[20px]">
        <div className="flex justify-between">
          <h1 className="navbar-logo text-center cursor-pointer text-xl tracking-wide text-[#e0c097] font-bold text-[26px] lg:ml-[50px]">
            Kopi Studio 20
          </h1>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 bg-white ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 bg-white ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`flex flex-col lg:flex-row lg:flex text-sm text-[#ffff] lg:mr-[50px] list-none items-center gap-5 cursor-pointer tracking-wider ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="px-[10px]">
            <a href="">Home</a>
          </li>
          <li className="px-[10px]">
            <a href="">About</a>
          </li>
          <li className="px-[10px]">
            <a href="">Menu</a>
          </li>
          <li className="px-[10px]">
            <a href="">Benefit</a>
          </li>
          <li className="px-[10px]">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
