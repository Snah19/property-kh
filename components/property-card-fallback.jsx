import { HiLocationMarker } from "react-icons/hi";
import { FaMoneyCheckDollar } from "react-icons/fa6";


const PropertyCardFallback = () => {
  return (
    <div className="relative rounded-xl shadow-md">

      {/* Display Rate */}
      <div className="absolute top-[10px] right-[10px] py-2 px-4 rounded-full font-bold animate-pulse bg-neutral-100 dark:bg-neutral-500">
        <div className="opacity-0">Sample</div>
      </div>

      {/* Thumbnail */}
      <div className="relative w-full pt-[56.25%] rounded-t-xl overflow-hidden animate-pulse bg-neutral-100 dark:bg-neutral-500" />

      <div className="p-4">

        <div className="mb-6 text-center">
          {/* Property Type */}
          <div className="mb-2 text-gray-600 rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <div className="opacity-0">Sample</div>
          </div>

          {/* Property Name */}
          <div className="text-lg font-bold rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <div className="opacity-0">Sample</div>
          </div>
        </div>

        <div className="flex justify-center gap-x-4 mb-4 text-gray-500 text-sm leading-none">
          {/* Beds */}
          <div className="inline-flex items-center gap-x-0.5 rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <div className="opacity-0">Sample</div>
          </div>

          {/* Baths */}
          <div className="inline-flex items-center gap-x-0.5 rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <div className="opacity-0">Sample</div>
          </div>

          {/* Sqaure Feet */}
          <div className="inline-flex items-center gap-x-0.5 rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
            <div className="opacity-0">Sample</div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4 text-sm">

          {/* Nightly */}
          <div className="inline-flex items-center gap-x-0.5">
            <FaMoneyCheckDollar />
            <div className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
              <div className="opacity-0">Sample</div>
            </div>
          </div>

          {/* Weekly */}
          <div className="inline-flex items-center gap-x-0.5">
            <FaMoneyCheckDollar />
            <div className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
              <div className="opacity-0">Sample</div>
            </div>
          </div>

          {/* Monthly */}
          <div className="inline-flex items-center gap-x-0.5">
            <FaMoneyCheckDollar />
            <div className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
              <div className="opacity-0">Sample</div>
            </div>
          </div>

        </div>

        <hr className="mb-5" />

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <HiLocationMarker />

            {/* Location */}
            <div className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-500">
              <div className="opacity-0">Sample Text</div>
            </div>
          </div>

          {/* Details Button */}
          <button className="py-2 px-4 rounded-lg text-sm text-center bg-blue-500 hover:bg-blue-600 text-white">
            <div className="opacity-0">Sample</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardFallback;