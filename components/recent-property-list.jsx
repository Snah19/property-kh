import PropertyCard from "./property-card";
import axios from "axios";

const RecentPropertyList = async () => {
  const { data: recentProperties } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recent-properties`);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {
        recentProperties.map((property) => (
          <li key={property._id}>
            <PropertyCard property={property} />
          </li>
        ))
      }
    </ul>
  );
};

export default RecentPropertyList;