import PropertyGridSection from "@/components/property-grid-section";

export const metadata = {
  title: "roperties",
};

const PropertiesPage = async ({ searchParams }) => {
  const { page } = await searchParams;
  return (
    <>
      <PropertyGridSection page={Number(page)} />
    </>
  );
};

export default PropertiesPage;