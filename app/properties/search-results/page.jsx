import PropertySearchForm from "@/components/property-search-form";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import PropertyList from "@/components/property-list";


const SearchResultsPage = async ({ searchParams }) => {
  await connectToMongoDB();
  const { searchQuery, type } = await searchParams;
  const searchPattern = new RegExp(searchQuery, "i");
  
  let query = {
    $or: [
      {title: searchPattern},
      {description: searchPattern},
      {"location.street": searchPattern},
      {"location.city": searchPattern},
      {"location.state": searchPattern},
      {"location.zipcode": searchPattern}
    ]
  };

  if (type && type !== "All") {
    const typePattern = new RegExp(type, "i");
    query.type = typePattern;
  }

  const properties = await Property.find(query);

  return (
    <>
      <section className="py-6 px-4 bg-blue-700">
        <div className="w-max mx-auto">
          <PropertySearchForm initSearchQuery={searchQuery} initType={type} />
        </div>
      </section>
      <section className="container mx-auto px-4 py-6">
        {properties.length === 0 ? (
          <p className="text-center">No search result</p>
        ) : (
          <PropertyList properties={properties} />
        )}
      </section>
    </>
  );
};

export default SearchResultsPage;