import updateProperty from "@/actions/update-property";

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

const UpdatePropertyForm = ({ property }) => {
  const {street, city, state, zipcode} = property.location;
  const {beds, baths, square_feet} = property;
  const {nightly, weekly, monthly} = property.rates;
  const {name, email, phone} = property.seller_info;

  const updatePropertyById = updateProperty.bind(null, property._id.toString());
  return (
    <form action={updatePropertyById}>
      <h2 className="mb-6 text-3xl font-semibold text-center">Update</h2>
      {/* Type */}
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="type">Type</label>
        <select className="w-full py-2 px-3 border rounded" id="type" name="type" defaultValue={property.type} required>
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
        <input className="w-full mb-2 py-2 px-3 border rounded" id="title" name="title" type="text" maxLength={30} placeholder="e.g. Beautiful Apartment In Phnom Penh." defaultValue={property.title} required />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea className="w-full py-2 px-3 border rounded" id="description" name="description" rows={4} placeholder="Add an optional description for your property" defaultValue={property.description} />
      </div>

      {/* Location */}
      <div className="mb-4 p-4 bg-blue-50">
        <label className="block mb-2 font-bold text-gray-700 ">
          Location
        </label>
        {
          [{key: "Street", val: street}, {key: "City", val: city}, {key: "State", val: state}, {key: "Zipcode", val: zipcode}].map(({key, val}) => (
            <input className="w-full mb-2 py-2 px-3 border rounded" key={key} id={key.toLowerCase()} name={`location.${key.toLowerCase()}`} type="text" placeholder={key} required={key === "City" || key === "State"} defaultValue={val} />
          ))
        }
      </div>

      {/* Beds, Baths, Square Feet */}
      <ul className="flex flex-wrap mb-4">
        {
          [{key: "Beds", val: beds}, {key: "Baths", val: baths}, {key: "Square_Feet", val: square_feet}].map(({key, val}) => (
            <li className="w-full sm:w-1/3 pr-2" key={key}>
              <label className="block mb-2 font-bold text-gray-700" htmlFor={key.toLowerCase()}>
                {key.split("_").join(" ")}
              </label>
              <input className="w-full py-2 px-3 border rounded" id={key.toLowerCase()} name={key.toLowerCase()} type="number" required defaultValue={val} />
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
                <input type="checkbox" id={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`} name="amenities" value={amenity} defaultChecked={property.amenities.includes(amenity)} />
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
            [{key: "Nightly", val: nightly}, {key: "Weekly", val: weekly}, {key: "Monthly", val: monthly }].map(({key, val}) => (
              <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2" key={key}>
                <label htmlFor={`${key.toLowerCase()}_rate`}>
                  {key}
                </label>
                <input className="w-full py-2 px-3 border rounded" id={`${key.toLowerCase()}_rate`} name={`rates.${key.toLowerCase()}`} type="number" defaultValue={val} />
              </li>
            ))
          }
        </ul>
      </div>

      {/* Seller Info */}
      <ul>
        {[{key: "Name", val: name}, {key: "Email", val: email}, {key: "Phone", val: phone}].map(({key, val}) => (
          <li className="mb-4" key={key}>
            <label className="block mb-2 font-bold text-gray-700" htmlFor={`seller_${key.toLowerCase()}`}>
              Seller {key}
            </label>
            <input className="w-full py-2 px-3 border rounded" id={`seller_${key.toLowerCase()}`} name={`seller_info.${key.toLowerCase()}`} placeholder={key} defaultValue={val}/>
          </li>
        ))}
      </ul>

      <div>
        <button className="w-full rounded-full py-2 px-4 font-bold bg-blue-500 hover:bg-blue-600 text-white" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdatePropertyForm;