import UpdatePropertyForm from "@/components/update-property-form";
import { getSessionUser } from "@/utils/get-session-user";
import { Wobble } from 'ldrs/react';
import { Suspense } from "react";
import axios from "axios";

export const metadata = {
  title: "Update Property",
};

const UpdatePropertyPage = async ({ params }) => {
  const { propertyId } = await params;
  const sessionUser = await getSessionUser();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}`);

  return (
    <section className="container max-w-2xl mx-auto py-24">
      <Suspense fallback={<div className="text-center"><Wobble size="45" speed="0.9" color="gray" /></div>}>
        <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
          <UpdatePropertyForm ownerId={sessionUser?.userId} property={data} />
        </article> 
      </Suspense>
    </section>
  );
};

export default UpdatePropertyPage;