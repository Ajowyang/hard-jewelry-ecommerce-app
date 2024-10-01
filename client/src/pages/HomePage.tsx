export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full border my-4">
      <div className="w-96 flex my-2">
        <img className="rounded-3xl" src="/images/HomePoster.webp" alt="" />
      </div>
      <button className="bg-red-600 rounded-2xl text-white py-1 px-4">
        Shop Restock
      </button>
    </div>
  );
}
