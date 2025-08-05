import postProperty from "@/actions/post-property";


const types = [
  "Apartment",
  "Condo",
  "House",
  "Cabin Or Cottage",
  "Room",
  "Studio",
  "Chalet",
  "Other"
];

const amenities = [
  "Wifi",
  "Full kitchen",
  "Washer & Dryer",
  "Free Parking",
  "Swimming Pool",
  "Hot Tub",
  "24/7 Security",
  "Wheelchair Accessible",
  "Elevator Access",
  "Dishwasher",
  "Gym/Fitness Center",
  "Air Conditioning",
  "Balcony/Patio",
  "Smart TV",
  "Coffer Maker",
  "Fireplace",
  "Outdoor Grill/BBQ",
  "High-Speed Internet",
  "Beach Access",
  "Hiking Trails Access",
  "Pet-Friendly",
  "Ski Equipment Storage",
  "Mountain View",
];

const PostPropertyForm = () => {
  return (
    <form action={postProperty}>
      <h2 className="mb-6 text-3xl font-semibold text-center">
        Post
      </h2>
      
      {/* Type */}
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="type">
          Type
        </label>
        <select className="w-full py-2 px-3 border rounded" id="type" name="type">
          {
            types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))
          }
        </select>
      </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="title">
            Title
          </label>
          <input className="w-full mb-2 py-2 px-3 border rounded" id="title" name="title" type="text" maxLength={30} placeholder="e.g. Beautiful Apartment In Phnom Penh." required />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea className="w-full py-2 px-3 border rounded" id="description" name="description" rows={4} placeholder="Add an optional description for your property" />
        </div>

        {/* Location */}
        <div className="mb-4 p-4 bg-blue-50">
          <label className="block mb-2 font-bold text-gray-700 ">
            Location
          </label>
          {
            ["Street", "City", "State", "Zipcode"].map((locationPart, index) => (
              <input className="w-full mb-2 py-2 px-3 border rounded" key={index} id={locationPart.toLowerCase()} name={`location.${locationPart.toLowerCase()}`} type="text" placeholder={locationPart} required={locationPart === "City" || locationPart === "State"} />
            ))
          }
        </div>

        {/* Beds, Baths, Square Feet */}
        <ul className="flex flex-wrap mb-4">
          {
            ["Beds", "Baths", "Square_Feet"].map((attribute, index) => (
              <li className="w-full sm:w-1/3 pr-2" key={index}>
                <label className="block mb-2 font-bold text-gray-700" htmlFor={attribute.toLowerCase()}>
                  {attribute.split("_").join(" ")}
                </label>
                <input className="w-full py-2 px-3 border rounded" id={attribute.toLowerCase()} name={attribute.toLowerCase()} type="number" required />
              </li>
            ))
          }
        </ul>

        {/* Amenities */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">
            Amenities
          </label>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {
              amenities.map((amenity, index) => (
                <li className="flex gap-x-2" key={index}>
                  <input type="checkbox" id={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`} name="amenities" value={amenity} />
                  <label htmlFor={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`}>
                    {amenity}
                  </label>
                </li>
              ) )
            }
          </ul>
        </div>

        {/* Rates */}
        <div className="mb-4 p-4 bg-blue-50">
          <label className="block mb-2 font-bold text-gray-700">
            Rates (Leave blank if not applicable)
          </label>
          <ul className="flex flex-col sm:flex-row gap-4">
            {
              ["Nightly", "Weekly", "Monthly"].map((rateType, index) => (
                <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2" key={index}>
                  <label htmlFor={`${rateType.toLowerCase()}_rate`}>
                    {rateType}
                  </label>
                  <input className="w-full py-2 px-3 border rounded" id={`${rateType.toLowerCase()}_rate`} name={`rates.${rateType.toLowerCase()}`} type="number" />
                </li>
              ))
            }
          </ul>
        </div>

        {/* Seller Info */}
        <ul>
          {["Name", "Email", "Phone"].map((sellerInfo, index) => (
            <li className="mb-4" key={index}>
              <label className="block mb-2 font-bold text-gray-700" htmlFor={`seller_${sellerInfo.toLowerCase()}`}>
                Seller {sellerInfo}
              </label>
              <input className="w-full py-2 px-3 border rounded" id={`seller_${sellerInfo.toLowerCase()}`} name={`seller_info.${sellerInfo.toLowerCase()}`} placeholder={sellerInfo}/>
            </li>
          ))}
        </ul>

        {/* Images */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">
            Images (Select up to 4 images)
          </label>
          <input className="w-full py-2 px-3 border rounded" id="images" name="images" type="file" accept="images/*" multiple required />
        </div>

        <div>
          <button className="w-full rounded-full py-2 px-4 font-bold bg-blue-500 hover:bg-blue-600 text-white" type="submit">
            Submit
          </button>
        </div>
    </form>
  );
};

export default PostPropertyForm;