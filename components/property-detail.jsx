import BookmarkButton from "./bookmark-button";
import PropertyContactForm from "./property-contact-form";
import PropertyInfo from "./property-info";
import ShareButtons from "@/components/share-buttons";
import PropertyInfoFallback from "./property-info-fallback";
import { Suspense } from "react";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";

const PropertyDetail = async ({ propertyId }) => {
  connectToMongoDB();
  const { title, type, owner } = await Property.findById(propertyId).select("title type owner");
  return (
    <section className="bg-blue-50">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/28 gap-6 w-full">
        <Suspense fallback={<PropertyInfoFallback />}>
          <PropertyInfo propertyId={propertyId} />
        </Suspense>
          <aside className="space-y-4">
            <BookmarkButton propertyId={propertyId} />
            <ShareButtons propertyId={propertyId} title={title} type={type} />
            <PropertyContactForm propertyId={propertyId} ownerId={owner.toString()} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;