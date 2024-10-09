import { CartItem } from '../components/CartItem';
import { CartContext } from '../components/CartContext';
import { CartProd } from '../lib/data.ts';

export function CartPage() {
  const cartItems = [
    {
      IMGURL: '/images/cuban-bracelet.webp',
      TITLE: 'TEST PRODUCT TITLE',
      MATERIAL: 'SOLID STAINLESS STEEL',
      SIZE: '8"',
      PRICE: 36.95,
      QTY: 1,
    },
    {
      IMGURL: '/images/cuban-bracelet.webp',
      TITLE: 'TEST PRODUCT TITLE',
      MATERIAL: 'SOLID STAINLESS STEEL',
      SIZE: '7"',
      PRICE: 36.95,
      QTY: 2,
    },
  ];
  return (
    <div className="w-full flex  justify-center items-center">
      <div className="flex flex-col text-white w-128  my-4 border p-2 rounded-xl">
        <h1 className="text-3xl text-center">Shopping Cart</h1>
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                imgUrl={item.IMGURL}
                title={item.TITLE}
                material={item.MATERIAL}
                size={item.SIZE}
                price={item.PRICE}
                qty={item.QTY}></CartItem>
            ))}
            {/* {CartContext.cart.map((cp, index) => {
              <CartItem
                key={index}
                imgUrl=""
                title="testcart"
                material="SOLID STAINLESS STEEL"
                size="testing cc"
                price={111}
                qty={24}></CartItem>;
            })} */}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-2 text-xl">
            TOTAL $
            {cartItems
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.PRICE,
                0
              )
              .toFixed(2) + ' '}
            USD
          </h1>
          <button className="bg-red-500 rounded-full py-2 w-4/5 my-1">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}
