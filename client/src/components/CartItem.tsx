import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
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
  const [activeInventoryStock, setActiveInventoryStock] = useState(0);
  const [error, setError] = useState<unknown>();
  const { removeFromCart, incrementQty, decrementQty } =
    useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!itemId) {
          throw new Error('itemId is required');
        }
        const cartItemMaterial = material;
        const cartItemSize = size;
        const response = await fetch(`/api/getStock`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            itemId,
            material: cartItemMaterial,
            size: cartItemSize,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP Error! Status CI: ${response.status}`);
        }
        const data = await response.json();
        setActiveInventoryStock(data[0].qtyInStock);
        setError(undefined);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchData();
  });

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
    if (qty === activeInventoryStock) {
      alert('Item out of stock!');
      return;
    }
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
  if (error) {
    return <div>error...</div>;
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
