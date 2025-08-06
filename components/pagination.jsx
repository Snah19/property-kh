import Link from "next/link";
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = ({ page, limit, total }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <section className={`${total <= limit ? "hidden" : "flex"} justify-center items-center container gap-x-4 mt-6 mx-auto`}>
      <Link className={`${page === 1 ? "hidden" : "block"} p-2 border rounded-md border-black hover:bg-black group`} href={`/properties?page=${page - 1}`}>
        <GrPrevious className="group-hover:text-white" />
      </Link>
      <span>
        Page {page} of {totalPages}
      </span>
      <Link className={`${page === totalPages ? "hidden" : "block"} p-2 border rounded-md border-black hover:bg-black group`} href={`/properties?page=${page + 1}`}>
        <GrNext className="group-hover:text-white" />
      </Link>
    </section>
  );
};

export default Pagination;