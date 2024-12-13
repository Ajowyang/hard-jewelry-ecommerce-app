import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export function Wishlist() {
  const [isVisibleWishlist, setIsVisibleWishlist] = useState(true);

  function handleClose() {
    setIsVisibleWishlist(false);
  }

  // function handleOpen() {
  //   setIsVisibleWishlist(true);
  // }
  return;
  {
    isVisibleWishlist && (
      <div className="fixed h-full w-full">
        <div className=" flex flex-col p-2 h-full fixed w-1/3 h-full bg-gray-700 shadow-lg z-50 text-white">
          <div className="flex justify-end text-3xl">
            <div onClick={handleClose}>
              <IoClose />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl mb-2">Wishlist</h1>
            <p className="text-sm">
              Add items to your wishlist now so you don't forget to add to cart
              later
            </p>
          </div>
        </div>
        <div className="fixed w-2/3 h-full" onClick={handleClose}></div>
      </div>
    );
  }
}
