import PropertyCard from "./property-card";
import Pagination from "./pagination";
import axios from "axios";

const PropertyList = async ({ page }) => {
  const limit = 12;
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties?limit=${limit}&page=${page}`);
  const { properties, total } = data;

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