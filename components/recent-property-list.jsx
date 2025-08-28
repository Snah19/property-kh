import PropertyCard from "./property-card";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";

const RecentPropertyList = async () => {
  await connectToMongoDB();
  const properties = await Property.find().sort({ createdAt: -1 }).limit(12);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {
        properties.map((property) => (
          <li key={property._id}>
            <PropertyCard property={property} />
          </li>
        ))
      }
    </ul>
  );
};

export default RecentPropertyList;