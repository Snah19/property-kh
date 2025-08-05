import BookmarkButton from "./bookmark-button";
import PropertyContactForm from "./property-contact-form";
import PropertyInfo from "./property-info";
import ShareButtons from "@/components/share-buttons";

const PropertyDetail = ({ property }) => {
  return (
    <section className="bg-blue-50">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/28 gap-6 w-full">
          <PropertyInfo property={property} />
          <aside className="space-y-4">
            <BookmarkButton property={property} />
            <ShareButtons property={property} />
            <PropertyContactForm property={property} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;