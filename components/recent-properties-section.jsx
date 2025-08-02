import Link from "next/link";
import { Suspense } from "react";
import PropertyListFallback from "./property-list-fallback";
import PropertyList from "./property-list";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";

const RecentPropertiesSection = async () => {
  await connectToMongoDB();
  const properties = await Property.find().sort({ createdAt: -1 }).limit(8);

  return (
    <>
      <section className="container mx-auto py-6 px-4">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-500">
          Recent Properties
        </h2>
        <Suspense fallback={<PropertyListFallback limit={8} />}>
          <PropertyList properties={properties.slice(-8)} />
        </Suspense>
        <Link className="block max-w-lg mt-6 mx-auto py-4 px-6 rounded-xl bg-black hover:bg-gray-700 text-white text-center" href="/properties">
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default RecentPropertiesSection;