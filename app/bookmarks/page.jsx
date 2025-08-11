import PropertyCard from "@/components/property-card";
import connectToMongoDB from "@/config/mongodb";
import User from "@/models/user";
import { getSessionUser } from "@/utils/get-session-user";

export const metadata = {
  title: "Bookmarks",
};

const BookmarkPage = async () => {
  await connectToMongoDB();

  const { userId } = await getSessionUser();
  const { bookmarks } = await User.findById(userId).populate("bookmarks");

  return (
    <section className="container mx-auto py-6 px-4">
      <h1 className="mb-4 text-2xl font-bold">Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <p className="text-lg text-center">No Bookmarks</p>
      ): (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {bookmarks.map((property) => (
            <li key={property._id}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BookmarkPage;