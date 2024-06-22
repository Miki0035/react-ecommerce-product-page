import React, { useState } from "react";
import { ProductImagesContainerProps } from "../types";
import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";

const ProductImagesContainer: React.FC<ProductImagesContainerProps> = ({
  productImage,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  //change to next image
  const onClickForward = () => {
    if (imageIndex + 1 > productImage.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevState) => prevState + 1);
    }
  };

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
      {productImage.map(
        (image, index) =>
          index === imageIndex && (
            <img key={index} src={image.img} alt="shoe image" />
          )
      )}
      <div className="absolute flex w-full justify-between">
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
    </div>
  );
};

export default ProductImagesContainer;
