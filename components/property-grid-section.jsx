import PropertyList from "./property-list";
import PropertyListFallback from "./property-list-fallback";
import { Suspense } from "react";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import Pagination from "./pagination";

const PropertyGridSection = async ({ page }) => {
  await connectToMongoDB();

  const total = await Property.countDocuments();
  const limit = 12;
  const skip = (page - 1) * limit;
  const properties = await Property.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit);
  return (
    <section className="container mx-auto py-6 px-4">      
      <Suspense fallback={<PropertyListFallback limit={limit} />}>
        <PropertyList properties={properties} />
      </Suspense>
      <Pagination page={page} limit={limit} total={total} />
    </section>
  );
};

export default PropertyGridSection;