import React, { useState, useEffect } from "react";
import { ProductImagesContainerProps } from "../types";
import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";
import LightBox from "./LightBox";

const ProductImagesContainer: React.FC<ProductImagesContainerProps> = ({
  productImage,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightBoxShow, setIsLightBoxShow] = useState(false);

  useEffect(() => {}, [imageIndex]);

  //change to next image
  const onClickForward = () => {
    if (imageIndex + 1 > productImage.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevState) => prevState + 1);
    }
  };
  console.log(imageIndex);
  //change to previous image
  const onClickBackward = () => {
    if (imageIndex - 1 < 0) {
      setImageIndex(productImage.length - 1);
    } else {
      setImageIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <div className="flex flex-col">
        <div className="mb-4">
          <button onClick={() => setIsLightBoxShow(!isLightBoxShow)}>
            <img
              src={productImage[0].img[imageIndex]}
              alt="shoe image"
              className="min-[1024px]:rounded-lg"
            />
          </button>
        </div>
        <div className="hidden justify-evenly items-center min-[1024px]:flex">
          {productImage[0].thumbnail.map((thumbnail, index) => (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className={`${
                index === imageIndex ? "opacity-30" : "opacity-100"
              }`}
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
      <div className="absolute flex w-full justify-between min-[1024px]:hidden">
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
      <div className="absolute">
          <LightBox productImage={productImage} imageIndex={imageIndex} isShow={() => setIsLightBoxShow(!isLightBoxShow)} />
      </div>
    </div>
  );
};

export default ProductImagesContainer;
