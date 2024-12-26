import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { IoBagHandleOutline } from 'react-icons/io5';
// import { useContext, useState } from 'react';
// import { WishlistContext } from './WishlistContext';

type WishlistItemProps = {
  imgUrl: string;
  title: string;
  material: string;
  size: string;
  price: number;
  qty: number;
  itemId: number;
};

export function WishlistItem({
  imgUrl,
  title,
  material,
  size,
  price,
  qty,
  itemId,
}: WishlistItemProps) {
  //   {
  //   imgUrl,
  //   title,
  //   material,
  //   size,
  //   price,
  //   qty,
  //   itemId,
  // }: WishlistItemProps

  // const [activeInventoryStock, setActiveInventoryStock] = useState(0);
  // const [error, setError] = useState<unknown>();
  // const {
  //   addToWishlist,
  //   removeFromWishlist,
  //   incrementQty,
  //   decrementQty,
  //   clearWishlist,
  //   addWishlistToCart,
  // } = useContext(WishlistContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (!itemId) {
  //         throw new Error('itemId is required');
  //       }
  //       const cartItemMaterial = material;
  //       const cartItemSize = size;
  //       const response = await fetch(`/api/getStock`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           itemId,
  //           material: cartItemMaterial,
  //           size: cartItemSize,
  //         }),
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP Error! Status CI: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setActiveInventoryStock(data[0].qtyInStock);
  //       setError(undefined);
  //     } catch (err) {
  //       console.error(err);
  //       setError(err);
  //     }
  //   };
  //   fetchData();
  // });

  // function handleAddToWishList() {
  //   const prodToAdd = {
  //     imageUrl: imgUrl,
  //     itemId: itemId,
  //     itemName: title,
  //     size: size,
  //     material: material,
  //     qty: qty,
  //     unitPrice: price,
  //   };
  //   if (activeInventoryStock === 0) {
  //     alert('none in stock');
  //     return;
  //   }
  //   addToWishlist(prodToAdd);
  // }

  // function handleRemoveFromWishlist() {
  //   console.log('handleRemoveFromWishlist function called');
  //   const prodToRemove = {
  //     imageUrl: imgUrl,
  //     itemId: itemId,
  //     itemName: title,
  //     size: size,
  //     material: material,
  //     qty: qty,
  //     unitPrice: price,
  //   };
  //   removeFromWishlist(prodToRemove);
  // }

  // if (error) {
  //   return <div>error...</div>;
  // }

  return (
    <div className="flex border rounded-md">
      <div className="flex-col mx-1 mr-5">
        <div className="w-24 h-24 rounded-xl my-1">
          <img className="rounded-xl" src={imgUrl}></img>
        </div>
        <h1 className="text-md my-2">${price}</h1>
      </div>
      <div className="mx-1 mr-5 flex flex-col ">
        <div className="mt-2">
          <h1 className="text-md">{title}</h1>
        </div>
        <div className="mt-1 text-xs">
          {material}/{size}
        </div>
        <div className="flex justify-end items-center mt-12">
          <div className="mx-1">
            <FaMinus />
          </div>
          <div className="mx-1">
            <h1>
              ?{qty}id{itemId}
            </h1>
          </div>
          <div className="mx-1">
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-1/2 mx-2 px-2 flex items-center justify-center ">
          <div className="mt-2 p-1 h-11 w-11 rounded-full bg-red-700 justify-center items-center flex">
            <IoBagHandleOutline />
          </div>
        </div>
        <div className="h-1/2 mx-2 px-2 flex items-center justify-center ">
          <div className="mb-2 p-1 h-11 w-11 rounded-full bg-red-700 justify-center items-center flex">
            <IoBagHandleOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
