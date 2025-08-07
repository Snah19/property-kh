import PropertyCard from "./property-card";

const PropertyList = ({properties}) => {
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

export default PropertyList;