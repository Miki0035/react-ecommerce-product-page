import React, { useState } from "react";
import { ProductImagesContainerProps } from "../types";
import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";
import LightBox from "./LightBox";

const ProductImagesContainer: React.FC<ProductImagesContainerProps> = ({
  productImage,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightBoxShow, setIsLightBoxShow] = useState(false);

  //change to next image
  const onClickForward = () => {
    if (imageIndex + 1 > productImage[0].img.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevState) => prevState + 1);
    }
  };
  //change to previous image
  const onClickBackward = () => {
    if (imageIndex - 1 < 0) {
      setImageIndex(productImage[0].img.length - 1);
    } else {
      setImageIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col ">
        <div className="mb-4">
          <button
            className="hidden min-[1024px]:flex"
            onClick={() => setIsLightBoxShow(!isLightBoxShow)}
          >
            <img
              src={productImage[0].img[imageIndex]}
              alt="shoe image"
              className="min-[1024px]:rounded-lg"
            />
          </button>
          <img
            src={productImage[0].img[imageIndex]}
            alt="shoe image"
            className="block min-[1024px]:hidden"
          />
        </div>
        <div className="hidden justify-evenly items-center min-[1024px]:flex">
          {productImage[0].thumbnail.map((thumbnail, index) => (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className={`${
                index === imageIndex ? "opacity-30" : "opacity-100"
              } hover:opacity-30`}
            >
              <img
                src={thumbnail}
                alt={`image thumbnail ${index}`}
                className="w-16 rounded-lg "
              />
            </button>
          ))}
        </div>
      </div>
      <div className="absolute flex w-full justify-between min-[640px]:w-[600px] min-[1024px]:hidden">
        <button
          className="bg-white rounded-full w-8 h-8 mx-3 flex items-center justify-center"
          onClick={() => onClickBackward()}
        >
          <img src={iconPrevious} alt="previous icon" className="w-2 h-3" />
        </button>
        <button
          className="bg-white rounded-full w-8 h-8 mx-3 flex items-center justify-center"
          onClick={() => onClickForward()}
        >
          <img src={iconNext} alt="next icon" className="w-2 h-3" />
        </button>
      </div>
      {isLightBoxShow && (
        <>
          <div className="hidden z-10 absolute w-screen top-0 right-0 bg-[#000] opacity-70 h-screen min-[1024px]:block"></div>
          <LightBox
            productImage={productImage}
            imageIndex={imageIndex}
            isShow={() => setIsLightBoxShow(!isLightBoxShow)}
          />
        </>
      )}
    </div>
  );
};

export default ProductImagesContainer;
