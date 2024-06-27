import { ReactNode, createContext, useState } from "react";
import { CartItems, ProductContextProps } from "../types";

const ProductContext = createContext<ProductContextProps>({
  cartItems: [],
  amount: 0,
  setAmount: () => {},
  setCartItems: () => {},
});

const StateContext = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [amount, setAmount] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        setAmount,
        setCartItems,
        amount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { StateContext, ProductContext };
