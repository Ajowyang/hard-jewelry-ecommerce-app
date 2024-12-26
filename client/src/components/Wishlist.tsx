import { IoClose } from 'react-icons/io5';
import { WishlistItem } from './WishlistItem';
// import { WishlistContext } from './WishlistContext';

type WishListProps = {
  visible: boolean;
  onClose: () => void;
};

export function Wishlist({ visible, onClose }: WishListProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed h-full w-full">
      <div className=" flex flex-col p-2 h-full fixed w-96  h-full bg-gray-700 shadow-lg z-50 text-white px-5">
        <div className="flex justify-end text-3xl">
          <div onClick={onClose}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl mb-2">Wishlist</h1>
          <p className="text-sm my-2">
            Add items to your wishlist now so you don't forget to add to cart
            later
          </p>
        </div>
        <WishlistItem
          title="ASTROLOGY RING"
          material="SOLID STAINLESS STEEL"
          imgUrl="images/astrology-ring.webp"
          size="3"
          qty={1}
          price={3695}
          itemId={1}
        />
        {/* <WishlistItem /> */}
      </div>
      <div className="fixed w-2/3 h-full" onClick={onClose}></div>
    </div>
  );
}
