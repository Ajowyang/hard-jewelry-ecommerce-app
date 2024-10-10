import { CartItem } from '../components/CartItem';
import { CartContext } from '../components/CartContext';
import { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export function CartPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  function handleClick() {
    navigate('/products');
  }
  function handleClearCart() {
    alert('Checkout Successful! Thank you for shopping with us!');
    cart.forEach((cartItem) => {
      fetch(`/api/updateStock`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: cartItem.itemId,
          material: cartItem.material,
          size: cartItem.size,
          qtyToSubtract: cartItem.qty,
        }),
      });
    });

    clearCart();
  }

  return (
    <div className="w-full flex  justify-center items-center">
      <div className="flex flex-col text-white w-96  my-4 border p-2 rounded-xl">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center my-8 mx-5 text-center">
            <div className="my-5">
              <IoBagHandleOutline size={100} />
            </div>
            <h1 className="text-xl mt-5">Your cart is empty</h1>
            <p className="mt-5">
              Looks like you haven't added any products to your cart yet
            </p>

            <div className="w-full">
              <button
                className="bg-red-500 rounded-full py-2 w-2/3 mt-10"
                onClick={() => handleClick()}>
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl text-center">Shopping Cart</h1>
            <div>
              <ul>
                {cart.map((item, index) => (
                  <CartItem
                    key={index}
                    imgUrl={item.imageUrl}
                    title={item.itemName}
                    material={item.material}
                    size={item.size}
                    price={item.unitPrice}
                    qty={item.qty}
                    itemId={item.itemId}></CartItem>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="my-2 text-xl">
                TOTAL $
                {(
                  cart.reduce(
                    (accumulator, cartItem) =>
                      accumulator + cartItem.unitPrice * cartItem.qty,
                    0
                  ) / 100
                ).toFixed(2) + ' '}
                USD
              </h1>
              <button
                className="bg-red-500 rounded-full py-2 w-4/5 my-1"
                onClick={handleClearCart}>
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
