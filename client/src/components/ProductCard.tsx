import { Link } from 'react-router-dom';

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string;
  itemId: number;
};

export function ProductCard({
  title,
  price,
  imageUrl,
  itemId,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center ash w-64 lg:w-72 py-2 rounded-xl text-white my-4 mx-1">
      <Link to={`/products/details/${itemId}`}>
        <div className="h-60 lg:h-64 my-1 flex justify-center">
          <img
            className="rounded-xl object-contain max-h-full"
            src={imageUrl}
            alt=""></img>
        </div>
      </Link>
      <div className=" flex flex-col items-center my-4 h-1/5">
        <Link to={`/products/details/${itemId}`}>
          <p className="hover:text-red-700 text-md text-center font-semibold">
            {title}
          </p>
        </Link>
        <h1 className="mt-2">{price}</h1>
      </div>
    </div>
  );
}
