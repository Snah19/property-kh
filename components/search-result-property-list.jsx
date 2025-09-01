import PropertyCard from "./property-card";
import axios from "axios";

const SearchResultPropertyList = async ({ searchQuery, type }) => {
  const {data: properties} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/search/searchResults?searchQuery=${searchQuery}&type=${type}`);

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

export default SearchResultPropertyList;