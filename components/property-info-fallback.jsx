import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineBed } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";

const PropertyInfoFallback = () => {
  return (
    <article>
      <div className="p-6 rounded-lg shadow-md text-center md:text-left bg-white">
        <span className="inline-block mb-4 text-gray-500 animate-pulse bg-neutral-100 dark:bg-neutral-500"><span className="opacity-0">Apartment</span></span>
        <h1 className="mb-4 text-3xl font-bold animate-pulse bg-neutral-100 dark:bg-neutral-500"><span className="opacity-0">Room in Preah Sihanouk</span></h1>
        <div className="flex justify-center md:justify-start items-center gap-x-4 mb-4 text-gray-500">
          <HiLocationMarker />
          <p className="leading-none animate-pulse bg-neutral-100 dark:bg-neutral-500"><span className="opacity-0">St 155 Sihanouk, CAM 113555</span></p>
        </div>
        <h3 className="my-6 p-2 text-lg font-bold bg-gray-800 text-white">Rates & Options</h3>
        <ul className="flex flex-col md:flex-row justify-around">
          {
            Array(3).fill(null).map((_, i) => (
              <li className="flex justify-center items-center gap-x-2 mb-4 pb-4 md:pb-0 border-b md:border-b-0 border-gray-200" key={i}>
                <p className="font-bold text-gray-500 animate-pulse bg-neutral-100 dark:bg-neutral-500"> <span className="opacity-0">Nightly</span> </p>
                <span className="font-bold text-gray-500 animate-pulse bg-neutral-100 dark:bg-neutral-500"> <span className="opacity-0">$103</span> </span>
              </li>
            ))
          }
        </ul>

        <div className="mt-6 p-6 rounded-lg shadow-md bg-white">
          <h3 className="mb-6 text-lg font-bold">Details & Description</h3>
          <div className="flex gap-x-4 mb-4 text-xl">
            <p className="flex items-center gap-x-2">
              <MdOutlineBed />:
              <span className="leading-none animate-pulse bg-neutral-100 dark:bg-neutral-500">&nbsp; <span className="opacity-0">1</span> </span>
            </p>
            <p className="flex items-center gap-x-2">
              <LuBath />:
              <span className="leading-none animate-pulse bg-neutral-100 dark:bg-neutral-500">&nbsp;<span className="opacity-0">1</span></span>
            </p>
            <p className="flex items-center gap-x-2">
              <LiaRulerCombinedSolid />:
              <span className="leading-none animate-pulse bg-neutral-100 dark:bg-neutral-500">&nbsp;<span className="opacity-0">1000 sqrt</span></span>
            </p>
          </div>
          <p className="mb-4 text-gray-500 animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <span className="opacity-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga maiores fugiat, nobis deleniti dolores ipsam officia veniam tenetur, obcaecati, minima perspiciatis illum nam sunt facere! Quos repudiandae nobis eos omnis.</span>
          </p>
        </div>
        <div className="mt-6 p-6 rounded-lg shadow-md bg-white">
          <h3 className="mb-6 font-bold text-lg">Amenities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array(12).fill(null).map((_, i) => (
              <li className="flex items-center gap-x-2 mb-0.5" key={i}>
                <FaCheck className="text-green-600" />
                <p className="animate-pulse bg-neutral-100 dark:bg-neutral-500"><span className="opacity-0">Full kitchen</span></p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-max mt-6 ml-auto py-2 px-4 rounded-full border animate-pulse bg-neutral-100 dark:bg-neutral-500">
          <div className="inline-flex items-center gap-x-2" >
            <div className="size-10" />
            <span className="text-gray-700 hover:text-black"> <span className="opacity-0">Snah</span> </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyInfoFallback;