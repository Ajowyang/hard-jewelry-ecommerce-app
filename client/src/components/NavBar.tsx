import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { IoBagHandleOutline, IoClose } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa6';
import { Outlet, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export function NavBar() {
  const { cart } = useContext(CartContext);
  const [isVisibleWishlist, setIsVisibleWishlist] = useState(true);

  function handleClose() {
    setIsVisibleWishlist(false);
  }

  return (
    <>
      {isVisibleWishlist && (
        <div className=" flex flex-col fixed top-0 left-0 h-full w-1/3 bg-gray-100 shadow-lg z-50">
          <div className="flex justify-end text-3xl">
            <div onClick={handleClose}>
              <IoClose />
            </div>
          </div>
          <h1>Test</h1>
        </div>
      )}
      <div>
        <div className="w-full flex text-white bg-black justify-between py-4 px-4 border-b">
          <div className="w-32 pl-4">
            <Link to="/">
              <div className="w-24 h-24 p-2 logo-img-container">
                <img src="/images/HJRED.webp" alt="" />
              </div>
            </Link>
          </div>
          <div className="flex w-48 items-center justify-evenly ">
            <Link to="/">
              <h1 className="hover:text-red-500  text-md">Home</h1>
            </Link>
            <div className="flex items-center justify-evenly w-24">
              <Link to="/products">
                <h1 className="hover:text-red-500 text-md">Shop All</h1>
              </Link>
              <FaCaretDown />
            </div>
          </div>

          <div className="w-32 flex items-center justify-evenly ">
            <div className="hover:text-red-500">
              <FaMagnifyingGlass size={20} />
            </div>
            <div className="hover:text-red-500">
              <FaRegHeart size={20} />
            </div>
            <div className="hover:text-red-500 relative">
              <Link to="/cart">
                <IoBagHandleOutline size={20} />
              </Link>
            </div>
            <div className="absolute flex rounded-full w-5 h-5 bg-gray-500 justify-center items-center abs text-xs">
              {cart.length}
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
