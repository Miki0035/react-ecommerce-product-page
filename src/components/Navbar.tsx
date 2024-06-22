import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatarIcon from "../assets/images/image-avatar.png";

import { useState, useContext } from "react";
import { ProductContext } from "../context/StateContext";

const Navbar = () => {
  const { cartItems } = useContext(ProductContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-white flex justify-between w-full items-center justify-center px-4 py-2">
      <div className="flex flex-row justify-center items-center w-2/3">
        <div className="flex w-46 items-center">
          <a
            className="mx-2 hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menu} alt="menu icon" />
          </a>
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="hidden md:flex flex-row">
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
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
                <li className="my-4">
                  <a href="#">Collections</a>
                </li>
                <li className="my-4">
                  <a href="#">Men</a>
                </li>
                <li className="my-4">
                  <a href="#">Women</a>
                </li>
                <li className="my-4">
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-end w-1/2">
        <div className="relative w-6 mx-6">
          <img src={cartIcon} alt="cart icon" />
          <span className="absolute text-white text-sm flex justify-center w-5 h-3 rounded-md pb-4  bottom-3 rounded-full bg-orange left-2">
            {cartItems.length}
          </span>
        </div>
        <div className="rounded-full w-8">
          <img src={avatarIcon} alt="avatar icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
