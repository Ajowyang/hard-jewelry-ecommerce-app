// import { ProductCard } from '../components/ProductCard';
import { Catalog } from '../components/ProductCatalog';
export function ProductPage() {
  return (
    <>
      <div className="text-white flex flex-col items-center mb-20">
        <h1 className="text-3xl mt-2">PRODUCTS</h1>
        <p className=" w-96 text-center my-2">
          All of our jewelry is made from either solid .925 Sterling Silver or
          solid Stainless steel
        </p>
      </div>
      <Catalog></Catalog>
    </>
  );
}
