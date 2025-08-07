import PostedPropertyCard from "./posted-property-card";

const PostedPropertyList = ({ properties }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <li key={property._id}>
          <PostedPropertyCard property={property} />
        </li>
      ))}
    </ul>
  );
};

export default PostedPropertyList;