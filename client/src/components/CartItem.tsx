import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useContext } from 'react';
import { CartContext } from './CartContext';

type CartItemProps = {
  imgUrl: string;
  title: string;
  material: string;
  size: string;
  price: number;
  qty: number;
  itemId: number;
};

export function CartItem({
  imgUrl,
  title,
  material,
  size,
  price,
  qty,
  itemId,
}: CartItemProps) {
  const { removeFromCart, incrementQty, decrementQty } =
    useContext(CartContext);
  function handleRemoveFromCart() {
    console.log('handleRemoveFromCart function called');
    const prodToRemove = {
      imageUrl: imgUrl,
      itemId: itemId,
      itemName: title,
      size: size,
      material: material,
      qty: qty,
      unitPrice: price,
    };
    removeFromCart(prodToRemove);
  }

  function handleIncrement() {
    const prodToIncrement = {
      imageUrl: imgUrl,
      itemId: itemId,
      itemName: title,
      size: size,
      material: material,
      qty: qty,
      unitPrice: price,
    };
    incrementQty(prodToIncrement);
  }
  function handleDecrement() {
    const prodToDecrement = {
      imageUrl: imgUrl,
      itemId: itemId,
      itemName: title,
      size: size,
      material: material,
      qty: qty,
      unitPrice: price,
    };
    decrementQty(prodToDecrement);
  }

  return (
    <li>
      <div className="flex flex-col">
        <div className="flex mt-2">
          <Link to={`/products/details/${itemId}`}>
            <div className="w-24 h-24 flex m-1">
              <img className="rounded-xl" src={imgUrl} alt=""></img>
            </div>
          </Link>
          <div className="flex flex-col w-72 m-1">
            <Link to={`/products/details/${itemId}`}>
              <h1 className="hover:text-red-500">{title}</h1>
            </Link>
            <h2>Material: {material}</h2>
            <h2>Size: {size}</h2>
          </div>
          <div
            className="text-lg mt-1 hover:text-red-700"
            onClick={handleRemoveFromCart}>
            <MdOutlineCancel />
          </div>
        </div>
        <div className="flex justify-between w-full px-2">
          <h1 className="text-xl">${(price / 100).toFixed(2)}</h1>
          <div className="flex items-center">
            <div className="hover:text-gray-600" onClick={handleIncrement}>
              <FaPlus />
            </div>
            <h1 className="mx-6 text-xl">{qty}</h1>
            <div
              className="hover:text-gray-600"
              onClick={qty > 1 ? handleDecrement : handleRemoveFromCart}>
              <FaMinus />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
