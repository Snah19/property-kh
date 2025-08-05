"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";


const PropertyImages = ({ images }) => {
  const imgCount = images?.length;
  return (
    <Gallery>
      <section className="pb-10 bg-blue-50">
        <article className="container mx-auto px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <li className={`${imgCount === 1 || ( imgCount === 3 && i === 2) ? "col-span-2" : ""}`} key={`${img}-${i}`}>
                <Item original={img} thumbnail={img} width={1280} height={720}>
                  {({ref, open}) => (
                    <div ref={ref} onClick={open}>
                      <Image className="w-full h-[400px] rounded-xl object-cover cursor-pointer" src={img} width={1280} height={720} alt="" loading="lazy" />
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