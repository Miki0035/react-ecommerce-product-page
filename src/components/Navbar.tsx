import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatarIcon from "../assets/images/image-avatar.png";

import { useState, useContext } from "react";
import { ProductContext } from "../context/StateContext";
import CartCard from "./CartCard";
import { navItems } from "../constants/data";

const Navbar = () => {
  const { cartItems } = useContext(ProductContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isCartShow, setIsCartShow] = useState(false);
  const [selectedNav, setSelectedNav] = useState(0);
  return (
    <nav className="relative bg-white w-full flex flex-col justify-center items-center">
      <div className="relative bg-white flex  justify-between w-full items-center justify-center px-3 py-2">
        <div className="flex flex-row justify-center items-center w-2/3 min-[1024px]:w-3/4">
          <div className="flex w-72 items-center min-[1024px]:w-32 min-[1024px]:mr-10">
            <a
              className="mx-2 hover:cursor-pointer min-[1024px]:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={menu} alt="menu icon" />
            </a>
            <img src={logo} alt="logo" className="w-32" />
          </div>
          <div className="hidden min-[1024px]:flex">
            <ul className="flex w-96 justify-between items-end capitalize  text-darkgrayishblue">
              {navItems.map((item, index) => (
                <li
                  onClick={() => setSelectedNav(index)}
                  key={index}
                  className={`${
                    index === selectedNav
                      ? "border-b-orange border-b-4"
                      : "border-b-grayishblue"
                  }  pb-9 mt-10 transition delay-10 ease-in-out`}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <div className="z-10 block absolute h-screen w-screen bg-black opacity-45 z-0 right-0 top-0"></div>
            <div className="flex flex-col px-5 py-4 absolute top-0 left-0 bg-white h-screen z-30 ">
              <div className="flex justify-start mb-5">
                <a href="#" onClick={() => setIsOpen(!open)}>
                  <img src={close} alt="close icon" />
                </a>
              </div>
              <div className="font-kumbhBold flex flex-col items-start w-48">
                <ul className="capitalize">
                  {navItems.map((item, index) => (
                    <li key={index} className="my-4">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-end w-1/2 min-[1024px]:justify-center">
          <div className="relative w-6 mx-6">
            <button onClick={() => setIsCartShow(!isCartShow)}>
              <img src={cartIcon} alt="cart icon" />
              {cartItems.length > 0 && (
                <span className="absolute text-white text-sm flex justify-center w-5 h-3 rounded-md pb-4  bottom-4 rounded-full bg-orange left-2">
                  {cartItems.length}
                </span>
              )}
            </button>
            {isCartShow && <CartCard />}
          </div>
          <div className="rounded-full w-8 min-[1024px]:w-10 hover:ring-2 hover:ring-orange cursor-pointer">
            <img src={avatarIcon} alt="avatar icon" />
          </div>
        </div>
      </div>
      <hr className="absolute top-[110px] min-[1024px]:w-[1000px]" />
    </nav>
  );
};

export default Navbar;
