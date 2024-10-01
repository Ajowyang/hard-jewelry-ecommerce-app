export function ProductCard() {
  return (
    <div className="flex flex-col items-center ash w-64 py-2 rounded-xl text-white my-2">
      <div className="h-60 my-1 flex justify-center">
        <img
          className="rounded-xl object-contain max-h-full"
          src="/images/cuban-bracelet.webp"
          alt=""></img>
      </div>
      <div className=" flex flex-col items-center my-4 h-1/5">
        <h1 className="">PRODUCT TITLE</h1>
        <h1 className="mt-2">$??.??</h1>
      </div>
    </div>
  );
}
