import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';

export function NavBar() {
  return (
    <div>
      <div className="w-full flex text-white bg-black justify-between py-4 px-4 border-b-2">
        <div className="w-32 pl-4">
          <div className="w-24 h-24 p-2 logo-img-container">
            <img src="/images/HJRED.webp" alt="" />
          </div>
        </div>
        <div className="flex w-48 items-center justify-evenly">
          <h1>Home</h1>
          <div className="flex items-center justify-evenly w-24">
            <h1>Shop All</h1>
            <FaCaretDown />
          </div>
        </div>

        <div className="w-32 flex items-center justify-evenly">
          <FaMagnifyingGlass size={20} />
          <FaRegHeart size={20} />
          <IoBagHandleOutline size={20} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
