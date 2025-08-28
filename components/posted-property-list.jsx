import connectToMongoDB from "@/config/mongodb";
import { getSessionUser } from "@/utils/get-session-user";
import Property from "@/models/property";
import PropertyCard from "./property-card";

import PostedPropertyCard from "./posted-property-card";

const PostedPropertyList = async ({ userId }) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  const properties = await Property.find({owner: userId});
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <li key={property._id}>
          {userId === sessionUser?.userId ? (
            <PostedPropertyCard property={property} />
          ) : (
            <PropertyCard property={property} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostedPropertyList;