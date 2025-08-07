import UpdatePropertyForm from "@/components/update-property-form";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";

const UpdatePropertyPage = async ({ params }) => {
  await connectToMongoDB();

  const { propertyId } = await params;
  const property = await Property.findById(propertyId);

  return (
    <section className="container max-w-2xl mx-auto py-24">
      <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
        <UpdatePropertyForm property={property} />
      </article>
    </section>
  );
};

export default UpdatePropertyPage;