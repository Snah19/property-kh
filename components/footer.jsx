import Image from "next/image";

import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 container mx-auto px-4">
      <figure>
        <Image className="h-8 w-auto" src={logo} width={128} height={128} alt="logo image" />
      </figure>
      <ul className="flex gap-4">
        <li>
          <Link className="text-gray-900 hover:text-gray-700" href="/properties">
            Properties
          </Link>
        </li>
        <li>
          <Link className="text-gray-900 hover:text-gray-700" href="/">
            Terms of Service
          </Link>
        </li>
      </ul>
      <p className="text-sm text-gray-500">
        &copy; {currYear} Property KH. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;