import BackToProperties from "@/components/back-to-properties";
import PropertyDetail from "@/components/property-detail";
import PropertyHeaderImage from "@/components/property-header-image";
import PropertyHeaderImageFallback from "@/components/property-header-image-fallback";
import { Suspense } from "react";

const PropertyDetailPage = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={<PropertyHeaderImageFallback />}>
        <PropertyHeaderImage propertyId={id} />
      </Suspense>
      <BackToProperties />
      <PropertyDetail propertyId={id} />
    </>
  );
};

export default PropertyDetailPage;