import { FaCheck, FaTimes } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineBed } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const PropertyInfo = async ({ property }) => {
  const { type, title, location, rates, beds, baths, square_feet, description, amenities, owner } = property;
  const { street, city, state, zipcode } = location;
  const { nightly, weekly, monthly } = rates;

  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/id/${owner}`);
  const { username, image } = data;

  return (
    <article>
      <div className="p-6 rounded-lg shadow-md text-center md:text-left bg-white">
        <p className="mb-4 text-gray-500">{type}</p>
        <h1 className="mb-4 text-3xl font-bold">{title}</h1>
        <div className="flex justify-center md:justify-start items-center gap-x-4 mb-4 text-gray-500">
          <HiLocationMarker />
          <p className="leading-none">{street} {city}, {state} {zipcode}</p>
        </div>
        <h3 className="my-6 p-2 text-lg font-bold bg-gray-800 text-white">Rates & Options</h3>
        <ul className="flex flex-col md:flex-row justify-around">
          {
            [{rateType: "Nightly", rate: nightly}, {rateType: "Weekly", rate: weekly}, {rateType: "Monthly", rate: monthly}].map(({rateType, rate}) => (
              <li className="flex justify-center items-center gap-x-2 mb-4 pb-4 md:pb-0 border-b md:border-b-0 border-gray-200" key={rateType}>
                <p className="font-bold text-gray-500">{rateType}</p>
                <span className="font-bold text-gray-500">{rate ? `$${rate.toLocaleString()}` : <FaTimes className="text-red-700" />}</span>
              </li>
            ))
          }
        </ul>

        <div className="mt-6 p-6 rounded-lg shadow-md bg-white">
          <h3 className="mb-6 text-lg font-bold">Details & Description</h3>
          <div className="flex gap-x-4 mb-4 text-xl">
            <p className="flex items-center gap-x-2">
              <MdOutlineBed />
              <span className="leading-none">:&nbsp;{beds}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <LuBath /> 
              <span className="leading-none">:&nbsp;{baths}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <LiaRulerCombinedSolid />
              <span className="leading-none">:&nbsp;{square_feet.toLocaleString()}sqrt</span>
            </p>
          </div>
          <p className="mb-4 text-gray-500">
            {description}
          </p>
        </div>
        <div className="mt-6 p-6 rounded-lg shadow-md bg-white">
          <h3 className="mb-6 font-bold text-lg">Amenities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity, i) => (
              <li className="flex items-center gap-x-2" key={i}>
                <FaCheck className="text-green-600" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-max mt-6 ml-auto py-2 px-4 rounded-full border">
          <Link className="inline-flex items-center gap-x-2" href={`/profile/${owner}`} >
            <Image className="rounded-full" src={image} width={40} height={40} alt="profile image" />
            <span className="text-gray-700 hover:text-black">{username}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyInfo;