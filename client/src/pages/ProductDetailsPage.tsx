import { useEffect, useState } from 'react';
import { DetailsImgCarousel } from '../components/DetailsImgCarousel';
import { DetailsSection } from '../components/DetailsSection';
import { Prod, ProdSizes, ProdMaterials, ProdListImages } from '../lib/data.ts';
import { useParams } from 'react-router-dom';

export function ProductDetailsPage() {
  const [product, setProduct] = useState<Prod>();
  const [productSizes, setProductSizes] = useState<ProdSizes[]>([]);
  const [productMaterials, setProductMaterials] = useState<ProdMaterials[]>([]);
  const [productListingImages, setProductListingImages] = useState<
    ProdListImages[]
  >([]);

  // const [currentProd, setCurrentProd] = useState<CurrentProduct>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${itemId}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = (await response.json()) as Prod;
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/sizes/${itemId}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProductSizes(data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchData();
    console.log(productSizes);
  }, [itemId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/materials/${itemId}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProductMaterials(data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchData();
    console.log(productMaterials);
  }, [itemId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/listingImages/${itemId}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProductListingImages(data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchData();
  }, [itemId]);

  const POSSIBLEMATERIALS = productMaterials?.map((productMaterial) => {
    return productMaterial.material;
  });

  const POSSIBLESIZES = productSizes?.map((productSize) => {
    return productSize.size;
  });

  const IMAGES = productListingImages.map((productListImage) => {
    return '/images/' + productListImage.imageURL;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="flex flex-wrap mx-10 text-white">
        <DetailsImgCarousel images={IMAGES}></DetailsImgCarousel>

        <DetailsSection
          title={product?.name}
          possibleMaterials={POSSIBLEMATERIALS}
          possibleSizes={POSSIBLESIZES}
          cartImageUrl={IMAGES[0]}></DetailsSection>
      </div>
      <div className="flex flex-col text-white justify-center w-full mx-10">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-2xl my-4">Description</h1>
        </div>

        <div>
          {product?.description.split('\n').map((para, index) => (
            <p key={index} className="mb-8">
              {para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
