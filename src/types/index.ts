import { Dispatch, SetStateAction } from "react";

export type ProductInfo = {
  companyName: string;
  productName: string;
  productDesc: string;
  price: number;
  amount: number | null;
  totalPrice: number | null;
  productImage: {
    img: string[];
    thumbnail: string[];
  }[];
  discount: number;
};

export type CartItems = ProductInfo[] | [];

export type ProductContextProps = {
  cartItems: CartItems;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  setCartItems: Dispatch<SetStateAction<CartItems>>;
};

export type ProductImagesContainerProps = {
  productImage: {
    img: string[];
    thumbnail: string[];
  }[];
};

export type ProductDescriptionProps = {
  product: ProductInfo;
};

export type LightBoxProps = {
    productImage: {
      img: string[];
      thumbnail: string[];
    }[];
    imageIndex: number;
    isShow: () => void;
  };