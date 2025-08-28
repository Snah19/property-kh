import PropertyCard from "./property-card";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import Pagination from "./pagination";

const PropertyList = async ({ page }) => {
  await connectToMongoDB();
  const total = await Property.countDocuments();
  const limit = 12;
  const skip = (page - 1) * limit;
  const properties = await Property.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {
          properties.map((property) => (
            <li key={property._id}>
              <PropertyCard property={property} />
            </li>
          ))
        }
      </ul>
      <Pagination page={page} limit={limit} total={total} />
    </>
  );
};

export default PropertyList;