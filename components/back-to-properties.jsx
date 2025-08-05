import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackToProperties = () => {
  return (
    <section>
      <div className="container mx-auto p-6">
        <Link className="flex items-center gap-2 text-blue-500 hover:text-blue-600" href="/properties">
          <FaArrowLeft />
          <span>Back to Properties</span>
        </Link>
      </div>
    </section>
  );
};

export default BackToProperties;