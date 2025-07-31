import PropertyCardFallback from "./property-card-fallback";


const PropertyListFallback = ({ limit }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {
        Array(limit).fill(null).map((_, index) => (
          <li key={index}>
            <PropertyCardFallback />
          </li>
        ))
      }
    </ul>
  );
};

export default PropertyListFallback;