import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

type CartItemProps = {
  imgUrl: string;
  title: string;
  material: string;
  size: string;
  price: number;
  qty: number;
};

export function CartItem({
  imgUrl,
  title,
  material,
  size,
  price,
  qty,
}: CartItemProps) {
  return (
    <li>
      <div className="flex flex-col">
        <div className="flex mt-2">
          <Link to="/products/details">
            <div className="w-24 h-24 flex m-1">
              <img className="rounded-xl" src={imgUrl} alt=""></img>
            </div>
          </Link>
          <div className="flex flex-col w-72 m-1">
            <Link to="/products/details">
              <h1 className="hover:text-red-500">{title}</h1>
            </Link>
            <h2>Material: {material}</h2>
            <h2>Size: {size}</h2>
          </div>
          <div className="text-lg mt-1 hover:text-red-700">
            <MdOutlineCancel />
          </div>
        </div>
        <div className="flex justify-between w-full px-2">
          <h1 className="text-xl">${price}</h1>
          <div className="flex items-center">
            <FaPlus />
            <h1 className="mx-6 text-xl">{qty}</h1>
            <FaMinus />
          </div>
        </div>
      </div>
    </li>
  );
}
