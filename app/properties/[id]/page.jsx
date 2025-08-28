import BackToProperties from "@/components/back-to-properties";
import PropertyDetail from "@/components/property-detail";
import PropertyHeaderImage from "@/components/property-header-image";
import PropertyHeaderImageFallback from "@/components/property-header-image-fallback";
import PropertyImages from "@/components/property-images";
import Property from "@/models/property";
import { Suspense } from "react";

const PropertyDetailPage = async ({ params }) => {
  const { id } = await params;
  const propertyDoc = await Property.findById(id).lean();
  const property = JSON.parse(JSON.stringify(propertyDoc));
  return (
    <>
      <Suspense fallback={<PropertyHeaderImageFallback />}>
        <PropertyHeaderImage propertyId={id} />
      </Suspense>
      <BackToProperties />

      <PropertyDetail propertyId={id} />
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyDetailPage;