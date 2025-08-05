import BackToProperties from "@/components/back-to-properties";
import PropertyDetail from "@/components/property-detail";
import PropertyHeaderImage from "@/components/property-header-image";
import Property from "@/models/property";

const PropertyDetailPage = async ({ params }) => {
  const { id } = await params;
  const propertyDoc = await Property.findById(id).lean();
  const property = JSON.parse(JSON.stringify(propertyDoc));
  return (
    <>
      <PropertyHeaderImage property={property} />
      <BackToProperties />
      <PropertyDetail property={property} />
    </>
  );
};

export default PropertyDetailPage;