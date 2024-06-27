import React, { useContext } from "react";
import { ProductDescriptionProps } from "../types";

import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { ProductContext } from "../context/StateContext";

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  const { amount, setAmount, setCartItems } = useContext(ProductContext);

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    if (amount - 1 < 0) {
      setAmount(0);
    } else {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const addToCart = () => {
    if (amount === 0) {
      return;
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  return (
    <div className="flex flex-col items-start my-5 mx-2">
      <h5 className="uppercase text-darkGrayishBlue text-xs mb-2 min-[1024px]:text-md font-kumbhBold">
        {product.companyName}
      </h5>
      <h1 className="capitalize text-veryDarkBlue text-2xl font-kumbhBold mb-2 min-[1024px]:text-5xl">
        {product.productName}
      </h1>
      <p className="text-darkGrayishBlue text-sm min-[1024px]:text-md min-[1024px]:w-2/3">
        {product.productDesc}
      </p>
      <div className="flex w-full justify-between my-3 items-center min-[1024px]:flex-col min-[1024px]:items-start">
        <div>
          <span className="text-veryDarkBlue font-kumbhBold text-2xl">
            ${(product.price * product.discount) / 100}.00
          </span>{" "}
          <span className="bg-black text-white rounded-md px-2 py-1 ml-2 text-sm font-kumbhBold">
            {product.discount}%
          </span>
        </div>
        <div>
          {product.discount ? (
            <s className="text-darkGrayishBlue font-kumbhBold">
              ${product.price}.00
            </s>
          ) : (
            <span>${product.price}.00</span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col my-3 items-center min-[1024px]:flex-row">
        <div className="w-3/4 flex items-center justify-between py-2 px-5 bg-lightGrayishBlue rounded-md min-[1024px]:w-1/2 min-[1024px]:mr-2">
          <button onClick={() => decreaseAmount()}>
            <img
              src={iconMinus}
              alt="minus icon"
              className="hover:opacity-30"
            />
          </button>
          <p>{amount}</p>
          <button onClick={() => increaseAmount()}>
            <img src={iconPlus} alt="plus icon" className="hover:opacity-30" />
          </button>
        </div>
        <div className="w-full mt-3 flex justify-center min-[1024px]:mt-0 min-[1024px]:justify-start">
          <button
            onClick={() => addToCart()}
            className="text-black font-kumbhBold flex bg-orange w-3/4 py-2 rounded-md text-md flex items-center justify-center hover:opacity-50"
          >
            <img src={cartIcon} alt="cart icon" className="w-4 h-4 mr-3" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
