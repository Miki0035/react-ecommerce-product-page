import React, { useState } from "react";
import { LightBoxProps } from "../types";

const LightBox: React.FC<LightBoxProps> = ({
  isShow,
  imageIndex,
  productImage,
}) => {
  const [showingImageIndex, setShowingImageIndex] = useState(imageIndex);

  //change to next image
  const onClickForward = () => {
    if (showingImageIndex + 1 > productImage[0].img.length - 1) {
      setShowingImageIndex(0);
    } else {
      setShowingImageIndex((prevState) => prevState + 1);
    }
  };

  //change to previous image
  const onClickBackward = () => {
    if (showingImageIndex - 1 < 0) {
      setShowingImageIndex(productImage[0].img.length - 1);
    } else {
      setShowingImageIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="absolute z-20 w-[800px] h-[550px] top-24 left-72 flex flex-col items-center">
      <div className="flex justify-end w-96 mb-2">
        <button onClick={() => isShow()}>
          <svg
            width="14"
            height="15"
            className="fill-[#69707D] hover:fill-orange"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center">
        <img
          src={productImage[0].img[showingImageIndex]}
          alt="image"
          className="w-96 rounded-lg"
        />
        <div className="absolute  flex justify-between w-1/2">
          <button
            className="bg-white rounded-full w-8 h-8  flex items-center justify-center"
            onClick={() => onClickBackward()}
          >
            <svg
              width="12"
              height="18"
              className="fill-none stroke-[#1D2026] stroke-2 hover:stroke-orange"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 1 3 9l8 8" fill-rule="evenodd" />
            </svg>
          </button>
          <button
            className="bg-white rounded-full w-8 h-8  flex items-center justify-center"
            onClick={() => onClickForward()}
          >
            <svg
              width="13"
              height="18"
              className="fill-none stroke-[#1D2026] stroke-2 hover:stroke-orange"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2 1 8 8-8 8" fill-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="justify-evenly items-center flex w-1/2 mt-3">
        {productImage[0].thumbnail.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => setShowingImageIndex(index)}
            className="bg-white rounded-lg"
          >
            <img
              src={thumbnail}
              alt={`image thumbnail ${showingImageIndex}`}
              className={` ${
                index === showingImageIndex ? "opacity-30" : "opacity-100"
              } w-16 bg-white hover:opacity-30 `}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LightBox;
