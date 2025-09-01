"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Wobble } from 'ldrs/react';

const PropertyImages = ({ images }) => {
  const [imageMeta, setImageMeta] = useState([]);
  
  useEffect(() => {
    const getImagesWithNaturalSize = async () => {
      const imagesWithNaturalSize = images.map((image) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = image;

          img.onload = () => {
            // try to load the natural size
            resolve({image, width: img.naturalWidth, height: img.naturalHeight});
          };

          img.onerror = () => {
            // fallback to 1280x720 if image can't be loaded
            resolve({image, width: 1280, height: 720});
          };
        });
      });

      setImageMeta(await Promise.all(imagesWithNaturalSize));
    };

    if (images?.length) getImagesWithNaturalSize();
  }, [images]);

  if (imageMeta.length !== images.length) return <div className="text-center"><Wobble size="45" speed="0.9" color="gray" /></div>;

  return (
    <Gallery>
      <section className="pb-10 bg-blue-50">
        <article className="container mx-auto px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {imageMeta.map(({ image, width, height }, i) => (
              <li key={`${image}-${i}`} className={images.length === 1 || (images.length === 3 && i === 2) ? "col-span-2" : ""}>
                <Item original={image} thumbnail={image} width={width} height={height}>
                  {({ ref, open }) => (
                    <div ref={ref} onClick={open}>
                      <Image className="w-full h-[400px] rounded-xl object-cover cursor-pointer" src={image} width={width} height={height} alt="" loading="lazy"/>
                    </div>
                  )}
                </Item>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </Gallery>
  );
};

export default PropertyImages;