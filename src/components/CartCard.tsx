import { useContext } from "react";
import { ProductContext } from "../context/StateContext";
import iconDelete from "../assets/images/icon-delete.svg";

const CartCard = () => {
  const { cartItems, amount, setCartItems } = useContext(ProductContext);
  let totalAmount = 0;
  let totalCost = 0;

  const removeFromCart = (index: number) => {
    if (cartItems) {
      setCartItems((prevCart) => prevCart.filter((_item, i) => i !== index));
    }
  };

  return (
    <div className="absolute z-40 h-screen w-[310px] top-11 -right-14 min-[375px]:w-[355px] ">
      {cartItems.length > 0 ? (
        cartItems.map((cart, index) => {
          totalAmount = (cart.price * cart.discount) / 100;
          totalCost = totalAmount * amount;
          return (
            <div
              key={index}
              className="h-64 my-2 rounded-lg py-2 px-2 flex flex-col bg-white"
            >
              <div className="flex w-full px-2 py-3 border-b-2 mb-2">
                <h5 className="text-md font-kumbhBold mb-2">Cart</h5>
              </div>

              <div className="flex flex-col mx-3">
                <div className="flex items-center justify-between my-3">
                  <div className="flex">
                    <img
                      src={cart.productImage[0].img}
                      alt="product image"
                      className="w-12 h-12 rounded-md mr-2"
                    />
                    <div className="flex flex-wrap flex-col items-start">
                      <p className="text-sm text-darkGrayishBlue">
                        {cart.productName}
                      </p>
                      <p className="text-md text-darkGrayishBlue">
                        ${totalAmount}.00 x {amount}{" "}
                        <span className="font-kumbhBold text-black">
                          ${totalCost}.00
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => removeFromCart(index)}>
                      <img
                        src={iconDelete}
                        alt="delete icon"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-2">
                  <button className="w-3/4 px-4 rounded-lg py-3 text-center font-kumbhBold w-72 bg-orange">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="h-64 my-2 rounded-lg py-2 px-2 flex flex-col bg-white">
          <div className="flex w-full px-2 py-3 border-b-2 mb-2">
            <h5 className="text-md font-kumbhBold mb-2">Cart</h5>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <h5>Your cart is empty</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
