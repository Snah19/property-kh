import { getSessionUser } from "@/utils/get-session-user";
import PropertyCard from "@/components/property-card";
import axios from "axios";

const BookmarkedPropertyList = async () => {
  const { userId } = await getSessionUser();
  const { data: bookmarks } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/bookmarks/userId/${userId}`);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {bookmarks.reverse().map((property) => (
          <li key={property._id}>
            <PropertyCard property={property} />
          </li>
        ))}
      </ul>
      {bookmarks.length === 0 && <p className="text-center">No bookmarks</p> }
    </>
  );
};

export default BookmarkedPropertyList;