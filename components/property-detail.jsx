import BookmarkButton from "./bookmark-button";
import PropertyContactForm from "./property-contact-form";
import PropertyInfo from "./property-info";
import PropertyInfoFallback from "./property-info-fallback";
import PropertyImages from "./property-images";
import { Suspense } from "react";
import axios from "axios";
import { getSessionUser } from "@/utils/get-session-user";

const PropertyDetail = async ({ propertyId }) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}`);
  const { owner, images } = data;

  const sessionUser = await getSessionUser();
  let bookmarked = false;
  if (sessionUser?.userId) {
    const { data: bookmarks } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/bookmarks/propertyIds/userId/${sessionUser?.userId}`);
    bookmarked = bookmarks.includes(propertyId);
  }

  return (
    <>
      <section className="bg-blue-50">
        <div className="container mx-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/28 gap-6 w-full">
          <Suspense fallback={<PropertyInfoFallback />}>
            <PropertyInfo property={data} />
          </Suspense>
          <aside className="space-y-4">
            <BookmarkButton userId={sessionUser?.userId} propertyId={propertyId} bookmarked={bookmarked} />
            {sessionUser?.userId !== owner && <PropertyContactForm propertyId={propertyId} senderId={sessionUser?.userId} recipientId={owner} />}
          </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={images} />
    </>
  );
};

export default PropertyDetail;