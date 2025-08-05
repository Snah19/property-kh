"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }) => {
  const [imageMeta, setImageMeta] = useState([]);
  
  useEffect(() => {
    const loadSizes = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => {
            resolve({
              src,
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          };
          img.onerror = () => {
            // fallback if image can't be loaded
            resolve({
              src,
              width: 1280,
              height: 720,
            });
          };
        });
      });

      const results = await Promise.all(promises);
      setImageMeta(results);
    };

    if (images?.length) loadSizes();
  }, [images]);

  if (imageMeta.length !== images.length) {
    return <p className="text-center py-10 text-gray-500">Loading images…</p>;
  }

  const imgCount = images.length;

  return (
    <Gallery>
      <section className="pb-10 bg-blue-50">
        <article className="container mx-auto px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {imageMeta.map(({ src, width, height }, i) => (
              <li
                key={`${src}-${i}`}
                className={
                  imgCount === 1 || (imgCount === 3 && i === 2)
                    ? "col-span-2"
                    : ""
                }
              >
                <Item original={src} thumbnail={src} width={width} height={height}>
                  {({ ref, open }) => (
                    <div ref={ref} onClick={open}>
                      <Image
                        className="w-full h-[400px] rounded-xl object-cover cursor-pointer"
                        src={src}
                        width={width}
                        height={height}
                        alt=""
                        loading="lazy"
                      />
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