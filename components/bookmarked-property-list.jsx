import connectToMongoDB from "@/config/mongodb";
import User from "@/models/user";
import { getSessionUser } from "@/utils/get-session-user";
import PropertyCard from "@/components/property-card";

const BookmarkedPropertyList = async () => {
  await connectToMongoDB();

  const { userId } = await getSessionUser();
  const { bookmarks } = await User.findById(userId).populate("bookmarks");

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {bookmarks.map((property) => (
        <li key={property._id}>
          <PropertyCard property={property} />
        </li>
      ))}
    </ul>
  );
};

export default BookmarkedPropertyList;