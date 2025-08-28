import connectToMongoDB from "@/config/mongodb";
import Image from "next/image";
import Property from "@/models/property";

const PropertyHeaderImage = async ({ propertyId }) => {
  connectToMongoDB();
  const { images, title } = await Property.findById(propertyId).select("images title");
  return (
    <section>
      <figure className="mx-auto">
        <Image className="w-full h-[400px] object-cover" src={images[0]} width={1280} height={720} alt={title} />
      </figure>
    </section>
  );
};

export default PropertyHeaderImage;