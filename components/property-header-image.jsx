import axios from "axios";
import Image from "next/image";

const PropertyHeaderImage = async ({ propertyId }) => {
  const { data: image } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/header-image/${propertyId}`);
  return (
    <section>
      <figure className="mx-auto">
        <Image className="w-full h-[400px] object-cover" src={image} width={1280} height={720} alt="" />
      </figure>
    </section>
  );
};

export default PropertyHeaderImage;