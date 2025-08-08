import PropertySearchForm from "./property-search-form";

const HeroSection = () => {
  return (
    <section className="mb-4 py-20 bg-blue-700">
      <article className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Find The Perfect Rental
        </h1>
        <p className="my-4 text-xl text-white">
          Discover the perfect property that suits your needs.
        </p>
        <PropertySearchForm initSearchQuery="" initType="All"  />
      </article>
    </section>
  );
};

export default HeroSection;