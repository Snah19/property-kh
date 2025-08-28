import getRateDisplay from "@/utils/get-rate-display";
import Image from "next/image";
import Link from "next/link";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { LuBath } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const PropertyCard = ({ property }) => {
  return (
    <article className="relative rounded-xl shadow-md">
      <span className="absolute top-[10px] right-[10px] py-2 px-4 rounded-full font-bold bg-white text-blue-500 text-right md:text-center lg:text-right">
        {getRateDisplay(property.rates)}
      </span>

      <Link href={`/properties/${property._id}`}>
        <div className="aspect-video w-full rounded-t-xl overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={property.images[0]}
            width={1280}
            height={720}
            alt={`${property.type} image`}
          />
        </div>
      </Link>
      <div className="p-4">

        <div className="mb-6 text-center">
          <p className="mb-2 text-gray-600">{property.type}</p>
          <h3 className="text-lg font-bold">{property.title}</h3>
        </div>

        <div className="flex justify-center gap-x-4 mb-4 text-gray-500 text-sm leading-none">
          <p className="inline-flex items-center gap-x-0.5">
            <MdOutlineBed />
            <span>&nbsp;:&nbsp;{property.beds}</span>
          </p>

          <p className="inline-flex items-center gap-x-0.5">
            <LuBath />
            <span>&nbsp;:&nbsp;{property.baths}</span>
          </p>
          <p className="inline-flex items-center gap-x-0.5">
            <LiaRulerCombinedSolid />
            <span>&nbsp;:&nbsp;{property.square_feet.toLocaleString()}sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-4 text-sm">
          <p className={`${property.rates.nightly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
            <FaMoneyCheckDollar />
            <span>Nightly</span>
          </p>
          <p className={`${property.rates.weekly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
            <FaMoneyCheckDollar />
            <span>Weekly</span>
          </p>
          <p className={`${property.rates.monthly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
            <FaMoneyCheckDollar />
            <span>Monthly</span>
          </p>
        </div>
        <hr className="mb-5" />
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <HiLocationMarker />
            <span>{property.location.city}, {property.location.state}</span>
          </div>
          <Link className="py-2 px-4 rounded-lg text-sm text-center bg-blue-500 hover:bg-blue-600 text-white" href={`/properties/${property._id}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;