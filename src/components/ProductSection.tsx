import ProductImageContainer from "./ProductImagesContainer";
import { product } from "../constants/data";
import ProductDescription from "./ProductDescription";

const ProductSection = () => {
  return (
    <div className="flex flex-col w-full items-center min-[1024px]:flex-row min-[1024px]:h-screen  min-[1024px]:justify-evenly ">
      <div className="flex justify-center min-[600px]:w-[600px] min-[1024px]:w-[400px]">
        <ProductImageContainer {...product} />
      </div>
      <div className="flex flex-col items-center min-[600px]:w-[600px]">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductSection;
