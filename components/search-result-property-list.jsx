import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import PropertyCard from "./property-card";

const SearchResultPropertyList = async ({ searchQuery, type }) => {
  const searchPattern = new RegExp(searchQuery, "i");
  let query = {
    $or: [
      {title: searchPattern},
      {description: searchPattern},
      {"location.street": searchPattern},
      {"location.city": searchPattern},
      {"location.state": searchPattern},
      {"location.zipcode": searchPattern}
    ]
  };

  if (type && type !== "All") {
    const typePattern = new RegExp(type, "i");
    query.type = typePattern;
  }

  await connectToMongoDB();
  const properties = await Property.find(query);

  return (
    <>
      {properties && properties.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {
            properties.map((property) => (
              <li key={property._id}>
                <PropertyCard property={property} />
              </li>
            ))
          }
        </ul>
      ) : (
        <p className="text-center">No Search Result</p>
      )}
    </>
  );
};

export default SearchResultPropertyList;