import { useState } from 'react';

type DetailsImgCarouselProps = {
  images: string[];
};

export function DetailsImgCarousel({ images }: DetailsImgCarouselProps) {
  const [activeImgId, setActiveImgId] = useState(0);
  if (images.length === 0) {
    console.log('images list dne');
    return null;
  }

  return (
    <div className="w-full md:w-5/12 h-full flex flex-col px-4 py-4 m-0">
      <div className="h-3/4 w-full my-2">
        <img className="rounded-xl" src={images[activeImgId]}></img>
      </div>
      <div className="flex w-full justify-evenly rounded-xl ">
        {images.map((image, index) =>
          activeImgId === index ? (
            <div
              key={index}
              className=" rounded-2xl border-4 border-red-700 hover:border-red-700 mx-1 ">
              <img
                className="rounded-xl"
                src={image}
                alt=""
                onClick={() => setActiveImgId(index)}></img>
            </div>
          ) : (
            <div
              key={index}
              className=" rounded-2xl border-4 border-black hover:border-red-700 mx-1 ">
              <img
                className="rounded-xl"
                src={image}
                alt=""
                onClick={() => setActiveImgId(index)}></img>
            </div>
          )
        )}
      </div>
    </div>
  );
}
