import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';

export function WishlistItem() {
  return (
    <div className="flex">
      <div className="flex-col mx-1">
        <div className="w-24 h-24 rounded-xl">
          <img className="rounded-xl" src="images/astrology-ring.webp"></img>
        </div>
        <h1 className="text-md">$??.??</h1>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="bg-red-700 text-sm rounded-sm px-1 w-10/12 text-center">
            FREE SHIPPING
          </div>
        </div>
        <div>
          <h1 className="text-md">ASTROLOGY RING</h1>
        </div>
        <div>MATERIAL/SIZE</div>
        <div className="flex justify-end items-center">
          <div className="mx-1">
            <FaMinus />
          </div>
          <div className="mx-1">
            <h1>?</h1>
          </div>
          <div className="mx-1">
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}
