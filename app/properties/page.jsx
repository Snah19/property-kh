import PropertyGridSection from "@/components/property-grid-section";

const PropertiesPage = async ({ searchParams }) => {
  const { page } = await searchParams;
  return (
    <>
      <PropertyGridSection page={Number(page)} />
    </>
  );
};

export default PropertiesPage;