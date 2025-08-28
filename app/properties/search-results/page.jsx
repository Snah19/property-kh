import PropertySearchForm from "@/components/property-search-form";
import SearchResultPropertyList from "@/components/search-result-property-list";

export const metadata = {
  title: "Search Results",
};

const SearchResultsPage = async ({ searchParams }) => {
  const { searchQuery, type } = await searchParams;
  return (
    <>
      <section className="py-6 px-4 bg-blue-700">
        <div className="w-max mx-auto">
          <PropertySearchForm initSearchQuery={searchQuery} initType={type} />
        </div>
      </section>
      <section className="container mx-auto px-4 py-6">
        <SearchResultPropertyList searchQuery={searchQuery} type={type} />
      </section>
    </>
  );
};

export default SearchResultsPage;