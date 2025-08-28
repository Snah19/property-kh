import PropertyList from "./property-list";
import PropertyListFallback from "./property-list-fallback";
import { Suspense } from "react";

const PropertyGridSection = async ({ page }) => {
  return (
    <section className="container mx-auto py-6 px-4">      
      <Suspense fallback={<PropertyListFallback limit={12} />}>
        <PropertyList page={page} />
      </Suspense>
    </section>
  );
};

export default PropertyGridSection;