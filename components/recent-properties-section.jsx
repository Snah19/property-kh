import Link from "next/link";
import { Suspense } from "react";
import PropertyListFallback from "./property-list-fallback";
import RecentPropertyList from "./recent-property-list";
const RecentPropertiesSection = async () => {
  return (
    <>
      <section className="container mx-auto py-6 px-4">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-500">
          Recent Properties
        </h2>
        <Suspense fallback={<PropertyListFallback limit={12} />}>
          <RecentPropertyList />
        </Suspense>
        <Link className="block max-w-lg mt-6 mx-auto py-4 px-6 rounded-xl bg-black hover:bg-gray-700 text-white text-center" href="/properties?page=1">
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default RecentPropertiesSection;