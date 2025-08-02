import PropertyList from "./property-list";
import PropertyListFallback from "./property-list-fallback";
import { Suspense } from "react";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";

const PropertyGridSection = async () => {
  await connectToMongoDB();
  const properties = await Property.find();

  return (
    <section className="container mx-auto py-6 px-4">      
      <Suspense fallback={<PropertyListFallback limit={12} />}>
        <PropertyList properties={properties} />
      </Suspense>
    </section>
  );
};

export default PropertyGridSection;