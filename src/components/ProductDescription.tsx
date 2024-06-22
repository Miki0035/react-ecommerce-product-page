import React, { useContext } from "react";
import { ProductDescriptionProps } from "../types";

import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { ProductContext } from "../context/StateContext";

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  productDesc,
  productName,
  price,
  discount,
  companyName,
}) => {
  const { amount, setAmount } = useContext(ProductContext);

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
  return (
    <div className="flex flex-col items-start my-5 mx-2">
      <h5 className="uppercase text-darkGrayishBlue text-xs mb-2">
        {companyName}
      </h5>
      <h1 className="capitalize text-veryDarkBlue text-2xl font-kumbhBold mb-2">
        {productName}
      </h1>
      <p className="text-darkGrayishBlue text-sm">{productDesc}</p>
      <div className="flex w-full justify-between my-3 items-center">
        <div>
          <span className="text-veryDarkBlue font-kumbhBold text-2xl">
            ${(price * discount) / 100}.00
          </span>{" "}
          <span className="bg-black text-white rounded-md px-2 py-1 ml-2 text-sm font-kumbhBold">
            {discount}%
          </span>
        </div>
        <div>
          {discount ? (
            <s className="text-darkGrayishBlue font-kumbhBold">${price}.00</s>
          ) : (
            <span>${price}.00</span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col my-3 items-center">
        <div className="w-3/4 flex items-center justify-between py-2 px-5 bg-lightGrayishBlue rounded-md">
          <button onClick={() => decreaseAmount()}>
            <img src={iconMinus} alt="minus icon" />
          </button>
          <p>{amount}</p>
          <button onClick={() => increaseAmount()}>
            <img src={iconPlus} alt="plus icon" />
          </button>
        </div>
        <div className="w-full mt-3 flex justify-center">
          <button className="text-black font-kumbhBold flex bg-orange w-3/4 py-2 rounded-md text-md flex items-center justify-center">
            <img src={cartIcon} alt="cart icon" className="w-4 h-4 mr-3" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
