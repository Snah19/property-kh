"use client";

import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  return (
    <section className="container max-w-2xl mx-auto pt-24">
      <div className="py-24 px-6 shadow-md rounded-md border bg-white">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <FaExclamationCircle className="fas fa-exclamation-triangle fa-5x text-3xl text-yellow-400" />
          <h1 className="text-3xl font-bold">Something went wrong</h1>
        </div>
        
        <div className="text-center">
          <p className="mb-10 text-xl text-gray-500">{error.message}</p>
          <Link className="py-4 px-6 rounded bg-blue-500 hover:bg-blue-600 text-white" href="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;