import ProductImageContainer from "./ProductImagesContainer";
import { product } from "../constants/data";
import ProductDescription from "./ProductDescription";

const ProductSection = () => {
  return (
    <div className="flex flex-col">
      <div>
        <ProductImageContainer {...product} />
      </div>
      <div className="flex flex-col">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductSection;
