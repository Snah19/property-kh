import Image from "next/image";

const PropertyHeaderImage =  ({ property }) => {
  const { images, title } = property;
  return (
    <section>
      <figure className="mx-auto">
        <Image className="w-full h-[400px] object-cover" src={images[0]} width={1280} height={720} alt={title} />
      </figure>
    </section>
  );
};

export default PropertyHeaderImage;