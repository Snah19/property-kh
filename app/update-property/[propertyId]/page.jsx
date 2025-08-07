import UpdatePropertyForm from "@/components/update-property-form";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/get-session-user";

const UpdatePropertyPage = async ({ params }) => {
  await connectToMongoDB();

  const { propertyId } = await params;
  const property = await Property.findById(propertyId);

  const { userId } = await getSessionUser();

  if (property.owner.toString() !== userId) throw new Error("You can't update this property!");

  return (
    <section className="container max-w-2xl mx-auto py-24">
      <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
        <UpdatePropertyForm property={property} />
      </article>
    </section>
  );
};

export default UpdatePropertyPage;