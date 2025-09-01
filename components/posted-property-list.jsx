"use client";

import PropertyCard from "./property-card";
import PostedPropertyCard from "./posted-property-card";
import { useState } from "react";

const PostedPropertyList = ({ data ,userId, ownerId }) => {
  const [properties, setProperties] = useState(data);
  
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <li key={property._id}>
          {userId === ownerId ? (
            <PostedPropertyCard userId={userId} property={property} setProperties={setProperties} />
          ) : (
            <PropertyCard property={property} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostedPropertyList;