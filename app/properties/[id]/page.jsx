import BackToProperties from "@/components/back-to-properties";
import PropertyDetail from "@/components/property-detail";
import PropertyHeaderImage from "@/components/property-header-image";
import PropertyHeaderImageFallback from "@/components/property-header-image-fallback";
import PropertyImages from "@/components/property-images";
import Property from "@/models/property";
import connectToMongoDB from "@/config/mongodb";
import { Suspense } from "react";

const PropertyDetailPage = async ({ params }) => {
  await connectToMongoDB();
  const { id } = await params;
  const { images } = await Property.findById(id).select("images");

  return (
    <>
      <Suspense fallback={<PropertyHeaderImageFallback />}>
        <PropertyHeaderImage propertyId={id} />
      </Suspense>
      <BackToProperties />

      <PropertyDetail propertyId={id} />
      <PropertyImages images={images} />
    </>
  );
};

export default PropertyDetailPage;