import { ProductInfo } from "../types";

export const product: ProductInfo = {
  companyName: "sneaker company",
  productName: "Fall Limited Edition Sneakers",
  productDesc: ` These low-profile sneakers are your perfect casual wear
      companion. Featuring a durable rubber outer sole, they’ll withstand
      everything the weather can offer.`,
  productImage: [
    {
      img: [
        new URL("../assets/images/image-product-1.jpg", import.meta.url).href,
        new URL("../assets/images/image-product-2.jpg", import.meta.url).href,
        new URL("../assets/images/image-product-3.jpg", import.meta.url).href,
        new URL("../assets/images/image-product-4.jpg", import.meta.url).href,
      ],
      thumbnail: [
        new URL(
          "../assets/images/image-product-1-thumbnail.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/image-product-2-thumbnail.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/image-product-3-thumbnail.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/image-product-4-thumbnail.jpg",
          import.meta.url
        ).href,
      ],
    },
  ],
  price: 250.0,
  discount: 50,
  amount: null,
  totalPrice: null,
};

export const navItems: string[] = [
  "Collections",
  "Men",
  "Women",
  "About",
  "contact",
];
