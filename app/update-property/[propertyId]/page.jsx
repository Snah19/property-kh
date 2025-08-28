import UpdatePropertyForm from "@/components/update-property-form";
import { Wobble } from 'ldrs/react';
import { Suspense } from "react";

export const metadata = {
  title: "Update Property",
};

const UpdatePropertyPage = async ({ params }) => {
  const { propertyId } = await params;

  return (
    <section className="container max-w-2xl mx-auto py-24">
      <Suspense fallback={<div className="text-center"><Wobble size="45" speed="0.9" color="gray" /></div>}>
        <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
          <UpdatePropertyForm propertyId={propertyId} />
        </article> 
      </Suspense>
    </section>
  );
};

export default UpdatePropertyPage;