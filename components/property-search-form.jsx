"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const types = [
  "All",
  "Apartment",
  "Studio",
  "Condo",
  "House",
  "Cabin Or Cottage",
  "Loft",
  "Room",
  "Other"
];

const PropertySearchForm = ({initSearchQuery = "", initType = "All"}) => {
  const [searchQuery, setSearchQuery] = useState(initSearchQuery);
  const [type, setType] = useState(initType);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery === "" && type === "All") {
      router.push("/properties");
    }
    else {
      const query = `?searchQuery=${searchQuery}&type=${type}`;
      router.push(`/properties/search-results${query}`);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(e.target.value);
  }

  const handleSelect = (e) => {
    e.preventDefault();

    setType(e.target.value);
  };

  return (
    <form className="flex flex-col md:flex-row items-center max-w-2xl w-full" onSubmit={handleSubmit}>
      <div className="w-full md:w-3/5 mb-4 md:mb-0 md:pr-2">
        <label className="sr-only" htmlFor="location">Location</label>
        <input className="w-full py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" id="location" type="text" placeholder="Enter Location (City, State, Zip, etc...)" onChange={handleSearch} defaultValue={searchQuery} />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <label className="sr-only" htmlFor="property-type">Property Type</label>
        <select className="w-full py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" onChange={handleSelect} defaultValue={type}>
          {types.map((property, index) => (
            <option key={index} value={property}>{property}</option>
          ))}
        </select>
      </div>
      <button className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 py-3 px-6 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500" type="submit">
          Search
      </button>
    </form>
  );
};

export default PropertySearchForm;